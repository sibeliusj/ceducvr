import type { Metadata } from "next";
import Link from "next/link";
import { postsHome } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog CEDUCVR | Notícias e Artigos sobre Educação Profissional",
  description:
    "Acompanhe as últimas notícias, artigos e insights sobre educação profissional, mercado de trabalho, jovem aprendiz e responsabilidade social no blog do CEDUCVR.",
  keywords:
    "blog educação, notícias aprendizagem, artigos profissionais, mercado de trabalho, dicas carreira",
  alternates: { canonical: "/blog" },
};

const categorias = ["Notícias", "Eventos", "Projetos", "Educação", "Comunidade"];
const tags = ["jovem", "aprendiz", "transparência", "estudantes", "empresas", "educação", "trabalho", "projetos"];

export default function BlogPage() {
  const posts = postsHome;

  return (
    <>
      {/* Home Section */}
      <section
        className="small-section bg-dark-alfa-50 bg-scroll light-content"
        data-background="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        id="home"
      >
        <div className="container relative pt-70">
          <div className="row">
            <div className="col-md-8">
              <div className="wow fadeInUpShort" data-wow-delay=".1s">
                <br /><br /><br /><br /><br />
                <h1 className="hs-line-7 mb-20 mb-xs-10">Blog</h1>
              </div>
              <div className="wow fadeInUpShort" data-wow-delay=".2s">
                <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">Fique por dentro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="page-section">
        <div className="container relative">
          <div className="row">
            {/* Content */}
            <div className="col-md-8 offset-lg-1 mb-sm-80 order-first order-md-last">
              {posts.map((post) => (
                <div key={post.slug} className="blog-item">
                  <h2 className="blog-item-title">
                    <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                  </h2>
                  <div className="blog-item-data">
                    <a href="#"><i className="fa fa-clock" /> {post.data}</a>
                    <span className="separator">&nbsp;</span>
                    <a href="#"><i className="fa fa-user" /> {post.autor}</a>
                  </div>
                  <div className="blog-media">
                    <Link href={`/blog/${post.slug}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.imagem} alt={post.titulo} />
                    </Link>
                  </div>
                  <div className="blog-item-body">
                    <p>{post.resumo}</p>
                  </div>
                  <div className="blog-item-foot">
                    <Link href={`/blog/${post.slug}`} className="btn btn-mod btn-round btn-small">
                      Ler mais
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3 mt-10">
              {/* Categorias */}
              <div className="widget">
                <h3 className="widget-title">Categorias</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    {categorias.map((cat) => (
                      <li key={cat}>
                        <a href="#" title={cat}>{cat}</a>
                        <small />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="widget">
                <h3 className="widget-title">Tags</h3>
                <div className="widget-body">
                  <div className="tags">
                    {tags.map((t) => (
                      <a key={t} href="#">{t}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Últimos posts */}
              <div className="widget">
                <h3 className="widget-title">Últimos posts</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-posts">
                    {posts.slice(0, 5).map((post) => (
                      <li key={post.slug} className="clearfix">
                        <Link href={`/blog/${post.slug}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={post.imagem} alt={post.titulo} width={100} className="widget-posts-img" />
                        </Link>
                        <div className="widget-posts-descr">
                          <Link href={`/blog/${post.slug}`} title={post.titulo}>
                            {post.titulo.length > 50 ? post.titulo.slice(0, 50) + "..." : post.titulo}
                          </Link>
                          {post.autor} • {post.data}
                        </div>
                      </li>
                    ))}
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
