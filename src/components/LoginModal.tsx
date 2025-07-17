import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

// Esquema de validação com Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string().min(1, { message: "A senha não pode estar em branco." }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginModal = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados do login:", data);
    // TODO: Futuramente, aqui será a chamada para a API de autenticação.
    alert("Login enviado com sucesso! (verifique o console)");
  };

  return (
    <div className="modal fade" id="modal-entrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modal-entrar-label" aria-hidden="true">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modal-label">Entre para jogar!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email-input"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <label htmlFor="email-input">E-mail</label>
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
                  id="senha-input"
                  placeholder="Senha"
                  {...register("senha")}
                />
                <label htmlFor="senha-input">Senha</label>
                {errors.senha && <div className="invalid-feedback">{errors.senha.message}</div>}
              </div>
              <button type="submit" className="btn btn-info w-100">Entrar</button>
            </form>
          </div>
          <div className="modal-footer d-flex flex-column align-items-center">
            <p>Não possui conta?</p>
            <button
              type="button"
              className="btn btn-link"
              data-bs-dismiss="modal"
              onClick={() => navigate('/cadastro')}
              style={{ textDecoration: 'none', color: 'var(--bs-info)', padding: 0,
              }}
            >
              Registre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;