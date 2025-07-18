import { Evento, Pagina, EventoCreate, EventoScheduling, EventoScoreUpdate } from "../interfaces/Evento";
import api from "./api"; // Sua instância configurada do Axios

// --- Funções de Busca (GET) ---

export const fetchEventos = (page: number, size: number): Promise<Pagina<Evento>> =>
  api.get("/listar-todos", { params: { page, size } }).then(res => res.data);

export const fetchEventosPorEsporte = (idEsporte: number, page: number, size: number): Promise<Pagina<Evento>> =>
  api.get(`/por-esporte/${idEsporte}/listar`, { params: { page, size } }).then(res => res.data);

export const fetchEventoPorId = (id: number): Promise<Evento> =>
  api.get(`/${id}/buscar`).then(res => res.data);

export const fetchEventosAgendados = (): Promise<Evento[]> =>
  api.get("/agendados/listar").then(res => res.data);

// --- Funções de Modificação (Admin) ---

export const createEvento = (eventoData: EventoCreate): Promise<Evento> =>
  api.post("/criar", eventoData).then(res => res.data);

export const deleteEvento = (id: number): Promise<void> =>
  api.delete(`/${id}`);

export const updateStatusEvento = (id: number, status: 'iniciar' | 'finalizar' | 'cancelar' | 'adiar'): Promise<Evento> =>
  api.patch(`/${id}/${status}`).then(res => res.data);
  
export const agendarEvento = (id: number, scheduleData: EventoScheduling): Promise<Evento> =>
  api.patch(`/${id}/agendar`, scheduleData).then(res => res.data);

export const updateScoreEvento = (id: number, scoreData: EventoScoreUpdate): Promise<Evento> =>
  api.patch(`/${id}/scores`, scoreData).then(res => res.data);