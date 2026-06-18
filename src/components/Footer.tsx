/**
 * Rodapé — markup idêntico ao footer.php (social + copyright + scroll-to-top).
 */
export default function Footer() {
  return (
    <footer className="page-section bg-gray-lighter footer pb-100 pb-sm-50">
      <div className="container">
        {/* Social Links */}
        <div className="footer-social-links mb-90 mb-xs-40">
          <a
            href="https://www.facebook.com/CeducVirgilioResi/?locale=pt_BR"
            title="Siga o CEDUCVR no Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f" /> <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/ceducvirgilioresi/?next=%2F#"
            title="Siga o CEDUCVR no Instagram"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram" /> <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/CEDUCvirgilioresi1"
            title="Inscreva-se no canal do CEDUCVR no YouTube"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-youtube" /> <span className="sr-only">YouTube</span>
          </a>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <div className="footer-copy">
            <a href="/">© CEDUCVR 2025</a>.
          </div>
        </div>
      </div>

      {/* Top Link */}
      <div className="local-scroll">
        <a href="#top" className="link-to-top">
          <i className="link-to-top-icon" />
          <span className="sr-only">Scroll to top</span>
        </a>
      </div>
    </footer>
  );
}
