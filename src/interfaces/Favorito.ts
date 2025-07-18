import { Evento } from "./Evento";

// DTO para criar um favorito
export interface FavoritoCreateDTO {
  emailUsuario: string;
  idEvento: number;
}

// DTO para a resposta da API ao listar favoritos
// (Vamos assumir que a API retorna o objeto Evento completo)
export interface FavoritoResponseDTO extends Evento {
  // O backend pode incluir um ID específico do favorito, se necessário
  // favoritoId: number; 
}