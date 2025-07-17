import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand me-lg-5" to="/">
          <img src="/assets/images/devbet-logo-light.png" style={{ width: "150px" }} alt="Logo devbet" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Botão de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-column flex-md-row" id="menu">
          <div className="navbar-nav mx-auto mb-3 mb-md-0">
            <NavLink className="nav-link nav-item" to="/">Jogos</NavLink>
            <NavLink className="nav-link nav-item" to="/apostas">Apostas</NavLink>
            <NavLink className="nav-link nav-item" to="/favoritos">Favoritos</NavLink> 
            <NavLink className="nav-link nav-item" to="/suporte">Suporte</NavLink>
          </div>
          <div className="navbar-nav gap-2 gap-lg-3">
            <a
              className="btn btn-outline-secondary position-relative"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#modal-alertas"
              id="btn-alertas"
            >
              Alertas
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">Alertas</span>
              </span>
            </a>
            <a
              className="btn btn-outline-info"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#modal-entrar"
              id="btn-entrar"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;