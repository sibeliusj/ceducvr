/**
 * Posts do blog exibidos na home — capturados de cvr.org.br.
 * Conteúdo hardcoded por ora (sem banco). As imagens originais ficam no
 * WordPress/produção; ver TODO de espelhamento em next.config.ts.
 *
 * `imagem` aqui aponta para o caminho legado servido em produção. Quando as
 * imagens forem espelhadas para /public, atualizar estes caminhos.
 */
export type PostPreview = {
  slug: string;
  titulo: string;
  autor: string;
  data: string;
  resumo: string;
  imagem: string;
};

export const postsHome: PostPreview[] = [
  {
    slug: "belo-horizonte-a-arte-de-crescer",
    titulo: "Belo Horizonte: A Arte de Crescer",
    autor: "Administrador Sistema",
    data: "9 Junho",
    resumo:
      "Você conhece o CEDUCVR? Confira a matéria abaixo e descubra como os nossos projetos transformam vidas e criam oportunidades para os jovens!!",
    imagem: "/images/blog/blog1.jpg",
  },
  {
    slug: "projeto-museu-para-juventude-1",
    titulo: "Projeto Museu para Juventude",
    autor: "Administrador Sistema",
    data: "15 Maio",
    resumo: "Formação cultural, audiovisual e protagonismo juvenil",
    imagem: "/images/blog/blog2.jpg",
  },
  {
    slug: "trabalho-sobre-economia-solidaria-e-destaque-no-i-caces-com-participacao-do-ceducvr",
    titulo:
      "Trabalho sobre Economia Solidária é destaque no I CACES com participação do CEDUCVR",
    autor: "Teste Login Ceduc",
    data: "8 Maio",
    resumo:
      "O artigo intitulado 'Desafios e Perspectivas na Gestão de Empreendimentos de Economia Solidária na RMBH: Um Estudo sobre Práticas Gerenciais e...",
    imagem: "/images/blog/blog3.jpg",
  },
  {
    slug: "metodologia-isonoma-do-ceducvr-conquista-pela-segunda-vez-certificacao-no-12o-premio-transforma",
    titulo:
      "Metodologia ISONOMA do CEDUCVR conquista pela segunda vez certificação no 12º Prêmio Transforma",
    autor: "Teste Login Ceduc",
    data: "8 Maio",
    resumo:
      "A metodologia ISONOMA, desenvolvida pelo CEDUC Virgilio Resi, foi reconhecida pela 2ª vez com a certificação na 12ª edição do Prêmio...",
    imagem: "/images/blog/blog1.jpg",
  },
  {
    slug: "ceduc-virgilio-resi-apoia-o-programa-trabalho-seguro-do-trt-mg-e-agradece-pela-acao-educativa",
    titulo:
      "CEDUC Virgílio Resi apoia o Programa Trabalho Seguro do TRT-MG e agradece pela ação educativa",
    autor: "Teste Login Ceduc",
    data: "8 Maio",
    resumo:
      "No dia 4 de abril de 2022, o CEDUCVR, teve a honra de receber o desembargador Marcelo Pertence, gestor regional do Programa Trabalho Seguro do...",
    imagem: "/images/blog/blog2.jpg",
  },
  {
    slug: "projeto-jovens-protagonistas-promove-inclusao-de-mulheres-no-mercado-de-trabalho",
    titulo:
      "Projeto Jovens Protagonistas promove inclusão de mulheres no mercado de trabalho",
    autor: "Teste Login Ceduc",
    data: "8 Maio",
    resumo:
      "O Projeto Jovens Protagonistas está com inscrições abertas até o dia 6 de agosto de 2021, oferecendo uma oportunidade única para jovens mulheres...",
    imagem: "/images/blog/blog3.jpg",
  },
];
