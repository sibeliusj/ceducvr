import type { Metadata } from "next";
import Script from "next/script";
import ContrateForm from "@/components/ContrateForm";
import {
  hero,
  banner,
  ctaTitulo,
  empresasSecao,
  telefoneContato,
  empresas,
} from "@/content/contrate";

export const metadata: Metadata = {
  title: "Contrate um Jovem Aprendiz | CEDUCVR - Belo Horizonte MG",
  description:
    "Sua empresa pode contratar jovens aprendizes pelo CEDUCVR em Belo Horizonte. Cumprimento da Lei da Aprendizagem (Lei 10.097/2000), seleção, formação e acompanhamento completos. Responsabilidade social com resultados reais.",
  keywords:
    "contrate jovem aprendiz BH, empresa contrata aprendiz Belo Horizonte, lei da aprendizagem empresa, cota aprendiz empresa, CEDUCVR empresa parceira, gestão aprendizagem MG",
  alternates: { canonical: "/contrate-um-aprendiz" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contratação de Jovem Aprendiz para Empresas - CEDUCVR",
  url: "https://cvr.org.br/contrate-um-aprendiz",
  description:
    "O CEDUCVR auxilia empresas de Belo Horizonte e Região Metropolitana no cumprimento da Lei da Aprendizagem (Lei 10.097/2000), realizando seleção, formação e acompanhamento de jovens aprendizes.",
  provider: {
    "@type": "EducationalOrganization",
    name: "CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
    url: "https://cvr.org.br",
    telephone: "+55-31-2103-2716",
  },
  serviceType: "Gestão de Programa de Aprendizagem Profissional",
};

export default function ContrateUmAprendizPage() {
  return (
    <>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

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
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">{hero.subtitulo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner / Aprendizagem e Responsabilidade */}
      <section className="page-section pt-0 pb-0 banner-section bg-light dark-content">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-12 offset-lg-1">
              <div className="mt-140 mt-lg-80 mb-140 mb-lg-80">
                <div className="banner-content wow fadeInUpShort" data-wow-duration="1.2s">
                  <h3 className="banner-heading">{banner.titulo}</h3>
                  <div className="banner-decription">
                    {banner.paragrafos.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    <br />
                    <b>Por que contratar um jovem aprendiz?</b>
                    <ul>
                      {banner.beneficios.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="page-section">
        <div className="container relative">
          <div className="text-center mb-80 mb-sm-50">
            <h2 className="section-title">{ctaTitulo}</h2>
          </div>
          <ContrateForm telefone={telefoneContato} />
        </div>
      </section>

      {/* Empresas parceiras — texto */}
      <section className="page-section" id="about">
        <div className="container relative">
          <div className="mb-120 mb-sm-50">
            <div className="row section-text">
              <div className="col-md-12 col-lg-4 mb-md-50 mb-xs-30">
                <div className="lead-alt">{empresasSecao.titulo}</div>
              </div>
              <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30">
                {empresasSecao.conteudo}
              </div>
              <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30">
                {empresasSecao.conteudoSecundario}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas parceiras — carrossel de logos */}
      <section className="small-section pt-20 pb-20">
        <div className="container relative">
          <div className="row wow fadeInUpShort">
            <div className="col-md-12">
              <div className="small-item-carousel black owl-carousel mb-0">
                {empresas.map((emp) => (
                  <div key={emp.nome} className="logo-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={emp.logo}
                      width={150}
                      height={90}
                      style={{ maxWidth: 150, maxHeight: 90 }}
                      alt={emp.nome}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
