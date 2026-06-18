/**
 * Conteúdo HARDCODED da página /como-ajudar — capturado do site em produção
 * (cvr.org.br/como_ajudar.php). No PHP os dados vinham de
 * como-ajudar-functions.php (buscarHero/buscarConfig), mas os valores reais
 * em produção são os fallbacks abaixo. Quando voltarem a ser editáveis pelo
 * admin, estes objetos viram chamadas a lib/queries/*.
 */

export const configComoAjudar = {
  cnpj: "07.578.361/0001-69",
  // CNPJ só com dígitos — usado no botão "Copiar" do Pix.
  cnpjLimpo: "07578361000169",
  chavePix: "07.578.361/0001-69",
  emailContato: "captacao@cvr.org.br",
  whatsappNumero: "5531997155699",
  whatsappFormatado: "(31) 99715-5699",
};

export const heroComoAjudar = {
  eyebrow: "Página de doação · CEDUCVR",
  textoDestaque:
    "Com a sua doação, adolescentes e jovens em situação de vulnerabilidade social têm acesso a oportunidades reais de formação humana, qualificação profissional e inserção no mundo do trabalho protegido. Cada contribuição gera esperança, dignidade e futuro.",
  tagline:
    "Companhia para cada jovem em seu encontro com o mundo do trabalho.",
  desde: "Desde 2005",
};

export const estatisticasComoAjudar = [
  { numero: "8", sup: "+", label: "Projetos sociais e culturais em captação" },
  { numero: "2,4", sup: "M", label: "Em meta de captação ativa (R$)" },
  { numero: "2.500", sup: "+", label: "Adolescentes e jovens beneficiados" },
  { numero: "100", sup: "%", label: "Dedutível do IR (FIA e Rouanet)" },
];

export const marquee = [
  "Formação profissional",
  "Cultura e cidadania",
  "Lei Rouanet",
  "Fundo da Infância",
  "Trabalho protegido",
  "Protagonismo juvenil",
];

export const comoDoar = {
  pessoaFisica: {
    titulo: "Doe como pessoa física",
    paragrafo:
      "Você pode fazer parte dessa transformação. Ao doar para o CEDUCVR, você fortalece projetos que promovem o desenvolvimento humano, educacional e profissional de adolescentes e jovens, ampliando acesso ao trabalho protegido, à educação e à autonomia.",
    itens: [
      "Doação espontânea via Pix",
      "Doação incentivada pelo FIA (dedução no IR)",
      "Mecenato cultural (Lei Rouanet)",
    ],
  },
  empresa: {
    titulo: "Doe como empresa",
    paragrafo:
      "Sua empresa também pode apoiar o CEDUCVR na transformação de vidas e territórios, por meio do incentivo a projetos sociais e culturais alinhados aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030.",
    itens: [
      "Fundo da Infância e Adolescência (FIA)",
      "Lei Federal de Incentivo à Cultura (Lei Rouanet)",
      "Patrocínio institucional & editais",
    ],
  },
};

export type ProjetoCaptacao = {
  categoria: "fia" | "rouanet" | "patrocinio";
  featured?: boolean;
  imageGradient: string;
  tag: string;
  tagClass: "fia" | "rouanet" | "patrocinio";
  mecanismo: string;
  titulo: string;
  descricao: string;
  meta: { label: string; value: string }[];
  progresso?: { captado: string; metaTexto: string; percentLabel: string; metaLabel: string; width: string };
  acoes: { texto: string; tipo: "solid" | "outline"; assunto?: string; href?: string }[];
};

