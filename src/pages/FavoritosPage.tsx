import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../auth/AuthContext';
import { fetchFavoritos } from '../services/favoritoService';
import EventoItem from '../components/EventoItem';
import { Link } from 'react-router-dom';

const FavoritosPage = () => {
  const { usuario } = useAuth();

  const { data: favoritos, isLoading, isError, error } = useQuery({
    queryKey: ['favoritos', usuario?.username],
    queryFn: () => fetchFavoritos(usuario!.username),
    enabled: !!usuario, // A query só será executada se houver um usuário logado
  });

  // Se não estiver logado
  if (!usuario) {
    return (
      <div className="text-center">
        <h4 className="mb-3">Meus Favoritos</h4>
        <p className="text-muted">Você precisa estar logado para ver seus eventos favoritos.</p>
        <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal-entrar">
          Fazer Login
        </button>
      </div>
    );
  }

  // Durante o carregamento
  if (isLoading) {
    return <div className="text-center"><div className="spinner-border text-info" role="status"><span className="visually-hidden">Carregando...</span></div></div>
  }

  // Em caso de erro
  if (isError) {
    return <p className="text-center text-danger">Erro ao carregar favoritos: {error.message}</p>;
  }

  return (
    <div>
      <h4 className="mb-3 text-info">Meus Favoritos</h4>
      {favoritos && favoritos.length > 0 ? (
        <ul className="list-group list-group-flush rounded-1">
          {favoritos.map(evento => <EventoItem key={evento.id} evento={evento} />)}
        </ul>
      ) : (
        <div className="text-center">
            <p className="text-muted mt-5">Você ainda não adicionou nenhum evento aos seus favoritos.</p>
            <Link to="/" className="btn btn-outline-info">Ver todos os eventos</Link>
        </div>
      )}
    </div>
  );
};

export default FavoritosPage;