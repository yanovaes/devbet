import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { BilheteState } from '../interfaces/Aposta'; // ou de onde sua interface estiver

export const useBilheteStore = create<BilheteState>()(
  persist(
    (set, get) => ({
      apostas: [],

      adicionarAposta: (evento, selecao, odd) => {
        const novaAposta = {
          id: `${evento.id}-${selecao}`,
          evento,
          selecao,
          odd,
          multiplicador: 1,
        };

        set((state) => {
          const apostaExistente = state.apostas.find((a) => a.id === novaAposta.id);
          if (apostaExistente) return state;
          return { apostas: [...state.apostas, novaAposta] };
        });
      },

      removerAposta: (apostaId) => {
        set((state) => ({
          apostas: state.apostas.filter((a) => a.id !== apostaId),
        }));
      },

      atualizarMultiplicador: (apostaId, multiplicador) => {
        if (multiplicador <= 0) {
          get().removerAposta(apostaId);
          return;
        }

        set((state) => ({
          apostas: state.apostas.map((a) =>
            a.id === apostaId ? { ...a, multiplicador } : a
          ),
        }));
      },

      limparBilhete: () => set({ apostas: [] }),

      getCustoTotal: () => {
        const { apostas } = get();
        return apostas.reduce((total, a) => total + a.multiplicador, 0);
      },

      getGanhosPotenciais: () => {
        const { apostas } = get();
        if (apostas.length === 0) return 0;
        const oddTotal = apostas.reduce((total, a) => total * a.odd, 1);
        return get().getCustoTotal() * oddTotal;
      },
    }),
    {
      name: 'bilhete-devbet',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
