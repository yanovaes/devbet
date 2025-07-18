import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../auth/AuthContext';
import { useBilheteStore } from '../store/useBilheteStore';

const NavBar = () => {
  const { usuario, logout } = useAuth();
  const { apostas } = useBilheteStore();

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand me-lg-5" to="/">
          <img src="/assets/images/devbet-logo-light.png" style={{ width: "150px" }} alt="Logo devbet" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Botão de navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-column flex-md-row" id="menu">
          <div className="navbar-nav mx-auto mb-3 mb-md-0">
            <NavLink className="nav-link nav-item" to="/">Jogos</NavLink>
            <NavLink className="nav-link nav-item" to="/apostas">Apostas</NavLink>
            <NavLink className="nav-link nav-item" to="/favoritos">Favoritos</NavLink>
            {apostas.length > 0 && (
              <NavLink className="nav-link nav-item" to="/bilhete">
                Bilhete <span className="badge rounded-pill bg-info text-dark">{apostas.length}</span>
              </NavLink>
            )}
            {usuario?.role === 'ADMIN' && (
              <NavLink className="nav-link nav-item" to="/admin">Admin</NavLink>
            )}
            <NavLink className="nav-link nav-item" to="/suporte">Suporte</NavLink>
          </div>
          <div className="navbar-nav gap-2 gap-lg-3 align-items-center">
            {usuario ? (
              <>
                <span className="navbar-text">Olá, {usuario.username}</span>
                <button onClick={logout} className="btn btn-outline-secondary btn-sm">Sair</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-info" type="button" data-bs-toggle="modal" data-bs-target="#modal-entrar">
                  Entrar
                </button>
                <Link to="/cadastro" className="btn btn-info">Cadastre-se</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;