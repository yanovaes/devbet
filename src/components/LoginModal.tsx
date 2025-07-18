import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, loginSchema, LoginFormData } from '../auth/AuthContext';

declare const bootstrap: any;

const LoginModal = () => {
  const navigate = useNavigate();
  // Renomeamos isLoading para isAuthLoading para clareza
  const { login, authError, isAuthLoading, usuario } = useAuth();

  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (err: any) {
      // Caso a função login lance um erro (futuro)
      setError("root.serverError", { type: "manual", message: err.message });
    }
  };

  // Efeito para fechar o modal apenas se o login for bem-sucedido
  useEffect(() => {
    if (usuario) {
      const modalElement = document.getElementById('modal-entrar');
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance?.hide();
        reset(); // Limpa o formulário
      }
    }
  }, [usuario, reset]);

  return (
    <div className="modal fade" id="modal-entrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modal-entrar-label" aria-hidden="true">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modal-label">Entre para jogar!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {authError && <div className="alert alert-danger">{authError}</div>}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  id="email-input"
                  placeholder="E-mail"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  {...register("email")} />
                <label htmlFor="email-input">E-mail</label>
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="senha-input"
                  placeholder="Senha"
                  className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
                  {...register("senha")} />
                <label htmlFor="senha-input">Senha</label>
                {errors.senha && <div className="invalid-feedback">{errors.senha.message}</div>}
              </div>
              <button type="submit" className="btn btn-info w-100" disabled={isAuthLoading}>
                {isAuthLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status" className="ms-2">Entrando...</span>
                  </>
                ) : ( "Entrar" )}
              </button>
            </form>
          </div>
          <div className="modal-footer d-flex flex-column align-items-center">
            <p>Não possui conta?</p>
            <button type="button" className="btn btn-link" data-bs-dismiss="modal" onClick={() => navigate('/cadastro')} style={{ textDecoration: 'none', color: 'var(--bs-info)', padding: 0 }}>
              Registre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;