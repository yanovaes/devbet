import React from 'react';
const SuportePage = () => {
    return (
        <>
            <div className="form-floating mb-4">
                <input type="search" className="form-control" id="search-input" placeholder="Como podemos ajudar?" />
                <label htmlFor="search-input">Como podemos ajudar?</label>
            </div>

            <div className="mb-5">
                <h4 className="mb-3">Conta e cadastro</h4>
                <div className="accordion mb-4" id="id-accordion-1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#id-item-1" aria-expanded="false" aria-controls="id-item-1">
                                Como faço para me cadastrar no site?
                            </button>
                        </h2>
                        <div id="id-item-1" className="accordion-collapse collapse" aria-labelledby="id-header-item-1">
                            <div className="accordion-body">
                                Basta clicar no botão "Cadastre-se", preencher seus dados pessoais e confirmar o e-mail.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#id-item-2" aria-expanded="false" aria-controls="id-item-2">
                                Esqueci minha senha. O que fazer?
                            </button>
                        </h2>
                        <div id="id-item-2" className="accordion-collapse collapse" aria-labelledby="id-header-item-2">
                            <div className="accordion-body ">
                                Clique em "Esqueci minha senha" na tela de login e siga as instruções para redefini-la por e-mail.
                                <div className="alert alert-warning d-flex align-items-center mt-2 mb-0" role="alert">
                                    <div>
                                        Você só pode redefinir sua senha até <span className="fw-bold">3 vezes por dia</span>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#id-item-3" aria-expanded="false" aria-controls="id-item-3">
                                Posso ter mais de uma conta?
                            </button>
                        </h2>
                        <div id="id-item-3" className="accordion-collapse collapse" aria-labelledby="id-header-item-3">
                            <div className="accordion-body">
                                Não. Cada usuário pode ter apenas uma conta. Contas duplicadas podem ser suspensas.
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mb-3">Depósitos e saques</h4>
                <div className="accordion mb-4" id="id-accordion-2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-4" aria-expanded="false" aria-controls="id-item-4">
                                Quais métodos de pagamento estão disponíveis?
                            </button>
                        </h2>
                        <div id="id-item-4" className="accordion-collapse collapse" aria-labelledby="id-header-item-4">
                            <div className="accordion-body">
                                Você pode depositar via Pix, boleto, cartão de crédito/débito, TED ou criptomoedas.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-5" aria-expanded="false" aria-controls="id-item-5">
                                Quanto tempo leva para meu depósito cair?
                            </button>
                        </h2>
                        <div id="id-item-5" className="accordion-collapse collapse" aria-labelledby="id-header-item-5">
                            <div className="accordion-body">
                                Depósitos via Pix são instantâneos. Outras formas podem levar até 2 dias úteis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-6" aria-expanded="false" aria-controls="id-item-6">
                                Como faço um saque?
                            </button>
                        </h2>
                        <div id="id-item-6" className="accordion-collapse collapse" aria-labelledby="id-header-item-6">
                            <div className="accordion-body">
                                Vá até a área de "Minha Conta", clique em "Saque", escolha o valor e o método. O saque será processado em até 2 dias úteis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-7">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-7" aria-expanded="false" aria-controls="id-item-7">
                                Existe valor mínimo para depósito e saque?
                            </button>
                        </h2>
                        <div id="id-item-7" className="accordion-collapse collapse" aria-labelledby="id-header-item-7">
                            <div className="accordion-body">
                                Sim. O valor mínimo para depósito é de <span className="fw-bold">R$10,00</span> e para saque, o mínimo é de <span className="fw-bold">R$20,00</span>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-8">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-8" aria-expanded="false" aria-controls="id-item-8">
                                Por que meu saque ainda não foi processado?
                            </button>
                        </h2>
                        <div id="id-item-8" className="accordion-collapse collapse" aria-labelledby="id-header-item-8">
                            <div className="accordion-body">
                                Os saques podem levar até <span className="fw-bold">2 dias úteis</span> para serem processados. Verifique se seus dados bancários estão corretos e se não há pendências na conta.
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mb-3">Apostas e Jogos</h4>
                <div className="accordion mb-4" id="id-accordion-3">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-9">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-9" aria-expanded="false" aria-controls="id-item-9">
                                Como faço uma aposta?
                            </button>
                        </h2>
                        <div id="id-item-9" className="accordion-collapse collapse" aria-labelledby="id-header-item-9">
                            <div className="accordion-body">
                                Escolha um evento, selecione o resultado desejado e clique em "Apostar". Depois, confirme o valor da aposta.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-10">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-10" aria-expanded="false" aria-controls="id-item-10">
                                O que significa a odd de uma aposta?
                            </button>
                        </h2>
                        <div id="id-item-10" className="accordion-collapse collapse" aria-labelledby="id-header-item-10">
                            <div className="accordion-body">
                                A odd representa o multiplicador do valor apostado. Por exemplo, uma odd de 2.0 dobra o valor apostado se você vencer.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-11">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-11" aria-expanded="false" aria-controls="id-item-11">
                                Posso cancelar uma aposta depois de feita?
                            </button>
                        </h2>
                        <div id="id-item-11" className="accordion-collapse collapse" aria-labelledby="id-header-item-11">
                            <div className="accordion-body">
                                Sim. Caso a opção "Encerrar Aposta" esteja disponível.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-12">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-12" aria-expanded="false" aria-controls="id-item-12">
                                O que acontece se uma partida for cancelada?
                            </button>
                        </h2>
                        <div id="id-item-12" className="accordion-collapse collapse" aria-labelledby="id-header-item-12">
                            <div className="accordion-body">
                                Se uma partida for cancelada, a aposta referente a esse evento será anulada e o valor correspondente será devolvido automaticamente ao seu saldo.
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mb-3">Promoções e Cupons</h4>
                <div className="accordion mb-4" id="id-accordion-4">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-13">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-13" aria-expanded="false" aria-controls="id-item-13">
                                Como posso usar um cupom de desconto em uma aposta?
                            </button>
                        </h2>
                        <div id="id-item-13" className="accordion-collapse collapse" aria-labelledby="id-header-item-13">
                            <div className="accordion-body">
                                No momento de finalizar sua aposta, insira o código do cupom no campo indicado e o valor do desconto será aplicado automaticamente, caso o cupom esteja válido.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="id-header-item-14">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id-item-14" aria-expanded="false" aria-controls="id-item-14">
                                Onde encontro os cupons promocionais disponíveis?
                            </button>
                        </h2>
                        <div id="id-item-14" className="accordion-collapse collapse" aria-labelledby="id-header-item-14">
                            <div className="accordion-body">
                                Os cupons promocionais são divulgados em nossas redes sociais, notificações no site e e-mails promocionais. Fique atento às campanhas especiais para não perder nenhuma oferta!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-0">
                <div className="card-header fs-5 text-info mb-0">
                    Mande sua mensagem
                </div>
                <div className="card-body p-4">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="input-nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="input-nome" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="input-sobrenome" className="form-label">Sobrenome</label>
                            <input type="text" className="form-control" id="input-sobrenome" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="input-email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="input-email" placeholder="joedoe@gmail.com" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="input-tel" className="form-label">Telefone</label>
                            <input type="tel" className="form-control" id="input-tel" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="input-cidade" className="form-label">Cidade</label>
                            <input type="text" className="form-control" id="input-cidade" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="input-estado" className="form-label">Estado</label>
                            <select id="input-estado" className="form-select">
                                <option>Selecione</option>
                                <option>Rio de Janeiro</option>
                                <option>São Paulo</option>
                                <option>Minas Gerais</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="input-cep" className="form-label">CEP</label>
                            <input type="text" className="form-control" id="input-cep" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="input-msg" className="form-label">Mensagem</label>
                            <textarea className="form-control" id="input-msg" rows={4}></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-info">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default SuportePage;