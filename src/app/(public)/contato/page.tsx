import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Fale Conosco | CEDUCVR",
  description:
    "Entre em contato com o CEDUCVR. Atendimento para empresas e público, endereço em Belo Horizonte e formulário de contato.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      {/* Home Section */}
      <section
        className="page-section bg-dark-alfa-50 bg-scroll"
        data-background="/images/contato-1.jpg"
        id="home"
      >
        <div className="container relative">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <h1 className="hs-line-7 mb-20 mb-xs-10">Fale Conosco</h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                  O CEDUCVR acredita que o ato de ouvir verdadeiramente nos permite
                  compreender as perspectivas e emoções dos outros, sendo esse o
                  princípio fundamental da empatia, ou seja, da capacidade de se colocar
                  no lugar do outro e entender as suas vivências. <br />
                  <br />
                  Acreditamos que é através da escuta atenta que acolhemos os outros,
                  mostramos respeito e consideração pelos seus pensamentos, sentimentos e
                  experiências. Ao ouvir você, nós podemos nos entender e juntos criar um
                  ambiente de confiança e fortalecer nossos laços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section">
        <div className="container relative">
          <div className="row mb-60 mb-xs-40">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                {/* Phone */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div className="contact-item wow fadeScaleIn" data-wow-delay="0" data-wow-duration="1s">
                    <div className="ci-icon"><i className="fa fa-phone-alt" /></div>
                    <div className="ci-title">Atendimento:</div>
                    <div className="ci-text">
                      Empresas: +55 (31) 2103-2716
                      Público: +55 (31) 2103-2744
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div className="contact-item wow fadeScaleIn" data-wow-delay=".1s" data-wow-duration="1s">
                    <div className="ci-icon"><i className="fa fa-map-marker-alt" /></div>
                    <div className="ci-title">Endereço</div>
                    <div className="ci-text">
                      Rua Joventina da Rocha, 289 - Heliópolis, Belo Horizonte - MG, 31741-450
                    </div>
                    <div className="ci-link">
                      <a href="https://maps.app.goo.gl/wtd39oBvB5yndDiz8" target="_blank" rel="noopener noreferrer">Ver no mapa</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="col-sm-6 col-lg-4 pb-20">
                  <div className="contact-item wow fadeScaleIn" data-wow-delay=".2s" data-wow-duration="1s">
                    <div className="ci-icon"><i className="fa fa-envelope" /></div>
                    <div className="ci-title">Email</div>
                    <div className="ci-text">ceduccomunicacao@gmail.com</div>
                    <div className="ci-link">
                      <a href="mailto:ceduccomunicacao@gmail.com">Envie uma mensagem</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="google-map">
        <a href="#" className="map-section">
          <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
            <div className="mt-icon"><i className="fa fa-map-marker-alt" /></div>
            <div className="mt-text">
              <div className="mt-open">Visualizar mapa <i className="mt-open-icon" /></div>
              <div className="mt-close">Fechar mapa <i className="mt-close-icon" /></div>
            </div>
          </div>
        </a>
        <iframe
          title="Mapa CEDUCVR"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60046.5757626502!2d-43.934161!3d-19.843719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69aae2aa3e42f%3A0xe9b951c60aef3c12!2sRua%20Joventina%20da%20Rocha%2C%20289%20-%20Heli%C3%B3polis%2C%20Belo%20Horizonte%20-%20MG%2C%2031741-450%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1746807379259!5m2!1spt-BR!2sus"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
