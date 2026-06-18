import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  heroHome,
  sobre,
  estatisticas,
  servicos,
  fortalecendo,
  valores,
  promo,
  depoimentos,
  contato,
} from "@/content/home";
import { postsHome } from "@/content/blog";

export const metadata: Metadata = {
  title:
    "CEDUCVR - Centro de Educação Profissional | Jovem Aprendiz em Belo Horizonte",
  description:
    "CEDUCVR é referência em educação profissional e programa de jovem aprendiz em Belo Horizonte e Região Metropolitana. Primeiro emprego com carteira assinada, FGTS e formação. Inscrições abertas 2026.",
  keywords:
    "CEDUCVR, jovem aprendiz BH, educação profissional Belo Horizonte, programa aprendizagem, primeiro emprego BH, lei da aprendizagem, qualificação profissional, CEDUC Virgílio Resi, contrate aprendiz, inclusão produtiva",
  alternates: { canonical: "/" },
};

// JSON-LD da organização (preservado do header.php para manter o SEO/GEO)
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "NGO"],
  name: "CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
  alternateName: ["CEDUC Virgílio Resi", "CEDUCVR", "CVR"],
  url: "https://cvr.org.br",
  logo: {
    "@type": "ImageObject",
    url: "https://www.cvr.org.br/wp-content/uploads/2023/03/ceduc-logo-fav-icon.png",
    width: 192,
    height: 192,
  },
  description:
    "O CEDUCVR é uma organização referência em educação profissional, programas de jovem aprendiz e inclusão produtiva em Belo Horizonte e Região Metropolitana. Transformando vidas pelo trabalho e desenvolvimento humano desde 2005.",
  foundingDate: "2005-07-06",
  sameAs: [
    "https://www.cvr.org.br",
    "https://www.facebook.com/CeducVirgilioResi",
    "https://www.instagram.com/ceducvirgilioresi",
    "https://www.youtube.com/CEDUCvirgilioresi1",
    "https://br.linkedin.com/company/ceducvirgilioresi",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Joventina da Rocha, 289",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "31741-450",
    addressCountry: "BR",
  },
  telephone: "+55-31-2103-2744",
  email: "contato@cvr.org.br",
};

