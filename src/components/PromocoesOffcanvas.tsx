import React from 'react';

const PromocoesOffcanvas = () => {
  return (
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
  );
};

export default PromocoesOffcanvas;