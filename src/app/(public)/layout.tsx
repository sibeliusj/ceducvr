import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateScripts from "@/components/TemplateScripts";

/**
 * Layout do site público — replica a casca que header.php + footer.php
 * montavam juntos: page loader, skip-to-content, wrapper .page #top,
 * nav, <main> e footer, além de carregar os scripts do template.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="appear-animate">
      {/* Page Loader */}
      <div className="page-loader">
        <div className="loader">Loading...</div>
      </div>

      {/* Skip to Content */}
      <a href="#main" className="btn skip-to-content">
        Conteúdo
      </a>

      {/* Page Wrap */}
      <div className="page" id="top">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>

      <TemplateScripts />
    </div>
  );
}