export default function HomePage() {
  return (
    <>
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Home / Hero */}
      <section
        className="home-section bg-dark-alfa-50 parallax-3 light-content"
        data-background={heroHome.background}
        id="home"
      >
        <div className="container fixed-height-medium d-flex align-items-center">
          <div className="home-content" style={{ textAlign: "left" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1
              className="hs-line-4 mb-30 mb-xs-10 wow fadeInUpShort"
              data-wow-delay=".1s"
              style={{ fontSize: "39px", textAlign: "left" }}
            >
              {heroHome.titulo} <br />
              {heroHome.subtitulo}
            </h1>
            <div
              className="local-scroll mb-20 mb-xs-0 wow fadeInUpShort"
              data-wow-delay=".3s"
            >
              <Link
                href={heroHome.cta1.href}
                className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                style={{ fontWeight: 600, border: "none", color: "black" }}
              >
                {heroHome.cta1.texto}
              </Link>
              <Link
                href={heroHome.cta2.href}
                className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                style={{ fontWeight: 600, border: "none", color: "black" }}
              >
                {heroHome.cta2.texto}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Counters */}
      <section className="page-section" id="about">
        <div className="container relative">
          <h2 className="sr-only">Sobre o CEDUCVR</h2>

          <div className="mb-120 mb-sm-50 mb-xs-20">
            <div className="row section-text">
              <div className="col-md-12 col-lg-4 mb-md-50 mb-xs-30">
                <div className="lead-alt">{sobre.rotulo}</div>
              </div>
              <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30">
                {sobre.paragrafo1}
              </div>
              <div className="col-md-6 col-lg-4 mb-sm-50 mb-xs-30">
                {sobre.paragrafo2}
              </div>
            </div>
          </div>

          <div className="count-wrapper">
            <div className="row">
              {estatisticas.map((estat, idx) => (
                <div key={estat.titulo} className="col-md-6 col-lg-3 mb-md-30">
                  <div className="count-item">
                    <div className="count-bg wow scalexIn" />
                    <div
                      className="relative wow fadeIn"
                      data-wow-delay={`${1 + idx * 0.1}s`}
                    >
                      <div className="count-number">{estat.numero}</div>
                      <div className="count-descr">
                        <i className={`fa ${estat.icone}`} />
                        <span className="count-title">
                          {estat.titulo} <br />
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services / Cards */}
      <section className="page-section" id="services">
        <div className="container relative">
          <div className="row services-grid">
            {servicos.map((servico, idx) => (
              <div key={servico.titulo} className="col-sm-6 col-md-4 col-lg-4">
                <div
                  className="services-item text-center wow fadeIn"
                  data-wow-delay={`${idx * 0.1}s`}
                  data-wow-duration="1.5s"
                >
                  <h3 className="services-title">{servico.titulo}</h3>
                  <div
                    className="services-descr"
                    style={{ textAlign: "left" }}
                  >
                    {servico.descricao}
                  </div>
                  <div className="services-more">
                    <Link href={servico.link} className="text-link">
                      {servico.textoLink}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* Call Action / Fortalecendo */}
      <section
        className="page-section pt-0 pb-0 banner-section bg-dark light-content"
        style={{ backgroundColor: "#103368" }}
      >
        <div className="container relative">
          <div className="row">
            <div className="col-lg-6 relative" style={{ marginTop: "25px" }}>
              <div className="banner-image-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fortalecendo.imagem1}
                  alt="Jovens aprendizes do CEDUCVR em atividade educacional"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                  data-wow-offset="292"
                  loading="lazy"
                />
              </div>
              <div className="banner-image-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fortalecendo.imagem2}
                  alt="Estudantes do programa de educação profissional CEDUCVR"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                  data-wow-offset="70"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="mt-140 mt-lg-80 mt-md-60 mt-xs-30 mb-140 mb-lg-80">
                <div
                  className="banner-content wow fadeInUpShort"
                  data-wow-duration="1.2s"
                >
                  <h3 className="banner-heading">{fortalecendo.heading}</h3>
                  <div
                    className="banner-decription"
                    style={{ textAlign: "left" }}
                  >
                    {fortalecendo.descricao}
                  </div>
                  <div className="local-scroll">
                    <Link
                      href={fortalecendo.cta.href}
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                      style={{ fontWeight: 600, border: "none", color: "black" }}
                    >
                      {fortalecendo.cta.texto}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-0 mb-0" />

      {/* Promo / Valores */}
      <section className="page-section">
        <div className="container relative">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInUpShort"
              data-wow-duration="1.2s"
              data-wow-offset="205"
            >
              <div className="row">
                <div className="col-lg-10">
                  <h2 className="section-title mb-60 mb-sm-30">
                    {promo.heading}
                  </h2>
                </div>
              </div>

              <div className="row alt-features-grid">
                {valores.map((valor) => (
                  <div key={valor.titulo} className="col-lg-6">
                    <div className="alt-features-item">
                      <h3 className="alt-features-title">{valor.titulo}</h3>
                      <div className="alt-features-descr">{valor.descricao}</div>
                    </div>
                  </div>
                ))}
                <br />
                <Link
                  href={promo.cta.href}
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                  style={{ fontWeight: 600, border: "none", color: "black" }}
                >
                  {promo.cta.texto}
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="call-action-3-images mt-xs-0 text-end">
                <div className="call-action-3-image-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={promo.imagem1}
                    alt="Aprendizes profissionais do CEDUCVR em ambiente de trabalho"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="205"
                    loading="lazy"
                  />
                </div>
                <div className="call-action-3-image-2-wrap d-flex align-items-center">
                  <div className="call-action-3-image-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={promo.imagem2}
                      alt="Equipe de jovens aprendizes desenvolvendo habilidades profissionais"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Depoimentos */}
      <section
        className="page-section bg-dark bg-dark-alfa-70 bg-scroll light-content"
        data-background="/images/fundo.png"
      >
        <div className="container relative">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 wow fadeInUpShort">
              <div className="text-center mb-50 mb-sm-20">
                <h2 className="section-title">
                  Qual a sua história com o CEDUCVR?
                </h2>
              </div>

              <div className="text-slider">
                {depoimentos.map((dep) => (
                  <div key={dep.autor}>
                    <blockquote className="testimonial">
                      <p>{dep.texto}</p>
                      <footer className="testimonial-author mt-50 mt-sm-20">
                        — {dep.autor}
                        {dep.cargo ? ` - ${dep.cargo}` : ""}
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="page-section" id="blog">
        <div className="container relative">
          <div className="text-center mb-80 mb-sm-50">
            <div className="row">
              <div className="col-sm-6 offset-sm-3">
                <h2 className="section-title"> Blog</h2>
                <p className="section-title-descr" />
              </div>
              <div className="col-sm-3 text-sm-end pt-30 pt-xs-0">
                <Link href="/blog" className="section-more">
                  Acessar blog <i className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {postsHome.map((post) => (
              <div
                key={post.slug}
                className="col-sm-6 col-md-4 col-lg-4 mb-md-50"
              >
                <div className="post-prev-img">
                  <Link href={`/blog/${post.slug}`} tabIndex={-1}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.imagem}
                      alt={post.titulo}
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                    />
                  </Link>
                </div>

                <h3 className="post-prev-title">
                  <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                </h3>

                <div className="post-prev-info">
                  {post.autor} • {post.data}
                </div>

                <div className="post-prev-text">{post.resumo}</div>

                <div className="post-prev-more">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-link"
                    tabIndex={-1}
                  >
                    Leia mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="page-section" id="contact">
        <div className="container relative">
          <div className="text-center mb-80 mb-sm-50">
            <h2 className="section-title">Contato</h2>
            <p className="section-title-descr" />
          </div>

          <div className="row mb-60 mb-xs-40">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                {/* Telefone */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay="0"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-phone-alt" />
                    </div>
                    <div className="ci-title">Atendimento</div>
                    <div className="ci-text">
                      Público: {contato.atendimento.publico} <br />
                      Empresas: {contato.atendimento.empresas} <br />
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-map-marker-alt" />
                    </div>
                    <div className="ci-title">Endereço</div>
                    <div className="ci-text">{contato.endereco}</div>
                    <div className="ci-link">
                      <a href={contato.mapaUrl} target="_blank" rel="noopener noreferrer">
                        Ver no mapa
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div
                    className="contact-item wow fadeScaleIn"
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                  >
                    <div className="ci-icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="ci-title">Email</div>
                    <div className="ci-text">{contato.email}</div>
                    <div className="ci-link">
                      <a href={`mailto:${contato.email}`}>Enviar e-mail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
