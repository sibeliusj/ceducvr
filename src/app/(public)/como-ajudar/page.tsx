import type { Metadata } from "next";
import ComoAjudarProjetos from "@/components/ComoAjudarProjetos";
import PixCopyButton from "@/components/PixCopyButton";
import {
  configComoAjudar,
  heroComoAjudar,
  estatisticasComoAjudar,
  marquee,
  comoDoar,
  outrasFormas,
  projetosExecucao,
} from "@/content/como-ajudar";

export const metadata: Metadata = {
  title: "Doe e Transforme Vidas — CEDUCVR",
  description:
    "Apoie projetos sociais e culturais do CEDUCVR. Doe via PIX, FIA, Lei Rouanet ou patrocínio institucional e ajude a transformar a vida de adolescentes e jovens em vulnerabilidade social.",
  alternates: { canonical: "/como-ajudar" },
  openGraph: {
    type: "website",
    title: "Doe e Transforme Vidas — CEDUCVR",
    description:
      "Apoie projetos sociais e culturais do CEDUCVR. Doe via PIX, FIA, Lei Rouanet ou patrocínio institucional e ajude a transformar a vida de adolescentes e jovens em vulnerabilidade social.",
    images: ["/images/capa_como_doar.jpeg"],
  },
};

const { cnpj, cnpjLimpo, chavePix, emailContato, whatsappNumero, whatsappFormatado } =
  configComoAjudar;

