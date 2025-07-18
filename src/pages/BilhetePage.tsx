import React from 'react';
import { useBilheteStore } from '../store/useBilheteStore';
import { useNavigate } from 'react-router-dom';

const BilhetePage = () => {
  const {
    apostas,
    getCustoTotal,
    getGanhosPotenciais,
    removerAposta,
    atualizarMultiplicador,
    limparBilhete,
  } = useBilheteStore();

  const navigate = useNavigate();

  const handleApostar = () => {
    // TODO: Lógica para enviar o bilhete para a API do backend
    console.log("Aposta finalizada:", { apostas, custo: getCustoTotal() });
    alert("Aposta realizada com sucesso! O bilhete será limpo.");
    limparBilhete();
    navigate('/'); // Volta para a página inicial
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 text-info">CUPOM DE APOSTAS</h4>
        {apostas.length > 0 && (
          <button className="btn btn-sm btn-outline-danger" onClick={limparBilhete}>
            <i className="bi bi-trash-fill me-2"></i>Limpar Tudo
          </button>
        )}
      </div>

      {apostas.length === 0 ? (
        <div className="alert alert-warning text-center">
          Nenhuma aposta adicionada ao bilhete.
        </div>
      ) : (
        <>
          {apostas.map((aposta) => (
            <div key={aposta.id} className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-1">
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
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold text-info">{aposta.odd.toFixed(2)}</span>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    style={{ width: '80px' }}
                    value={aposta.multiplicador}
                    onChange={(e) =>
                      atualizarMultiplicador(aposta.id, parseInt(e.target.value) || 0)
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
            </div>
          ))}

          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Aposta Total</span>
                <span className="fw-bold">R$ {getCustoTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Ganhos Potenciais</span>
                <span className="fw-bold">R$ {getGanhosPotenciais().toFixed(2)}</span>
              </div>
              <button className="btn btn-success w-100" onClick={handleApostar}>
                Finalizar Aposta
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BilhetePage;
