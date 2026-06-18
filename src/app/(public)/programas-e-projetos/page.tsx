import type { Metadata } from "next";
import {
  config,
  programas,
  galeriasPorSlug,
  type Programa,
} from "@/content/programas";

export const metadata: Metadata = {
  title:
    "Programas e Projetos | CEDUCVR - Educação Profissional Belo Horizonte",
  description:
    "Conheça os programas e projetos do CEDUCVR em Belo Horizonte: Jovem Aprendiz, Educar Trabalhando, Metodologia ISONOMA e projetos de inclusão produtiva. Transformação social através da educação desde 2005.",
  keywords:
    "programas educacionais BH, projetos aprendizagem, metodologia ISONOMA, Educar Trabalhando, CEDUCVR projetos, inclusão produtiva Belo Horizonte, economia solidária MG",
  alternates: { canonical: "/programas-e-projetos" },
};

/** Âncora do programa: a primeira é "mission"; as seguintes, "mission{n+1}". */
function ancoraPrograma(index: number): string {
  return index === 0 ? "mission" : `mission${index + 1}`;
}

/** Galeria de resultados (owl-carousel), igual aos blocos condicionais do PHP. */
function GaleriaResultados({ programa }: { programa: Programa }) {
  const galeria = galeriasPorSlug[programa.slug];
  if (!galeria) return null;

  return (
    <>
      <br />
      <br />
      <h3>{galeria.titulo}</h3>
      {/* Gallery */}
      <div className="work-full-media mt-0">
        <div className="clearlist work-full-slider owl-carousel">
          {galeria.imagens.map((src) => (
            <div key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
      {/* End Gallery */}
    </>
  );
}

export default function ProgramasEProjetosPage() {
  return (
    <>
      {/* Home Section */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background={config.imagemHero}
        id="home"
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="hs-line-7 mb-20 mb-xs-10">
                  {config.tituloHero}
                </h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                  {config.subtituloHero}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Section */}

      {/* Section */}
      <section className="page-section">
        <div className="container relative">
          <div className="row">
            <div className="col-sm-12 offset-sm-0 wow fadeInUpShort">
              {programas.length === 0 ? (
                /* Mensagem quando não há programas ativos */
                <div className="alert alert-info text-center" role="alert">
                  <h4>Em breve novos programas</h4>
                  <p>
                    Estamos trabalhando em novos programas e projetos. Volte em
                    breve!
                  </p>
                </div>
              ) : (
                <>
                  {/* Nav Tabs */}
                  <div className="align-center mb-40 mb-xxs-30">
                    <ul
                      className="nav nav-tabs tpl-minimal-tabs animate"
                      role="tablist"
                    >
                      {programas.map((programa, index) => {
                        const ancora = ancoraPrograma(index);
                        return (
                          <li
                            key={programa.slug}
                            className="nav-item"
                            role="presentation"
                          >
                            <a
                              href={`#${ancora}`}
                              aria-controls={ancora}
                              className={`nav-link ${
                                index === 0 ? "active" : ""
                              }`}
                              data-bs-toggle="tab"
                              role="tab"
                              aria-selected={index === 0 ? "true" : "false"}
                            >
                              {programa.titulo}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* End Nav Tabs */}

                  {/* Tab panes */}
                  <div className="tab-content tpl-minimal-tabs-cont section-text align-left">
                    {programas.map((programa, index) => (
                      <div
                        key={programa.slug}
                        className={`tab-pane fade ${
                          index === 0 ? "show active" : ""
                        }`}
                        id={ancoraPrograma(index)}
                        role="tabpanel"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: programa.conteudo,
                          }}
                        />
                        <GaleriaResultados programa={programa} />
                      </div>
                    ))}
                  </div>
                  {/* End Tab panes */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* End Section */}
    </>
  );
}
