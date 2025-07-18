import React from 'react';

const DepositarOffcanvas = () => {
  return (
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
  );
};

export default DepositarOffcanvas;