/**
 * Conteúdo completo dos posts do blog — capturado de cvr.org.br/blog-view.php.
 * Conteúdo hardcoded (sem banco), usado pela rota /blog/[slug].
 *
 * Metadados (titulo/autor/data/imagem) são reaproveitados do `postsHome`
 * em ./blog quando o slug bate; aqui adicionamos apenas `conteudoHtml`.
 *
 * Imagens do corpo / destaque originais ficam no servidor de produção
 * (admin-blog/uploads/...). Mantemos URLs absolutas para produção.
 */
import { postsHome, type PostPreview } from "./blog";

export type BlogPost = PostPreview & {
  /** HTML pronto para dangerouslySetInnerHTML — parágrafos, listas, headings. */
  conteudoHtml: string;
  /** Imagem de destaque original em produção (admin-blog/uploads). Opcional. */
  imagemDestaqueProd?: string;
};

const BASE_PROD = "https://cvr.org.br";

/** Localiza o preview (titulo/autor/data/imagem/resumo) pelo slug em blog.ts. */
function preview(slug: string): PostPreview {
  const p = postsHome.find((x) => x.slug === slug);
  if (!p) {
    throw new Error(`Slug sem preview correspondente em blog.ts: ${slug}`);
  }
  return p;
}

/** Conteúdo HTML por slug (corpo do artigo). */
const conteudoPorSlug: Record<string, string> = {
  // NOTE: a página de produção deste post traz apenas o resumo + um link
  // encurtado (https://surl.li/ssjvvh) como corpo — não há texto longo
  // publicado. Usamos o resumo como conteúdo mínimo. REVISAR quando o
  // artigo completo for publicado.
  "belo-horizonte-a-arte-de-crescer": `
<p>Você conhece o CEDUCVR? Confira a matéria abaixo e descubra como os nossos projetos transformam vidas e criam oportunidades para os jovens!!</p>
<p><a href="https://surl.li/ssjvvh" target="_blank" rel="noopener noreferrer">Assista à matéria completa</a></p>
`.trim(),

  "projeto-museu-para-juventude-1": `
<p>O Projeto Museu para Juventude tem como objetivo promover o acesso de adolescentes e jovens a experiências culturais e formativas, ampliando seu repertório, fortalecendo o vínculo com o patrimônio cultural e incentivando o protagonismo juvenil.</p>
<p>A iniciativa é financiada pela Multiplan e pela CEMIG, por meio do mecanismo do FIA/CMDCA/BH, contribuindo para a formação integral de jovens em situação de vulnerabilidade social.</p>
<h2>Formação técnica em audiovisual e comunicação</h2>
<p>Como parte do percurso formativo, os participantes realizam cursos nas áreas de audiovisual e produção de áudio, desenvolvendo competências técnicas e criativas:</p>
<ul>
<li>captação de imagens e produção de vídeos</li>
<li>edição audiovisual</li>
<li>construção de narrativas visuais</li>
<li>captação sonora e produção de podcast</li>
<li>roteirização e comunicação</li>
</ul>
<p>Essas atividades ampliam as possibilidades de expressão dos jovens e contribuem para o desenvolvimento de habilidades relevantes para o mundo do trabalho e para a vida em sociedade.</p>
<h2>Vivências culturais em museus</h2>
<p>O projeto contempla a realização de visitas a seis museus da região de Belo Horizonte, proporcionando aos participantes o contato direto com diferentes linguagens artísticas e contextos históricos.</p>
<p>As visitas são mediadas e articuladas com o conteúdo formativo, favorecendo:</p>
<ul>
<li>o desenvolvimento do olhar crítico</li>
<li>a valorização da cultura local</li>
<li>a conexão entre teoria e prática</li>
<li>o fortalecimento da identidade cultural</li>
</ul>
<h2>Impactos percebidos pelos participantes</h2>
<p>Os relatos dos jovens evidenciam contribuições significativas do projeto em suas trajetórias:</p>
<blockquote>"A importância do curso foi aprender mais sobre fotografia e como produzir um vídeo de qualidade. Isso agrega conhecimento e pode abrir novas oportunidades. Descobri um novo interesse que pode me ajudar no futuro." — Maria Eduarda, 16 anos</blockquote>
`.trim(),

  "trabalho-sobre-economia-solidaria-e-destaque-no-i-caces-com-participacao-do-ceducvr": `
<p>O artigo intitulado "Desafios e Perspectivas na Gestão de Empreendimentos de Economia Solidária na RMBH: Um Estudo sobre Práticas Gerenciais e Impactos do Perfil dos Empreendedores", de autoria de Soraya Cardoso Pongelupe Lopes, Matheus Lemos de Andrade, Osvaldo de Oliveira e Elenice Matos, diretora do CEDUC Virgilio Resi, foi publicado nos anais do I Congresso de Administração, Contabilidade, Economia e Sustentabilidade (I CACES). O evento aconteceu entre os dias 16 e 18 de maio de 2024.</p>
<p>A publicação representa um marco significativo para o CEDUCVR, reforçando sua atuação em rede e a parceria entre academia e terceiro setor na busca por soluções sustentáveis para a geração de trabalho e renda. O estudo também evidencia a relevância da metodologia ISONOMA: Práticas de Cooperativismo e Desenvolvimento Humano, desenvolvida pela instituição.</p>
<p>O artigo explora o crescimento da Economia Solidária como alternativa ao modelo econômico convencional no Brasil, destacando os desafios enfrentados pelos Empreendimentos de Economia Solidária (EES). O objetivo é compreender as características dos EES, avaliar suas práticas de gestão, e os impactos dos perfis dos empreendedores nessas práticas, além de categorizar os empreendimentos de acordo com sua maturidade gerencial.</p>
<p>A pesquisa utiliza uma abordagem quantitativa baseada em survey, com coleta de dados fundamentada na metodologia ISONOMA e apoiada pelo Balanced Scorecard. Os resultados apontam desafios importantes, como a sustentabilidade financeira dos empreendimentos.</p>
`.trim(),

  "metodologia-isonoma-do-ceducvr-conquista-pela-segunda-vez-certificacao-no-12o-premio-transforma": `
<p>A metodologia ISONOMA, desenvolvida pelo CEDUC Virgilio Resi, foi reconhecida pela 2ª vez com a certificação na 12ª edição do Prêmio Transforma, promovido pela Fundação Banco do Brasil de Tecnologia Social. O projeto, que se destaca pela promoção de trabalho e renda por meio de tecnologia social, recebeu um prêmio no valor de R$ 50 mil e teve participação de destaque na Semana Nacional de Tecnologia Social, realizada de 18 a 21 de julho, no Centro de Convenções Ulysses Guimarães, em Brasília (DF).</p>
<p>O evento reuniu especialistas para discutir temas relevantes para a sociedade, com o objetivo de contribuir para a (re)construção de uma estratégia nacional de desenvolvimento social. Na ocasião, a diretora do CEDUCVR, Elenice Matos, e a coordenadora do projeto de Economia Solidária ECOSOL, professora Soraya Pongelupe, apresentaram como a metodologia ISONOMA tem sido reaplicada desde 2018 em parceria com a Pró-Reitoria de Extensão (PROEX) da PUC Minas.</p>
<p>A ISONOMA, intitulada "Práticas de Cooperativismo e Desenvolvimento Humano", consiste em um conjunto de ações interligadas que visam promover o desenvolvimento inclusivo e sustentável de micro e pequenos empreendedores de baixa renda. Focada em comunidades tradicionais e periféricas, a tecnologia social apoia atividades como artesanato, agricultura familiar, ecoturismo de base comunitária, reciclagem e culinária, sempre de forma participativa e colaborativa.</p>
`.trim(),

  "ceduc-virgilio-resi-apoia-o-programa-trabalho-seguro-do-trt-mg-e-agradece-pela-acao-educativa": `
<p>No dia 4 de abril de 2022, o CEDUCVR teve a honra de receber o desembargador Marcelo Pertence, gestor regional do Programa Trabalho Seguro do Tribunal Regional do Trabalho da 3ª Região (TRT-MG). A visita fez parte das atividades do Abril Verde, mês dedicado à conscientização sobre a importância de políticas que promovam ambientes de trabalho mais seguros, prevenindo acidentes e doenças ocupacionais.</p>
<p>Cerca de 75 aprendizes, com idades entre 15 e 21 anos, participaram ativamente do evento, interagindo e adquirindo conhecimentos importantes sobre seus direitos trabalhistas. No encerramento da palestra, os participantes receberam kits do Programa Trabalho Seguro, que incluíam materiais informativos, bonés e canecas personalizadas do TRT-MG.</p>
<p>O CEDUC Virgílio Resi agradece imensamente ao TRT-MG, ao desembargador Marcelo Pertence e a toda a equipe do Programa Trabalho Seguro pela oportunidade de receber uma palestra tão relevante e educativa. A instituição reafirma seu compromisso com a formação integral de seus alunos, promovendo sempre ações que contribuam para a construção de uma sociedade mais justa e segura para todos.</p>
`.trim(),

  "projeto-jovens-protagonistas-promove-inclusao-de-mulheres-no-mercado-de-trabalho": `
<p>O <em>Projeto Jovens Protagonistas</em> está com <strong>inscrições abertas até o dia 6 de agosto de 2021</strong>, oferecendo uma oportunidade única para jovens mulheres que desejam se capacitar para o mercado de trabalho. A iniciativa busca promover a inclusão dessas mulheres por meio de workshops focados em autoconhecimento, gestão de carreira e inclusão digital.</p>
<p>Podem participar jovens que se identificam com o gênero feminino e que estejam interessadas em superar as barreiras de gênero através da profissionalização e do investimento no desenvolvimento pessoal.</p>
<p>O projeto é promovido pelo programa de voluntariado <em>Embaixadores do Bem</em>, com apoio da Anglo American, e realizado pelo <em>Centro de Educação para o Trabalho Virgilio Resi</em> (CEDUCVR), de Belo Horizonte, em parceria com a consultoria especializada em liderança e negócios AYO.</p>
`.trim(),
};

