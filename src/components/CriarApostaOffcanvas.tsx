import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEventosAgendados } from '../services/eventoService';
import { Evento } from '../interfaces/Evento';

// Informa ao TypeScript que a variável 'bootstrap' existe globalmente
declare const bootstrap: any;

const CriarApostaOffcanvas = () => {
  // 1. Busca os eventos agendados da API usando React Query
  const { data: eventos, isLoading, isError } = useQuery({
    queryKey: ['eventosAgendados'],
    queryFn: fetchEventosAgendados,
  });

  // 2. Agrupa os eventos por esporte para renderizar separadamente
  const eventosPorEsporte = eventos?.reduce((acc, evento) => {
    const esporte = evento.esporte;
    if (!acc[esporte]) {
      acc[esporte] = [];
    }
    acc[esporte].push(evento);
    return acc;
  }, {} as Record<string, Evento[]>);

  const renderContent = () => {
    if (isLoading) {
      return <p className="text-center">Carregando jogos disponíveis...</p>;
    }
    if (isError) {
      return <p className="text-center text-danger">Não foi possível carregar os jogos.</p>;
    }
    if (!eventosPorEsporte || Object.keys(eventosPorEsporte).length === 0) {
        return <p className="text-center text-muted">Nenhum jogo disponível para apostar no momento.</p>;
    }

    // 3. Renderiza a lista de jogos agrupada dinamicamente
    return (
      <form>
        <div className="row">
          {Object.entries(eventosPorEsporte).map(([esporte, jogosDoEsporte]) => (
            <div className="col-lg-12 mb-4" key={esporte}>
              <div className="card">
                <div className="card-header bg-primary text-light">
                  <h5 className="mb-0 header-criar-offcanvas">Selecione seus Jogos de {esporte}</h5>
                </div>
                <div className="card-body">
                  {jogosDoEsporte.map(jogo => (
                    <div className="form-check" key={jogo.id}>
                      <input className="form-check-input" type="checkbox" id={`evento-${jogo.id}`} name="evento" value={jogo.id} />
                      <label className="form-check-label" htmlFor={`evento-${jogo.id}`}>
                        {jogo.timeA} vs {jogo.timeB} - {jogo.horario.substring(0, 5)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-info btn-lg" data-bs-dismiss="offcanvas">
            Criar Aposta
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasCriar" aria-labelledby="offcanvasCriarLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title header-criar-offcanvas" id="offcanvasCriarLabel">Criar Aposta</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body bg-dark bg-gradient">
        <div className="container my-5">
          <h2 className="text-center mb-4">Selecione os Jogos</h2>
          <p className="text-center mb-4">
            Escolha os jogos que você deseja incluir na sua aposta.
          </p>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CriarApostaOffcanvas;