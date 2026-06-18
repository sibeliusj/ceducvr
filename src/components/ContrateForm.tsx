"use client";

import { useState, useRef, type FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

/**
 * Formulário "Contrate um Aprendiz" — reproduz contrateumaprendiz.php:
 * máscara + validação de CNPJ, Turnstile, envio AJAX.
 *
 * O submit aponta para /api/forms/contrate-aprendiz (Route Handler criada na
 * Fase 4: valida Turnstile, grava no Supabase e envia e-mail via Graph).
 */
function mascararCNPJ(v: string) {
  return v
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .substring(0, 18);
}

function validarCNPJ(raw: string) {
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
  return (
    calc(12) === parseInt(cnpj.charAt(12)) &&
    calc(13) === parseInt(cnpj.charAt(13))
  );
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function ContrateForm({ telefone }: { telefone: string }) {
  const [cnpj, setCnpj] = useState("");
  const [cnpjErro, setCnpjErro] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState<{ ok: boolean; msg: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validarCNPJ(cnpj)) {
      setCnpjErro(true);
      return;
    }
    setEnviando(true);
    setResultado(null);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("/api/forms/contrate-aprendiz", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      setResultado({ ok: !!data.success, msg: data.message ?? "" });
      if (data.success) formRef.current?.reset();
    } catch {
      setResultado({
        ok: false,
        msg: "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form
      ref={formRef}
      className="form contact-form wow fadeInUpShort"
      id="contrate_aprendiz_form"
      onSubmit={onSubmit}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Nome" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">E-mail corporativo</label>
            <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="e-mail" required />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="Telefone">Telefone</label>
            <input type="text" name="Telefone" id="Telefone" className="input-lg round form-control" placeholder="Telefone" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="assunto">Qual Empresa Você Representa?</label>
            <input type="text" name="assunto" id="assunto" className="input-lg round form-control" placeholder="Digite o nome da empresa" required />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ da Empresa</label>
            <input
              type="text"
              name="cnpj"
              id="cnpj"
              className={`input-lg round form-control${cnpjErro ? " is-invalid" : ""}`}
              placeholder="00.000.000/0000-00"
              maxLength={18}
              autoComplete="off"
              required
              value={cnpj}
              onChange={(ev) => setCnpj(mascararCNPJ(ev.target.value))}
              onBlur={() => setCnpjErro(!validarCNPJ(cnpj))}
            />
            {cnpjErro && (
              <div className="text-danger small mt-1">
                CNPJ inválido. Verifique o número digitado.
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="quantidade_aprendizes">
              De quantos aprendizes sua empresa necessita?
            </label>
            <input type="text" name="quantidade_aprendizes" id="quantidade_aprendizes" className="input-lg round form-control" placeholder="ex.: 7" required />
          </div>
        </div>
      </div>

      <div className="row">
        <label className="checkbox-inline">
          <input type="checkbox" name="primeira_contratacao" value="1" />{" "}
          <span className="small">
            Essa é a primeira contratação de jovem aprendiz da minha empresa.
          </span>
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" name="busca_nova_parceira" value="1" />{" "}
          <span className="small">Estou em busca de uma nova Empresa Parceira.</span>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Fale com a nossa equipe e tire as suas dúvidas. Você pode entrar em
          contato pelo telefone {telefone}.
        </label>
        <textarea name="message" id="message" className="input-lg round form-control" style={{ height: 130 }} placeholder="Mensagem..." />
      </div>

      {SITE_KEY && (
        <div className="form-group mb-20">
          <Turnstile siteKey={SITE_KEY} options={{ theme: "light" }} />
        </div>
      )}

      <div className="row">
        <div className="col-sm-6">
          <div className="form-tip pt-20 pt-sm-0 mb-sm-20">
            Todos os campos são obrigatórios
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-end pt-10">
            <button
              className="submit_btn btn btn-mod btn-large btn-round"
              type="submit"
              disabled={enviando}
            >
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        </div>
      </div>

      {resultado && (
        <div
          role="region"
          aria-live="polite"
          className={`alert mt-3 ${resultado.ok ? "alert-success" : "alert-danger"}`}
        >
          {resultado.msg}
        </div>
      )}
    </form>
  );
}
