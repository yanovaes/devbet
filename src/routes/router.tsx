import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import JogosPage from "../pages/JogosPage";
import ApostasPage from "../pages/ApostasPage";
import SuportePage from "../pages/SuportePage";
import FavoritosPage from '../pages/FavoritosPage';
import CadastroPage from '../pages/CadastroPage';
import AdminPage from '../pages/AdminPage';
import RotaProtegida from '../auth/RotaProtegida';
import ErroPage from "../pages/ErroPage";
import BilhetePage from '../pages/BilhetePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      { index: true, element: <JogosPage /> },
      { path: "apostas", element: <ApostasPage /> },
      { path: "favoritos", element: <FavoritosPage /> },
      { path: "suporte", element: <SuportePage /> },
      { path: "cadastro", element: <CadastroPage /> },
      { path: "bilhete", element: <BilhetePage /> },
      {
        element: <RotaProtegida />,
        children: [
          { path: "admin", element: <AdminPage /> }
        ]
      }
    ],
  },
]);

export default router;
