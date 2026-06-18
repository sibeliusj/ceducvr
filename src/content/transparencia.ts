/**
 * Conteúdo HARDCODED da página /transparencia — capturado do site em produção
 * (cvr.org.br/transparencia.php) e da estrutura em
 * admin-blog/database_transparencia.sql.
 *
 * No PHP os dados vinham do MySQL (tabelas transparencia_hero,
 * transparencia_documentos, transparencia_cards). Aqui ficam estáticos até que
 * o conteúdo volte a ser editável pelo admin (Supabase) — quando isso ocorrer,
 * estes arrays viram chamadas a lib/queries/*.
 *
 * IMPORTANTE: os PDFs referenciados NÃO existem no repositório PHP (a pasta
 * docs/ contém apenas .md). Por isso os caminhos originais "docs/..." foram
 * preservados — apontam para arquivos servidos pelo backend de produção.
 */

export const hero = {
  titulo: "Transparência",
  subtitulo:
    "Para nós, do Centro de Educação para o Trabalho Virgilio Resi, transparência é mais do que uma obrigação legal. Transparência é um dever, uma atitude de respeito para com todos aqueles que precisam, apoiam e acreditam no nosso trabalho!",
  imagemFundo: "/images/transparencia.jpg",
};

/**
 * Relatórios (tabela "Relatórios"). Tipo "relatorio" no banco.
 * Capturados da produção (2024 → 2019). Os arquivos vivem no backend; os
 * caminhos originais são mantidos.
 */
export const relatorios: { titulo: string; arquivo: string }[] = [
  {
    titulo: "Balanço Social 2024",
    arquivo: "docs/transparencia_1777051332_BALANCO_SOCIAL_2024.pdf",
  },
  {
    titulo: "Balanço Social 2023",
    arquivo: "docs/transparencia_1777293007_BALANCO_SOCIAL_2023.pdf",
  },
  {
    titulo: "Balanço Social 2022",
    arquivo: "docs/transparencia_1770911451_BALAN__O_SOCIAL_2022_compressed.pdf",
  },
  {
    titulo: "Balanço Social 2021",
    arquivo: "docs/transparencia_1770146458_balanco_social_2021.pdf",
  },
  {
    titulo: "Relatório Social 2020",
    arquivo: "docs/balanco_social_2020.pdf",
  },
  {
    titulo: "Relatório Social 2019",
    arquivo: "docs/BALANÇO SOCIAL 2019.pdf",
  },
];

/**
 * Demonstrativos Financeiros (tabela "Demonstrativos Financeiros").
 * No banco existem como tipo "demonstrativo" mas estão inativos (ativo=0),
 * por isso a tabela não é renderizada na produção. Mantido vazio.
 */
export const demonstrativos: { titulo: string; arquivo: string }[] = [];

/**
 * Cards da seção de serviços (transparencia_cards, ordem ASC).
 * tipoLink: "arquivo" -> link com download | "pagina" -> link normal | "nenhum" -> sem link.
 * icone: SVG inline (renderizado via dangerouslySetInnerHTML, idêntico ao PHP <?= $card['icone'] ?>).
 */
