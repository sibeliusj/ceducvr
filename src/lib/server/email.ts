/**
 * Envio de e-mail via Microsoft Graph API (server-side) — porta do
 * microsoft-graph-mailer.php. Fluxo OAuth2 client_credentials:
 *   1. POST login.microsoftonline.com/{tenant}/oauth2/v2.0/token → access_token
 *   2. POST graph.microsoft.com/v1.0/users/{sender}/sendMail (espera HTTP 202)
 *
 * Secrets em env vars (AZURE_*), nunca no client.
 *
 * Degradação graciosa: se as credenciais Azure não estiverem configuradas,
 * `isEmailConfigured()` retorna false e o endpoint pode responder de forma
 * adequada sem quebrar.
 */

export function isEmailConfigured(): boolean {
  return Boolean(
    process.env.AZURE_TENANT_ID &&
      process.env.AZURE_CLIENT_ID &&
      process.env.AZURE_CLIENT_SECRET &&
      process.env.AZURE_SENDER_EMAIL,
  );
}

async function getAccessToken(): Promise<string> {
  const tenant = process.env.AZURE_TENANT_ID!;
  const url = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.AZURE_CLIENT_ID!,
      client_secret: process.env.AZURE_CLIENT_SECRET!,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Falha na autenticação Azure AD (HTTP ${res.status}): ${text}`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Token de acesso não encontrado na resposta.");
  return data.access_token;
}

export type SendEmailParams = {
  subject: string;
  html: string;
  to?: string; // default: env FORM_RECIPIENTS (primeiro)
  cc?: string;
  replyTo?: { email: string; name?: string };
};

export async function sendEmail(params: SendEmailParams): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error("Credenciais de e-mail (Azure) não configuradas.");
  }

  const recipients = (process.env.FORM_RECIPIENTS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const to = params.to ?? recipients[0];
  if (!to) throw new Error("Nenhum destinatário configurado (FORM_RECIPIENTS).");
  const cc = params.cc ?? recipients[1];

  const token = await getAccessToken();
  const sender = process.env.AZURE_SENDER_EMAIL!;

  const message: Record<string, unknown> = {
    subject: params.subject,
    body: { contentType: "HTML", content: params.html },
    toRecipients: [{ emailAddress: { address: to } }],
  };
  if (cc) message.ccRecipients = [{ emailAddress: { address: cc } }];
  if (params.replyTo) {
    message.replyTo = [
      { emailAddress: { address: params.replyTo.email, name: params.replyTo.name ?? "" } },
    ];
  }

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    },
  );

  // 202 Accepted = e-mail aceito para envio.
  if (res.status !== 202) {
    const text = await res.text();
    throw new Error(`Falha ao enviar e-mail (HTTP ${res.status}): ${text}`);
  }
}

/** Escapa HTML para interpolar valores de formulário com segurança no corpo. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
