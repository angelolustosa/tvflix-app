import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">TV Flix</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/#carouselSection">Destaques</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/series">Séries Populares</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/filmes">Filmes Populares</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pesquisa">Pesquisa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};