"use client";

import { useState, useRef, type FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

/**
 * Formulário de contato — reproduz pages-contact-1.php.
 * Submit aponta para /api/forms/contato (Route Handler da Fase 4:
 * valida Turnstile, grava no Supabase e envia e-mail via Microsoft Graph).
 */
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function ContactForm() {
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState<{ ok: boolean; msg: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setResultado(null);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("/api/forms/contato", { method: "POST", body: fd });
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
      id="contact_form"
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
            <label htmlFor="email">E-mail</label>
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
            <label htmlFor="assunto">Assunto</label>
            <input type="text" name="assunto" id="assunto" className="input-lg round form-control" placeholder="Assunto" required />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="message" className="input-lg round form-control" style={{ height: 130 }} placeholder="Mensagem..." />
      </div>

      {SITE_KEY && (
        <div className="form-group">
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
            <button type="submit" className="submit_btn btn btn-mod btn-large btn-round" disabled={enviando}>
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
