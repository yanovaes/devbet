import React from 'react';
const Footer = () => {
  return (
    <div className="container mt-0">
      <div className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <h6 className="mb-2">Ajuda</h6>
              <ul className="list-unstyled">
                <li><a href="#">Depósito</a></li>
                <li><a href="#">Saque</a></li>
                <li><a href="#">FAQ devbet</a></li>
                <li><a href="#">Termos e condições</a></li>
                <li><a href="#">Aviso de privacidade</a></li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <h6 className="mb-2">Resultados</h6>
              <ul className="list-unstyled">
                <li><a href="#">Minhas apostas</a></li>
                <li><a href="#">Longo prazo</a></li>
                <li><a href="#">Jogos ao-vivo</a></li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 text-lg-start mb-4">
              <h6 className="mb-2">Jogue com responsabilidade</h6>
              <p className="small text-muted">
                Este site é destinado <span className="fw-bold">a maiores de 18 anos</span>. O jogo pode causar dependência. Jogue com moderação.
              </p>
            </div>
          </div>
          <div className="row justify-content-center" id="footer-logo">
            <div className="col-12 text-center">
              <img src="/assets/images/devbet-logo-light.png" alt="Logo devbet" style={{ width: "120px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;