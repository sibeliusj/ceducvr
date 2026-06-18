/**
 * Conteúdo HARDCODED da página "Programas e Projetos"
 * (cvr.org.br/programaseprojetos.php), capturado dos seeds do MySQL
 * (admin-blog/database_programas_projetos.sql +
 * admin-blog/migration_programas_projetos.sql) e confirmado no site em produção.
 *
 * Substitui o conteúdo que hoje vem das tabelas programas_projetos /
 * programas_projetos_config. Quando (e se) o conteúdo voltar a ser editável pelo
 * admin (Supabase), estes objetos viram chamadas a lib/queries/*.
 *
 * Estrutura de renderização (igual ao programaseprojetos.php):
 * - Cada programa é uma aba Bootstrap (data-bs-toggle="tab"); o all.js global cuida
 *   da interação. A primeira aba/painel recebe id "mission"; as seguintes,
 *   "mission2", "mission3", ... (replicando o gerador de âncoras do PHP).
 * - O campo `conteudo` é HTML rico vindo do banco (campo LONGTEXT, já sanitizado),
 *   por isso vai como string e é injetado com dangerouslySetInnerHTML — exatamente
 *   como o PHP fazia com `echo $programa['conteudo']`.
 * - Alguns programas (slugs ser-companhia, ampliando-fronteiras, aprendiz-ceducvr)
 *   acrescentam uma galeria de resultados (owl-carousel) com imagens locais,
 *   gerada dinamicamente pelo PHP. Reproduzimos a mesma lista de imagens aqui.
 */

export const config = {
  tituloHero: "Programas e Projetos",
  subtituloHero: "",
  imagemHero: "/images/prog_proj.jpg",
};

export type Programa = {
  titulo: string;
  slug: string;
  /** HTML bruto vindo do banco (renderizado com dangerouslySetInnerHTML). */
  conteudo: string;
};

