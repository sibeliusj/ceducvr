"use client";

import { useState } from "react";

/**
 * Botão "Copiar" da chave Pix — substitui o onclick inline de como_ajudar.php
 * (navigator.clipboard.writeText + troca o texto para "Copiado ✓").
 */
export default function PixCopyButton({ valor }: { valor: string }) {
  const [copiado, setCopiado] = useState(false);

  return (
    <button
      type="button"
      className="pix-copy"
      onClick={() => {
        navigator.clipboard?.writeText(valor);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      }}
    >
      {copiado ? "Copiado ✓" : "Copiar"}
    </button>
  );
}
