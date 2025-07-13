import React, { useEffect } from 'react';

// Informa ao TypeScript que a variável 'bootstrap' existe globalmente
declare const bootstrap: any;

const JogosPage = () => {

  // Efeito para inicializar Popovers e Toasts do Bootstrap quando o componente é montado
  useEffect(() => {
    // Inicializa Popovers
    const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popovers = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    // Inicializa Toasts
    const toastTriggerList = document.querySelectorAll('.add-bet-Btn');
    const toastLiveExample = document.getElementById('add-Bet-Toast');
    
    let toastBootstrap: any;
    if (toastLiveExample) {
        toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    }

    const handleClick = () => {
      if (toastBootstrap) {
        toastBootstrap.show();
      }
    };
    
    if (toastTriggerList.length > 0) {
      // Adiciona o event listener a cada botão
      toastTriggerList.forEach(btn => {
        btn.addEventListener('click', handleClick);
      });
    }

    // Função de limpeza para remover os event listeners quando o componente for desmontado
    return () => {
      if (toastTriggerList.length > 0) {
        toastTriggerList.forEach(btn => {
          btn.removeEventListener('click', handleClick);
        });
      }
      // Limpa os popovers
      popovers.forEach((popover: any) => popover.dispose());
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  return (
    <>
      <div className="bg-dark text-body text-center py-2 fs-6 mb-1">
        Autores: Ricardo Araujo e Yan Novaes
      </div>

      {/* Carrossel */}
      <div id="carousel-jogos" className="carousel slide mb-5 rounded-3 overflow-hidden">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel-jogos" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/img-carousel-1.jpg" className="d-block w-100" alt="Bill Gates Fans x Apple INC." />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/img-carousel-2.jpg" className="d-block w-100" alt="Javanópolis FC x Amigos do C" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/img-carousel-3.jpg" className="d-block w-100" alt="Microsoft Guys x Linux AFC" />
          </div>
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

      {/* Seção Principais Jogos */}
      <div className="mb-5">
        <h4 className="mb-3 text-info">PRINCIPAIS JOGOS</h4>
        <ul className="list-group list-group-flush rounded-1">
            <li className="bet list-group-item card-jogo px-4 py-3">
                <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                        <span className="small">19:00</span>
                        <span className="fw-bold">Javanópolis FC</span>
                        <span className="fw-bold">Unidos do C</span>
                    </div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="add-bet-Btn btn btn-sm d-flex align-items-center justify-content-between w-100"><span>1</span><span className="fw-bold">1.85</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="add-bet-Btn btn btn-sm d-flex align-items-center justify-content-between w-100"><span>X</span><span className="fw-bold">3.00</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0"><button className="add-bet-Btn btn btn-sm d-flex align-items-center justify-content-between w-100"><span>2</span><span className="fw-bold">2.35</span></button></div>
                </div>
            </li>
            <li className="bet list-group-item card-jogo px-4 py-3">
                <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                        <span className="small">19:30</span>
                        <span className="fw-bold">Bill Gates Fans</span>
                        <span className="fw-bold">Apple INC.</span>
                    </div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>1</span><span className="fw-bold">1.6</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>X</span><span className="fw-bold">2.42</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>2</span><span className="fw-bold">4.67</span></button></div>
                </div>
            </li>
            <li className="bet list-group-item card-jogo px-4 py-3">
                <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                        <span className="small">21:00</span>
                        <span className="fw-bold">Microsoft Guys</span>
                        <span className="fw-bold">Linux AFC</span>
                    </div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>1</span><span className="fw-bold">1.2</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0 mb-2"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>X</span><span className="fw-bold">2.45</span></button></div>
                    <div className="col-12 col-md-2 mb-md-0"><button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100"><span>2</span><span className="fw-bold">7.21</span></button></div>
                </div>
            </li>
        </ul>
      </div>
      
      {/* Seção Futebol */}
      <div className="mb-5">
    <h4 className="mb-3">Futebol</h4>
    <ul className="list-group list-group-flush rounded-1">
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">19:00</span>
                    <span className="fw-bold">Javanópolis FC</span>
                    <span className="fw-bold">Unidos do C</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.85</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.00</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.35</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">19:30</span>
                    <span className="fw-bold">Bill Gates Fans</span>
                    <span className="fw-bold">Apple INC.</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.6</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">2.42</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">4.67</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">21:00</span>
                    <span className="fw-bold">Microsoft Guys</span>
                    <span className="fw-bold">Linux AFC</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.2</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">2.45</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">7.21</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">16:30</span>
                    <span className="fw-bold">Binary Bombers</span>
                    <span className="fw-bold">Segfault City</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.35</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.20</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.75</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">18:00</span>
                    <span className="fw-bold">404 Not Founders</span>
                    <span className="fw-bold">NullPointer XI</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.80</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.10</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.40</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">18:30</span>
                    <span className="fw-bold">PingMasters</span>
                    <span className="fw-bold">DNS Wanderers</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.60</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.30</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.35</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">19:00</span>
                    <span className="fw-bold">Syntax FC</span>
                    <span className="fw-bold">Logic Loops</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.50</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.00</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.60</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">13:00</span>
                    <span className="fw-bold">Bitwise FC</span>
                    <span className="fw-bold">Token Miners </span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.65</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.10</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">3.45</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">22:30</span>
                    <span className="fw-bold">Cybernetic Owls</span>
                    <span className="fw-bold">Cache Crushers</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.30</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>X</span>
                        <span className="fw-bold">3.80</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">6.25</span>
                    </button>
                </div>
            </div>
        </li>
    </ul>
</div>

      {/* Seção Basquete */}
      <div className="mb-5">
    <h4 className="mb-3">Basquete</h4>
    <ul className="list-group list-group-flush rounded-1">
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">22:00</span>
                    <span className="fw-bold">Silicon Dunkers</span>
                    <span className="fw-bold">WiFi Ballers</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.90</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">2.35</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>O 192.5</span>
                        <span className="fw-bold">2.00</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">19:30</span>
                    <span className="fw-bold">RAM Runners</span>
                    <span className="fw-bold">GPU Giants</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.45</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">1.85</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>U 180.5</span>
                        <span className="fw-bold">1.90</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">21:00</span>
                    <span className="fw-bold">Neural Nets</span>
                    <span className="fw-bold">Script Shooters</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">1.2</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">4.50</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>U 170.5</span>
                        <span className="fw-bold">1.75</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">16:30</span>
                    <span className="fw-bold">Cyber Slammers</span>
                    <span className="fw-bold">Breakpoint Bulls</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.35</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">3.20</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>O 195.5</span>
                        <span className="fw-bold">1.88</span>
                    </button>
                </div>
            </div>
        </li>
        <li className="bet list-group-item card-jogo px-4 py-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column text-start">
                    <span className="small">18:00</span>
                    <span className="fw-bold">SSD Dribblers</span>
                    <span className="fw-bold">Overclock Dunkers</span>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>1</span>
                        <span className="fw-bold">2.80</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0 mb-2">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>2</span>
                        <span className="fw-bold">3.10</span>
                    </button>
                </div>
                <div className="col-12 col-md-2 mb-md-0">
                    <button className="btn add-bet-Btn btn-sm d-flex align-items-center justify-content-between w-100">
                        <span>U 160.5</span>
                        <span className="fw-bold">2.40</span>
                    </button>
                </div>
            </div>
        </li>
    </ul>
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
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasCriar" aria-labelledby="offcanvasCriarLabel">
    <div className="offcanvas-header">
        <h4 className="offcanvas-title header-criar-offcanvas" id="offcanvasCriarLabel">Criar Aposta</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body bg-dark bg-gradient">
        <div className="container my-5">
            <h2 className="text-center mb-4">Criar sua Aposta: Selecione os Jogos</h2>
            <p className="text-center mb-4">
                Escolha os jogos que você deseja apostar, seja no futebol ou basquete, e combine suas seleções para aumentar suas chances de ganhar!
            </p>

            <form>
                <div className="row">
                    {/* seção de futebol */}
                    <div className="col-lg-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-primary text-light">
                                <h5 className="mb-0 header-criar-offcanvas">Selecione seus Jogos de Futebol</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-1" name="futebol" value="Javanópolis FC vs Unidos do C (19:00)" />
                                    <label className="form-check-label" htmlFor="futebol-1">
                                        Javanópolis FC vs Unidos do C - 19:00
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-2" name="futebol" value="Bill Gates Fans vs Apple INC. (19:30)" />
                                    <label className="form-check-label" htmlFor="futebol-2">
                                        Bill Gates Fans vs Apple INC. - 19:30
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-3" name="futebol" value="Microsoft Guys vs Linux AFC (21:00)" />
                                    <label className="form-check-label" htmlFor="futebol-3">
                                        Microsoft Guys vs Linux AFC - 21:00
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-4" name="futebol" value="Binary Bombers vs Segfault City (16:30)" />
                                    <label className="form-check-label" htmlFor="futebol-4">
                                        Binary Bombers vs Segfault City - 16:30
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-5" name="futebol" value="404 Not Founders vs NullPointer XI (18:00)" />
                                    <label className="form-check-label" htmlFor="futebol-5">
                                        404 Not Founders vs NullPointer XI - 18:00
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="futebol-6" name="futebol" value="PingMasters vs DNS Wanderers (18:30)" />
                                    <label className="form-check-label" htmlFor="futebol-6">
                                        PingMasters vs DNS Wanderers - 18:30
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* seção de basquete */}
                    <div className="col-lg-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h5 className="header-criar-offcanvas mb-0">Selecione seus Jogos de Basquete</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="basquete-1" name="basquete" value="Silicon Dunkers vs WiFi Ballers (22:00)" />
                                    <label className="form-check-label" htmlFor="basquete-1">
                                        Silicon Dunkers vs WiFi Ballers - 22:00
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="basquete-2" name="basquete" value="RAM Runners vs GPU Giants (19:30)" />
                                    <label className="form-check-label" htmlFor="basquete-2">
                                        RAM Runners vs GPU Giants - 19:30
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="basquete-3" name="basquete" value="Neural Nets vs Script Shooters (21:00)" />
                                    <label className="form-check-label" htmlFor="basquete-3">
                                        Neural Nets vs Script Shooters - 21:00
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="basquete-4" name="basquete" value="Cyber Slammers vs Breakpoint Bulls (16:30)" />
                                    <label className="form-check-label" htmlFor="basquete-4">
                                        Cyber Slammers vs Breakpoint Bulls - 16:30
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="basquete-5" name="basquete" value="SSD Dribblers vs Overclock Dunkers (18:00)" />
                                    <label className="form-check-label" htmlFor="basquete-5">
                                        SSD Dribblers vs Overclock Dunkers - 18:00
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button type="reset" className="btn btn-primary btn-lg" data-bs-dismiss="offcanvas" aria-label="Close">
                        Criar Aposta
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
     <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasParticipar" aria-labelledby="offcanvasParticiparLabel">
    <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasParticiparLabel">Participar</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body bg-dark bg-gradient">
        <div>
            <h2>Promoções Exclusivas - DevBet</h2>
            <p>
                Na DevBet, cada aposta pode ser uma chance de ganhar grandes prêmios! Participe de nossas promoções e concorra a prêmios incríveis enquanto acompanha os jogos mais emocionantes de times como <strong>Javanópolis FC</strong>, <strong>Unidos do C</strong> e muitos outros!
            </p>

            <h3>1. Promoção "Aposta Premiada"</h3>
            <p>
                Realize apostas nas partidas de <strong>Javanópolis FC vs Unidos do C</strong> e concorra a prêmios em dinheiro e bônus exclusivos. A cada aposta feita, você acumula chances de ganhar!
            </p>
            <ul>
                <li>Deposite um valor mínimo de R$50,00 para participar.</li>
                <li>A cada R$50,00 apostados, você ganha uma entrada para o sorteio.</li>
                <li>Prêmios incluem até <strong>R$5.000,00 em dinheiro</strong> e <strong>bônus de até 200%</strong> para suas apostas.</li>
            </ul>

            <h3>2. Promoção "Duelo dos Campeões"</h3>
            <p>
                Entre na disputa pelo título de campeão das promoções da DevBet! Aposte nos times do torneio <strong>Tech League</strong> e ganhe prêmios exclusivos como gadgets tecnológicos e cupons de aposta.
            </p>
            <ul>
                <li>Para participar, aposte nas partidas da <strong>Tech League</strong> entre times como <strong>Microsoft Guys</strong> e <strong>Linux AFC</strong>.</li>
                <li>A cada aposta de R$100,00, você recebe uma chance de ganhar um prêmio tecnológico!</li>
            </ul>

            <h3>3. Promoção "Bônus de Amigo Dev"</h3>
            <p>
                Convide seus amigos para a DevBet e ganhe bônus para suas apostas. Ao indicar um amigo, ambos recebem <strong>50% de bônus</strong> no primeiro depósito feito.
            </p>
            <ul>
                <li>Indique amigos para a DevBet e ambos ganham 50% de bônus no primeiro depósito.</li>
                <li>O bônus é válido para apostas em todos os eventos esportivos.</li>
            </ul>

            <h3>4. Promoção "Desafio do Código"</h3>
            <p>
                Para os amantes da programação, temos um desafio especial! Participe do <strong>Desafio do Código</strong> e mostre sua habilidade para ganhar prêmios incríveis!
            </p>
            <ul>
                <li>Complete o desafio de programação e aposte em qualquer evento esportivo.</li>
                <li>Os 10 primeiros a completarem o desafio ganham <strong>cupons de aposta gratuitos</strong> e <strong>um prêmio surpresa</strong>.</li>
            </ul>

            <h3>5. Regras Gerais</h3>
            <ul>
                <li>As promoções são válidas enquanto durar a disponibilidade de prêmios.</li>
                <li>A DevBet se reserva o direito de alterar os termos das promoções a qualquer momento.</li>
                <li>Promoções não são cumulativas com outros bônus ou ofertas.</li>
            </ul>

            <p>
                Não perca a chance de ganhar! Participe das promoções da DevBet e aproveite ao máximo a sua experiência de apostas!
            </p>
        </div>
    </div>
</div>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasDepositar" aria-labelledby="offcanvasDepositarLabel">
    <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasDepositarLabel">Depositar</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body bg-dark bg-gradient">
        <h2>Termos e Condições de Depósito — DevBet</h2>
        <p>
            Bem-vindo à DevBet! Para garantir uma experiência segura e transparente, estabelecemos as seguintes regras e cláusulas relacionadas a depósitos, bônus e saques:
        </p>

        <h3>1. Métodos de Depósito</h3>
        <p>
            Aceitamos depósitos via <strong>PIX</strong>, <strong>boleto bancário</strong>, <strong>cartões de débito e crédito</strong>, <strong>transferência TED</strong> e <strong>criptomoedas</strong> (Bitcoin, Ethereum e USDT).
        </p>
        <ul>
            <li>Depósitos via PIX, débito e cripto são processados <strong>imediatamente</strong>.</li>
            <li>Depósitos via boleto podem levar até <strong>2 dias úteis</strong> para compensação.</li>
            <li>Transferências TED são confirmadas em até <strong>1 dia útil</strong>.</li>
        </ul>

        <h3>2. Valores Mínimos e Máximos</h3>
        <ul>
            <li>Depósito mínimo: <strong>R$20,00</strong>.</li>
            <li>Depósito máximo diário: <strong>R$10.000,00</strong>.</li>
            <li>Depósitos em cripto são convertidos para reais conforme a cotação no momento da confirmação.</li>
        </ul>

        <h3>3. Bônus de Primeiro Depósito</h3>
        <p>
            Ao realizar seu primeiro depósito, você receberá <strong>100% de bônus</strong> até o limite de <strong>R$500,00</strong>.
        </p>
        <ul>
            <li>O bônus será liberado automaticamente após a confirmação do depósito.</li>
            <li>Para saque do valor do bônus e seus ganhos, é necessário apostar ao menos <strong>5 vezes</strong> o valor do depósito + bônus em odds mínimas de <strong>1.50</strong>.</li>
        </ul>

        <h3>4. Saques</h3>
        <ul>
            <li>O saque só é permitido para usuários que tenham realizado pelo menos um depósito validado.</li>
            <li>Antes de solicitar um saque, todos os bônus ativos devem cumprir os requisitos de liberação.</li>
            <li>Saques são realizados via <strong>PIX</strong>, <strong>TED</strong> ou <strong>criptomoedas</strong>, para contas bancárias ou wallets de titularidade do próprio usuário.</li>
            <li>Prazo para processamento: até <strong>2 dias úteis</strong>.</li>
        </ul>

        <h3>5. Regras Gerais</h3>
        <ul>
            <li>DevBet se reserva o direito de solicitar documentos adicionais para validação de identidade.</li>
            <li>Qualquer tentativa de abuso dos bônus ou do sistema poderá resultar no cancelamento dos créditos promocionais e/ou suspensão da conta.</li>
        </ul>

        <p>Ao realizar um depósito, você declara estar ciente e de acordo com todos os termos acima.</p>
    </div>
</div>
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