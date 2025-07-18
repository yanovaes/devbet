import React from 'react';

interface PaginacaoProps {
  pagina: number;
  totalPaginas: number;
  onPageChange: (page: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ pagina, totalPaginas, onPageChange }) => {
    if (totalPaginas <= 1) return null;

    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${pagina === 0 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(pagina - 1)}>Anterior</button>
                </li>
                {[...Array(totalPaginas).keys()].map(num => (
                    <li key={num} className={`page-item ${num === pagina ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(num)}>{num + 1}</button>
                    </li>
                ))}
                <li className={`page-item ${pagina === totalPaginas - 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(pagina + 1)}>Próxima</button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginacao;