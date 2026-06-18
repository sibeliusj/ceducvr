/**
 * Conteúdo HARDCODED da página "Quem Somos / CEDUCVR" — capturado do site em
 * produção (cvr.org.br/ceducvr.php) e dos seeds do MySQL
 * (admin-blog/database_ceducvr.sql + inserir_conteudo_ceducvr.sql).
 *
 * Substitui o conteúdo que hoje vem das tabelas ceducvr_hero / ceducvr_tabs /
 * ceducvr_secoes / ceducvr_linha_tempo. Quando (e se) o conteúdo voltar a ser
 * editável pelo admin (Supabase), estes objetos viram chamadas a lib/queries/*.
 *
 * Estrutura de renderização (igual ao ceducvr.php):
 * - Cada aba é um Bootstrap tab (data-bs-toggle="tab"); o all.js global cuida da
 *   interação.
 * - As seções de conteúdo das abas "Nossa história", "Quem nos inspira" e
 *   "O que nos move" são HTML rico vindo do banco (estilos/classes inline), por
 *   isso vão como string e são injetadas com dangerouslySetInnerHTML — exatamente
 *   como o PHP fazia com `echo $secao['conteudo']`.
 * - A aba "Linha do tempo" NÃO usa seção do banco: o PHP faz
 *   `include 'linhadotempo.php'`, que gera tabs aninhadas por ano (2006–2024)
 *   a partir do fallback hardcoded. Reproduzimos esses anos aqui.
 */

export const hero = {
  titulo: "CEDUCVR",
  subtitulo: "",
  imagem: "/images/contrateumaprendiz.jpg",
};

export type Aba = {
  identificador: string;
  titulo: string;
};

// Ordem das abas (ceducvr_tabs, ativo=1, ORDER BY ordem).
export const abas: Aba[] = [
  { identificador: "nossa-historia", titulo: "Nossa história" },
  { identificador: "linha-do-tempo", titulo: "Linha do tempo" },
  { identificador: "quem-nos-inspira", titulo: "Quem nos inspira" },
  { identificador: "o-que-nos-move", titulo: "O que nos move" },
];

export type Secao = {
  titulo: string;
  /** HTML bruto vindo do banco (renderizado com dangerouslySetInnerHTML). */
  conteudo: string;
  imagem: string | null;
  posicaoImagem: "esquerda" | "direita";
};

// ---------------------------------------------------------------------------
// Aba "Nossa história" (tab_id = 1)
// ---------------------------------------------------------------------------
export const nossaHistoria: Secao[] = [
  {
    titulo: "CEDUCVR sonho que transforma Vidas",
    conteudo:
      "O CEDUC Virgilio Resi nasceu para enfrentar um dos maiores desafios do Brasil: a desocupação juvenil. Esta iniciativa é mais que um projeto; é o sonho vivido por Júlia Maria da Silva e Elenice de Oliveira Matos, cujo desejo era o de ser companhia para os jovens em seu encontro com o mundo do trabalho. Com paixão e dedicação, criaram uma instituição que se tornou um verdadeiro farol de educação para o trabalho, transformando vidas e abrindo portas para um futuro promissor. Venha conhecer a história de transformação e fazer parte dessa jornada de sucesso!",
    imagem:
      "https://www.cvr.org.br/wp-content/uploads/2023/04/historia-3-1024x683.jpg",
    posicaoImagem: "esquerda",
  },
  {
    titulo: "PRIMEIROS PASSOS: EDUCAR TRABALHANDO",
    conteudo:
      'Os primeiros passos da instituição foram dados na década de 1990, no setor de educação profissional da CDM, onde Júlia e Elenice atuavam como colaboradoras dedicadas. Foi nesse ambiente que nasceu o inovador projeto "Educar Trabalhando", financiado pela União Europeia. Com o objetivo de oferecer aos jovens a oportunidade de recuperar os estudos por meio do Supletivo, oferecer Formação Profissional e abrir as portas para as primeiras oportunidades de emprego. Cada conquista foi um passo em direção a um futuro brilhante para inúmeros jovens.',
    imagem:
      "https://www.cvr.org.br/wp-content/uploads/2023/04/historia-1-1024x678.jpg",
    posicaoImagem: "direita",
  },
  {
    titulo: "Referência em Profissionalização",
    conteudo:
      'Nos anos 2000, o projeto "Educar Trabalhando" ganhou destaque e se tornou uma referência em educação profissionalizante em Minas Gerais. O reconhecimento crescente dos setores público e privado, combinado com a necessidade de promover uma relação saudável com o trabalho – que transcendesse a visão culturalmente enraizada de sacrifício, dor e sobrevivência – impulsionou a criação do CEDUCVR. Assim, nasceu uma instituição comprometida em transformar o trabalho em esperança e os sonhos das pessoas em realidade, oferecendo não apenas formação profissional, mas também uma nova perspectiva sobre o valor e o significado do trabalho.',
    imagem: "/images/ref_01.jpg",
    posicaoImagem: "esquerda",
  },
];

// ---------------------------------------------------------------------------
// Aba "Linha do tempo" (include linhadotempo.php — tabs aninhadas por ano).
// Cada ano é um tab Bootstrap aninhado; os itens viram <li>.
// ---------------------------------------------------------------------------
export type AnoLinhaTempo = {
  ano: number;
  itens: string[];
};

export const linhaDoTempo: AnoLinhaTempo[] = [
  {
    ano: 2006,
    itens: [
      'Parceria CDM: cursos de formação profissional nas áreas administrativas e de atendimento a Clientes para jovens do projeto "Germinar".',
      'Parceria AVSI: curso de qualificação profissional em corte e costura para mulheres atendidas no projeto "Árvore da Vida".',
    ],
  },
  {
    ano: 2007,
    itens: [
      "Parceria Prefeitura Municipal de Contagem: capacitação de jovens nas áreas administrativas, comércio, Telemarketing, produção de cosméticos e material de limpeza.",
      "Parceria Prefeitura Municipal de Belo Horizonte: capacitação de jovens e adultos nas áreas administrativas, comércio, serviço a pessoa, gastronomia, construção civil.",
      "Parceria Embaixada da Itália: capacitação de jovens em informática e serviços administrativos.",
      "Prêmio Fundo Itaú Excelência Social na categoria Educação para o Trabalho.",
    ],
  },
  {
    ano: 2008,
    itens: [
      "Implantação do Programa Jovem Aprendiz: trabalho protegido, formação profissional e prática na empresa.",
      'Início parceria SEDESE: projeto "Reciclando Oportunidades para Criança" em 10 municípios do Norte/MG – retirada do trabalho infantil em lixões, capacitação catadores em cooperativismo, capacitação técnicos da Rede Socioassistencial para montagem de Planos Municipais de Redução do Trabalho Infantil.',
      "Início parceria BDMG/Cultural: capacitação de adolescentes em teatro com produção e exibição de peças teatrais.",
    ],
  },
  {
    ano: 2009,
    itens: [
      'Parceria SEDESE: projeto "FortaleSer", reaplicação metodologia do projeto "Reciclando Oportunidades para Criança" em mais 09 municípios do Norte/MG.',
      "Parceria SEDESE/FAT: capacitação de jovens e adultos em cursos profissionalizantes nas áreas Administrativa, Comércio, Construção Civil, Higiene e Limpeza, Gastronomia, Telemarketing, Serviço à Pessoa.",
    ],
  },
  {
    ano: 2010,
    itens: [
      'Parceria Região Lombardia/Itália: intercâmbio pedagógico e readaptação da metodologia "Educar Trabalhando" na formação de jovens aprendizes.',
    ],
  },
  {
    ano: 2011,
    itens: [
      'Início parceria Fundação ABRINQ: projeto "Educar para Aprender", formação de adolescentes aprendizes.',
    ],
  },
  {
    ano: 2012,
    itens: [
      'Início parceria União Europeia: projeto "Reciclando Oportunidade, Gerando Trabalho e Renda" em 17 municípios do Norte/MG – incubação de empreendimentos econômicos solidários liderados por mulheres artesãs.',
      "II Prêmio Fundo Itaú Excelência Social na categoria Educação para o Trabalho.",
      "Parceria CMDCA/FMDCA-BH: capacitar adolescentes para acessar Programas de Aprendizagem.",
      "Parceria BVSA (Bolsa de Valores Socialmente Ambiental): capacitar adolescentes aprendizes.",
    ],
  },
  {
    ano: 2013,
    itens: [
      "Início parceria Companhia das Obras Sociais Italiana: intercâmbio de experiência com obras italianas na capacitação de jovens.",
      "CEDUCVR assume Suplência na Comissão do Socioeducativo do CMDCA/BH.",
    ],
  },
  {
    ano: 2014,
    itens: [
      'Parceria CMDCA/FMCDA-BH: projeto "Oportunizando Cultura para Ampliar Horizontes", promoção Festival de Música Jovens Talentos.',
      'Parceria Instituto Minas Pela Paz/TJMG: projeto "Novo Horizonte, Novas Oportunidades", formação humana e planos de desenvolvimento de vida para mulheres detentas.',
      "Prêmio Banco Santander: entidade referência na Educação de adolescentes para o trabalho.",
    ],
  },
  {
    ano: 2015,
    itens: [
      "Concessão do Certificado de Entidade Beneficente de Assistência Social (CEBAS).",
      'Parceria CMDCA/FMDCA-BH: projeto "Adolescente, Cultura e Ação", promoção atividades socioculturais para aprendizes.',
      "Programa Jovem Aprendiz na PUCMINAS: projeto extensão universitária.",
      "Inserção da Semana Cultural nos conteúdos pedagógicos da aprendizagem.",
    ],
  },
  {
    ano: 2016,
    itens: [
      "Parceria AVSI/TJMG: formação humana para detentos da Associação de Proteção e Assistência aos Condenados (APAC).",
      "Parceria Instituto Renner: assessoria a mulheres artesãs em gestão produtiva, financeira e mercadológica.",
      "CEDUCVR assume presidência do CMDCA/BH.",
    ],
  },
  {
    ano: 2017,
    itens: [
      "Parceria Systemanalysis Programmentwicklung (SAP): voluntariado internacional.",
      "Parceria SEDESE: assessoria a mulheres artesãs em gestão produtiva, financeira e mercadológica.",
      'Lançamento da Campanha financiamento coletivo "Artes e Faces do Norte de Minas".',
      'Metodologia ISONOMA "Técnicas Cooperativas e Desenvolvimento Humano" certificada como Tecnologia Social pela FBB.',
      "Início de parceria com o Diário do Comércio.",
    ],
  },
  {
    ano: 2018,
    itens: [
      "Parceria Região Trento/Itália: promoção do II Festival de Jovens Talentos e capacitação de aprendizes.",
      "Concessão do Selo BH Sem Racismo.",
      "Diploma de Honra concedido pela Câmara Municipal de Belo Horizonte.",
    ],
  },
  {
    ano: 2019,
    itens: [
      "Parceria INDEC/BDMG: capacitação de jovens em competências comunicativas.",
      "Parceria Brazil Foundation: colaboração montagem matéria didático para a plataforma on-line em construção.",
      "Parceria AVSI: formação humana para detentos nas APAC's/MG.",
      "Promoção Intercâmbio cultural entre adolescentes italianos e brasileiros.",
    ],
  },
  {
    ano: 2020,
    itens: [
      "Início parceria MPT: projeto Descubra, formação humana e tecnóloga de produção audiovisual para jovens egressos de medidas socioeducativas, acolhimento institucional e resgatados do trabalho infantil.",
      "Parceria UBER: promoção de atividades socioculturais e de acesso à cultura para jovens aprendizes.",
      "Parceria CEMIG: promoção Campanha Natal Solidário que alcança 09 Creches.",
    ],
  },
  {
    ano: 2021,
    itens: [
      'Realização exposição "ECA: Vozes que ecoam por Cidadania" produzida pelos aprendizes do projeto "Direitos em Foco".',
      "Parceria MPT: projeto Defina-se, pré-qualificação e ressocialização adolescentes egressos de medidas socioeducativas, acolhimento institucional, regatados do trabalho infantil.",
      'Metodologia "Educar Trabalhando" vencedora do 11º Prêmio de Tecnologia Social, Categoria Educação para o Futuro, pela Fundação BB.',
      "Realização Webinário Juventude, Trabalho e Cidadania apresentação impacto da aprendizagem na vida dos aprendizes.",
      "Realização Webinário Cultura e Cidadania com apresentação de performance culturais de jovens aprendizes.",
      "CEDUC/VR Digital: informatização da formação profissional dos aprendizes na plataforma on-line.",
    ],
  },
  {
    ano: 2022,
    itens: [
      "Parceria MPT: pré-qualificação e ressocialização de adolescentes egressos de medidas socioeducativas, acolhimento institucional, regatados do trabalho infantil.",
      "Parceria CMCDA/FMDCA-BH: oficinas e Workshop sobre autocuidado, formação técnica em produção de vídeos, promoção Semana do Autocuidado.",
      "Parceria CMDCA/MPT: capacitação de jovem em formação humana e empreendedora, qualificação profissional em eletricista e gastronomia.",
    ],
  },
  {
    ano: 2023,
    itens: [
      'Parceria com o Comitê Gestor, composto pela AVABRUM, DPU, MPT e TRT-MG, para execução do projeto "Trilhas e Rotas".',
      "Parceria com o Centro Universitário Estácio de Belo Horizonte – Campus Prado, para execução do módulo de aprendizagem do Programa Aprendiz CEDUCVR.",
      'Parceria com a Associazione Don Virgilio Resi (Itália) para o desenvolvimento do projeto "Oportunizando Cultura".',
    ],
  },
  {
    ano: 2024,
    itens: [
      'Parceria com a PROVIDENS – Ação Social Arquidiocesana, para execução do percurso "Formação Humana e Empregabilidade", voltado a jovens residentes no bairro Taquaril.',
      'Parceria com a PUC Minas para realização do projeto de extensão "Atitude com a Juventude", executado com aprendizes do CEDUCVR.',
      "Metodologia ISONOMA – Prática de Cooperativismo e Desenvolvimento Humano, finalista no Prêmio de Metodologias Certificadas da Fundação Banco do Brasil.",
      'Aprovação do projeto "É Tempo de se Cuidar" pelo Fundo Municipal dos Direitos da Criança e do Adolescente de Belo Horizonte (FMDCA-BH).',
    ],
  },
];

