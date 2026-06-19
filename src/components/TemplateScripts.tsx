"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Carrega os scripts do template (jQuery + plugins + all.js) e os RE-INICIALIZA
 * a cada navegação client-side do Next.
 *
 * Por que: o all.js roda dentro de `$(window).on("load")`, que dispara uma vez
 * só. Em SPA (App Router), trocar de página NÃO re-roda esse handler, então o
 * WOW.js não revela os `.wow` da nova rota (template define `.wow{opacity:.01}`)
 * e a página fica "apagada". Aqui, a cada mudança de pathname, re-disparamos a
 * inicialização (WOW + carrosséis) e, como rede de segurança, marcamos como
 * visíveis quaisquer `.wow` que não tenham animado.
 *
 * Estratégia transitória da Fase 3 — refino futuro: trocar plugin a plugin por
 * equivalentes React e remover este loader.
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

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    jQuery?: any;
    WOW?: any;
  }
}

/**
 * Revela elementos de entrada e re-inicializa as animações/plugins do template
 * para a rota atual. Idempotente: pode ser chamada a cada navegação.
 */
function initTemplate() {
  const w = window as any;
  try {
    // (Re)inicializa o WOW.js para os .wow presentes na página atual.
    if (w.WOW) {
      const wow = new w.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: false,
        live: false, // re-instanciamos a cada rota; não precisa de observer global
      });
      wow.init();
      // Re-sincroniza no caso de já estarem no viewport (sync nem sempre é público).
      if (typeof wow.sync === "function") wow.sync();
    }

    // (Re)inicializa carrosséis Owl que ainda não foram inicializados.
    const $ = w.jQuery;
    if ($ && $.fn && $.fn.owlCarousel) {
      $(".owl-carousel").each(function (this: any) {
        const $c = $(this);
        if (!$c.hasClass("owl-loaded")) {
          // Defaults seguros; o all.js já configura os principais no load inicial.
          $c.owlCarousel({ items: 1, loop: true, nav: false, dots: true, autoplay: true });
        }
      });
    }

    document.documentElement.classList.add("wow-ready");

    // Rede de segurança: após um curto período, garante que nenhum .wow ficou
    // invisível (ex.: elementos abaixo da dobra sem scroll, ou animação que não
    // disparou). Marca-os como visíveis sem quebrar os que já animaram.
    window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".wow, .wow-p").forEach((el) => {
        const op = parseFloat(getComputedStyle(el).opacity || "1");
        if (op < 0.5 && !el.classList.contains("animated")) {
          el.classList.add("cvr-shown");
        }
      });
    }, 1500);
  } catch (err) {
    console.error("[TemplateScripts] initTemplate:", err);
  }
}

export default function TemplateScripts() {
  const pathname = usePathname();

  // Carrega os scripts uma única vez, depois inicializa.
  useEffect(() => {
    let cancelado = false;
    (async () => {
      try {
        for (const src of SCRIPTS) {
          if (cancelado) return;
          await loadScript(src);
        }
        // Primeira carga: o all.js escuta window.load; já passou, então disparamos.
        window.dispatchEvent(new Event("load"));
        initTemplate();
      } catch (err) {
        console.error("[TemplateScripts]", err);
        // Mesmo se algum script falhar, não deixa a página invisível.
        document.documentElement.classList.add("wow-ready");
      }
    })();
    return () => {
      cancelado = true;
    };
  }, []);

  // A cada navegação client-side, re-inicializa plugins e GARANTE visibilidade.
  // O WOW.js mantém elementos fora do viewport invisíveis aguardando scroll —
  // o que, em navegação SPA (sem reload), deixaria a nova página "apagada".
  // Por isso, ao trocar de rota, revelamos imediatamente todos os .wow (a
  // animação de entrada fica garantida no primeiro load de cada página).
  useEffect(() => {
    const t = window.setTimeout(() => {
      // Reinit de carrosséis/typed da nova rota.
      initTemplate();
      // Revela todos os elementos de entrada da nova página.
      document
        .querySelectorAll<HTMLElement>(".wow, .wow-p")
        .forEach((el) => el.classList.add("cvr-shown"));
    }, 60);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
