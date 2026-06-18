"use client";

import { useState } from "react";

export type FaqItem = { pergunta: string; resposta: React.ReactNode };

/**
 * Accordion de FAQ — reproduz o comportamento do JS inline de sejaumaprendiz.php
 * (abre um, fecha os outros; ícone +/−). Markup com as classes do template.
 */
export default function FaqAccordion({ itens }: { itens: FaqItem[] }) {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <div className="faq-accordion" id="faqAccordion">
      {itens.map((item, i) => {
        const isOpen = aberto === i;
        return (
          <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setAberto(isOpen ? null : i)}
            >
              {item.pergunta}
              <span className="faq-icon">
                <i className={`fas fa-${isOpen ? "minus" : "plus"}`} />
              </span>
            </button>
            <div
              className="faq-answer"
              role="region"
              style={{ maxHeight: isOpen ? "500px" : "0" }}
            >
              <div className="faq-answer-inner">{item.resposta}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
