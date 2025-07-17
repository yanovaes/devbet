import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginModal from './LoginModal';
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      
      {/* Conteúdo da Página (será trocado pelo Router) */}
      <main className="container mb-5">
        <Outlet />
      </main>

      <Footer />

      {/* MODALS E OFFCANVAS GLOBAIS */}
      
      {/* Modal Login */}
      <LoginModal />
      {/* Modal Alertas */}
      <div className="modal fade" id="modal-alertas" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modal-alertas-label" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modal-label">Notificações</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <ul className="list-group list-group-flush rounded-bottom">
                <li className="list-group-item d-flex flex-column py-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-trophy-fill fs-4"></i>
                    <div className="d-flex flex-column">
                      <span>Você ganhou uma aposta!</span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>Há 3 horas</span>
                    </div>
                  </div>
                  <Link className="text-info d-flex align-items-center ms-auto text-decoration-none" to="/apostas">
                    <span className="fw-semibold">Ir para aposta</span>
                    <i className="bi bi-chevron-bar-right"></i>
                  </Link>
                </li>
                <li className="list-group-item d-flex flex-column py-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-wallet-fill fs-4"></i>
                    <div className="d-flex flex-column">
                      <span>Depósito realizado</span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>Há 11 horas</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex flex-column py-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-gift-fill fs-4"></i>
                    <div className="d-flex flex-column">
                      <span>Aposta grátis na área!</span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>1 dia atrás</span>
                    </div>
                  </div>
                  <Link className="text-info d-flex align-items-center ms-auto text-decoration-none" to="/">
                    <span className="fw-semibold">Participar</span>
                    <i className="bi bi-chevron-bar-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;