// ---------------------------------------------------------------------------
// Aba "Quem nos inspira" (tab_id = 3) — seções com HTML rico (inline styles).
// ---------------------------------------------------------------------------
export const quemNosInspira: Secao[] = [
  {
    titulo: "Padre Virgilio Resi",
    conteudo: `<section class="page-section bg-gradient-primary text-white" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 80px 0;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="text-center">
                    <img src="https://www.cvr.org.br/wp-content/uploads/2023/04/PADRE-VIRGILIO-2-1.png"
                         alt="Padre Virgilio Resi"
                         class="img-fluid rounded-circle shadow-lg"
                         style="max-width: 350px; border: 5px solid rgba(255,255,255,0.3);">
                </div>
            </div>
            <div class="col-lg-6">
                <h2 class="display-4 font-weight-bold mb-4" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3); color: white;">
                    Padre Virgilio Resi
                </h2>
                <div class="bg-white bg-opacity-10 p-4 rounded shadow">
                    <p class="mb-3" style="font-size: 1.1rem; line-height: 1.7; color: white;">
                        A resposta a essa pergunta exige de nós uma profunda reflexão, não apenas sobre quem somos ou o que queremos ser, mas sobre o que nos motiva e qual é nossa missão e propósito neste mundo. Essa reflexão é uma entre tantas outras feitas por Padre Virgilio às fundadoras de nossa instituição.
                    </p>
                    <p class="mb-0" style="font-size: 1.1rem; line-height: 1.7; color: white;">
                        Uma vida dedicada ao amor de Cristo e à transformação de vidas que inspirou a criação do CEDUCVR.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    imagem: null,
    posicaoImagem: "esquerda",
  },
  {
    titulo: "Uma História de Fé e Propósito",
    conteudo: `<div class="row">
    <div class="col-md-6 mb-4">
        <div class="h-100 p-4" style="background: linear-gradient(45deg, #f8f9fa, #e9ecef); border-radius: 15px;">
            <h4 style="color: #667eea; margin-bottom: 20px;">
                <i class="fas fa-map-marker-alt me-2"></i>Origens
            </h4>
            <p style="line-height: 1.7; color: #555;">
                Um dos responsáveis pela difusão e implantação do Movimento Comunhão e Libertação no Brasil, Virgilio Resi foi um padre católico italiano, nascido em San Piero in Bagno (Província de Forli), na Itália, no dia 6 de julho de 1951.
            </p>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="h-100 p-4" style="background: linear-gradient(45deg, #e3f2fd, #bbdefb); border-radius: 15px;">
            <h4 style="color: #1976d2; margin-bottom: 20px;">
                <i class="fas fa-heart me-2"></i>Missão no Brasil
            </h4>
            <p style="line-height: 1.7; color: #555;">
                Ele chegou ao Brasil na década de 1980 e, aqui, dedicou sua vida a levar o amor de Cristo por onde passasse, tocando e transformando muitas vidas.
            </p>
        </div>
    </div>
</div>

<div class="text-center my-5">
    <div class="bg-light p-4 rounded" style="border-left: 5px solid #667eea;">
        <p style="line-height: 1.8; color: #333; font-size: 1.1rem; margin-bottom: 0;">
            Em 2001, Pe. Virgilio travou uma batalha contra o câncer e teve como armas a solidariedade, a fé, a leveza, o desprendimento, o amor ao próximo e a clareza sobre o seu propósito. Virgilio veio a falecer em 12 de outubro de 2002, tendo sua vida e obra tocado e transformado muitas outras vidas, inspirando iniciativas como o CEDUCVR.
        </p>
    </div>
</div>`,
    imagem: null,
    posicaoImagem: "esquerda",
  },
  {
    titulo: "Conheça Sua História",
    conteudo: `<div class="row align-items-center">
    <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="text-center">
            <img src="https://www.cvr.org.br/wp-content/uploads/2023/08/Imagem-da-Capa-da-Biografia-do-Padre-Virgilio.png"
                 alt="Capa da Biografia do Padre Virgilio"
                 class="img-fluid rounded shadow-lg"
                 style="max-width: 300px;">
        </div>
    </div>
    <div class="col-lg-6">
        <h3 class="display-5 font-weight-bold mb-4">Conheça Sua História</h3>
        <p class="lead mb-4" style="font-size: 1.2rem; line-height: 1.6;">
            Para conhecer mais profundamente a história de Pe. Virgilio, baixe gratuitamente sua biografia:
        </p>
        <div class="bg-light p-4 rounded mb-4">
            <h4 class="mb-2">"Quer que eu fique, quer que eu vá… Tudo é para a glória de Cristo"</h4>
            <p class="mb-0">
                Escrita por Durval Cordas e Marina Massimi<br>
                Editora Passos
            </p>
        </div>
        <button class="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
                onclick="window.open('#', '_blank')">
            <i class="fas fa-download me-2"></i>
            Download Gratuito
        </button>
    </div>
</div>`,
    imagem: null,
    posicaoImagem: "esquerda",
  },
];

// ---------------------------------------------------------------------------
// Aba "O que nos move" (tab_id = 4).
// Os seeds inserem DUAS seções nesta aba (uma no database_ceducvr.sql e outra
// no inserir_conteudo_ceducvr.sql) — ambas com o mesmo texto. Em produção as
// duas são renderizadas; preservamos esse comportamento. O \n\n vira parágrafos.
// ---------------------------------------------------------------------------
const oQueNosMoveTexto =
  "Ser companhia para a pessoa em seu encontro com o mundo do trabalho significa para nós assumir a missão e o compromisso de desenvolver nas pessoas uma relação saudável com o trabalho.\n\nUma relação que não se limite à experiência enraizada culturalmente ligada ao sacrifício, à dor e à necessidade de sobrevivência. Mas que o trabalho seja uma fonte de felicidade e prosperidade, que represente a oportunidade de autorrealização e de contribuição para a jornada do outro, de uma organização e da sociedade como um todo.\n\nPor essa razão, buscamos construir junto aos nossos públicos uma solução em educação que seja para a vida toda, pois o que nos move é seguir transformando vidas.";

export const oQueNosMove: Secao[] = [
  {
    titulo: "O que nos move",
    conteudo: oQueNosMoveTexto,
    imagem:
      "https://www.cvr.org.br/wp-content/uploads/2023/04/11.jpg-1024x658.png",
    posicaoImagem: "esquerda",
  },
  {
    titulo: "Ser Companhia",
    conteudo: oQueNosMoveTexto,
    imagem:
      "https://www.cvr.org.br/wp-content/uploads/2023/04/11.jpg-1024x658.png",
    posicaoImagem: "esquerda",
  },
];
