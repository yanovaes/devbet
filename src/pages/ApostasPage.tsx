import React from 'react';
const ApostasPage = () => {
  return (
    <>
      <nav className="mb-4">
        <div className="nav nav-underline justify-content-center mb-4 text-decoration-none" id="nav-tab" role="tablist">
          <a className="nav-item nav-link active text-body" id="nav-home-tab" data-bs-toggle="tab" href="#active-bets" role="tab" aria-controls="nav-home" aria-selected="true">Apostas Ativas</a>
          <a className="nav-item nav-link text-body" id="nav-profile-tab" data-bs-toggle="tab" href="#closed-bets" role="tab" aria-controls="nav-profile" aria-selected="false">Apostas Fechadas</a>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {/* Aba de Apostas Ativas */}
        <div id="active-bets" className="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-home-tab">
          
          {/* Card 1: Aposta Múltipla */}
          <div className="card mb-4">
            <div className="card-header text-info fw-black fs-5 py-3 mb-0">
              Múltipla
            </div>
            <ul className="list-group list-group-flush px-3">
              <li className="list-group-item py-4">
                <div className="d-flex align-items-center gap-4 mb-2">
                  <h5 className="mb-0 fs-5">Javanópolis FC</h5>
                  <span className="fs-5 fw-light">1.85</span>
                </div>
                <h6 className="card-subtitle text-muted mb-3 fw-light">Resultado Final</h6>
                <div className="d-flex justify-content-between">
                  <span>Javanópolis FC</span>
                  <span className="text-muted">Hoje</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Unidos do C</span>
                  <span className="text-muted">19:00</span>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="d-flex align-items-center gap-4 mb-2">
                  <h5 className="mb-0 fs-5">Linux AFC</h5>
                  <span className="fs-5 fw-light">7.21</span>
                </div>
                <h6 className="card-subtitle text-muted mb-3 fw-light">Resultado Final</h6>
                <div className="d-flex justify-content-between">
                  <span>Microsoft Guys</span>
                  <span className="text-muted">Hoje</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Linux AFC</span>
                  <span className="text-muted">21:00</span>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="d-flex align-items-center gap-4 mb-2">
                  <h5 className="mb-0 fs-5">Empate</h5>
                  <span className="fs-5 fw-light">2.42</span>
                </div>
                <h6 className="card-subtitle text-muted mb-3 fw-light">Resultado Final</h6>
                <div className="d-flex justify-content-between">
                  <span>Bill Gates Fans</span>
                  <span className="text-muted">Hoje</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Apple INC.</span>
                  <span className="text-muted">19:30</span>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex flex-column">
                    <span className="fw-normal">Aposta</span>
                    <span className="fs-5 fw-bold">R$30,00</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fw-normal">Retorno Total</span>
                    <span className="fs-5 fw-bold">R$120,00</span>
                  </div>
                </div>
                <div className="progress my-2" role="progressbar" aria-label="Progresso das apostas"
                  aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} style={{ height: '3vh' }}>
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                    style={{ width: '34%', height: '100%' }}>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Apostas finalizadas: 1</span>
                  <span className="text-muted">Próximos jogos: 2</span>
                </div>
              </li>
            </ul>
            <div className="card-footer p-0">
              <button className="btn btn-info w-100 py-3 rounded-top-0 fw-semibold">
                Encerrar Aposta R$20,00
              </button>
            </div>
          </div>

          {/* Card 2: Aposta Simples */}
          <div className="card mb-4">
            <div className="card-header text-info fw-black fs-5 py-3 mb-0">
                Simples
            </div>
            <ul className="list-group list-group-flush px-3">
                <li className="list-group-item py-4">
                    <div className="d-flex align-items-center gap-4 mb-2">
                        <h5 className="mb-0 fs-5">Silicon Dunkers</h5>
                        <span className="fs-5 fw-light">1.90</span>
                    </div>
                    <h6 className="card-subtitle text-muted mb-3 fw-light">Resultado Final</h6>
                    <div className="d-flex justify-content-between">
                        <span>Silicon Dunkers</span>
                        <span className="text-muted">Hoje</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Wifi Ballers</span>
                        <span className="text-muted">22:00</span>
                    </div>
                </li>
                <li className="list-group-item py-4">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex flex-column">
                            <span className="fw-normal">Aposta</span>
                            <span className="fs-5 fw-bold">R$50,00</span>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="fw-normal">Retorno Total</span>
                            <span className="fs-5 fw-bold">R$90,00</span>
                        </div>
                    </div>
                    <div className="progress my-2" role="progressbar" aria-label="Progresso das apostas"
                        aria-valuenow={1} aria-valuemin={0} aria-valuemax={100} style={{height: '3vh'}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                            style={{width: '1%', height: '100%'}}>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-muted">Apostas finalizadas: 0</span>
                        <span className="text-muted">Próximos jogos: 1</span>
                    </div>
                </li>
            </ul>
            <div className="card-footer p-0">
                <button className="btn btn-info w-100 py-3 rounded-top-0 fw-semibold">
                    Encerrar Aposta R$49,00
                </button>
            </div>
          </div>
        </div>
        
        {/* Aba de Apostas Fechadas */}
        <div id="closed-bets" className="tab-pane fade" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="card">
            <div className="card-header text-info fw-black fs-5 py-3 mb-0">
              Simples
            </div>
            <ul className="list-group list-group-flush px-3">
              <li className="list-group-item py-4">
                <div className="d-flex align-items-center gap-4 mb-2">
                  <h5 className="mb-0 fs-5">Binary Bombers</h5>
                  <span className="fs-5 fw-light">2.10</span>
                </div>
                <h6 className="card-subtitle text-muted mb-3 fw-light">Resultado Final</h6>
                <div className="d-flex justify-content-between">
                  <span>Binary Bombers</span>
                  <span className="text-muted">Ontem</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>NullPointer XI</span>
                  <span className="text-muted">16:30</span>
                </div>
              </li>
              <li className="list-group-item py-3">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <span className="fw-normal">Aposta</span>
                    <span className="fs-5 fw-bold">R$10,00</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fw-normal">Retorno Total</span>
                    <span className="fs-5 fw-bold">R$21,00</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="card-footer p-0">
              <button className="btn btn-info w-100 py-3 rounded-top-0 fw-semibold" disabled>
                Aposta Encerrada
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApostasPage;