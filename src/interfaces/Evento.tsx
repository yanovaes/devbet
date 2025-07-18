// Define os possíveis status de um evento
export enum EventoStatus {
  AGENDADO = "AGENDADO",
  AO_VIVO = "AO_VIVO",
  FINALIZADO = "FINALIZADO",
  ADIADO = "ADIADO",
  CANCELADO = "CANCELADO"
}

// Interface para a resposta da API ao listar/buscar eventos
export interface Evento {
  id: number;
  timeA: string;
  timeB: string;
  data: string;
  horario: string;
  scoreTimeA?: number;
  scoreTimeB?: number;
  status: EventoStatus;
  idEsporte: number;
  esporte: string;
  oddTimeAVitoria: number;
  oddEmpate?: number;
  oddTimeBVitoria: number;
}

// Interface para a estrutura de paginação da sua API
export interface Pagina<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

// DTO para criar um novo evento
export interface EventoCreate {
  timeA: string;
  timeB: string;
  data: string; // Formato "YYYY-MM-DD"
  horario: string; // Formato "HH:mm:ss"
  idEsporte: number;
  oddTimeAVitoria: number;
  oddEmpate?: number;
  oddTimeBVitoria: number;
}

// DTO para agendar um evento adiado
export interface EventoScheduling {
  data: string; // Formato "YYYY-MM-DD"
  horario: string; // Formato "HH:mm:ss"
}

// DTO para atualizar o placar de um evento
export interface EventoScoreUpdate {
  scoreTimeA: number;
  scoreTimeB: number;
}