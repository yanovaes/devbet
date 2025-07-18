import api from "./api"; // Usaremos a instância base do Axios
import axios from "axios";
import { FavoritoCreateDTO, FavoritoResponseDTO } from "../interfaces/Favorito";

const favoritoApi = axios.create({
  baseURL: "http://localhost:8080/api/favoritos", // Novo baseURL para o controller de Favoritos
});

/**
 * Busca a lista de eventos favoritados por um usuário.
 * @param email O email do usuário logado.
 * @returns Uma promessa com a lista de eventos favoritos.
 */
export const fetchFavoritos = async (email: string): Promise<FavoritoResponseDTO[]> => {
  const response = await favoritoApi.get("/listar", { params: { email } });
  return response.data;
};

/**
 * Adiciona um evento aos favoritos de um usuário.
 * @param data O DTO com o email do usuário e o ID do evento.
 * @returns Uma promessa com o favorito criado.
 */
export const createFavorito = async (data: FavoritoCreateDTO): Promise<FavoritoResponseDTO> => {
  const response = await favoritoApi.post("", data); // Endpoint: POST /api/favoritos
  return response.data;
};

/**
 * Remove um evento dos favoritos de um usuário.
 * @param idEvento O ID do evento a ser removido.
 * @param email O email do usuário.
 */
export const deleteFavorito = async ({ idEvento, email }: { idEvento: number; email: string }): Promise<void> => {
  // Assumindo um endpoint como DELETE /api/favoritos?idEvento=123&email=user@test.com
  await favoritoApi.delete("", { params: { idEvento, email } });
};