"use client";

import { useEffect, useRef } from "react";

/**
 * Organograma interativo — reproduz organograma.php + estrutura-organizacional.js.
 * Usa a lib externa BALKAN OrgChart (cdn.balkan.app). Carrega o script uma vez
 * e inicializa o chart no <div id="tree"> após a montagem.
 *
 * Dados (nós/templates) migrados de estrutura-organizacional.js.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    OrgChart?: any;
  }
}

const nodes = [
  { id: 1, nome: "DIRETORIA", tags: ["diretoria"] },
  { id: 2, pid: 1, nome: "Maria Virginia dos Santos", posição: "Presidente", tags: ["presidente"] },
  { id: 3, pid: 2, nome: "Elenice de Oliveira Matos", posição: "Diretora Executiva", tags: ["gerente"] },
  { id: 4, pid: 2, nome: "Cláudia Lina Pedras", posição: "Gerente Financeiro", tags: ["gerente"] },
  { id: 5, pid: 2, nome: "Júlia Maruia da Silva", posição: "Gerente Financeiro", tags: ["gerente"] },
  { id: 6, pid: 3, nome: "Conselho Fiscal Efetivo", tags: ["conselho"] },
  { id: 9, pid: 6, nome: "Rosa Brambilla", tags: ["membro"] },
  { id: 10, pid: 9, nome: "Márcia Fabiano da Silva", tags: ["membro"] },
  { id: 11, pid: 10, nome: "Amanda Cristina Pereira", tags: ["membro"] },
  { id: 7, pid: 4, nome: "Conselho Consultivo", tags: ["conselho"] },
  { id: 12, pid: 7, nome: "Renato Fernandes Braga", posição: "Presidente", tags: ["membro"] },
  { id: 13, pid: 12, nome: "Martionei Gomes", tags: ["membro"] },
  { id: 14, pid: 13, nome: "Elmer Starling Pessim", tags: ["membro"] },
  { id: 18, pid: 14, nome: "Giovanni José Caixeta", tags: ["membro"] },
  { id: 8, pid: 5, nome: "Conselho Fiscal Suplente", tags: ["conselho"] },
  { id: 15, pid: 8, nome: "Albert da Silva Pedras", tags: ["membro"] },
  { id: 16, pid: 15, nome: "Silvana P. C. Gomes", tags: ["membro"] },
  { id: 17, pid: 16, nome: "David Cristiano Scallabrini", tags: ["membro"] },
];

const CDN = "https://cdn.balkan.app/orgchart.js";

function carregarOrgChart(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.OrgChart) {
      resolve();
      return;
    }
    const existente = document.querySelector<HTMLScriptElement>(`script[src="${CDN}"]`);
    if (existente) {
      existente.addEventListener("load", () => resolve());
      existente.addEventListener("error", () => reject(new Error("Falha ao carregar OrgChart")));
      return;
    }
    const s = document.createElement("script");
    s.src = CDN;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Falha ao carregar OrgChart"));
    document.body.appendChild(s);
  });
}

export default function Organograma() {
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelado = false;

    carregarOrgChart()
      .then(() => {
        if (cancelado || !treeRef.current) return;
        const OrgChart = window.OrgChart;

        const card = Object.assign({}, OrgChart.templates.ana);
        card.size = [250, 100];
        card.node = '<rect x="0" y="0" width="250" height="100" rx="8" ry="8" fill="#ffffff" stroke="#4D4D4D" stroke-width="2"></rect>';
        card.field_0 = '<text style="font-size: 16px; font-weight: bold;" fill="#333333" x="125" y="40" text-anchor="middle">{val}</text>';
        card.field_1 = '<text style="font-size: 14px;" fill="#666666" x="125" y="65" text-anchor="middle">{val}</text>';
        OrgChart.templates.cardTemplate = card;

        const mk = (fill: string, stroke: string, c0: string, c1: string) => {
          const t = Object.assign({}, card);
          t.node = `<rect x="0" y="0" width="250" height="100" rx="8" ry="8" fill="${fill}" stroke="${stroke}" stroke-width="2"></rect>`;
          t.field_0 = `<text style="font-size: 16px; font-weight: bold;" fill="${c0}" x="125" y="40" text-anchor="middle">{val}</text>`;
          t.field_1 = `<text style="font-size: 14px;" fill="${c1}" x="125" y="65" text-anchor="middle">{val}</text>`;
          return t;
        };
        OrgChart.templates.conselhoTemplate = mk("#e8f4fd", "#2196F3", "#1565C0", "#1976D2");
        OrgChart.templates.diretoriaTemplate = mk("#37474f", "#263238", "#ffffff", "#eceff1");
        OrgChart.templates.presidenteTemplate = mk("#5c6994", "#353f60", "#ffffff", "#ffffff");
        OrgChart.templates.gerenteTemplate = mk("#9c9ed1", "#ffffff", "#ffffff", "#ffffff");
        OrgChart.templates.membroTemplate = mk("#efebe9", "#795548", "#5d4037", "#6d4c41");

        const tagTpl = (template: string) => ({ template, field_0: "nome", field_1: "posição" });

        const chart = new OrgChart(treeRef.current, {
          template: "cardTemplate",
          enableSearch: false,
          mouseScrool: OrgChart.action.zoom,
          scaleInitial: 0.6,
          scaleMin: 0.3,
          scaleMax: 1.5,
          orientation: OrgChart.orientation.top,
          layout: OrgChart.layout.normal,
          siblingSeparation: 30,
          levelSeparation: 80,
          subtreeSeparation: 60,
          editForm: { readOnly: true },
          nodeBinding: { field_0: "nome", field_1: "posição" },
          tags: {
            conselho: tagTpl("conselhoTemplate"),
            diretoria: tagTpl("diretoriaTemplate"),
            presidente: tagTpl("presidenteTemplate"),
            gerente: tagTpl("gerenteTemplate"),
            membro: tagTpl("membroTemplate"),
          },
          nodes,
        });

        chart.on("init", () => chart.fit());
        chart.on("redraw", () => chart.center());
      })
      .catch((err) => console.error("[Organograma]", err));

    return () => {
      cancelado = true;
    };
  }, []);

  return <div id="tree" ref={treeRef} style={{ height: "80vh", width: "100%", overflow: "hidden" }} />;
}