// Programas ativos (programas_projetos, status='ativo', ORDER BY ordem ASC).
export const programas: Programa[] = [
  {
    titulo: "Nossa Metodologia",
    slug: "nossa-metodologia",
    conteudo:
      'A abordagem metodológica do CEDUCVR nasce da compreensão clara de que nosso trabalho na formação de adolescentes, jovens e adultos vai além da simples transmissão de conhecimentos e competências. Ele também promove o desenvolvimento pessoal, forma cidadãos proativos e comprometidos, e contribui para o desenvolvimento sustentável da comunidade. Acreditamos na flexibilidade e na adaptabilidade como chave para a educação significativa e transformadora.<br><br>Nossas práticas são enraizadas em duas metodologias fundamentais: ISONOMA – Práticas de Cooperativismo e Desenvolvimento Humano e EDUCAR TRABALHANDO – Imersão Socioprofissional para o Desenvolvimento de Soft Skills e Hard Skills. Ambas foram concebidas internamente e reconhecidas pela Fundação Banco do Brasil como tecnologias sociais autênticas e catalisadoras na formação socioprofissional e geração de emprego.<br><br>Não seguimos uma fórmula pronta que encapsule nossa pedagogia. Preferimos cultivar a essência de um método em constante evolução, moldado pela resposta contínua aos estímulos, às mudanças, aos desafios e às demandas do mundo, da realidade e das humanidades ao nosso redor. Acreditamos na flexibilidade e na adaptabilidade como chave para a educação significativa e transformadora. Descubra como essas abordagens inovadoras podem fazer a diferença.<br><br><h2>Sua Origem</h2>A essência da metodologia socioeducativa utilizada no CEDUC Virgilio Resi tem como ponto de origem e de contínua retomada o método "Educar é um risco", concebido pelo padre católico, fundador do movimento Comunhão e Libertação, educador e intelectual italiano Luigi Giussani. Essa abordagem valoriza a educação como um processo dinâmico e transformador, que desafia e inspira os indivíduos a descobrir e cultivar seu potencial máximo. É a partir desse fundamento que construímos nossa prática, buscando sempre fomentar a dignidade, a liberdade e a responsabilidade em cada pessoa que passa por nossos programas. Essa filosofia está presente em cada ação e cada conquista do CEDUC Virgilio Resi!<br><br><blockquote>"O tema principal para nós é a educação: como nos educar, em que consiste e como se desenvolve uma educação que seja verdadeira, ou seja, correspondente ao humano. Educação, portanto, do original que está em nós, que em cada um se desdobra de forma diferente, ainda que, substancial e fundamentalmente, o coração seja sempre o mesmo".<br>- Luigi Giussani</blockquote><br><br><section class="page-section pt-0 pb-0 banner-section bg-light dark-content"><div class="container relative"><div class="row"><div class="col-lg-6 relative"><img src="https://www.cvr.org.br/wp-content/uploads/2023/09/Post-instagram-facebook-quadrado-prosposta-educacao.png" alt="" class="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="292" /></div><div class="col-lg-5 offset-lg-1"><div class="mt-140 mt-lg-80 mb-140 mb-lg-80"><div class="banner-content wow fadeInUpShort" data-wow-duration="1.2s"><h3 class="banner-heading">Educar trabalhando</h3><div class="banner-decription">A metodologia Educar Trabalhando, aplicada no Programa de Aprendizagem, prepara jovens de 15 a 17 anos em situação de vulnerabilidade social para atuarem como aprendizes em empresas, desenvolvendo soft skills e hard skills em um ambiente empresarial simulado, com ensino personalizado e foco na experiência prática, proatividade, criatividade e interdisciplinaridade, utilizando ferramentas tecnológicas e ambientes inovadores de estudo. Neste método o educador atua como mediador, conectando a aprendizagem à realidade do trabalho, estimulando a responsabilidade e a multiplicação de conhecimentos entre jovens.</div></div></div></div></div></div></section><section class="page-section" id="about"><div class="container relative"><div class="mb-sm-50"><div class="row section-text"><div class="col-md-12 col-lg-4 mb-md-50 mb-xs-30"><div class="lead-alt wow linesAnimIn" data-wow-offset="0" data-splitting="lines"><span style="margin-left:75px!important;">ISONOMA</span><img src="https://www.cvr.org.br/wp-content/uploads/2023/09/Post-instagram-facebook-quadrado-prosposta-educacao-1-1024x1024.png" alt=""></div></div><div class="col-md-10 col-lg-6 mb-sm-50 mb-xs-30 wow linesAnimIn" data-wow-offset="0" data-splitting="lines"><strong>Práticas de Cooperativismo e Desenvolvimento Humano</strong><br>A ISONOMA é um conjunto de ações interligadas, destinadas a fomentar o desenvolvimento inclusivo e sustentável de micro e pequenos empreendedores de baixa renda. Direcionada a povos e comunidades tradicionais e periféricas, esta tecnologia social participativa e colaborativa apoia atividades de artesanato, agricultura familiar, ecoturismo de base comunitária, reciclagem e culinária. Fiel aos valores da economia solidária e aos princípios da universalidade, a abordagem integradora da ISONOMA não apenas acolhe e capacita os indivíduos, ela também cultiva um ecossistema de colaboração e suporte mútuo. Uma vez implementada, esta rede torna-se um instrumento essencial para a construção de uma economia mais equitativa e sustentável, reunindo esforços de ONGs, universidades, iniciativa privada, sociedade civil e o poder público.</div></div></div><section class="page-section"><div class="container relative"><div class="row section-text"><div class="col-md-12 mb-sm-20"><h4>Os impactos da nossa metodologia</h4><dl class="accordion"><dt><a href="">Aquisição de conhecimento e habilidades</a></dt><dd>Através da nossa metodologia, os indivíduos adquirem conhecimentos essenciais para compreender o mundo ao seu redor, tomar decisões informadas e participar ativamente na sociedade. Além disso, eles desenvolvem habilidades que são valiosas tanto para a vida pessoal quanto para a profissional.</dd><dt><a href="">Autodeterminação</a></dt><dd>Centrada no potencial de cada educando nossa metodologia capacita os indivíduos a tomarem decisões informadas sobre suas vidas, saúde, carreira e outras áreas. Isso os ajuda a construir um futuro que esteja alinhado com seus valores e aspirações.</dd><dt><a href="">Capacidade crítica</a></dt><dd>O método CEDUCVR promove o pensamento crítico e a capacidade de avaliar informações de forma objetiva. Isso ajuda os indivíduos a se tornarem cidadãos informados e participativos, capazes de analisar questões complexas e tomar decisões fundamentadas.</dd><dt><a href="">Desenvolvimento pessoal</a></dt><dd>Nossa metodologia oferece oportunidades para adolescentes, jovens e adultos explorar seus interesses, habilidades e talentos individuais. Ela ajuda a formar identidades, autoconceitos positivos e a construir confiança, contribuindo para o desenvolvimento saudável e equilibrado.</dd><dt><a href="">Desenvolvimento social</a></dt><dd>A formação socioprofissisonal facilita a interação social e o desenvolvimento de relacionamentos saudáveis. Ela promove a compreensão mútua, a empatia e a tolerância, contribuindo para a construção de uma sociedade mais coesa e harmoniosa.</dd><dt><a href="">Empoderamento</a></dt><dd>Através do nosso método as pessoas podem superar barreiras sociais, econômicas e culturais. Isso promove a igualdade de oportunidades e capacita os indivíduos a melhorarem suas condições de vida e a conquistarem seus objetivos.</dd><dt><a href="">Participação cívica</a></dt><dd>Baseado em uma formação sólida, nossa metodologia ajuda os indivíduos a compreenderem seus direitos e responsabilidades como cidadãos. Isso os incentiva a participar ativamente na comunidade, na política e em questões sociais, contribuindo para o bem-estar geral da sociedade.</dd></dl></div></div></div></section></div></section>',
  },
  {
    titulo: "Aprendiz CEDUCVR",
    slug: "aprendiz-ceducvr",
    conteudo:
      'Instituído em 2008, o Programa Aprendiz CEDUCVR tem como missão proporcionar aos jovens e adolescentes de estratos socioeconômicos desfavorecidos na cidade de Belo Horizonte e Região Metropolitana uma experiência enriquecedora que une educação e ocupação laboral. Baseado na Lei 10.097/2000, o programa é voltado para indivíduos com idades entre 14 e 24 anos, oferecendo não apenas uma oportunidade de emprego, mas uma verdadeira chance de inclusão social.<br><br>O Aprendiz CEDUCVR vai além da simples oferta de empregabilidade juvenil. Ele representa um esforço de capacitação socioeconômica que se articula com a comunidade local, as famílias, o aparato estatal e o setor privado. Esta sinergia colaborativa e acolhedora visa não apenas a inserção laboral dos participantes, mas também o fortalecimento e a preparação dos jovens para desempenharem um papel cidadão ativo e transformador. Ao dotá-los de habilidades e competências essenciais, buscamos promover um engajamento eficaz e construtivo na sociedade.<br><br>Conheça o Programa Aprendiz CEDUCVR e descubra como, juntos, podemos construir um futuro mais inclusivo e promissor para os jovens de nossa comunidade!<br><br>*Lei no 10.097, de 19 de dezembro de 2000, estabelece as regras, direitos e deveres para a contratação de jovens aprendizes, com idade entre 14 e 24 anos, pelas empresas. Altera dispositivos da Consolidação das Leis do Trabalho – CLT, aprovada pelo Decreto-Lei no 5.452, de 1o de maio de 1943.<br><br><section class="page-section pt-0 pb-0 banner-section bg-light dark-content"><div class="container relative"><div class="row"><div class="col-lg-6 relative"><img src="https://www.cvr.org.br/wp-content/uploads/2023/09/02-1-1024x691.jpg" alt="" class="wow scaleOutIn" data-wow-duration="1.2s" data-wow-offset="292" /></div><div class="col-lg-5 offset-lg-1"><div class="mt-140 mt-lg-80 mb-140 mb-lg-80"><div class="banner-content wow fadeInUpShort" data-wow-duration="1.2s"><h3 class="banner-heading">Nosso Objetivo</h3><div class="banner-decription">Nosso objetivo é promover uma inclusão social humanizada, produtiva e protegida de jovens e adolescentes no mercado de trabalho. Isso é alcançado através do desenvolvimento de suas habilidades de soft e hard skills por meio de um processo abrangente de capacitação técnica, bem como de desenvolvimento social, cívico, profissional, emocional, intelectual e afetivo.</div></div></div></div></div></div></section><h3>Metas do programa Aprendiz CEDUCVR</h3><ul><li>Combater a exploração e o trabalho infantil.</li><li>Assegurar que, uma vez inseridos no mercado de trabalho, jovens e adolescentes tenham seus direitos humanos, cívicos e trabalhistas rigorosamente respeitados.</li><li>Criar e aplicar atividades práticas e teóricas, compatível com o desenvolvimento dos jovens e adolescentes inseridos no programa, a fim de ampliar suas chances de inserção no mercado de trabalho.</li><li>Estimular o protagonismo juvenil, assegurando-se de que o público assistido desfrute de horário especial, ambiente seguro e equipado para o pleno exercício de suas atividades.</li><li>Monitorar, acompanhar e avaliar o desenvolvimento socioprofissional dos jovens e adolescentes inseridos no programa, bem como mensurar seus resultados.</li><li>Reduzir o índice de evasão escolar entre jovens e adolescentes, garantindo a frequência obrigatória dos mesmos ao ensino regular.</li></ul>',
  },
  {
    titulo: "Ampliando Fronteiras",
    slug: "ampliando-fronteiras",
    conteudo:
      'Baseado na Constituição Federal de 1988 e na Lei Federal 8.069, de 13 de julho de 1990, conhecida como Estatuto da Criança e do Adolescente (ECA), especificamente no Art. 58, o Programa Ampliando Fronteiras do CEDUCVR visa proporcionar aos jovens um contato mais amplo com a realidade, através do acesso à cidade, à cultura, à história, às novas tecnologias digitais e às artes.<br><br>O Programa Ampliando Fronteiras parte da premissa de que a cultura desempenha um papel crucial na formação pessoal, moral e intelectual dos indivíduos, além de desenvolver sua capacidade de relacionamento interpessoal. Acreditamos que o acesso à cultura e a inclusão das novas tecnologias digitais, como a internet e as redes sociais, são instrumentos pedagógicos essenciais para a formação socioeducacional de jovens, adultos e adolescentes.<br><br>Ao integrar esses elementos no processo educativo, buscamos não apenas enriquecer a experiência dos participantes, mas também prepará-los para um mundo em constante evolução, promovendo um aprendizado mais abrangente e adaptado às demandas contemporâneas. Conheça o Programa Ampliando Fronteiras e descubra como estamos expandindo os horizontes dos nossos jovens para um futuro mais conectado e culturalmente enriquecido!<br><br>Art. 58. No processo educacional respeitar-se-ão os valores culturais, artísticos e históricos próprios do contexto social da criança e do adolescente, garantindo-se a estes a liberdade de criação e o acesso às fontes de cultura.<br><br><section class="page-section pt-0"><div class="container relative"><div class="row"><div class="col-lg-6 mb-md-60 d-flex align-items-center wow fadeInUpShort"><div><div class="row"><div class="col-lg-10"><h2 class="section-title mb-60 mb-sm-30">Nosso Objetivo</h2></div></div><div class="row alt-features-grid">Nosso objetivo é fortalecer o intercâmbio de saberes e conhecimentos por meio da promoção de experiências socioantropológicas, sejam físicas ou virtuais, que valorizem a diversidade étnica, social, cultural, regional, de pessoas e gêneros. Buscamos criar oportunidades que enriquecem o entendimento e a apreciação das múltiplas dimensões da identidade humana, promovendo um ambiente onde a diversidade é celebrada e respeitada, contribuindo para a construção de uma sociedade mais inclusiva e harmoniosa.</div></div></div><div class="col-lg-5 offset-lg-1 wow fadeScaleIn" data-wow-duration="1.5s"><img src="https://www.cvr.org.br/wp-content/uploads/2023/09/07-1.jpg" alt="Ampliando Fronteiras" /></div></div></div></section><h3>Metas do programa Ampliando Fronteiras</h3><ul><li>Promover o acesso à cidade e aos seus espaços de cultura e lazer, fortalecendo a defesa e a valorização do patrimônio cultural brasileiro.</li><li>Ampliar os instrumentos e as estratégias de inclusão digital, assegurando o letramento digital, a criação de conteúdos digitais socioeducativos, a comunicação e colaboração no ciberespaço, bem como, a segurança digital e o combate as fake news.</li><li>Contribuir para proporcionar, ao nosso público assistido, os meios para o livre acesso às fontes da cultura e o pleno exercício dos direitos culturais</li><li>Apoiar, valorizar e difundir o conjunto das manifestações culturais e seus respectivos criadores a fim de contribuir para produção, promoção e difusão de bens culturais.</li><li>Fortalecer a democratização do acesso à cultura, a fim de transformar o sistema de formação de jovens, adolescentes e adultos em um processo educacional inclusivo.</li></ul>',
  },
  {
    titulo: "Ser Companhia",
    slug: "ser-companhia",
    conteudo:
      'Inspirado no vigésimo sexto artigo da Declaração Universal dos Direitos Humanos de 2006, ratificada e promulgada pela UNESCO, o Programa Ser Companhia delineia uma abordagem estratégica para enfrentar os desafios da inclusão e reintegração profissional. Superamos limitações como instrução formal insuficiente, desvantagens tecnológicas, e lacunas na comunicação e na adaptação ao ambiente de trabalho e educação.<br><br>A missão do Programa Ser Companhia é inspirar adolescentes, jovens e adultos a se desenvolverem plenamente, resgatando seus valores cívicos e humanitários. Promovemos o crescimento social, intelectual, afetivo, cognitivo e profissional através de iniciativas socioeducativas personalizadas. Acompanhamos cada participante com apoio e orientação, considerando suas particularidades sociais, emocionais e culturais.<br><br>*Art. 26. A educação deverá visar à plena expansão da personalidade humana e ao reforço dos direitos do homem e das liberdades fundamentais e deve favorecer a compreensão, a tolerância e a amizade entre todas as nações e todos os grupos raciais ou religiosos, bem como o desenvolvimento das atividades das Nações Unidas para a manutenção da paz.<br><br><section class="page-section pt-0"><div class="container relative"><div class="row"><div class="col-lg-6 mb-md-60 d-flex align-items-center wow fadeInUpShort"><div><div class="row"><div class="col-lg-10"><h2 class="section-title mb-60 mb-sm-30">Nosso Objetivo</h2></div></div><div class="row alt-features-grid">Nosso objetivo é promover a requalificação socioprofissional e educacional de jovens, adultos e adolescentes, capacitando-os para acessar o mercado formal de trabalho e ambientes de aprendizagem em condições mais favoráveis. Queremos capacitar indivíduos para que se tornem protagonistas de seus próprios futuros, investindo em seu desenvolvimento pessoal e profissional.</div></div></div><div class="col-lg-5 offset-lg-1 wow fadeScaleIn" data-wow-duration="1.5s"><img src="/images/amp1.jpg" alt="" /></div></div></div></section><h3>Metas do programa Ser Companhia</h3><ul><li>Capacitar para o uso de computadores e internet, o público assistido a fim de torná-los aptos a cumprir com requisitos básicos (na atualidade), para a inserção no trabalho.</li><li>Estabelecer pontes entre o público assistido e sociedade, alicerçadas nos princípios da comunicação não violenta.</li><li>Fortalecer o desenvolvimento socioemocional do público assistido de modo a ampliar suas oportunidades de acesso ao trabalho e a renda.</li><li>Incentivar o retorno de jovens, adolescentes e adultos ao ensino fundamental, médio, formação técnica e superior.</li><li>Trabalhar a conscientização de empregadores, empresas públicas e/ou privadas sobre a recolocação profissional de indivíduos no mercado de trabalho.</li></ul>',
  },
];

