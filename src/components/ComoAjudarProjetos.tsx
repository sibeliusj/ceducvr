"use client";

import { useState } from "react";
import {
  projetosCaptacao,
  filtrosProjetos,
  type ProjetoCaptacao,
} from "@/content/como-ajudar";

/**
 * Grade de projetos em captação com filtro por categoria — reproduz o JS
 * inline de como_ajudar.php (botões .tab-btn que mostram/escondem .project).
 * O e-mail de captação é passado pelo server para montar os mailto.
 */
export default function ComoAjudarProjetos({ email }: { email: string }) {
  const [filtro, setFiltro] = useState("all");

  const mailto = (assunto?: string) =>
    `mailto:${email}${assunto ? `?subject=${encodeURIComponent(assunto)}` : ""}`;

  return (
    <>
      <div className="tabs-filter">
        {filtrosProjetos.map((f) => (
          <button
            key={f.filter}
            className={`tab-btn${filtro === f.filter ? " active" : ""}`}
            onClick={() => setFiltro(f.filter)}
          >
            {f.label} <span className="count">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projetosCaptacao.map((p: ProjetoCaptacao) => {
          const oculto = filtro !== "all" && p.categoria !== filtro;
          return (
            <article
              key={p.titulo}
              className={`project${p.featured ? " featured" : ""}${oculto ? " hidden" : ""}`}
              data-category={p.categoria}
            >
              <div className="project-image" style={{ background: p.imageGradient }}>
                <span className={`project-tag ${p.tagClass}`}>{p.tag}</span>
              </div>
              <div className="project-body">
                <div className="project-mechanism">{p.mecanismo}</div>
                <h4>{p.titulo}</h4>
                <p className="project-desc">{p.descricao}</p>

                <div className="project-meta">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <div className="meta-label">{m.label}</div>
                      <div className="meta-value">{m.value}</div>
                    </div>
                  ))}
                </div>

                {p.progresso && (
                  <div className="project-progress">
                    <div className="progress-head">
                      <span className="captado">{p.progresso.captado}</span>
                      <span className="meta">{p.progresso.metaTexto}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: p.progresso.width }}
                      />
                    </div>
                    <div className="progress-percent">
                      <span>{p.progresso.percentLabel}</span>
                      <span>{p.progresso.metaLabel}</span>
                    </div>
                  </div>
                )}

                <div className="project-actions">
                  {p.acoes.map((a) => (
                    <a
                      key={a.texto}
                      href={a.href ?? mailto(a.assunto)}
                      className={`btn-s ${a.tipo}`}
                    >
                      {a.texto}
                      {a.tipo === "solid" && a.href === "#pix" && (
                        <i className="fas fa-heart" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
