import React, { useState } from 'react';
import { useBilheteStore } from '../store/useBilheteStore';
import { Link } from 'react-router-dom';

const BilheteFlutuante = () => {
  const {
    apostas,
    getCustoTotal,
    getGanhosPotenciais,
    removerAposta,
    atualizarMultiplicador,
  } = useBilheteStore();

  const [isExpanded, setIsExpanded] = useState(false);

  if (apostas.length === 0) {
    return null; // Não renderiza nada se o bilhete estiver vazio
  }

  const oddTotal = apostas.reduce((total, aposta) => total * aposta.odd, 1);

  return (
    <div className="bilhete-flutuante-container">
      {/* Versão "Toast" (recolhido) */}
      <div
        className={`bilhete-toast ${isExpanded ? 'd-none' : 'd-flex'}`}
        onClick={() => setIsExpanded(true)}
      >
        <i className="bi bi-receipt-cutoff fs-4"></i>
        <span className="badge bg-danger rounded-pill">{apostas.length}</span>
        <span className="fw-bold fs-5 ms-2">{oddTotal.toFixed(2)}</span>
        <i className="bi bi-chevron-up ms-auto"></i>
      </div>

      {/* Versão "Modal" (expandido) */}
      <div className={`bilhete-expanded ${isExpanded ? 'd-block' : 'd-none'}`}>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Cupom de Apostas</span>
            <button
              type="button"
              className="btn-close btn-sm"
              onClick={() => setIsExpanded(false)}
            ></button>
          </div>
          <div className="card-body">
            {apostas.map((aposta) => (
              <div key={aposta.id} className="aposta-item mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">
                    {aposta.evento.timeA} x {aposta.evento.timeB}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger border-0"
                    onClick={() => removerAposta(aposta.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
                <small className="text-muted">
                  Resultado Final:{' '}
                  {aposta.selecao === 'timeA'
                    ? aposta.evento.timeA
                    : aposta.selecao === 'timeB'
                    ? aposta.evento.timeB
                    : 'Empate'}
                </small>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <span className="fw-bold text-info">
                    {aposta.odd.toFixed(2)}
                  </span>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    style={{ width: '80px' }}
                    value={aposta.multiplicador}
                    onChange={(e) =>
                      atualizarMultiplicador(
                        aposta.id,
                        parseInt(e.target.value) || 0
                      )
                    }
                    onBlur={(e) => {
                      if (!e.target.value || parseInt(e.target.value) <= 0)
                        e.target.focus();
                    }}
                    min="1"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <span>Aposta Total</span>
              <span className="fw-bold">R$ {getCustoTotal().toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Ganhos Potenciais</span>
              <span className="fw-bold">
                R$ {getGanhosPotenciais().toFixed(2)}
              </span>
            </div>
            <Link
              to="/bilhete"
              className="btn btn-info w-100 mt-2"
              onClick={() => setIsExpanded(false)}
            >
              Ir para o Bilhete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilheteFlutuante;
