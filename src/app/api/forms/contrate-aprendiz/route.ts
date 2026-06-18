import { NextResponse } from "next/server";
import { verifyTurnstile } from "@/lib/server/turnstile";
import { contrateAprendizSchema } from "@/lib/server/form-schemas";
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
  const turn = await verifyTurnstile(form.get("cf-turnstile-response")?.toString(), ip);
  if (!turn.ok) return jsonFail(turn.message ?? "Falha na verificação de segurança.");

  // 2. Validação (Zod + CNPJ)
  const parsed = contrateAprendizSchema.safeParse(Object.fromEntries(form.entries()));
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join(" ");
    return jsonFail(`Erro na validação: ${msg}`);
  }
  const d = parsed.data;

  // 3. Persistência (opcional)
  await saveSubmission({
    formType: "contrate-aprendiz",
    nome: d.name,
    email: d.email,
    telefone: d.Telefone,
    assunto: d.assunto,
    mensagem: d.message,
    extra: {
      cnpj: d.cnpj,
      quantidade_aprendizes: d.quantidade_aprendizes,
      primeira_contratacao: d.primeira_contratacao,
      busca_nova_parceira: d.busca_nova_parceira,
    },
    ip,
    userAgent,
  });

  // 4. E-mail
  if (!isEmailConfigured()) {
    console.warn("[contrate-aprendiz] e-mail não configurado — submissão registrada sem envio.");
    return NextResponse.json({
      success: true,
      message: "Recebemos sua solicitação! Nossa equipe entrará em contato em breve.",
    });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px">
      <div style="background:#f4f4f4;padding:20px;border-radius:5px;margin-bottom:20px">
        <h2>Nova solicitação — Contrate um Aprendiz</h2>
      </div>
      <div style="background:#fff;padding:20px;border:1px solid #ddd;border-radius:5px">
        <p><strong>Nome:</strong> ${escapeHtml(d.name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(d.email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(d.Telefone)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(d.assunto)}</p>
        <p><strong>CNPJ:</strong> ${escapeHtml(d.cnpj)}</p>
        <p><strong>Qtd. de aprendizes:</strong> ${escapeHtml(d.quantidade_aprendizes)}</p>
        <p><strong>Primeira contratação:</strong> ${d.primeira_contratacao ? "Sim" : "Não"}</p>
        <p><strong>Busca nova parceira:</strong> ${d.busca_nova_parceira ? "Sim" : "Não"}</p>
        <p><strong>Mensagem:</strong><br>${escapeHtml(d.message).replace(/\n/g, "<br>")}</p>
      </div>
    </div>`;

  try {
    await sendEmail({
      subject: `Contrate um Aprendiz - ${d.assunto}`,
      html,
      replyTo: { email: d.email, name: d.name },
    });
    return NextResponse.json({
      success: true,
      message: "Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.",
    });
  } catch (err) {
    console.error("[contrate-aprendiz] erro ao enviar e-mail:", err);
    return jsonFail(
      "Erro ao enviar solicitação. Tente novamente mais tarde ou entre em contato por telefone.",
    );
  }
}
