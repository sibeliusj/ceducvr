import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogSlugs, getBlogPost } from "@/content/blog-posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post não encontrado | Blog CEDUCVR" };
  }

  return {
    title: `${post.titulo} | Blog CEDUCVR`,
    description: post.resumo,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.titulo,
      description: post.resumo,
      url: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.resumo,
    image: post.imagemDestaqueProd ?? post.imagem,
    datePublished: post.data,
    author: {
      "@type": "Organization",
      name: "CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
      url: "https://cvr.org.br",
    },
    publisher: {
      "@type": "Organization",
      name: "CEDUCVR - Centro de Educação Para o Trabalho Virgílio Resi",
      url: "https://cvr.org.br",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cvr.org.br/blog/${slug}`,
    },
  };

  return (
    <>
      <Script
        id="blogposting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* Home Section / título do post */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        id="home"
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-10">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="hs-line-7 mb-20 mb-xs-10">{post.titulo}</h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                  <i className="fa fa-clock" /> {post.data}
                  <span className="separator">&nbsp;</span>
                  <i className="fa fa-user" /> {post.autor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section / corpo do post */}
      <section className="page-section">
        <div className="container relative">
          <div className="row">
            {/* Conteúdo */}
            <div className="col-md-8 offset-lg-1 mb-sm-80 order-first order-md-last">
              <div className="blog-item">
                <div className="blog-item-data">
                  <span>
                    <i className="fa fa-clock" /> {post.data}
                  </span>
                  <span className="separator">&nbsp;</span>
                  <span>
                    <i className="fa fa-user" /> {post.autor}
                  </span>
                </div>

                {/* Imagem destacada */}
                <div className="blog-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imagemDestaqueProd ?? post.imagem}
                    alt={post.titulo}
                  />
                </div>

                {/* Corpo do artigo */}
                <div
                  className="blog-item-body"
                  dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
                />

                <div className="blog-item-foot mt-40">
                  <Link
                    href="/blog"
                    className="btn btn-mod btn-round btn-small"
                  >
                    <i className="fa fa-arrow-left" /> Voltar ao Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3 mt-10">
              <div className="widget">
                <h3 className="widget-title">Compartilhar</h3>
                <div className="widget-body">
                  <div className="tags">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://cvr.org.br/blog/${slug}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `https://cvr.org.br/blog/${slug}`,
                      )}&text=${encodeURIComponent(post.titulo)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        `https://cvr.org.br/blog/${slug}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `${post.titulo} - https://cvr.org.br/blog/${slug}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="widget">
                <h3 className="widget-title">Navegação</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    <li>
                      <Link href="/blog" title="Voltar ao Blog">
                        Voltar ao Blog
                      </Link>
                      <small />
                    </li>
                    <li>
                      <Link href="/" title="Página inicial">
                        Página inicial
                      </Link>
                      <small />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
