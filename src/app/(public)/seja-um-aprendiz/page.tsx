import type { Metadata } from "next";
import Script from "next/script";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Quero ser Aprendiz CEDUCVR | Programa Jovem Aprendiz Belo Horizonte 2026",
  description:
    "Seja um jovem aprendiz pelo CEDUCVR em Belo Horizonte! Jovens de 15 a 21 anos com carteira assinada, salário, FGTS, férias e 13º salário. Inscrição gratuita. Vagas abertas 2026!",
  keywords:
    "jovem aprendiz BH, jovem aprendiz Belo Horizonte, programa aprendizagem BH, vagas aprendiz 2026, primeiro emprego Belo Horizonte, CEDUCVR aprendiz, lei da aprendizagem, aprendiz carteira assinada, aprendiz FGTS",
  alternates: { canonical: "/seja-um-aprendiz" },
};

const LINK_INSCRICAO = "https://sisaprendiz.cvr.org.br/inscricao";

const vantagens = [
  { icone: "/images/carteira.png", titulo: "Carteira assinada" },
  { icone: "/images/money.png", titulo: "Salário + benefícios" },
  { icone: "/images/trabalho.png", titulo: "Experiência profissional real" },
  { icone: "/images/calendario.png", titulo: "Jornada compatível com a escola" },
  { icone: "/images/maos.png", titulo: "Acompanhamento do CEDUCVR" },
  { icone: "/images/subir.png", titulo: "Chance de crescer na empresa" },
];

const etapas = [
  { n: 1, titulo: "Inscrição no sistema", texto: "Acesse o portal e preencha seus dados para se cadastrar." },
  { n: 2, titulo: "Envio de documentos", texto: "Separe e envie os documentos necessários conforme orientação." },
  { n: 3, titulo: "Entrevista com o CEDUCVR", texto: "Nossa equipe realiza uma conversa para conhecer seu perfil." },
  { n: 4, titulo: "Análise de perfil", texto: "Seu cadastro é mantido ativo e analisado conforme as vagas disponíveis." },
  { n: 5, titulo: "Encaminhamento para vagas", texto: "Você é indicado para empresas parceiras compatíveis com seu perfil." },
  { n: 6, titulo: "Entrevista com a empresa", texto: "Última etapa: entrevista direta com a empresa que irá te contratar." },
];

const faqItens = [
  { pergunta: "Preciso pagar para participar?", resposta: <p>Não. O processo é <strong>100% gratuito</strong> para o jovem aprendiz.</p> },
  { pergunta: "Preciso ter experiência?", resposta: <p>Não. O programa é feito justamente para quem está começando.</p> },
  { pergunta: "Preciso estar estudando?", resposta: <p>Sim, ou já ter concluído o Ensino Médio.</p> },
  { pergunta: "Quanto tempo demora para ser chamado?", resposta: <p>Depende das vagas disponíveis e do seu perfil, mas seu cadastro fica ativo para oportunidades.</p> },
  { pergunta: "Como funciona a jornada de trabalho do aprendiz?", resposta: <p>A jornada é reduzida: no máximo <strong>6 horas diárias</strong> para quem ainda estuda, ou até <strong>8 horas</strong> para quem já concluiu o ensino médio.</p> },
];

const programJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  name: "Programa de Aprendizagem CEDUCVR",
  url: "https://cvr.org.br/seja-um-aprendiz",
  description:
    "Programa de formação profissional para jovens de 15 a 21 anos em Belo Horizonte e Região Metropolitana de MG, oferecendo primeiro emprego com carteira assinada, capacitação, FGTS, férias e 13º salário.",
  provider: {
    "@type": "EducationalOrganization",
    name: "CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
    url: "https://cvr.org.br",
  },
  occupationalCategory: "Aprendiz Profissional",
  educationalCredentialAwarded: "Certificado de Aprendizagem Profissional",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
};

