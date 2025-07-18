import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import { fetchEventos, createEvento, deleteEvento, updateStatusEvento, agendarEvento, updateScoreEvento } from '../services/eventoService';
import { Evento, EventoCreate, EventoScheduling, EventoScoreUpdate } from '../interfaces/Evento';

import Paginacao from '../components/Paginacao';
import TabelaEventosAdmin from '../components/TabelaEventosAdmin';
import CriarEventoModal from '../components/CriarEventoModal';
import AtualizarPlacarModal from '../components/AtualizarPlacarModal';
import AgendarEventoModal from '../components/AgendarEventoModal';

declare const bootstrap: any;

const AdminPage = () => {
  const [pagina, setPagina] = useState(0);
  const [eventoSelecionado, setEventoSelecionado] = useState<Evento | null>(null);

  // Instâncias dos Modais
  const [criarModal, setCriarModal] = useState<any>(null);
  const [placarModal, setPlacarModal] = useState<any>(null);
  const [agendarModal, setAgendarModal] = useState<any>(null);
  
  const queryClient = useQueryClient();

  // Inicializa as instâncias dos modais do Bootstrap
  useEffect(() => {
    setCriarModal(new bootstrap.Modal(document.getElementById('evento-modal')));
    setPlacarModal(new bootstrap.Modal(document.getElementById('placar-modal')));
    setAgendarModal(new bootstrap.Modal(document.getElementById('agendar-modal')));
  }, []);

  // Busca de dados
  const { data: paginaDeEventos, isLoading, isError, error } = useQuery({
    queryKey: ['adminEventos', pagina],
    queryFn: () => fetchEventos(pagina, 10),
    placeholderData: keepPreviousData,
  });

  // Mutações para as diversas ações
  const mutationOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminEventos'] });
    },
    onError: (err: any) => alert(`Ocorreu um erro: ${err.message}`),
  };

  const createMutation = useMutation({ mutationFn: createEvento, ...mutationOptions, onSuccess: () => { mutationOptions.onSuccess(); criarModal?.hide(); }});
  const deleteMutation = useMutation({ mutationFn: deleteEvento, ...mutationOptions });
  const statusMutation = useMutation({ mutationFn: ({ id, status }: { id: number, status: any }) => updateStatusEvento(id, status), ...mutationOptions });
  const scoreMutation = useMutation({ mutationFn: ({ id, data }: { id: number, data: EventoScoreUpdate }) => updateScoreEvento(id, data), ...mutationOptions, onSuccess: () => { mutationOptions.onSuccess(); placarModal?.hide(); }});
  const scheduleMutation = useMutation({ mutationFn: ({ id, data }: { id: number, data: EventoScheduling }) => agendarEvento(id, data), ...mutationOptions, onSuccess: () => { mutationOptions.onSuccess(); agendarModal?.hide(); }});

  // Funções para abrir os modais
  const handleOpenUpdateScore = (evento: Evento) => { setEventoSelecionado(evento); placarModal?.show(); };
  const handleOpenReschedule = (evento: Evento) => { setEventoSelecionado(evento); agendarModal?.show(); };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Gerenciar Eventos</h2>
        <button className="btn btn-primary" onClick={() => criarModal?.show()}>
          <i className="bi bi-plus-circle me-2"></i>Criar Novo Evento
        </button>
      </div>

      {isLoading && <p>Carregando...</p>}
      {isError && <p className="text-danger">Erro: {error.message}</p>}
      
      {paginaDeEventos && (
        <>
          <TabelaEventosAdmin 
            eventos={paginaDeEventos.content}
            onDelete={(id) => { if (window.confirm('Confirmar exclusão?')) deleteMutation.mutate(id); }}
            onStatusChange={(id, status) => statusMutation.mutate({ id, status })}
            onUpdateScore={handleOpenUpdateScore}
            onReschedule={handleOpenReschedule}
          />
          <Paginacao 
            pagina={pagina}
            totalPaginas={paginaDeEventos.totalPages}
            onPageChange={setPagina}
          />
        </>
      )}

      {/* Renderiza todos os modais */}
      <CriarEventoModal onSave={createMutation.mutate} onClose={() => criarModal?.hide()} isLoading={createMutation.isPending} />
      <AtualizarPlacarModal evento={eventoSelecionado} onSave={scoreMutation.mutate} onClose={() => placarModal?.hide()} isLoading={scoreMutation.isPending} />
      <AgendarEventoModal evento={eventoSelecionado} onSave={scheduleMutation.mutate} onClose={() => agendarModal?.hide()} isLoading={scheduleMutation.isPending} />
    </div>
  );
};

export default AdminPage;