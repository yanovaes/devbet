import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';

// 1. Esquema de validação com Zod
const schema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
  confirmacaoSenha: z.string()
}).refine(data => data.senha === data.confirmacaoSenha, {
  message: "As senhas não correspondem.",
  path: ["confirmacaoSenha"], // O erro será exibido no campo de confirmação
});

// Extrai o tipo do esquema para usar no formulário
type FormData = z.infer<typeof schema>;

const CadastroPage = () => {
  // 2. Configuração do React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // 3. Função de submissão (por enquanto, apenas exibe no console)
  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário válidos:", data);
    // TODO: Aqui você fará a chamada para a API do backend no futuro
    alert("Cadastro realizado com sucesso! (verifique o console)");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body p-4 p-md-5">
            <h2 className="text-center mb-4 header-criar-offcanvas">Crie sua Conta</h2>
            
            {/* 4. Formulário JSX */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                <label htmlFor="email">E-mail</label>
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
                  id="senha"
                  placeholder="Senha"
                  {...register("senha")}
                />
                <label htmlFor="senha">Senha</label>
                {errors.senha && <div className="invalid-feedback">{errors.senha.message}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${errors.confirmacaoSenha ? 'is-invalid' : ''}`}
                  id="confirmacaoSenha"
                  placeholder="Confirme sua senha"
                  {...register("confirmacaoSenha")}
                />
                <label htmlFor="confirmacaoSenha">Confirme sua senha</label>
                {errors.confirmacaoSenha && <div className="invalid-feedback">{errors.confirmacaoSenha.message}</div>}
              </div>

              <button type="submit" className="btn btn-info w-100 py-2">
                Cadastrar
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;