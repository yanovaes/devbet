import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EventoCreate } from '../interfaces/Evento';

const eventoSchema = z.object({
  timeA: z.string().min(1, "O nome do Time A é obrigatório."),
  timeB: z.string().min(1, "O nome do Time B é obrigatório."),
  data: z.string().min(1, "A data é obrigatória."),
  horario: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato de horário inválido (HH:mm)."),
  idEsporte: z.coerce.number().min(1, "Selecione um esporte."),
  oddTimeAVitoria: z.coerce.number().positive("A odd deve ser um número positivo."),
  oddEmpate: z.coerce.number().optional(),
  oddTimeBVitoria: z.coerce.number().positive("A odd deve ser um número positivo."),
});

interface Props {
  onSave: (data: EventoCreate) => void;
  onClose: () => void;
  isLoading: boolean;
}

const CriarEventoModal: React.FC<Props> = ({ onSave, onClose, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<EventoCreate>({
    resolver: zodResolver(eventoSchema),
  });

  return (
    <div className="modal fade" id="evento-modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Criar Novo Evento</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* O formulário é o mesmo, mas agora só serve para criar */}
            <form onSubmit={handleSubmit(onSave)} id="evento-form">
              {/* ... cole o conteúdo do <form> do EventoFormModal anterior aqui ... */}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" form="evento-form" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Criando...' : 'Criar Evento'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriarEventoModal;