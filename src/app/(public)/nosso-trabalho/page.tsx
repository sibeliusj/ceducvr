import type { Metadata } from "next";
import { Fragment } from "react";
import {
  hero,
  tabs,
  quemSomos,
  valores,
  equipe,
  equipeIntro,
  reconhecimentoBackground,
  reconhecimentos,
  compromisso,
  odsList,
} from "@/content/nosso-trabalho";

export const metadata: Metadata = {
  title:
    "CEDUCVR - Centro de Educação Profissional Virgílio Resi | Aprendizagem Contínua",
  description:
    "CEDUCVR - Centro de Educação e Desenvolvimento da Companhia Virgílio Resi. Programas de aprendizagem, projetos educacionais e desenvolvimento profissional. Transformando vidas através da educação.",
  keywords:
    "educação profissional, aprendizagem, desenvolvimento, CEDUC, Virgílio Resi, cursos, programas educacionais, responsabilidade social",
  alternates: { canonical: "/nosso-trabalho" },
};

export default function NossoTrabalhoPage() {
  return (
    <>
      {/* Home Section */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background={hero.background}
        id="home"
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <h1 className="hs-line-7 mb-20 mb-xs-10">{hero.titulo}</h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
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
              {/* Nav Tabs */}
              <div className="align-center mb-40 mb-xxs-30">
                <ul
                  className="nav nav-tabs tpl-minimal-tabs animate"
                  role="tablist"
                >
                  {tabs.map((tab, i) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <a
                        href={`#${tab.id}`}
                        aria-controls={tab.id}
                        className={`nav-link ${i === 0 ? "active" : ""}`}
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected={i === 0 ? "true" : "false"}
                      >
                        {tab.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Nav Tabs */}

              {/* Tab panes */}
              <div className="tab-content tpl-minimal-tabs-cont section-text align-left">
                {/* Quem somos */}
                <div
                  className="tab-pane fade show active"
                  id="mission"
                  role="tabpanel"
                >
                  O Centro de Educação para o Trabalho Virgilio Resi{" "}
                  <b>(CEDUCVR)</b> é uma entidade de assistência social sem fins
                  lucrativos, fundada em 6 de julho de 2005. Nosso propósito é
                  construir parcerias que reúnam a sociedade civil, empresas,
                  órgãos públicos, organizações sociais e voluntários na busca
                  de soluções para a inclusão produtiva e humanizada de adultos,
                  jovens e adolescentes no mundo do trabalho.
                  <br />
                  <br />
                  Os projetos e programas do <b>(CEDUCVR)</b> priorizam o
                  atendimento de pessoas e comunidades em situação de
                  vulnerabilidade social, conforme descrito pela{" "}
                  <b>Lei nº 8.742/1993</b> (Lei Orgânica da Assistência Social).
                  <br />
                  <br />
                  Nossas atividades têm como objetivo fortalecer ações e
                  políticas públicas que promovam o acesso à cultura, educação,
                  trabalho protegido, e a distribuição e geração de renda,
                  conforme a Resolução do Conselho Nacional de Assistência
                  Social (CNAS) nº 33/2011.
                  <br />
                  <br />
                  Junte-se a nós na construção de um futuro mais inclusivo e
                  equitativo, onde cada indivíduo tenha a oportunidade de
                  desenvolver seu potencial e contribuir para a sociedade!
                  <br />
                  <br />
                  <h3>{quemSomos.missaoTitulo}</h3>
                  <span>{quemSomos.missao}</span>
                  <br />
                  <hr />
                  <h3>{quemSomos.valoresTitulo}</h3>
                  <div>
                    {valores.map((valor) => (
                      <Fragment key={valor.titulo}>
                        <b>{valor.titulo}</b>
                        <br />
                        <span>{valor.descricao}</span>
                        <br />
                        <br />
                      </Fragment>
                    ))}
                  </div>
                  <br />
                  <hr />
                  <h3>{quemSomos.visaoTitulo}</h3>
                  <div>{quemSomos.visao}</div>
                </div>

                {/* Equipe */}
                <div className="tab-pane fade" id="vision" role="tabpanel">
                  {/* Section */}
                  <section className="page-section">
                    <div className="container relative">
                      <div className="row text-center mb-80 mb-sm-50 wow fadeInUpShort">
                        <div className="col-md-8 offset-md-2">{equipeIntro}</div>
                      </div>

                      <div className="row">
                        {equipe.map((membro, index) => (
                          <div className="col-md-3 mb-xs-30" key={membro.nome}>
                            <div
                              className={index > 0 ? "wow fadeInUp" : ""}
                              data-wow-delay={
                                index > 0 ? `.${index + 1}s` : undefined
                              }
                              data-wow-duration={
                                index > 0 ? "1.2s" : undefined
                              }
                            >
                              <div className="team-item">
                                <div className="team-item-image">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={membro.foto} alt={membro.nome} />
                                </div>
                                <div className="team-item-descr">
                                  <div className="team-item-name">
                                    {membro.nome}
                                  </div>
                                  <div className="team-item-role">
                                    {membro.cargo}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  {/* End Section */}
                </div>

                {/* Reconhecimento */}
                <div className="tab-pane fade" id="ideas1" role="tabpanel">
                  {/* Testimonials Section */}
                  <section
                    className="page-section bg-light bg-light-alfa-70   dark-content"
                    data-background={reconhecimentoBackground}
                  >
                    <div className="container relative">
                      <div className="row">
                        <div className="col-lg-8 offset-lg-2 wow fadeInUpShort">
                          <div className="text-slider">
                            {reconhecimentos.map((r) => (
                              <div key={r.titulo}>
                                <blockquote className="testimonial">
                                  <p>{r.descricao}</p>
                                  <footer className="testimonial-author mt-50 mt-sm-20">
                                    {r.titulo}
                                  </footer>
                                </blockquote>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Testimonials Section */}
                </div>

                {/* Nosso Compromisso */}
                <div className="tab-pane fade" id="ideas" role="tabpanel">
                  {compromisso.introducao}
                  <section
                    className="ods-section"
                    style={{ padding: "40px 0", background: "#f7f7f7" }}
                  >
                    <div
                      className="container"
                      style={{ maxWidth: 1200, margin: "0 auto" }}
                    >
                      <h2
                        style={{
                          textAlign: "center",
                          marginBottom: 32,
                          color: "#1a3d6d",
                        }}
                      >
                        {compromisso.tituloSecao}
                      </h2>
                      <p
                        style={{
                          textAlign: "center",
                          maxWidth: 700,
                          margin: "0 auto 40px",
                          color: "#333",
                          fontSize: "1.15em",
                        }}
                      >
                        {compromisso.descricaoSecao}
                      </p>
                      <div
                        className="ods-grid"
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 32,
                          justifyContent: "center",
                        }}
                      >
                        {odsList.map((ods) => (
                          <div
                            className="ods-card"
                            key={ods.numero}
                            style={{
                              background: "#fff",
                              borderRadius: 16,
                              boxShadow: "0 2px 12px #0001",
                              width: 260,
                              padding: "32px 20px",
                              textAlign: "center",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              className="ods-icon"
                              style={{
                                fontSize: "2.5em",
                                color: ods.cor,
                                marginBottom: 16,
                              }}
                            >
                              <i className={`fa ${ods.icone}`} />
                            </div>
                            <h3
                              style={{
                                color: ods.cor,
                                fontSize: "1.2em",
                                marginBottom: 12,
                              }}
                            >
                              {ods.titulo}
                            </h3>
                            <p style={{ color: "#444", fontSize: "1em" }}>
                              {ods.descricao}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* End Tab panes */}
            </div>
          </div>
        </div>
      </section>
      {/* End Section */}
    </>
  );
}
