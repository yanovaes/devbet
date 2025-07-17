import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import JogosPage from "../pages/JogosPage";
import ApostasPage from "../pages/ApostasPage";
import FavoritosPage from "../pages/FavoritosPage";
import SuportePage from "../pages/SuportePage";
import CadastroPage from '../pages/CadastroPage';
import ErroPage from "../pages/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      { index: true, element: <JogosPage /> },
      { path: "apostas", element: <ApostasPage /> },
      { path: "favoritos", element: <FavoritosPage /> },
      { path: "cadastro", element: <CadastroPage /> },
      { path: "suporte", element: <SuportePage /> },
    ],
  },
]);

export default router;
