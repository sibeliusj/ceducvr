import { NextResponse } from "next/server";
import { verifyTurnstile } from "@/lib/server/turnstile";
import { sejaAprendizSchema } from "@/lib/server/form-schemas";
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

  const turn = await verifyTurnstile(form.get("cf-turnstile-response")?.toString(), ip);
  if (!turn.ok) return jsonFail(turn.message ?? "Falha na verificação de segurança.");

  const parsed = sejaAprendizSchema.safeParse(Object.fromEntries(form.entries()));
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join(" ");
    return jsonFail(`Erro na validação: ${msg}`);
  }
  const d = parsed.data;

  await saveSubmission({
    formType: "seja-aprendiz",
    nome: d.name,
    email: d.email,
    telefone: d.Telefone,
    mensagem: d.message,
    extra: { idade: d.idade, escolaridade: d.escolaridade },
    ip,
    userAgent,
  });

  if (!isEmailConfigured()) {
    console.warn("[seja-aprendiz] e-mail não configurado — submissão registrada sem envio.");
    return NextResponse.json({
      success: true,
      message: "Recebemos seu interesse! Entraremos em contato em breve.",
    });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px">
      <div style="background:#f4f4f4;padding:20px;border-radius:5px;margin-bottom:20px">
        <h2>Novo interesse — Quero ser Aprendiz</h2>
      </div>
      <div style="background:#fff;padding:20px;border:1px solid #ddd;border-radius:5px">
        <p><strong>Nome:</strong> ${escapeHtml(d.name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(d.email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(d.Telefone)}</p>
        <p><strong>Idade:</strong> ${escapeHtml(d.idade)}</p>
        <p><strong>Escolaridade:</strong> ${escapeHtml(d.escolaridade)}</p>
        <p><strong>Mensagem:</strong><br>${escapeHtml(d.message).replace(/\n/g, "<br>")}</p>
      </div>
    </div>`;

  try {
    await sendEmail({
      subject: "Quero ser Aprendiz - Site CEDUCVR",
      html,
      replyTo: { email: d.email, name: d.name },
    });
    return NextResponse.json({
      success: true,
      message: "Interesse enviado com sucesso! Entraremos em contato em breve.",
    });
  } catch (err) {
    console.error("[seja-aprendiz] erro ao enviar e-mail:", err);
    return jsonFail(
      "Erro ao enviar. Tente novamente mais tarde ou entre em contato por telefone.",
    );
  }
}
