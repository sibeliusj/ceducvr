import type { Metadata } from "next";
import { hero, relatorios, demonstrativos, cards } from "@/content/transparencia";

export const metadata: Metadata = {
  title: "Transparência | CEDUCVR",
  description:
    "Transparência CEDUCVR: acesse relatórios sociais, demonstrativos financeiros, estatuto, carta de princípios e demais documentos do Centro de Educação para o Trabalho Virgilio Resi.",
  keywords:
    "transparência CEDUCVR, balanço social, relatório social, demonstrativos financeiros, estatuto, carta de princípios, prestação de contas",
  alternates: { canonical: "/transparencia" },
};

export default function TransparenciaPage() {
  return (
    <>
      {/* Home Section */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background={hero.imagemFundo}
        id="home"
      >
        <div className="container relative">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <h1 className="hs-line-7 mb-20 mb-xs-10">{hero.titulo}</h1>
              </div>
              <br />
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 mb-20 mb-xs-0">{hero.subtitulo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Section */}

      <section className="page-section">
        <div className="container relative">
          {/* Tabela de Relatórios */}
          {relatorios.length > 0 && (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th>Relatórios</th>
                    <th style={{ textAlign: "center" }}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorios.map((doc) => (
                    <tr key={doc.titulo}>
                      <td>{doc.titulo}</td>
                      <td style={{ textAlign: "center" }}>
                        <a href={doc.arquivo} download>
                          <i className="fa fa-cloud-download-alt" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <br />
              <br />
            </>
          )}

          {/* Tabela de Demonstrativos */}
          {demonstrativos.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th>Demonstrativos Financeiros</th>
                  <th style={{ textAlign: "center" }}>Download</th>
                </tr>
              </thead>
              <tbody>
                {demonstrativos.map((doc) => (
                  <tr key={doc.titulo}>
                    <td>{doc.titulo}</td>
                    <td style={{ textAlign: "center" }}>
                      <a href={doc.arquivo} download>
                        <i className="fa fa-cloud-download-alt" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="page-section">
        <div className="container relative">
          {/* Services Grid */}
          <div className="row services-grid">
            {cards.length > 0 ? (
              cards.map((card) => {
                const hasLink = card.tipoLink !== "nenhum" && !!card.link;
                const inner = (
                  <>
                    <div
                      className="services-icon"
                      dangerouslySetInnerHTML={{ __html: card.icone }}
                    />
                    <h3 className="services-title">{card.titulo}</h3>
                  </>
                );
                return (
                  <div key={card.titulo} className="col-sm-6 col-md-4 col-lg-4">
                    <div className="services-item text-center">
                      {hasLink ? (
                        <a
                          href={card.link as string}
                          {...(card.tipoLink === "arquivo"
                            ? { download: true }
                            : {})}
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12">
                <p className="text-center text-muted">
                  Nenhum card disponível no momento.
                </p>
              </div>
            )}
          </div>
          {/* End Services Grid */}
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
}
