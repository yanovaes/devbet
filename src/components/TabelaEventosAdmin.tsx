import React from 'react';
import { Evento } from '../interfaces/Evento';
import dayjs from 'dayjs';

interface Props {
  eventos: Evento[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: 'iniciar' | 'finalizar' | 'cancelar' | 'adiar') => void;
  onUpdateScore: (evento: Evento) => void;
  onReschedule: (evento: Evento) => void;
}

const TabelaEventosAdmin: React.FC<Props> = ({ eventos, onDelete, onStatusChange, onUpdateScore, onReschedule }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Data/Horário</th>
            <th>Placar</th>
            <th>Status</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map(evento => (
            <tr key={evento.id}>
              <td>{evento.timeA} vs {evento.timeB}</td>
              <td>{dayjs(evento.data).format('DD/MM/YYYY')} às {evento.horario.substring(0, 5)}</td>
              <td>{evento.scoreTimeA ?? '-'} x {evento.scoreTimeB ?? '-'}</td>
              <td><span className="badge bg-secondary">{evento.status}</span></td>
              <td className="text-end">
                <div className="btn-group btn-group-sm" role="group">
                  <button onClick={() => onStatusChange(evento.id, 'iniciar')} className="btn btn-outline-success" title="Iniciar">▶</button>
                  <button onClick={() => onStatusChange(evento.id, 'finalizar')} className="btn btn-outline-secondary" title="Finalizar">■</button>
                  <button onClick={() => onStatusChange(evento.id, 'cancelar')} className="btn btn-outline-danger" title="Cancelar">✕</button>
                  <button onClick={() => onStatusChange(evento.id, 'adiar')} className="btn btn-outline-warning" title="Adiar">◷</button>
                </div>
                <div className="btn-group btn-group-sm ms-2" role="group">
                  <button onClick={() => onUpdateScore(evento)} className="btn btn-outline-primary">Placar</button>
                  <button onClick={() => onReschedule(evento)} className="btn btn-outline-primary">Agendar</button>
                  <button onClick={() => onDelete(evento.id)} className="btn btn-danger">Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEventosAdmin;