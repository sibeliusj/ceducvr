import { z } from "zod";

/** Schemas de validação dos formulários (espelham as validações dos handlers PHP). */

export const contatoSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres."),
  email: z.string().trim().email("E-mail inválido."),
  Telefone: z.string().trim().min(10, "Telefone deve ter pelo menos 10 caracteres."),
  assunto: z.string().trim().min(3, "Assunto deve ter pelo menos 3 caracteres."),
  message: z.string().trim().min(1, "Mensagem é obrigatória."),
});

/** Valida CNPJ (14 dígitos + dígitos verificadores) — espelha o JS do form. */
export function cnpjValido(raw: string): boolean {
  const cnpj = raw.replace(/\D/g, "");
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  const calc = (x: number) => {
    let s = 0;
    let p = x - 7;
    for (let i = x; i >= 1; i--) {
      s += parseInt(cnpj.charAt(x - i)) * p--;
      if (p < 2) p = 9;
    }
    return s % 11 < 2 ? 0 : 11 - (s % 11);
  };
  return calc(12) === parseInt(cnpj.charAt(12)) && calc(13) === parseInt(cnpj.charAt(13));
}

export const contrateAprendizSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres."),
  email: z.string().trim().email("E-mail inválido."),
  Telefone: z.string().trim().min(8, "Telefone inválido."),
  assunto: z.string().trim().min(2, "Informe o nome da empresa."), // empresa
  cnpj: z.string().trim().refine(cnpjValido, "CNPJ inválido."),
  quantidade_aprendizes: z.string().trim().min(1, "Informe a quantidade."),
  primeira_contratacao: z.coerce.boolean().optional().default(false),
  busca_nova_parceira: z.coerce.boolean().optional().default(false),
  message: z.string().trim().optional().default(""),
});

export const sejaAprendizSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres."),
  email: z.string().trim().email("E-mail inválido."),
  Telefone: z.string().trim().min(8, "Telefone inválido."),
  idade: z.string().trim().optional().default(""),
  escolaridade: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
});
