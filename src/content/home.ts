/**
 * Conteúdo HARDCODED da home — capturado do site em produção (cvr.org.br).
 * Substitui os dados que hoje vêm do MySQL via home-functions.php.
 *
 * Quando (e se) o conteúdo voltar a ser editável pelo admin (Supabase),
 * estes arrays são trocados por chamadas a lib/queries/*.
 */

export const heroHome = {
  titulo: "Aprendiz CEDUCVR",
  subtitulo: "Dê o primeiro passo",
  cta1: { texto: "Quero ser aprendiz", href: "/seja-um-aprendiz" },
  cta2: { texto: "Contrate um aprendiz", href: "/contrate-um-aprendiz" },
  background: "/images/img_bg_ceduc.jpg",
};

export const sobre = {
  rotulo: "A organização",
  paragrafo1:
    "Transforme seu futuro com o Centro de Educação Para o Trabalho Virgilio Resi (CEDUCVR), uma organização referência em educação voltada para o trabalho, o desenvolvimento humano e a geração de trabalho e renda. Aqui, acreditamos que o trabalho e a inclusão produtiva são pilares essenciais para fortalecer e desenvolver pessoa, negócios e comunidades.",
  paragrafo2:
    "Sempre guiada por valores fundamentais como respeito, gratidão, humanidade, ética, autonomia e responsabilidade social, nosso propósito é oferecer soluções educacionais transformadoras e duradouras, construídas em parceria com nossos públicos. Venha fazer parte dessa jornada e descubra como o trabalho pode ser o caminho para o seu crescimento pessoal e profissional. Juntos, vamos construir um futuro melhor!",
};

export const estatisticas = [
  { numero: "10.926", icone: "fa-users", titulo: "Jovens atendidos" },
  { numero: "45", icone: "fa-project-diagram", titulo: "Projetos Realizados" },
  {
    numero: "9.580",
    icone: "fa-hands-helping",
    titulo: "Pessoas atendidas no Programa Ser Companhia",
  },
  {
    numero: "4.769",
    icone: "fa-globe-americas",
    titulo: "Pessoas atendidas no Programa Ampliando Fronteiras",
  },
];

export const servicos = [
  {
    titulo: "Quero ser um Jovem Aprendiz",
    descricao:
      "Inicie sua carreira com capacitação profissional, desenvolvimento pessoal e oportunidades reais no mercado de trabalho.",
    link: "/seja-um-aprendiz",
    textoLink: "Saiba mais",
  },
  {
    titulo: "Sou uma Empresa, quero saber mais!",
    descricao:
      "Contrate jovens qualificados e preparados para o mercado, cumprindo a Lei da Aprendizagem e investindo no futuro.",
    link: "/contrate-um-aprendiz",
    textoLink: "Saiba mais",
  },
  {
    titulo: "Quero desenvolver ou apoiar projetos",
    descricao:
      "Seja parceiro do CEDUCVR e contribua para transformar vidas através da educação e inclusão produtiva.",
    link: "/como-ajudar",
    textoLink: "Saiba mais",
  },
];

export const fortalecendo = {
  heading: "Fortalecendo e capacitando pessoas",
  descricao:
    "Transformamos a maneira como você se relaciona com o trabalho! No CEDUCVR, nossos projetos e programas promovem uma visão saudável e positiva do trabalho, deixando para trás a ideia de sacrifício. Focamos em proporcionar felicidade, autorrealização e contribuição social, para que você possa crescer pessoal e profissionalmente, enquanto faz a diferença no mundo.",
  cta: { texto: "Conheça o CEDUCVR", href: "/ceducvr" },
  imagem1: "/images/img1.jpg",
  imagem2: "/images/img2.jpg",
};

export const valores = [
  {
    titulo: "Respeito",
    descricao:
      "Acolhemos a todos com equidade e afeto, valorizando a diversidade, a coletividade e o indivíduo.",
  },
  {
    titulo: "Autonomia",
    descricao:
      "Incentivamos nosso público assistido a desenvolverem habilidades e competências que os tornem profissionais independentes e bem-sucedidos.",
  },
  {
    titulo: "Responsabilidade Social",
    descricao:
      "Promovemos a inclusão produtiva e a sustentabilidade, contribuindo para uma sociedade mais justa e igualitária",
  },
];

export const promo = {
  heading: "Contrate um jovem aprendiz do CEDUCVR",
  cta: { texto: "Contrate um aprendiz", href: "/contrate-um-aprendiz" },
  imagem1: "/images/img3.jpg",
  imagem2: "/images/img4.jpg",
};

