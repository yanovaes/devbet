import React from 'react';
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErroPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="container" style={{ paddingTop: '160px' }}>
        <h5 className="text-danger">Ocorreu um Erro</h5>
        <hr className="mt-1" />
        <p>
          {isRouteErrorResponse(error)
            ? "Página não encontrada ou inválida."
            : error instanceof Error
            ? error.message
            : "Um erro desconhecido ocorreu."}
        </p>
      </div>
    </>
  );
};
export default ErroPage;