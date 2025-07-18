import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/eventos",
});

// Interceptor que adiciona o token a cada requisição
api.interceptors.request.use((config) => {
  const usuarioSalvo = localStorage.getItem('usuario_devbet');
  if (usuarioSalvo) {
    const usuario = JSON.parse(usuarioSalvo);
    if (usuario.token) {
      config.headers.Authorization = `Bearer ${usuario.token}`;
    }
  }
  return config;
});

export default api;