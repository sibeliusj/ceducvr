import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Imagens hospedadas no WordPress da mantenedora (CVR).
    // TODO (Fase 3): espelhar as ~25 imagens em /public e remover este remote.
    remotePatterns: [
      { protocol: "https", hostname: "www.cvr.org.br", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "cvr.org.br", pathname: "/wp-content/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Compatibilidade com URLs legadas .php → rotas limpas (301).
      // Preserva ranking dos links já indexados no Google.
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/ceducvr.php", destination: "/ceducvr", permanent: true },
      { source: "/nosso_trabalho.php", destination: "/nosso-trabalho", permanent: true },
      { source: "/quem_somos.php", destination: "/quem-somos", permanent: true },
      { source: "/nossahistoria.php", destination: "/nossa-historia", permanent: true },
      { source: "/nossa_metodologia.php", destination: "/nossa-metodologia", permanent: true },
      { source: "/oquenosmove.php", destination: "/o-que-nos-move", permanent: true },
      { source: "/equipe.php", destination: "/equipe", permanent: true },
      { source: "/reconhecimento.php", destination: "/reconhecimento", permanent: true },
      { source: "/transparencia.php", destination: "/transparencia", permanent: true },
      { source: "/sejaumaprendiz.php", destination: "/seja-um-aprendiz", permanent: true },
      { source: "/contrateumaprendiz.php", destination: "/contrate-um-aprendiz", permanent: true },
      { source: "/programaseprojetos.php", destination: "/programas-e-projetos", permanent: true },
      { source: "/como_ajudar.php", destination: "/como-ajudar", permanent: true },
      { source: "/blog.php", destination: "/blog", permanent: true },
      { source: "/pages-contact-1.php", destination: "/contato", permanent: true },
      // blog-view.php?slug=x → /blog/x é tratado em vercel.json (precisa de query).
    ];
  },
};

export default nextConfig;
