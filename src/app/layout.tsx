import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvr.org.br",
  ),
  title: {
    default: "CEDUCVR — Centro de Educação Virgílio Resi",
    template: "%s | CEDUCVR",
  },
  description:
    "Centro de Educação Virgílio Resi — educação que transforma vidas pela aprendizagem profissional de jovens.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* CSS do template (Rhythm 3.7.11 + Bootstrap 5) — mesma ordem do header.php
            para preservar a cascata e garantir paridade visual com o site PHP. */}
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style-responsive.css" />
        <link rel="stylesheet" href="/css/vertical-rhythm.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/splitting.css" />
        {/* CSS específicos de páginas (carregados globalmente; afetam só suas
            próprias classes — preserva paridade sem complicar o App Router) */}
        <link rel="stylesheet" href="/css/seja-aprendiz.css" />
        <link rel="stylesheet" href="/css/contrate-aprendiz-form.css" />
        <link rel="stylesheet" href="/css/contact-form-styles.css" />
        <link rel="stylesheet" href="/css/como-ajudar.css" />
      </head>
      <body>
        {children}

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
