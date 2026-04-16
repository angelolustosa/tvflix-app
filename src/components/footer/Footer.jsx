import React from 'react'

export const Footer = () => {
  return (
    <footer class="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

      {/* Esquerda */}
      <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
        <span class="text-footer small">
          © 2026 TV Flix
        </span>
      </div>

      {/* Centro (LOGO) */}
      <div class="col-md-4 text-center">
        <a class="navbar-brand" href="index.html">TV Flix</a>
      </div>

      {/* Direita */}
      <ul class="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-footer" href="#"><i class="fab fa-github"></i></a>
        </li>
        <li class="ms-3">
          <a class="text-footer" href="#"><i class="fab fa-linkedin"></i></a>
        </li>
        <li class="ms-3">
          <a class="text-footer" href="#"><i class="fab fa-instagram"></i></a>
        </li>
      </ul>

    </footer>
  )
}
