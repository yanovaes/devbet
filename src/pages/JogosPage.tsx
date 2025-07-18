import React, { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { fetchEventos, fetchEventosPorEsporte } from '../services/eventoService';
import EventoItem from '../components/EventoItem';
import Paginacao from '../components/Paginacao';
import CriarApostaOffcanvas from '../components/CriarApostaOffcanvas';
import PromocoesOffcanvas from '../components/PromocoesOffcanvas';
import DepositarOffcanvas from '../components/DepositarOffcanvas';
import { useAuth } from '../auth/AuthContext';

const JogosPage = () => {
  const { usuario } = useAuth();
  const [pagina, setPagina] = useState(0);
  const [filtroEsporteId, setFiltroEsporteId] = useState<number | null>(null);
  const tamanhoPagina = 10;

  const { data: paginaDeEventos, isLoading, isError, error } = useQuery({
    queryKey: ['eventos', filtroEsporteId, pagina],
    queryFn: () => filtroEsporteId 
        ? fetchEventosPorEsporte(filtroEsporteId, pagina, tamanhoPagina) 
        : fetchEventos(pagina, tamanhoPagina),
    placeholderData: keepPreviousData,
  });

  const handleFiltroChange = (idEsporte: number | null) => {
    setPagina(0);
    setFiltroEsporteId(idEsporte);
  };
  
  return (
    <>
      <div id="carousel-jogos" className="carousel slide mb-5 rounded-3 overflow-hidden">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active"> <img src="/assets/images/img-carousel-1.jpg" className="d-block w-100" alt="Destaque 1" /> </div>
            <div className="carousel-item"> <img src="/assets/images/img-carousel-2.jpg" className="d-block w-100" alt="Destaque 2" /> </div>
            <div className="carousel-item"> <img src="/assets/images/img-carousel-3.jpg" className="d-block w-100" alt="Destaque 3" /> </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-jogos" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel-jogos" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>

      {usuario?.role === 'ADMIN' && (
        <div className="text-center mb-4">
          <Link to="/admin" className="btn btn-success">
            <i className="bi bi-plus-circle-fill me-2"></i>
            Gerenciar Eventos
          </Link>
        </div>
      )}

      <div className="d-flex justify-content-center gap-2 mb-4">
        <button onClick={() => handleFiltroChange(null)} className={`btn ${!filtroEsporteId ? 'btn-info' : 'btn-outline-info'}`}>Todos</button>
        <button onClick={() => handleFiltroChange(1)} className={`btn ${filtroEsporteId === 1 ? 'btn-info' : 'btn-outline-info'}`}>Futebol</button>
        <button onClick={() => handleFiltroChange(2)} className={`btn ${filtroEsporteId === 2 ? 'btn-info' : 'btn-outline-info'}`}>Basquete</button>
      </div>

      <div className="mb-5">
        <h4 className="mb-3 text-info">EVENTOS</h4>
        {isLoading && <div className="text-center"><div className="spinner-border text-info" role="status"><span className="visually-hidden">Carregando...</span></div></div>}
        {isError && <p className="text-center text-danger">Erro ao carregar eventos: {error.message}</p>}
        
        {paginaDeEventos && paginaDeEventos.content.length > 0 && (
          <>
            <ul className="list-group list-group-flush rounded-1">
              {paginaDeEventos.content.map(evento => <EventoItem key={evento.id} evento={evento} />)}
            </ul>
            <Paginacao 
              pagina={pagina} 
              totalPaginas={paginaDeEventos.totalPages} 
              onPageChange={setPagina} 
            />
          </>
        )}

        {paginaDeEventos && paginaDeEventos.content.length === 0 && (
            <p className="text-muted text-center">Nenhum evento encontrado.</p>
        )}
      </div>
       {/* Seção Cards de Ação */}
      <div className="row">
          <div className="col-lg-4 col-md-6">
              <div className="card mb-3 md-mb-0">
                  <img src="/assets/images/img-card-1.jpg" className="card-img-top" alt="Criar aposta" />
                  <div className="card-body">
                      <h5 className="card-title">Criar aposta</h5>
                      <p className="card-text">Combine múltiplas seleções de diferentes jogos</p>
                      <a className="btn btn-info" data-bs-toggle="offcanvas" href="#offcanvasCriar" role="button" aria-controls="offcanvasCriar">Criar</a>
            </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6">
              <div className="card mb-3 md-mb-0">
                  <img src="/assets/images/img-card-2.jpg" className="card-img-top" alt="Promoções" />
                  <div className="card-body">
                      <h5 className="card-title">Promoções</h5>
                      <p className="card-text">Participe de promoções e concorra a milhares de prêmios</p>
                      <a className="btn btn-info" data-bs-toggle="offcanvas" href="#offcanvasParticipar" role="button" aria-controls="offcanvasParticipar">Participar</a>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6">
              <div className="card mb-3 md-mb-0">
                  <img src="/assets/images/img-card-3.jpg" className="card-img-top" alt="Depositar" />
                  <div className="card-body">
                      <h5 className="card-title">Depositar</h5>
                      <p className="card-text">
                        Faça seu depósito usando
                        <a href="#" onClick={(e) => e.preventDefault()} data-bs-trigger="hover" data-bs-toggle="popover" title="Outras formas de pagamento" data-bs-placement="bottom" data-bs-html="true" data-bs-content="Há outras formas de pagamento, como: cartões de débito, crédito, débito automático, TED e criptomoedas." style={{ textDecoration: 'none' }}> Pix ou boleto</a>.
                      </p>
                      <a className="btn btn-info" data-bs-toggle="offcanvas" href="#offcanvasDepositar" role="button" aria-controls="offcanvasDepositar">Depositar</a>
                  </div>
              </div>
          </div>
      </div>

      {/* Offcanvas e Toasts */}
      <CriarApostaOffcanvas />
     <PromocoesOffcanvas />
      <DepositarOffcanvas />
      
<div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="add-Bet-Toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                  <h5 className="mb-0 text-center">Aposta adicionada!</h5>
              </div>
              <div className="toast-body">
                  <p className="mb-2">Finalize o bilhete quando terminar as escolhas.</p>
                  <p className="mb-3">Deseja manter ou remover esta seleção?</p>
                  <div className="pt-3 pb-2 border-top text-center">
                      <button type="button" className="btn btn-info btn-sm me-2" data-bs-dismiss="toast">Confirmar</button>
                      <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="toast">Cancelar</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default JogosPage;