export const projetosCaptacao: ProjetoCaptacao[] = [
  {
    categoria: "fia",
    featured: true,
    imageGradient: "linear-gradient(145deg,#b94a2a,#6a1e0f)",
    tag: "FIA · CMDCA-BH",
    tagClass: "fia",
    mecanismo: "Formação socioprofissional · Belo Horizonte",
    titulo: "Embelezando Vidas",
    descricao:
      "Promove a formação socioprofissional e o fortalecimento da autoestima de adolescentes em situação de alta vulnerabilidade social, especialmente aqueles provenientes de acolhimento institucional, em cumprimento de medidas socioeducativas ou em situação de trabalho infantil.",
    meta: [
      { label: "Adolescentes", value: "30" },
      { label: "Famílias", value: "30" },
      { label: "Duração", value: "12 meses" },
      { label: "Local", value: "BH — MG" },
    ],
    progresso: {
      captado: "R$ 0",
      metaTexto: "de R$ 774.843,75",
      percentLabel: "CAPTADO 0%",
      metaLabel: "META 100%",
      width: "1%",
    },
    acoes: [
      { texto: "Doar como Pessoa Física", tipo: "solid", href: "#pix" },
      { texto: "Apoiar como Empresa", tipo: "outline", assunto: "Apoio empresa - Embelezando Vidas" },
    ],
  },
  {
    categoria: "rouanet",
    imageGradient: "linear-gradient(145deg,#b94a2a,#6a1e0f)",
    tag: "Lei Rouanet",
    tagClass: "rouanet",
    mecanismo: "Cultura · PRONAC 255508",
    titulo: "Caminhos da Cultura — Juventude e Cidade",
    descricao:
      "Formação audiovisual, acesso ao patrimônio cultural e desenvolvimento de competências criativas entre adolescentes e jovens em situação de vulnerabilidade social.",
    meta: [
      { label: "Participantes", value: "30" },
      { label: "Impactados", value: "600" },
      { label: "Duração", value: "12 meses" },
      { label: "Local", value: "BH — MG" },
    ],
    progresso: {
      captado: "R$ 0",
      metaTexto: "de R$ 410.661,24",
      percentLabel: "CAPTADO 0%",
      metaLabel: "PRONAC 255508",
      width: "1%",
    },
    acoes: [
      { texto: "Ver dados de doação", tipo: "solid", assunto: "Apoio - Caminhos da Cultura" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Caminhos da Cultura" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#3a5a3b,#16261c)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Inclusão social · Ibirité — MG",
    titulo: "Novos Caminhos",
    descricao:
      "Desenvolvimento integral de adolescentes e jovens em cumprimento de medidas socioeducativas, fortalecendo competências socioemocionais, digitais e produtivas.",
    meta: [
      { label: "Público", value: "60 jovens" },
      { label: "Duração", value: "12 meses" },
      { label: "Investimento", value: "R$ 400 mil" },
      { label: "Local", value: "Ibirité" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Novos Caminhos" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Novos Caminhos" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#d97a1f,#7a3a0a)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Educação & comunicação · BH",
    titulo: "Rádio Web CEDUCVR Conecta",
    descricao:
      "Rádio web educativa gerida por jovens aprendizes — formação em comunicação, produção de conteúdo e protagonismo juvenil.",
    meta: [
      { label: "Gestores", value: "12 aprendizes" },
      { label: "Impactados", value: "700" },
      { label: "Duração", value: "12 meses" },
      { label: "Investimento", value: "R$ 400 mil" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Rádio Web CEDUCVR Conecta" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Rádio Web CEDUCVR Conecta" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#2058ab,#0b1a2e)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Educação profissional · BH",
    titulo: "Jovem Pronto",
    descricao:
      "Ampliação da infraestrutura tecnológica do CEDUCVR, com 25 notebooks para fortalecer a formação profissional de aprendizes.",
    meta: [
      { label: "Público", value: "900 aprendizes" },
      { label: "Equipamentos", value: "25 notebooks" },
      { label: "Duração", value: "12 meses" },
      { label: "Investimento", value: "R$ 150 mil" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Jovem Pronto" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Jovem Pronto" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#6a3f8f,#2a1538)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Saúde & cidadania · BH",
    titulo: "Aprender a Cuidar, Cuidar para Conviver",
    descricao:
      "Integra educação, saúde e cidadania para fortalecer o bem-estar e o protagonismo social de jovens aprendizes.",
    meta: [
      { label: "Público", value: "600 aprendizes" },
      { label: "Duração", value: "12 meses" },
      { label: "Investimento", value: "R$ 150 mil" },
      { label: "Local", value: "BH — MG" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Aprender a Cuidar" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Aprender a Cuidar" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#c43b5e,#4a1020)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Empoderamento feminino · Rosa Leão",
    titulo: "Tecendo Redes e Sabores da Resistência",
    descricao:
      "Fortalecimento de mulheres lideranças da Ocupação Rosa Leão por meio de oficinas produtivas, formação cidadã e espaços de cuidado.",
    meta: [
      { label: "Lideranças", value: "6 a 7" },
      { label: "Duração", value: "8 meses" },
      { label: "Investimento", value: "R$ 70 mil" },
      { label: "Local", value: "Rosa Leão" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Tecendo Redes" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Tecendo Redes" },
    ],
  },
  {
    categoria: "patrocinio",
    imageGradient: "linear-gradient(145deg,#0f5f6e,#052329)",
    tag: "Patrocínio",
    tagClass: "patrocinio",
    mecanismo: "Cultura & educação · BH",
    titulo: "Pequenas Vozes — Canto Coral",
    descricao:
      "Formação musical de crianças por meio do canto coral coletivo, culminando em uma Cantata de Natal aberta à comunidade.",
    meta: [
      { label: "Público", value: "50 estudantes" },
      { label: "Duração", value: "6 meses" },
      { label: "Investimento", value: "R$ 39 mil" },
      { label: "Local", value: "EM W. P. Gomes" },
    ],
    acoes: [
      { texto: "Apoiar este projeto", tipo: "solid", assunto: "Apoio - Pequenas Vozes" },
      { texto: "Saiba mais", tipo: "outline", assunto: "Mais informações - Pequenas Vozes" },
    ],
  },
];

export const filtrosProjetos = [
  { filter: "all", label: "Todos", count: 8 },
  { filter: "fia", label: "FIA", count: 1 },
  { filter: "rouanet", label: "Lei Rouanet", count: 1 },
  { filter: "patrocinio", label: "Patrocínio institucional", count: 6 },
];

export const outrasFormas = [
  { num: "01", titulo: "Doações espontâneas", texto: "Contribuições pontuais ou recorrentes via Pix, sem vínculo a projetos específicos." },
  { num: "02", titulo: "Equipamentos de informática", texto: "Notebooks, desktops e acessórios que impulsionam nossos laboratórios de aprendizagem." },
  { num: "03", titulo: "Parcerias institucionais", texto: "Acordos de longo prazo com organizações que compartilham nossa missão." },
  { num: "04", titulo: "Patrocínio direto", texto: "Apoio a atividades, eventos e formações específicas do calendário CEDUCVR." },
  { num: "05", titulo: "Ações educativas", texto: "Apoio a iniciativas culturais, educativas e comunitárias do nosso território." },
  { num: "06", titulo: "Voluntariado profissional", texto: "Compartilhe sua experiência em formações, mentorias e oficinas com nossos jovens." },
];

export type ProjetoExecucao = {
  badge: string;
  titulo: string;
  descricao: string;
  progresso?: { captado: string; metaTexto: string; width: string };
  stats?: { label: string; value: string }[];
  funders?: string;
};

export const projetosExecucao: ProjetoExecucao[] = [
  {
    badge: "Em execução · FIA/BH",
    titulo: "Museus para a Juventude",
    descricao:
      "Democratização do acesso a fontes culturais e exercício dos direitos culturais de adolescentes e jovens.",
    progresso: { captado: "25,33%", metaTexto: "R$ 93.500 / R$ 346.831", width: "25.33%" },
    funders: "Multiplan · CEMIG · COPASA",
  },
  {
    badge: "Em execução · FMDCA",
    titulo: "Juventude, Inovação e Comunidade",
    descricao:
      "Desenvolvimento humano, comunitário e social de adolescentes em vulnerabilidade, com ênfase em meio ambiente, cultura e tecnologia.",
    stats: [
      { label: "Público", value: "120 adolescentes" },
      { label: "Duração", value: "24 meses" },
      { label: "Valor", value: "R$ 496.880" },
    ],
  },
  {
    badge: "Em execução · Abrinq",
    titulo: "Pré-Aprendizagem — Caminhos para o Futuro",
    descricao:
      "Prepara adolescentes de 14-15 anos em situação de alta vulnerabilidade social para o ingresso em programas de aprendizagem profissional.",
    stats: [
      { label: "Público", value: "120 adolescentes" },
      { label: "Duração", value: "24 meses" },
      { label: "Valor", value: "R$ 240.000" },
    ],
  },
];
