import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { useFavoritosStore } from '../store/useFavoritosStore';
import { fetchFavoritos } from '../services/favoritoService';

export interface Usuario {
  username: string;
  role: 'ADMIN' | 'USER';
}

interface AuthContextType {
  usuario: Usuario | null;
  login: (dados: LoginFormData) => Promise<void>;
  logout: () => void;
  authError: string | null;
  isAuthLoading: boolean; // Renomeado de isLoading para ser mais específico
}

export const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string().min(1, { message: "A senha é obrigatória." }),
});
export type LoginFormData = z.infer<typeof loginSchema>;

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false); // Carregamento específico do login
  const [isInitializing, setIsInitializing] = useState(true); // Carregamento inicial da app
  
  const { setFavoritos } = useFavoritosStore.getState();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const usuarioSalvo = localStorage.getItem('usuario_devbet');
        if (usuarioSalvo) {
          const user = JSON.parse(usuarioSalvo);
          setUsuario(user);
          const favoritos = await fetchFavoritos(user.username);
          setFavoritos(favoritos.map(f => f.id));
        }
      } catch (error) {
        console.error("Falha ao inicializar sessão:", error);
        localStorage.removeItem('usuario_devbet');
      } finally {
        setIsInitializing(false);
      }
    };
    checkUser();
  }, []);

  const login = async (dados: LoginFormData) => {
    setIsAuthLoading(true);
    setAuthError(null);
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      if (dados.email.toLowerCase() === 'admin@devbet.com' && dados.senha === 'admin123') {
        const novoUsuario: Usuario = { username: 'Admin', role: 'ADMIN' };
        localStorage.setItem('usuario_devbet', JSON.stringify(novoUsuario));
        setUsuario(novoUsuario);
        const favoritos = await fetchFavoritos(novoUsuario.username);
        setFavoritos(favoritos.map(f => f.id));
      } else if (dados.senha === 'user123') {
        const novoUsuario: Usuario = { username: dados.email, role: 'USER' };
        localStorage.setItem('usuario_devbet', JSON.stringify(novoUsuario));
        setUsuario(novoUsuario);
        const favoritos = await fetchFavoritos(novoUsuario.username);
        setFavoritos(favoritos.map(f => f.id));
      } else {
        throw new Error("E-mail ou senha inválidos.");
      }
    } catch (err: any) {
      setAuthError(err.message);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('usuario_devbet');
    setUsuario(null);
    setFavoritos([]);
  };

  if (isInitializing) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="spinner-border text-info" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, authError, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};