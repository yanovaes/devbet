import { Evento } from './Evento';

export interface Aposta {
  id: string;
  evento: Evento;
  // Qual foi a seleção: vitória do time A, empate, ou vitória do time B
  selecao: 'timeA' | 'empate' | 'timeB';
  odd: number;
  multiplicador: number; // Campo editável pelo usuário
}

// Define a estrutura do nosso "store" (armazém de estado) do bilhete
export interface BilheteState {
  apostas: Aposta[];
  adicionarAposta: (evento: Evento, selecao: 'timeA' | 'empate' | 'timeB', odd: number) => void;
  removerAposta: (apostaId: string) => void;
  atualizarMultiplicador: (apostaId: string, multiplicador: number) => void;
  limparBilhete: () => void;
  getCustoTotal: () => number;
  getGanhosPotenciais: () => number;
}
