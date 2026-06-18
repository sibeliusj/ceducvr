/**
 * Página temporária de verificação da Fase 1.
 * Confirma que o CSS do template (Bootstrap + Rhythm) carregou.
 * Será substituída pela home real na Fase 3.
 */
export default function Home() {
  return (
    <main className="container" style={{ padding: "60px 15px" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="text-uppercase">CEDUCVR — Next.js</h1>
          <p className="lead">
            Fundação do projeto (Fase 1) pronta. O CSS do template está
            carregado — esta página usa classes do Bootstrap/Rhythm.
          </p>
          <a href="#" className="btn btn-primary">
            Botão de teste (estilo do template)
          </a>
        </div>
      </div>
    </main>
  );
}
