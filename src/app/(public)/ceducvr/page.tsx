import type { Metadata } from "next";
import {
  hero,
  abas,
  nossaHistoria,
  linhaDoTempo,
  quemNosInspira,
  oQueNosMove,
  type Secao,
} from "@/content/ceducvr";

export const metadata: Metadata = {
  title:
    "Quem Somos | CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
  description:
    "Conheça o CEDUCVR, ONG fundada em 2005 em Belo Horizonte, referência em educação profissional, jovem aprendiz e desenvolvimento humano. Nossa missão, valores e metodologia ISONOMA.",
  keywords:
    "CEDUCVR quem somos, CEDUC Virgílio Resi história, ONG educação BH, educação profissional Belo Horizonte, metodologia ISONOMA, inclusão produtiva MG",
  alternates: { canonical: "/ceducvr" },
};

// Seções por aba (mesma ordem renderizada pelo ceducvr.php).
const secoesPorAba: Record<string, Secao[]> = {
  "nossa-historia": nossaHistoria,
  "quem-nos-inspira": quemNosInspira,
  "o-que-nos-move": oQueNosMove,
};

/** Renderiza uma seção de aba (row imagem + conteúdo), igual ao loop do PHP. */
function SecaoBloco({ secao }: { secao: Secao }) {
  const temImagem = !!secao.imagem;
  const imgEsquerda = temImagem && secao.posicaoImagem === "esquerda";
  const imgDireita = temImagem && secao.posicaoImagem === "direita";

  return (
    <div className="row mb-60 mb-xs-40">
      {imgEsquerda && (
        <div className="col-md-5 mb-sm-40">
          <div className="wow fadeInUpShort">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={secao.imagem as string}
              alt={secao.titulo}
              className="img-fluid rounded"
            />
          </div>
        </div>
      )}

      <div
        className={`col-md-${temImagem ? "7" : "12"}${
          imgEsquerda ? "" : " mb-sm-40"
        }`}
      >
        <div className="wow fadeInUpShort" data-wow-delay=".1s">
          {secao.titulo && (
            <h3 className="section-title mb-30">{secao.titulo}</h3>
          )}
          <div
            className="section-text"
            dangerouslySetInnerHTML={{ __html: secao.conteudo }}
          />
        </div>
      </div>

      {imgDireita && (
        <div className="col-md-5">
          <div className="wow fadeInUpShort">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={secao.imagem as string}
              alt={secao.titulo}
              className="img-fluid rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/** Linha do tempo — tabs aninhadas por ano (replica linhadotempo.php). */
function LinhaDoTempo() {
  return (
    <>
      {/* Nav Tabs */}
      <div className="align-center mb-40">
        <ul className="nav nav-tabs tpl-tabs animate" role="tablist">
          {linhaDoTempo.map((item, i) => (
            <li key={item.ano} className="nav-item" role="presentation">
              <a
                href={`#item-${i + 1}`}
                aria-controls={`item-${i + 1}`}
                className={`nav-link${i === 0 ? " active" : ""}`}
                data-bs-toggle="tab"
                role="tab"
                aria-selected={i === 0 ? "true" : "false"}
              >
                {item.ano}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Nav Tabs */}

      {/* Tab panes */}
      <div className="tab-content tpl-minimal-tabs-cont section-text">
        {linhaDoTempo.map((item, i) => (
          <div
            key={item.ano}
            className={`tab-pane fade${i === 0 ? " show active" : ""}`}
            id={`item-${i + 1}`}
            role="tabpanel"
          >
            <ul>
              {item.itens.map((linha, j) => (
                <li key={j}>{linha}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* End Tab panes */}
    </>
  );
}

export default function CeducvrPage() {
  return (
    <>
      {/* Home Section */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background={hero.imagem}
        id="home"
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <h1 className="hs-line-7 mb-20 mb-xs-10">{hero.titulo}</h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                  {hero.subtitulo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Section */}

      <br /><br /><br />
      <section className="page-section">
        <div className="container relative" style={{ padding: "0px" }}>
          <div className="row">
            <div className="col-sm-12 offset-sm-0 wow fadeInUpShort">
              {/* Nav Tabs */}
              <div className="align-center mb-40 mb-xxs-30">
                <ul
                  className="nav nav-tabs tpl-minimal-tabs animate"
                  role="tablist"
                >
                  {abas.map((aba, index) => (
                    <li
                      key={aba.identificador}
                      className="nav-item"
                      role="presentation"
                    >
                      <a
                        href={`#tab-${aba.identificador}`}
                        aria-controls={`tab-${aba.identificador}`}
                        className={`nav-link${index === 0 ? " active" : ""}`}
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {aba.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Nav Tabs */}

              {/* Tab panes */}
              <div className="tab-content tpl-minimal-tabs-cont section-text align-left">
                {abas.map((aba, index) => (
                  <div
                    key={aba.identificador}
                    className={`tab-pane fade${
                      index === 0 ? " show active" : ""
                    }`}
                    id={`tab-${aba.identificador}`}
                    role="tabpanel"
                  >
                    {aba.identificador === "linha-do-tempo" ? (
                      <LinhaDoTempo />
                    ) : (
                      (secoesPorAba[aba.identificador] ?? []).map(
                        (secao, i) => <SecaoBloco key={i} secao={secao} />,
                      )
                    )}
                  </div>
                ))}
              </div>
              {/* End Tab panes */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
