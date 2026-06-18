/**
 * Persistência de envios de formulário no Supabase (tabela form_submissions).
 *
 * Degradação graciosa: se o Supabase (service role) não estiver configurado,
 * `saveSubmission` apenas registra um aviso e NÃO falha — o e-mail é o caminho
 * principal; a gravação é um plus (histórico/auditoria). Schema da tabela em
 * supabase/migrations/0001_form_submissions.sql.
 */
import { createAdminClient } from "@/lib/supabase/admin";

export type SubmissionInput = {
  formType: "contato" | "contrate-aprendiz" | "seja-aprendiz";
  nome: string;
  email: string;
  telefone?: string;
  assunto?: string;
  mensagem?: string;
  /** Campos extras específicos do formulário (CNPJ, quantidade, etc.) */
  extra?: Record<string, unknown>;
  ip?: string | null;
  userAgent?: string | null;
};

function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY &&
      // evita tentar gravar com o placeholder de dev
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder"),
  );
}

export async function saveSubmission(input: SubmissionInput): Promise<void> {
  if (!isSupabaseConfigured()) {
    console.warn("[submissions] Supabase não configurado — envio não persistido.");
    return;
  }

  try {
    const supabase = createAdminClient();
    // Cast: os tipos do Supabase são um placeholder até serem gerados do
    // schema real na Fase 2. A tabela existe via migration 0001.
    const row = {
      form_type: input.formType,
      nome: input.nome,
      email: input.email,
      telefone: input.telefone ?? null,
      assunto: input.assunto ?? null,
      mensagem: input.mensagem ?? null,
      extra: input.extra ?? null,
      ip_address: input.ip ?? null,
      user_agent: input.userAgent ?? null,
    };
    const { error } = await supabase
      .from("form_submissions")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .insert(row as any);
    if (error) console.error("[submissions] erro ao gravar:", error.message);
  } catch (err) {
    // Nunca deixa a gravação derrubar o fluxo do formulário.
    console.error("[submissions] exceção ao gravar:", err);
  }
}