export const cards: {
  titulo: string;
  icone: string;
  link: string | null;
  tipoLink: "arquivo" | "pagina" | "nenhum";
}[] = [
  {
    titulo: "Demonstrativos Financeiros",
    icone:
      '<svg fill="#000000" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 461 461" xml:space="preserve"><g><g><g><path d="M218.747,220.134c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5c0,20.194,14.584,37.035,33.77,40.574v8.842 c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-8.842c19.186-3.539,33.77-20.38,33.77-40.574 c0-20.194-14.583-37.035-33.77-40.574v-52.138c10.841,3.236,18.77,13.294,18.77,25.173c0,4.142,3.358,7.5,7.5,7.5 c4.142,0,7.5-3.358,7.5-7.5c0-20.194-14.583-37.036-33.77-40.574v-8.842c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5 v8.842c-19.186,3.539-33.77,20.38-33.77,40.574c0,20.194,14.584,37.036,33.77,40.574v52.138 C226.675,242.071,218.747,232.013,218.747,220.134z M252.517,194.962c10.841,3.236,18.77,13.293,18.77,25.173 c0,11.879-7.928,21.937-18.77,25.173V194.962z M218.747,152.595c0-11.879,7.928-21.936,18.77-25.173v50.346 C226.675,174.532,218.747,164.474,218.747,152.595z"/><path d="M337.333,401.609c2.083-2.144,2.795-5.387,1.62-8.17c-0.385-0.913-0.929-1.729-1.62-2.44 c-4.657-4.524-12.828-1.315-12.81,5.31C324.541,402.907,332.65,406.158,337.333,401.609z"/><path d="M371.5,0H118.533C98.389,0,82,16.389,82,36.533v359.758c0,0.006,0,0.013,0,0.019c0,9.748,3.797,18.921,10.702,25.838 c6.908,6.895,16.081,10.692,25.829,10.692H132.5v20.66c0,2.841,1.605,5.438,4.146,6.708c2.542,1.271,5.583,0.996,7.854-0.708 l19.5-14.625l19.5,14.625c1.323,0.993,2.907,1.5,4.501,1.5c1.143,0,2.292-0.261,3.353-0.792c2.541-1.271,4.146-3.867,4.146-6.708 v-20.66h176c4.142,0,7.5-3.358,7.5-7.5V7.5C379,3.358,375.642,0,371.5,0z M97,36.533c0-9.233,5.853-17.104,14.033-20.158v344.173 c-5.16,1.081-9.92,3.257-14.033,6.269V36.533z M180.499,438.5l-12-9c-2.667-2-6.333-2-9,0l-12,9v-34.695h33V438.5z M364,388.81 h-8.27c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5H364v14.03H195.499v-14.035H307.53c4.142,0,7.5-3.358,7.5-7.5 c0-4.142-3.358-7.5-7.5-7.5h-189c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h13.969v14.035H118.53 c-5.747,0-11.156-2.24-15.222-6.298C99.24,407.466,97,402.057,97,396.31c0-11.877,9.658-21.54,21.53-21.54H364V388.81z M364,359.77H126.033V15H364V359.77z"/></g></g></g></svg>',
    link: null,
    tipoLink: "nenhum",
  },
  {
    titulo: "Carta de princípios",
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    link: "docs/CARTA-DE-PRINCIPIOS-CEDUCVR-1.pdf",
    tipoLink: "arquivo",
  },
  {
    titulo: "Estrutura organizacional",
    icone:
      '<svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 448" xml:space="preserve"><g><g><path d="M408,288h-16v-40c0-22-18-40-40-40H232v-48h16c22,0,40-18,40-40V88c0-22-18-40-40-40h-48c-22,0-40,18-40,40v32 c0,22,18,40,40,40h16v48H96c-22,0-40,18-40,40v40H40c-22,0-40,18-40,40v32c0,22,18,40,40,40h48c22,0,40-18,40-40v-32 c0-22-18-40-40-40H72v-40c0-13.2,10.8-24,24-24h120v64h-16c-22,0-40,18-40,40v32c0,22,18,40,40,40h48c22,0,40-18,40-40v-32 c0-22-18-40-40-40h-16v-64h120c13.2,0,24,10.8,24,24v40h-16c-22,0-40,18-40,40v32c0,22,18,40,40,40h48c22,0,40-18,40-40v-32 C448,306,430,288,408,288z M88,304c13.2,0,24,10.8,24,24v32c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24v-32 c0-13.2,10.8-24,24-24H88z M248,304c13.2,0,24,10.8,24,24v32c0,13.2-10.8,24-24,24h-48c-13.2,0-24-10.8-24-24v-32 c0-13.2,10.8-24,24-24H248z M200,144c-13.2,0-24-10.8-24-24V88c0-13.2,10.8-24,24-24h48c13.2,0,24,10.8,24,24v32 c0,13.2-10.8,24-24,24H200z M432,360c0,13.2-10.8,24-24,24h-48c-13.2,0-24-10.8-24-24v-32c0-13.2,10.8-24,24-24h48 c13.2,0,24,10.8,24,24V360z"/></g></g></svg>',
    // TODO: página /organograma ainda não migrada; aponta para # por ora.
    link: "#",
    tipoLink: "pagina",
  },
  {
    titulo: "Manual do voluntário",
    icone:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z"/></svg>',
    link: "docs/MANUAL-DO-VOLUNTARIADO-CEDUCVR-1-1.pdf",
    tipoLink: "arquivo",
  },
  {
    titulo: "Políticas do CEDUCVR",
    icone:
      '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/></svg>',
    link: null,
    tipoLink: "nenhum",
  },
  {
    titulo: "Estatuto",
    icone:
      '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"/></svg>',
    link: "docs/Estatuto Ceduc Virgilio Resi 2025.pdf",
    tipoLink: "arquivo",
  },
];
