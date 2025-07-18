import React from 'react';
import { Evento } from '../interfaces/Evento';
import { useAuth } from '../auth/AuthContext';
import { useBilheteStore } from '../store/useBilheteStore';
import { useFavoritosStore } from '../store/useFavoritosStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFavorito, deleteFavorito } from '../services/favoritoService';
import dayjs from 'dayjs';

interface EventoItemProps {
  evento: Evento;
}

const EventoItem: React.FC<EventoItemProps> = ({ evento }) => {
  const { usuario } = useAuth();
  const { adicionarAposta } = useBilheteStore();
  const { favoritosIds, adicionarFavorito: addFavoritoStore, removerFavorito: removeFavoritoStore } = useFavoritosStore();
  const queryClient = useQueryClient();

  const isFavorito = favoritosIds.has(evento.id);

  // Mutações para adicionar/remover favoritos na API
  const addMutation = useMutation({
    mutationFn: () => createFavorito({ emailUsuario: usuario!.username, idEvento: evento.id }),
    onSuccess: () => {
      addFavoritoStore(evento.id); // Atualiza o estado local instantaneamente
      queryClient.invalidateQueries({ queryKey: ['favoritos', usuario?.username] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: () => deleteFavorito({ email: usuario!.username, idEvento: evento.id }),
    onSuccess: () => {
      removeFavoritoStore(evento.id); // Atualiza o estado local instantaneamente
      queryClient.invalidateQueries({ queryKey: ['favoritos', usuario?.username] });
    },
  });

  const handleToggleFavorito = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que outros eventos de clique sejam disparados
    if (!usuario) return;

    if (isFavorito) {
      removeMutation.mutate();
    } else {
      addMutation.mutate();
    }
  };

  const handleAddBetClick = (selecao: 'timeA' | 'empate' | 'timeB', odd: number) => {
    if (usuario) {
      adicionarAposta(evento, selecao, odd);
    }
    else{

    }
  };

   return (
    <li className="list-group-item card-jogo px-4 py-3">
      <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center col-12 col-lg-4 mb-3 mb-lg-0 text-start">
          {/* Ícone de Favorito */}
          {usuario && (
            <a href="#" onClick={handleToggleFavorito} className="me-3 text-decoration-none">
              <i className={`bi ${isFavorito ? 'bi-star-fill text-warning' : 'bi-star'}`} style={{ fontSize: '1.5rem' }}></i>
            </a>
          )}
          <div>
            <span className="small">{dayjs(evento.data).format('DD/MM')} - {evento.horario.substring(0, 5)}</span>
            <span className="fw-bold d-block">{evento.timeA}</span>
            <span className="fw-bold d-block">{evento.timeB}</span>
            <small className="text-muted">{evento.esporte}</small>
          </div>
        </div>
        <div className="col-12 col-lg-auto d-flex flex-grow-1 justify-content-end gap-2">
            <button
              className="btn btn-sm btn-outline-info flex-fill"
              onClick={() => usuario && handleAddBetClick('timeA', evento.oddTimeAVitoria)}
              data-bs-toggle={!usuario ? "modal" : undefined}
              data-bs-target={!usuario ? "#modal-entrar" : undefined}
            >
              1<br/><span className="fw-bold">{evento.oddTimeAVitoria.toFixed(2)}</span>
            </button>

            {evento.oddEmpate != null && (
                <button
                    className="btn btn-sm btn-outline-info flex-fill"
                    onClick={() => usuario && handleAddBetClick('empate', evento.oddEmpate!)}
                    data-bs-toggle={!usuario ? "modal" : undefined}
                    data-bs-target={!usuario ? "#modal-entrar" : undefined}
                >
                    X<br/><span className="fw-bold">{evento.oddEmpate.toFixed(2)}</span>
                </button>
            )}

            <button
              className="btn btn-sm btn-outline-info flex-fill"
              onClick={() => usuario && handleAddBetClick('timeB', evento.oddTimeBVitoria)}
              data-bs-toggle={!usuario ? "modal" : undefined}
              data-bs-target={!usuario ? "#modal-entrar" : undefined}
            >
              2<br/><span className="fw-bold">{evento.oddTimeBVitoria.toFixed(2)}</span>
            </button>
        </div>
        {usuario?.role === 'ADMIN' && (
          <div className="col-12 col-lg-2 mt-2 mt-lg-0 d-flex gap-2 justify-content-end">
              <button className="btn btn-sm btn-warning">Editar</button>
              <button className="btn btn-sm btn-danger">Excluir</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default EventoItem;