export const depoimentos = [
  {
    texto:
      "Ser voluntário no CEDUCVR é antes de tudo uma honra e um enorme prazer, fazer parte do grupo de colaboradores de uma instituição tão organizada e que desempenha um trabalho importantíssimo para o futuro destes jovens e do nosso Brasil é para mim motivo de orgulho. Acho essencial para esta juventude o trabalho que faço de 'Inteligência Emocional', são jovens batalhadores que estão usando do seu presente para criar seu futuro, e eles precisam se valorizar, equilibra suas emoções, ter muita auto estima e amor próprio!! Ter um choque de positividade e otimismo para que consigam o equilíbrio necessário para se tornarem vencedores e realizadores. Muito obrigado ao CEDUCVR e principalmente muito obrigado a estes jovens pela oportunidade de treiná-los. GRATIDÃO!",
    autor: "Rodrigo Rocha",
    cargo: "Consultor de RH, Unibh",
  },
  {
    texto:
      "Tive a oportunidade de iniciar minha carreira profissional em uma empresa que cujo segmento era exatamente voltado para o que eu amava, Recursos Humanos. Sendo assim tive a oportunidade de aprender como trabalhar, ao lado de grandes profissionais. Ainda, todas as etapas da empresa simulada, auxiliaram no meu desenvolvimento, me dando base para toda vida. Hoje, atuo no setor de RH, e sou responsável pelo programa de aprendizagem. Com muito carinho, tive a oportunidade de indicar o CEDUCVR, e com muita clareza conseguimos perceber a diferença. Agradeço a instituição Virgilio Resi a oportunidade de ter aprendido tanto, e deixo aqui expresso a minha admiração.",
    autor: "Amanda Souza Guerra Martins",
    cargo: "Advogada",
  },
  {
    texto:
      "A parceria com o CEDUC - Centro de Educação para o Trabalho Virgílio Resi, possibilita-nos entender e desenvolver as melhores práticas educacionais para o desenvolvimento integral, respeitando as dimensões humana, cognitiva e laboral de cada indivíduo participante de nossos projetos. Aliados com o propósito do CEDUC, apoiamos esse trabalho incansável junto aos sentenciados em privação de liberdade. O CEDUC incentiva o resgate da autoestima da pessoa presa e egressa do sistema prisional, apoiando-a na evolução de suas habilidades, fortalecendo seu projeto de vida com responsabilidade cidadã na sua inclusão social e profissional.",
    autor: "Enéas Alessandro da Silva Melo",
    cargo: "Gerente de Projetos, Fundação Minas Pela Paz",
  },
  {
    texto:
      "Com certeza, o programa e professores foram fundamentais em muitas decisões que tive durante e depois do curso, era maravilhoso eu adorava as palestras e as atividades em grupos, fiz muitos amigos aí. Tenho saudade de como era bom aprender de forma diferente e criativa, nós deixando mais perto do futuro e o que queríamos ser, pessoas capacitadas e profissional. Agradeço os professores e ao programa por ter dado um grande empurrão na minha vida profissional.",
    autor: "Ezabela Soares do Nascimento",
    cargo: "Cabelereira/Empreendedora, Ex-jovem aprendiz 2009",
  },
  {
    texto:
      "Quando vamos desenvolver algum projeto com o CEDUC/VR é perceptível o tanto de amor que as pessoas colocam naquilo que fazem. É um trabalho desenvolvido com significado e propósito, em que as pessoas são o centro da ação, mas que não se bastam sozinhas, então a vida comunitária e a solidariedade passam a ser o elo que dá humanidade àquilo que o CEDUC faz.",
    autor: "Flávio Tofani (Tio Flávio)",
    cargo: "Fundador da ONG Tio Flávio Cultural",
  },
  {
    texto:
      "Ser solidário é, ser amigo e empático, permitindo-se sentir a dor e as dificuldades do outro para, em seguida, buscar ajudá-lo de alguma maneira. Ser padrinho e doador do CEDUC é duplamente gratificante para mim, porque além da satisfação de ajudar as pessoas, tenho plena consciência de que estou contribuindo em uma causa que ajuda diretamente no desenvolvimento do país, fortalecendo e capacitando jovens para construir um Brasil melhor.",
    autor: "Felipe Lucas Ferreira Soares",
    cargo: "Engenheiro CEMIG",
  },
];

export const contato = {
  atendimento: {
    publico: "+55 (31) 2103-2744",
    empresas: "+55 (31) 2103-2716",
  },
  endereco:
    "Rua Joventina da Rocha, 289 - Heliópolis, Belo Horizonte - MG, 31741-450",
  mapaUrl: "https://goo.gl/maps/7Vw1PBhxx5BaXStr8",
  email: "contato@cvr.org.br",
};
