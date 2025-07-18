import { create } from 'zustand';

interface FavoritosState {
  favoritosIds: Set<number>; // Usar um Set é eficiente para buscas (ex: .has())
  setFavoritos: (ids: number[]) => void;
  adicionarFavorito: (id: number) => void;
  removerFavorito: (id: number) => void;
}

export const useFavoritosStore = create<FavoritosState>((set) => ({
  favoritosIds: new Set(),
  setFavoritos: (ids) => set({ favoritosIds: new Set(ids) }),
  adicionarFavorito: (id) => set((state) => ({
    favoritosIds: new Set(state.favoritosIds).add(id)
  })),
  removerFavorito: (id) => set((state) => {
    const newIds = new Set(state.favoritosIds);
    newIds.delete(id);
    return { favoritosIds: newIds };
  }),
}));