export default function ComoAjudarPage() {
  return (
    <div className="como-ajudar">
      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">{heroComoAjudar.eyebrow}</div>
            <h1>
              Doe e <em>transforme</em>
              <br />
              vidas <span className="u">hoje</span>.
            </h1>
            <p className="hero-lead">{heroComoAjudar.textoDestaque}</p>
            <div className="hero-cta">
              <a href="#pix" className="btn-primary">
                Quero doar agora <i className="fas fa-heart" />
              </a>
              <a href="#empresa" className="btn-ghost">
                Apoiar como empresa <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <aside className="hero-tagline">
            <span className="since">{heroComoAjudar.desde}</span>
            {heroComoAjudar.tagline}
          </aside>
        </div>
      </section>

      {/* STATS BAND */}
      <div className="hero-stats-band">
        <div className="hero-stats-band-inner">
          {estatisticasComoAjudar.map((s) => (
            <div key={s.label}>
              <div className="stat-num">
                {s.numero}
                <sup>{s.sup}</sup>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={`${m}-${i}`}>{m}</span>
          ))}
        </div>
      </div>

      {/* COMO DOAR */}
      <section id="como-doar">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num">01 / DOAR</div>
            <div>
              <h2 className="sec-title">
                Como você pode <em>doar</em>.
              </h2>
              <p className="sec-sub">
                Duas formas de estar ao lado de quem está começando. Escolha o
                caminho que faz sentido para você ou para a sua empresa.
              </p>
            </div>
          </div>

          <div className="split">
            <div className="split-card">
              <div className="split-icon">
                <i className="fas fa-user" />
              </div>
              <h3>
                Doe como <em>pessoa física</em>
              </h3>
              <p>{comoDoar.pessoaFisica.paragrafo}</p>
              <ul>
                {comoDoar.pessoaFisica.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#pix" className="btn-primary">
                Quero doar agora <i className="fas fa-arrow-right" />
              </a>
            </div>

            <div className="split-card" id="empresa">
              <div className="split-icon">
                <i className="fas fa-building" />
              </div>
              <h3>
                Doe como <em>empresa</em>
              </h3>
              <p>{comoDoar.empresa.paragrafo}</p>
              <ul>
                {comoDoar.empresa.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={`mailto:${emailContato}`} className="btn-primary">
                Quero apoiar como empresa <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PIX */}
      <section id="pix" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="pix-panel">
            <div>
              <div className="eyebrow" style={{ color: "var(--amber-soft)" }}>
                Mais rápido · Recibo Receita Federal
              </div>
              <h3>
                Doe agora <em>via Pix</em>.
              </h3>
              <p>
                No aplicativo do seu banco, faça sua doação via Pix utilizando a
                chave CNPJ do CEDUCVR — ou use o QR Code ao lado.
              </p>
              <div className="pix-key">
                <div>
                  <small>Chave Pix · CNPJ</small>
                  <strong>{chavePix}</strong>
                </div>
                <PixCopyButton valor={cnpjLimpo} />
              </div>
              <p style={{ fontSize: "13.5px" }}>
                Após realizar a doação, envie o comprovante para{" "}
                <strong style={{ color: "var(--amber-soft)" }}>{emailContato}</strong>.
                Você receberá um recibo oficial emitido pela Receita Federal do
                Brasil.
              </p>
              <div className="pix-actions">
                <a href={`https://wa.me/${whatsappNumero}`} className="btn-ghost">
                  <i className="fab fa-whatsapp" /> {whatsappFormatado}
                </a>
              </div>
            </div>
            <div className="qr-holder">
              <div className="qr-placeholder" />
              <span className="qr-holder-label">Escaneie para doar</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS EM CAPTAÇÃO */}
      <section id="projetos">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num">02 / CAPTAÇÃO</div>
            <div>
              <h2 className="sec-title">
                Conheça nossos <em>projetos em captação</em>.
              </h2>
              <p className="sec-sub">
                Projetos sociais e culturais aprovados para captação — inclusive
                por meio de incentivo fiscal. Escolha uma iniciativa e some forças
                com a transformação.
              </p>
            </div>
          </div>

          <ComoAjudarProjetos email={emailContato} />
        </div>
      </section>

      {/* OUTRAS FORMAS */}
      <section id="outras" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="other-ways">
            <div className="eyebrow" style={{ color: "var(--amber-soft)" }}>
              03 / Outras formas
            </div>
            <h3>
              Além dos projetos incentivados, você também <em>pode somar</em> conosco.
            </h3>
            <p className="lead">
              Existem muitos jeitos de estar ao lado do CEDUCVR. Escolha o que cabe
              na sua realidade e entre em contato — cada gesto cria caminho para um
              jovem.
            </p>

            <div className="ways-grid">
              {outrasFormas.map((w) => (
                <div key={w.num} className="way">
                  <div className="way-num">{w.num}</div>
                  <h5>{w.titulo}</h5>
                  <p>{w.texto}</p>
                </div>
              ))}
            </div>

            <div className="contact-strip">
              <a href="#pix" className="contact-block">
                <span className="lbl">Pix · CNPJ</span>
                <span className="val">{cnpj}</span>
              </a>
              <a href={`mailto:${emailContato}`} className="contact-block">
                <span className="lbl">E-mail captação</span>
                <span className="val">{emailContato}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumero}`} className="contact-block">
                <span className="lbl">WhatsApp</span>
                <span className="val">{whatsappFormatado}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EM EXECUÇÃO */}
      <section id="execucao">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num">04 / EM CAMPO</div>
            <div>
              <h2 className="sec-title">
                Projetos já <em>em execução</em>.
              </h2>
              <p className="sec-sub">
                Conheça iniciativas do CEDUCVR que já estão transformando
                territórios e histórias — fruto da confiança de quem apostou em doar.
              </p>
            </div>
          </div>

          <div className="execution-row">
            {projetosExecucao.map((p) => (
              <article key={p.titulo} className="exec-card">
                <div className="exec-badge">{p.badge}</div>
                <h5>{p.titulo}</h5>
                <p>{p.descricao}</p>

                {p.progresso && (
                  <div className="project-progress" style={{ margin: 0 }}>
                    <div className="progress-head">
                      <span className="captado" style={{ fontSize: 22 }}>
                        {p.progresso.captado}
                      </span>
                      <span className="meta">{p.progresso.metaTexto}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: p.progresso.width }}
                      />
                    </div>
                  </div>
                )}

                {p.stats && (
                  <div className="exec-stats">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <div className="meta-label">{s.label}</div>
                        <div className="meta-value">{s.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {p.funders && (
                  <div className="funders">
                    <span className="funders-label">Apoio</span>
                    <span className="funders-names">{p.funders}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <div className="wrap">
          <h2>
            Seja <em>companhia</em>
            <br />
            para um jovem.
          </h2>
          <p>
            Juntos, podemos continuar sendo presença viva em cada encontro entre a
            juventude e o mundo do trabalho. Sua doação começa hoje.
          </p>
          <a href="#pix" className="btn-primary">
            Doar agora via Pix <i className="fas fa-heart" />
          </a>
        </div>
      </section>
    </div>
  );
}
