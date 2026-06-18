/**
 * Conteúdo HARDCODED da página "Nosso Trabalho" — capturado do site em
 * produção (https://cvr.org.br/nosso_trabalho.php).
 *
 * Substitui os dados que hoje vêm do MySQL via nosso-trabalho-functions.php
 * (tabelas nosso_trabalho_hero / _tabs / _quem_somos / _valores / _equipe /
 * _reconhecimentos / _compromisso / _ods).
 *
 * Quando (e se) o conteúdo voltar a ser editável pelo admin (Supabase),
 * estes arrays são trocados por chamadas a lib/queries/*.
 */

export const hero = {
  titulo: "Nosso Trabalho",
  background: "/images/wp8.jpg",
};

/** Rótulos e ids das abas (mantêm os ids do template: mission/vision/ideas1/ideas). */
export const tabs = [
  { id: "mission", titulo: "Quem somos" },
  { id: "vision", titulo: "Equipe" },
  { id: "ideas1", titulo: "Reconhecimento" },
  { id: "ideas", titulo: "Nosso Compromisso" },
];

export const quemSomos = {
  missaoTitulo: "Missão",
  missao: "Ser companhia para a pessoa no seu encontro com o mundo do trabalho.",
  valoresTitulo: "Valores",
  visaoTitulo: "Visão",
  visao:
    "Formar pessoas éticas, capazes de pensar criticamente e influenciar positivamente a sociedade.",
};

export const valores = [
  {
    titulo: "Comunhão e Liberdade",
    descricao:
      "Acreditamos na liberdade como um processo coletivo de respeito mútuo entre as pessoas, instituições, meio ambiente e comunidades.",
  },
  {
    titulo: "Trabalho e Dignidade",
    descricao:
      "Oferecemos às pessoas oportunidades nas quais elas prosperem e sejam tratadas com justiça e humanidade.",
  },
  {
    titulo: "Educação e inovação",
    descricao:
      "Trabalhamos para tornar a educação um processo coletivo de contínua transformação, de modo a contribuir com um futuro de paz e sustentabilidade.",
  },
  {
    titulo: "Compromisso e Equidade",
    descricao:
      "Desenvolvemos soluções que respeitam a igualdade de direitos de cada um. Somos conhecidos por nossa responsabilidade social.",
  },
];

export const equipe = [
  {
    nome: "Elenice de Oliveira",
    cargo: "CEO",
    foto: "https://www.cvr.org.br/wp-content/uploads/2023/05/Elenice-1.png",
  },
  {
    nome: "Júlia Maria da Silva",
    cargo: "Gerente Executiva",
    foto: "https://www.cvr.org.br/wp-content/uploads/2023/05/Julia-1.png",
  },
  {
    nome: "Janice Fernandes",
    cargo: "Coordenadora Pedagógica",
    foto: "https://www.cvr.org.br/wp-content/uploads/2023/05/Janice-1.png",
  },
  {
    nome: "Cláudia Lina Pedras",
    cargo: "Gerente Administrativo/financeiro",
    foto: "https://www.cvr.org.br/wp-content/uploads/2023/05/Claudia-1.png",
  },
  {
    nome: "Valéria Durães",
    cargo: "Coordenadora de Atendimento",
    foto: "https://www.cvr.org.br/wp-content/uploads/2023/05/Valeria-1.png",
  },
  {
    nome: "Izabela Santos",
    cargo: "Supervisora de RH",
    foto: "/images/team/izabela.png",
  },
];

export const equipeIntro =
  "Conheça um pouco mais da experiência dos nossos colaboradores";

