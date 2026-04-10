import React from 'react'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">TV Flix</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#carouselSection">Destaques</a></li>
                    <li class="nav-item"><a class="nav-link" href="series.html">Séries Populares</a></li>
                    <li class="nav-item"><a class="nav-link" href="filmes.html">Filmes Populares</a></li>
                    <li class="nav-item"><a class="nav-link" href="pesquisa.html">Pesquisa</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
