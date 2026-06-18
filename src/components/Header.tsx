import Link from "next/link";

/**
 * Cabeçalho / navegação — markup idêntico ao header.php do site PHP
 * (classes do template Rhythm preservadas para o all.js gerenciar o menu).
 * Links internos usam rotas limpas do Next; externos abrem em nova aba.
 */
export default function Header() {
  return (
    <nav
      className="main-nav dark transparent stick-fixed wow-menubar"
      style={{ backgroundColor: "#2058ab" }}
    >
      <div className="full-wrapper relative clearfix">
        {/* Logo */}
        <div className="nav-logo-wrap local-scroll">
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-cvr.png"
              alt="CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi"
              width={188}
              height={37}
            />
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <div className="mobile-nav" role="button" tabIndex={0}>
          <i className="fa fa-bars" />
          <span className="sr-only">Menu</span>
        </div>

        {/* Menu principal */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist">
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Institucional */}
            <li>
              <a href="#" className="mn-has-sub">
                Institucional <i className="mn-has-sub-icon" />
              </a>
              <ul className="mn-sub mn-has-multi">
                <li className="mn-sub-multi">
                  <ul>
                    <li>
                      <Link href="/ceducvr">CEDUCVR</Link>
                    </li>
                    <li>
                      <Link href="/nosso-trabalho">Nosso Trabalho</Link>
                    </li>
                    <li>
                      <Link href="/transparencia">Transparência</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Aprendizagem */}
            <li>
              <a href="#" className="mn-has-sub">
                Aprendizagem <i className="mn-has-sub-icon" />
              </a>
              <ul className="mn-sub mn-has-multi">
                <li className="mn-sub-multi">
                  <ul>
                    <li>
                      <Link href="/seja-um-aprendiz">Quero ser aprendiz</Link>
                    </li>
                    <li>
                      <Link href="/contrate-um-aprendiz">
                        Contrate um Aprendiz
                      </Link>
                    </li>
                    <li>
                      <Link href="/programas-e-projetos">
                        Programas e Projetos
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Como Ajudar */}
            <li>
              <Link href="/como-ajudar">Como Ajudar</Link>
            </li>

            {/* Plataformas */}
            <li>
              <a href="#" className="mn-has-sub">
                Plataformas <i className="mn-has-sub-icon" />
              </a>
              <ul className="mn-sub mn-has-multi">
                <li className="mn-sub-multi">
                  <ul>
                    <li>
                      <a
                        href="https://ceducbh.agilsist.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gestão Educacional
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sisaprendiz.cvr.org.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SISAprendiz
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Contato */}
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