export const reconhecimentoBackground =
  "https://plus.unsplash.com/premium_photo-1701760184387-0519ab2e1aee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const reconhecimentos = [
  {
    descricao:
      "Prêmio de excelência social na categoria Educação para o Trabalho. Este prêmio é uma iniciativa do Banco Itaú, que tem por objetivo valorizar ações de empresas e instituições comprometidas com práticas que evidenciem responsabilidades sociais diferenciadas.",
    titulo: "Prêmio Itaú Social – 2007",
  },
  {
    descricao:
      "Prêmio de excelência social na categoria Educação para o Trabalho. Este prêmio é uma iniciativa do Banco Itaú, que tem por objetivo valorizar ações de empresas e instituições comprometidas com práticas que evidenciem responsabilidades sociais diferenciadas.",
    titulo: "Prêmio Itaú Social – 2012",
  },
  {
    descricao:
      "Premiada pelo Programa Amigo de Valor Santander, como entidade referência na educação de adolescentes para o trabalho. A iniciativa apoia projetos que buscam garantir que os direitos de cada criança e adolescente em situação de vulnerabilidade social sejam respeitados, fortalecendo ações que enfrentam e previnem situações como maus-tratos, negligência, trabalho infantil, abuso e exploração sexual.",
    titulo: "Banco SANTANDER – 2014",
  },
  {
    descricao:
      "Certificação de Entidade Beneficente de Assistência Social (CEBAS). Concedido a entidades beneficentes de assistência social que tenham atuação exclusiva ou preponderante na área de Assistência Social, conforme disposto na Lei nº 12.101, de 27 de novembro de 2009.",
    titulo: "Ministério de Desenvolvimento Social e Combate à Fome – 2015",
  },
  {
    descricao:
      "Metodologia certificada como tecnologia social inovadora: ISONOMA — Práticas de Cooperativismo e Desenvolvimento. A iniciativa visa o reconhecimento de metodologias replicáveis que visem o cooperativismo como instrumento de desenvolvimento econômico, que se apresenta como um mecanismo moderno de construção de um mundo melhor.",
    titulo: "Fundação Banco do Brasil – 2017",
  },
  {
    descricao:
      "Reconhecimento concedido pelo Programa de Promoção da Igualdade Racial de Belo Horizonte, que valoriza empresas, instituições e organizações da sociedade civil que promovem, em sua gestão, ações para a igualdade racial, o enfrentamento ao racismo e o combate à discriminação étnico-racial.",
    titulo: 'Selo de Excelência "BH sem Racismo" – 2018',
  },
  {
    descricao:
      "Indicação da vereadora Nely Aquino, concedida a pessoas e entidades cujo trabalho contribui diretamente para o desenvolvimento social e econômico do município.",
    titulo: "Diploma de Honra ao Mérito – 2018",
  },
  {
    descricao:
      "Metodologia Educar Trabalhando: instrumento pedagógico interdisciplinar que integra teoria e prática na formação de adolescentes, fortalecendo conhecimento, experiência e protagonismo juvenil.",
    titulo:
      "Prêmio Fundação Banco do Brasil – Categoria Educação para o Futuro – 2021",
  },
  {
    descricao:
      "Reconhecimento pela participação na campanha on-line de doação coletiva, criada para reduzir os impactos da fome durante a pandemia na capital mineira e na Região Metropolitana de Belo Horizonte.",
    titulo:
      'Certificação como Instituição Parceira da Campanha "Força BH – Todos contra a Fome" – 2021',
  },
];

export const compromisso = {
  introducao:
    "O CEDUC Virgilio Resi está comprometido com os Objetivos de Desenvolvimento Sustentável (ODS) estabelecidos pela Organização das Nações Unidas (ONU) em 2015. Seu propósito é tomar medidas ousadas e transformadoras para promover o desenvolvimento sustentável nos próximos 15 anos sem deixar ninguém para trás.",
  tituloSecao: "Nossas ações e os ODS da Agenda 2030",
  descricaoSecao:
    "Nossas ações se alinham aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030 da ONU, contribuindo diretamente para um futuro mais justo, inclusivo e sustentável.",
};

export const odsList = [
  {
    numero: 4,
    icone: "fa-graduation-cap",
    cor: "#e5243b",
    titulo: "ODS 4 – Educação de Qualidade",
    descricao:
      "Promovemos educação inclusiva e equitativa, oferecendo formação socioeducativa, profissional e cultural a adolescentes e jovens em situação de vulnerabilidade, aliando teoria e prática para ampliar oportunidades ao longo da vida.",
  },
  {
    numero: 8,
    icone: "fa-briefcase",
    cor: "#ff8c1a",
    titulo: "ODS 8 – Trabalho Decente e Crescimento Econômico",
    descricao:
      "Desenvolvemos programas de aprendizagem e qualificação profissional que fortalecem o acesso ao emprego digno, estimulam o empreendedorismo e contribuem para o crescimento econômico local de forma sustentável.",
  },
  {
    numero: 10,
    icone: "fa-balance-scale",
    cor: "#dd1367",
    titulo: "ODS 10 – Redução das Desigualdades",
    descricao:
      "Atuamos diretamente em comunidades vulneráveis, criando oportunidades iguais de acesso à educação, cultura e trabalho, e fortalecendo o protagonismo juvenil como estratégia de inclusão social.",
  },
  {
    numero: 16,
    icone: "fa-gavel",
    cor: "#00689d",
    titulo: "ODS 16 – Paz, Justiça e Instituições Eficazes",
    descricao:
      "Fomentamos a participação cidadã, o diálogo e a convivência pacífica por meio de ações formativas que incentivam o respeito, a ética e a construção de soluções coletivas para desafios sociais.",
  },
  {
    numero: 17,
    icone: "fa-users",
    cor: "#19486a",
    titulo: "ODS 17 – Parcerias e Meios de Implementação",
    descricao:
      "Estabelecemos redes de cooperação com empresas, universidades, órgãos públicos e organizações sociais, potencializando recursos, conhecimentos e práticas para ampliar nosso impacto social.",
  },
];