// ---------------------------------------------------------------------------
// Galerias de resultados (owl-carousel) anexadas a programas específicos.
// O PHP gerava as listas de imagens dinamicamente; reproduzimos as mesmas.
// Caminhos relativos a /images/ (todas já presentes em public/images/).
// ---------------------------------------------------------------------------
export type Galeria = {
  /** Título exibido acima do carrossel (<h3>). */
  titulo: string;
  /** Caminhos de imagens (sob /images/). */
  imagens: string[];
};

// Ser Companhia — lista explícita do PHP (30 imagens em images/serCompanhia/).
const serCompanhiaImagens = [
  "2006.1-1.jpg", "2006.2.jpg", "2006.3.jpg",
  "2007.1.jpg", "2007.2-1.jpg", "2007.jpg",
  "2008.jpg", "2009.jpg", "2010.jpg",
  "2012.1.jpg", "2012.3.jpg", "2013.jpg",
  "2015.1-2.jpg", "2015.2.jpg", "2015.3.jpg",
  "2016.jpg", "2017.1-2.jpg", "2017.2-2.jpg",
  "2019.1.jpg", "2019.2.jpg", "2020.1.jpg",
  "2020.2.jpg", "2021.1-1.jpg", "2021.2.jpg",
  "2022.1-1.jpg", "2022.2.jpg", "2023.1.jpg",
  "2023.2.jpg", "2023.3.jpg", "2023.4.jpg",
];