export default function SejaUmAprendizPage() {
  return (
    <>
      <Script
        id="program-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd) }}
      />

      {/* Home / título */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background="/images/wp1111.jpeg"
        id="home"
        style={{ backgroundPosition: "center top" }}
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <h1 className="hs-line-7 mb-20 mb-xs-10">Quero ser Aprendiz CEDUCVR</h1>
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

      {/* Navegação rápida */}
      <section className="page-section pt-50 pb-30">
        <div className="container">
          <div className="quick-links wow fadeInUpShort">
            <h2 className="h4">
              <i className="fas fa-compass me-2" />
              Navegação Rápida
            </h2>
            <a href="#vantagens"><i className="fas fa-star me-1" />Vantagens</a>
            <a href="#requisitos"><i className="fas fa-check-circle me-1" />Documentos</a>
            <a href="#beneficios"><i className="fas fa-gift me-1" />Direitos</a>
            <a href="#etapas"><i className="fas fa-list-ol me-1" />Seleção</a>
          </div>
        </div>
      </section>

      {/* Banner — primeiro emprego */}
      <section className="page-section pt-0 pb-0 banner-section bg-light dark-content">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-6 relative">
              <div className="banner-photos-collage">
                {[
                  { src: "/images/aprendiz_04.jpg", alt: "Jovem participando do programa de aprendizagem CEDUCVR em ambiente profissional", n: 1, delay: "0s" },
                  { src: "/images/aprendiz_01.jpg", alt: "Aprendiz CEDUCVR em formação profissional", n: 2, delay: "0.15s" },
                  { src: "/images/aprendiz_02.jpeg", alt: "Grupo de aprendizes desenvolvendo habilidades no CEDUCVR", n: 3, delay: "0.3s" },
                  { src: "/images/aprendiz_03.jpeg", alt: "Aprendizes CEDUCVR em atividade profissional", n: 4, delay: "0.45s" },
                ].map((img) => (
                  <div
                    key={img.n}
                    className={`banner-image-${img.n} wow scaleOutIn`}
                    data-wow-duration="1.2s"
                    data-wow-offset="200"
                    data-wow-delay={img.delay}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="mt-140 mt-lg-80 mb-140 mb-lg-80">
                <div className="banner-content wow fadeInUpShort" data-wow-duration="1.2s">
                  <h2 className="banner-heading">Seu primeiro emprego pode começar agora!</h2>
                  <div className="banner-decription" style={{ textAlign: "justify" }}>
                    <p>
                      Quer trabalhar, ganhar seu dinheiro e ainda aprender uma profissão com
                      apoio de verdade? O Programa Aprendiz CEDUCVR te conecta com empresas
                      parceiras e te acompanha em todo o processo.
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                      <li style={{ marginBottom: 6 }}><strong>🎯 Idade:</strong> 15 a 21 anos</li>
                      <li style={{ marginBottom: 6 }}><strong>📍 Local:</strong> Belo Horizonte e Região Metropolitana</li>
                      <li style={{ marginBottom: 6 }}><strong>📌</strong> Trabalho protegido + formação + direitos garantidos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="page-section" id="vantagens">
        <div className="container relative">
          <div className="text-center mb-80 mb-sm-50">
            <h2 className="section-title">Por que vale a pena ser um aprendiz?</h2>
          </div>
          <div className="row alt-features-grid">
            {vantagens.map((v, i) => (
              <div key={v.titulo} className="col-sm-6 col-lg-4">
                <div
                  className="alt-features-item text-center wow fadeScaleIn"
                  data-wow-delay={`${(i % 3) * 0.1}s`}
                  data-wow-duration="1s"
                >
                  <div className="alt-features-icon mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.icone} alt={`Ícone: ${v.titulo}`} />
                  </div>
                  <h3 className="alt-features-title">{v.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem pode participar */}
      <section className="page-section" id="about">
        <div className="container relative">
          <div className="text-center mb-60">
            <h2 className="section-title wow fadeInUpShort">Quem pode participar?</h2>
          </div>
          <div className="mb-sm-50">
            <div className="row section-text">
              <div className="col-md-10 col-lg-8 offset-lg-2 mb-sm-50 mb-xs-30">
                <div className="info-callout success">
                  <ul className="mt-2">
                    <i className="fas fa-check-circle text-success me-2" />Tiver entre 15 e 21 anos <br />
                    <i className="fas fa-check-circle text-success me-2" />Morar em BH ou Região Metropolitana <br />
                    <i className="fas fa-check-circle text-success me-2" />Estiver matriculado e frequentando a escola <br />
                    <i className="fas fa-check-circle text-success me-2" />Ou já tiver concluído o Ensino Médio <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos necessários */}
      <section className="page-section" id="requisitos">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-7 mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div className="call-action-2-image-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/sejaumaprendiz_0002.jpeg" alt="Jovem aprendiz CEDUCVR em atividade profissional no escritório" loading="lazy" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="255" />
                </div>
                <div className="call-action-2-image-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/promo-4.jpg" alt="Estudantes em atividade educacional do programa de aprendizagem" loading="lazy" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="134" />
                </div>
                <div className="call-action-2-image-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/sejaumaprendiz_0001.jpeg" alt="Jovens aprendizes CEDUCVR em grupo" loading="lazy" className="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="0" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 wow fadeInUpShort" data-wow-duration="1.2s" data-wow-offset="255">
              <h2 className="section-title mb-30 mb-sm-20">Documentos necessários</h2>
              <div className="info-callout warning mt-3">
                <ul className="mt-2">
                  <li>RG e CPF</li>
                  <li>Carteira de Trabalho (física ou digital)</li>
                  <li>Comprovante de endereço</li>
                  <li>Declaração de matrícula ou certificado de conclusão do Ensino Médio</li>
                  <li>Título de Eleitor</li>
                  <li>Reservista (homens acima de 18 anos)</li>
                </ul>
              </div>
              <br />
              <div className="local-scroll">
                <a href={LINK_INSCRICAO} target="_blank" rel="noopener noreferrer" className="btn-cta-orange" aria-label="Ir para formulário de inscrição">
                  <i className="fas fa-edit me-2" />Inscreva-se Agora - É Gratuito!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direitos */}
      <section className="page-section" id="beneficios">
        <div className="container relative">
          <div className="text-center mb-60">
            <h2 className="section-title wow fadeInUpShort">Direitos dos jovens aprendizes</h2>
          </div>
          <div className="mb-sm-50">
            <div className="row section-text">
              <div className="col-md-10 col-lg-8 offset-lg-2 mb-sm-50 mb-xs-30">
                <div className="info-callout">
                  <strong><i className="fas fa-gift me-2" />Seus Direitos Garantidos por Lei:</strong>
                  <ul className="mt-2">
                    <i className="fas fa-check-circle text-info me-2" />Salário mínimo-hora <br />
                    <i className="fas fa-check-circle text-info me-2" />Férias remuneradas <br />
                    <i className="fas fa-check-circle text-info me-2" />13º salário <br />
                    <i className="fas fa-check-circle text-info me-2" />Vale-transporte <br />
                    <i className="fas fa-check-circle text-info me-2" />FGTS (Fundo de Garantia) <br />
                    <i className="fas fa-check-circle text-info me-2" />Jornada de trabalho reduzida <br />
                    <i className="fas fa-check-circle text-info me-2" />Carteira de trabalho assinada <br />
                  </ul>
                </div>
                <br />
                <p>
                  <em>
                    <b>
                      Esses direitos estão assegurados pela{" "}
                      <a href="/contrate-um-aprendiz">Lei da Aprendizagem (Lei 10.097/2000)</a>
                    </b>
                  </em>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="page-section" id="etapas">
        <div className="container relative">
          <div className="text-center mb-50" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>Como funciona a seleção?</h2>
            <p className="section-title-descr" style={{ textAlign: "left" }}>Processo simples e transparente para sua inscrição</p>
          </div>
          <div className="etapas-timeline">
            {etapas.map((e) => (
              <div key={e.n} className="etapa-item wow fadeInUpShort">
                <div className="etapa-marker"><div className="etapa-numero">{e.n}</div></div>
                <div className="etapa-content">
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section faq-section" id="faq">
        <div className="container">
          <div className="text-center mb-50" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>Perguntas Frequentes</h2>
            <p className="section-title-descr" style={{ textAlign: "left" }}>Tire suas dúvidas sobre o Programa Aprendiz CEDUCVR</p>
          </div>
          <FaqAccordion itens={faqItens} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final-section">
        <div className="container">
          <div className="text-center mb-50" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>Pronto para dar o primeiro passo?</h2>
            <br />
            <p className="cta-final-text wow fadeInUpShort" style={{ textAlign: "left" }}>
              Garanta sua vaga no Programa Aprendiz CEDUCVR. Carteira assinada, salário e
              formação profissional esperando por você.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
