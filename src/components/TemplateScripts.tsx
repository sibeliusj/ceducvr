"use client";

import { useEffect } from "react";

/**
 * Carrega os scripts JS do template Rhythm (jQuery + plugins + all.js) e
 * dispara a inicialização DEPOIS da montagem do React.
 *
 * Por que não usar next/script com beforeInteractive/afterInteractive:
 * o all.js inteiro roda dentro de `$(window).on("load", ...)`. No fluxo do
 * Next (App Router + hidratação), esse evento já disparou quando o script
 * executa, então o handler nunca roda — o page-loader trava e nada inicializa.
 *
 * Solução: carregar os scripts em ORDEM (cada um só após o anterior), e ao
 * final disparar manualmente um evento `load` na window. Como o all.js
 * registra o listener antes (ele é o último script, mas registra no parse),
 * o dispatch manual aciona a inicialização do template de forma confiável.
 *
 * Estratégia transitória da Fase 3 — refino futuro: trocar plugin a plugin
 * por equivalentes React (Swiper, Framer Motion, lightbox) e remover isto.
 */
const SCRIPTS = [
  "/js/jquery.min.js",
  "/js/jquery.easing.1.3.js",
  "/js/bootstrap.bundle.min.js",
  "/js/SmoothScroll.js",
  "/js/jquery.scrollTo.min.js",
  "/js/jquery.localScroll.min.js",
  "/js/jquery.viewport.mini.js",
  "/js/jquery.parallax-1.1.3.js",
  "/js/jquery.fitvids.js",
  "/js/owl.carousel.min.js",
  "/js/isotope.pkgd.min.js",
  "/js/imagesloaded.pkgd.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/masonry.pkgd.min.js",
  "/js/jquery.lazyload.min.js",
  "/js/wow.min.js",
  "/js/morphext.js",
  "/js/typed.min.js",
  "/js/all.js",
  "/js/objectFitPolyfill.min.js",
  "/js/splitting.min.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // evita recarregar em navegações client-side
    if (document.querySelector(`script[data-tpl="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false; // preserva ordem de execução
    s.dataset.tpl = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
    document.body.appendChild(s);
  });
}

export default function TemplateScripts() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        for (const src of SCRIPTS) {
          if (cancelled) return;
          await loadScript(src);
        }
        // O all.js registrou $(window).on("load", init). Como a janela já
        // carregou, disparamos o evento manualmente para acionar a init.
        window.dispatchEvent(new Event("load"));
      } catch (err) {
        // não quebra a página se algum plugin falhar
        console.error("[TemplateScripts]", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
