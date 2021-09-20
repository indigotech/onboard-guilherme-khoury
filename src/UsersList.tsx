import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { USERS_QUERY } from './UsersQuery';
import ReactPaginate from 'react-paginate';

export default function usersList() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [currentPage, setCurrentPage] = useState(0);
  const dataPerPage = 5;
  const offset = currentPage * dataPerPage;

  if (loading) {
    return 'Carregando...';
  }

  if (error) {
    return 'Erro!' + `${error.message}`;
  }

  const totalData = data.users.nodes;
  const currentData = totalData.slice(offset, offset + dataPerPage);
  const pageCount = Math.ceil(totalData.length / dataPerPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lista de Usuários</h1>
        <table className='Users-table'>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      </header>
    </div>
  );
}
