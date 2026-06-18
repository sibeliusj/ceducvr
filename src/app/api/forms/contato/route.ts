import { NextResponse } from "next/server";
import { verifyTurnstile } from "@/lib/server/turnstile";
import { contatoSchema } from "@/lib/server/form-schemas";
import { sendEmail, isEmailConfigured, escapeHtml } from "@/lib/server/email";
import { saveSubmission } from "@/lib/server/submissions";

export const runtime = "nodejs";

function jsonFail(message: string, status = 200) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return jsonFail("Requisição inválida.", 400);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const userAgent = req.headers.get("user-agent");

  // 1. Turnstile
  const turn = await verifyTurnstile(
    form.get("cf-turnstile-response")?.toString(),
    ip,
  );
  if (!turn.ok) return jsonFail(turn.message ?? "Falha na verificação de segurança.");

  // 2. Validação (Zod)
  const parsed = contatoSchema.safeParse(Object.fromEntries(form.entries()));
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join(" ");
    return jsonFail(`Erro na validação: ${msg}`);
  }
  const { name, email, Telefone, assunto, message } = parsed.data;

  // 3. Persistência (opcional — não bloqueia)
  await saveSubmission({
    formType: "contato",
    nome: name,
    email,
    telefone: Telefone,
    assunto,
    mensagem: message,
    ip,
    userAgent,
  });

  // 4. E-mail
  if (!isEmailConfigured()) {
    // Degradação graciosa: envio gravado, mas e-mail não configurado ainda.
    console.warn("[contato] e-mail não configurado — submissão registrada sem envio.");
    return NextResponse.json({
      success: true,
      message: "Mensagem recebida! Entraremos em contato em breve.",
    });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px">
      <div style="background:#f4f4f4;padding:20px;border-radius:5px;margin-bottom:20px">
        <h2>Nova mensagem do site CEDUCVR</h2>
      </div>
      <div style="background:#fff;padding:20px;border:1px solid #ddd;border-radius:5px">
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(Telefone)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(assunto)}</p>
        <p><strong>Mensagem:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      </div>
    </div>`;

  try {
    await sendEmail({
      subject: `Contato Site CEDUCVR - ${assunto}`,
      html,
      replyTo: { email, name },
    });
    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    });
  } catch (err) {
    console.error("[contato] erro ao enviar e-mail:", err);
    return jsonFail(
      "Erro ao enviar mensagem. Tente novamente mais tarde ou entre em contato por telefone.",
    );
  }
}