// Ampliando Fronteiras — anos do PHP -> images/ampliandoFronteiras/jpg/{ano}-1.jpg.
const ampliandoFronteirasAnos = [
  2006, 2007, 2008, 2009, 2014, 2018, 2019, 2020, 2021, 2022, 2023,
];

// Aprendiz CEDUCVR — for ($year = 2008; $year <= 2022; $year++) ->
// images/resultadoSejaAprendiz/jpg/{ano}.jpg.
const aprendizAnos = Array.from(
  { length: 2022 - 2008 + 1 },
  (_, i) => 2008 + i,
);

/** Galeria opcional por slug (mesma lógica condicional do PHP). */
export const galeriasPorSlug: Record<string, Galeria> = {
  "ser-companhia": {
    titulo: "Resultados do Programa Ser Companhia",
    imagens: serCompanhiaImagens.map((img) => `/images/serCompanhia/${img}`),
  },
  "ampliando-fronteiras": {
    titulo: "Resultados do Programa Ampliando Fronteiras",
    imagens: ampliandoFronteirasAnos.map(
      (ano) => `/images/ampliandoFronteiras/jpg/${ano}-1.jpg`,
    ),
  },
  "aprendiz-ceducvr": {
    titulo: "Resultados do Programa Aprendiz CEDUCVR",
    imagens: aprendizAnos.map(
      (ano) => `/images/resultadoSejaAprendiz/jpg/${ano}.jpg`,
    ),
  },
};
