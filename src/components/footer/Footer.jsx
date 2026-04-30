import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Logo / descrição */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-brand">TV Flix</h5>
            <p className="footer-text">
              Explore filmes e séries populares, descubra novidades e encontre
              seu próximo favorito.
            </p>
          </div>

          {/* Navegação */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Navegação</h6>
            <ul className="footer-list">
              <li><a href="#carouselSection">Destaques</a></li>
              <li><a href="/series">Séries</a></li>
              <li><a href="/filmes">Filmes</a></li>
              <li><a href="/pesquisa">Pesquisar</a></li>
            </ul>
          </div>

          {/* Conteúdo */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Conteúdo</h6>
            <ul className="footer-list">
              <li><a href="#">Populares</a></li>
              <li><a href="#">Mais votados</a></li>
              <li><a href="#">Lançamentos</a></li>
              <li><a href="#">Em alta</a></li>
            </ul>
          </div>

          {/* Contato / Social */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Contato</h6>
            <ul className="footer-list">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="footer-bottom text-center">
          <p>© {new Date().getFullYear()} TV Flix • Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};