/** Imagem de destaque original em produção, por slug (admin-blog/uploads). */
const imagemDestaqueProdPorSlug: Record<string, string> = {
  "belo-horizonte-a-arte-de-crescer": `${BASE_PROD}/admin-blog/uploads/posts/6a2814e91781e_1781011689.png`,
  "projeto-museu-para-juventude-1": `${BASE_PROD}/admin-blog/uploads/posts/6a07586bc658b_1778866283.jpeg`,
  "trabalho-sobre-economia-solidaria-e-destaque-no-i-caces-com-participacao-do-ceducvr": `${BASE_PROD}/admin-blog/uploads/posts/69fdcae50e898_1778240229.jpg`,
  "metodologia-isonoma-do-ceducvr-conquista-pela-segunda-vez-certificacao-no-12o-premio-transforma": `${BASE_PROD}/admin-blog/uploads/posts/69fdcacd3e927_1778240205.jpg`,
  "ceduc-virgilio-resi-apoia-o-programa-trabalho-seguro-do-trt-mg-e-agradece-pela-acao-educativa": `${BASE_PROD}/admin-blog/uploads/posts/69fdcab707c57_1778240183.jpg`,
  "projeto-jovens-protagonistas-promove-inclusao-de-mulheres-no-mercado-de-trabalho": `${BASE_PROD}/admin-blog/uploads/posts/69fdcaa28dce0_1778240162.jpg`,
};

/** Mapa slug -> post completo (preview + conteúdo). */
export const blogPosts: Record<string, BlogPost> = Object.fromEntries(
  Object.keys(conteudoPorSlug).map((slug) => {
    const p = preview(slug);
    return [
      slug,
      {
        ...p,
        conteudoHtml: conteudoPorSlug[slug],
        imagemDestaqueProd: imagemDestaqueProdPorSlug[slug],
      } satisfies BlogPost,
    ];
  }),
);

/** Slugs disponíveis (para generateStaticParams). */
export const blogSlugs: string[] = Object.keys(blogPosts);

/** Busca um post pelo slug; undefined se não existir. */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}
