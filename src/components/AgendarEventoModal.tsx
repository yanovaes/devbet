import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Evento, EventoScheduling } from '../interfaces/Evento';

const schedulingSchema = z.object({
  data: z.string().min(1, "A data é obrigatória."),
  horario: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato de horário inválido (HH:mm)."),
});

interface Props {
  evento: Evento | null;
  // ALTERADO: A função onSave agora espera um único objeto
  onSave: (variables: { id: number; data: EventoScheduling }) => void;
  onClose: () => void;
  isLoading: boolean;
}

const AgendarEventoModal: React.FC<Props> = ({ evento, onSave, onClose, isLoading }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EventoScheduling>({
    resolver: zodResolver(schedulingSchema),
  });

  useEffect(() => {
    if (evento) {
      reset({ data: evento.data, horario: evento.horario.substring(0, 5) });
    }
  }, [evento, reset]);

  const onSubmit = (data: EventoScheduling) => {
    if (evento) {
      // ALTERADO: Chamamos onSave com um único objeto
      onSave({ id: evento.id, data });
    }
  };

  return (
    <div className="modal fade" id="agendar-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reagendar Evento</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)} id="agendar-form">
              <div className="mb-3">
                <label htmlFor="data" className="form-label">Nova Data</label>
                <input type="date" id="data" className={`form-control ${errors.data ? 'is-invalid' : ''}`} {...register('data')} />
                {errors.data && <div className="invalid-feedback">{errors.data.message}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="horario" className="form-label">Novo Horário</label>
                <input type="time" id="horario" className={`form-control ${errors.horario ? 'is-invalid' : ''}`} {...register('horario')} />
                {errors.horario && <div className="invalid-feedback">{errors.horario.message}</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" form="agendar-form" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Agenda'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendarEventoModal;