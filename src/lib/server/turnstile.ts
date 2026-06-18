/**
 * Validação do Cloudflare Turnstile (server-side) — espelha o siteverify dos
 * handlers PHP. O secret fica em env var (TURNSTILE_SECRET_KEY), nunca no client.
 *
 * Degradação graciosa: se TURNSTILE_SECRET_KEY não estiver configurado, a
 * validação é PULADA (retorna ok) e registra um aviso. Assim o formulário
 * funciona em ambientes ainda sem a chave (ver Fase 0/4 do plano).
 */
const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | null | undefined,
  remoteip?: string | null,
): Promise<{ ok: boolean; message?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Sem secret configurado → pula a verificação (degradação graciosa).
  if (!secret) {
    console.warn("[turnstile] TURNSTILE_SECRET_KEY não configurado — verificação pulada.");
    return { ok: true };
  }

  if (!token) {
    return { ok: false, message: "Por favor, complete a verificação de segurança." };
  }

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteip) body.set("remoteip", remoteip);

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as { success?: boolean };

    if (!data?.success) {
      return {
        ok: false,
        message: "Falha na verificação de segurança. Por favor, tente novamente.",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[turnstile] erro ao verificar:", err);
    return {
      ok: false,
      message: "Não foi possível validar a verificação de segurança. Tente novamente.",
    };
  }
}
