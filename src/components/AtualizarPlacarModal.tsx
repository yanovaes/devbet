import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Evento, EventoScoreUpdate } from '../interfaces/Evento';

const scoreSchema = z.object({
  scoreTimeA: z.coerce.number().min(0, "O placar deve ser 0 ou mais."),
  scoreTimeB: z.coerce.number().min(0, "O placar deve ser 0 ou mais."),
});

interface Props {
  evento: Evento | null;
  // ALTERADO: A função onSave agora espera um único objeto com id e data
  onSave: (variables: { id: number; data: EventoScoreUpdate }) => void;
  onClose: () => void;
  isLoading: boolean;
}

const AtualizarPlacarModal: React.FC<Props> = ({ evento, onSave, onClose, isLoading }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EventoScoreUpdate>({
    resolver: zodResolver(scoreSchema),
  });

  useEffect(() => {
    if (evento) {
      reset({ scoreTimeA: evento.scoreTimeA ?? 0, scoreTimeB: evento.scoreTimeB ?? 0 });
    }
  }, [evento, reset]);

  const onSubmit = (data: EventoScoreUpdate) => {
    if (evento) {
      // ALTERADO: Chamamos onSave com um único objeto
      onSave({ id: evento.id, data });
    }
  };

  return (
    <div className="modal fade" id="placar-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Atualizar Placar: {evento?.timeA} vs {evento?.timeB}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)} id="placar-form">
              <div className="row">
                <div className="col">
                  <label htmlFor="scoreTimeA" className="form-label">{evento?.timeA}</label>
                  <input type="number" id="scoreTimeA" className={`form-control ${errors.scoreTimeA ? 'is-invalid' : ''}`} {...register('scoreTimeA')} />
                  {errors.scoreTimeA && <div className="invalid-feedback">{errors.scoreTimeA.message}</div>}
                </div>
                <div className="col">
                  <label htmlFor="scoreTimeB" className="form-label">{evento?.timeB}</label>
                  <input type="number" id="scoreTimeB" className={`form-control ${errors.scoreTimeB ? 'is-invalid' : ''}`} {...register('scoreTimeB')} />
                  {errors.scoreTimeB && <div className="invalid-feedback">{errors.scoreTimeB.message}</div>}
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" form="placar-form" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Placar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtualizarPlacarModal;