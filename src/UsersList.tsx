import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { USERS_QUERY } from './UsersQuery';
import ReactPaginate from 'react-paginate';
import ClipLoader from 'react-spinners/ClipLoader';

const limit = 5;
const initialPage = 0;

export default function usersList() {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const offset = currentPage * limit;
  const { loading, error, data, fetchMore } = useQuery(USERS_QUERY, {
    variables: {
      offset: offset,
      limit: limit,
    },
  });

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <ClipLoader/>
        </header>
      </div>
    );
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const totalData = data.users.nodes;
  const pageCount = Math.ceil(data.users.count / limit);

  async function handlePageClick({ selected: selectedPage }) {
    try {
      await fetchMore({
        variables: {
          offset: totalData.length,
          limit: limit,
        },
      });
      setCurrentPage(selectedPage);
    } catch (error) {
      alert(error);
    }
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
          {totalData.map((user) => (
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
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName={'pagination'}
          disableInitialCallback={true}
          initialPage={currentPage}
        />
      </header>
    </div>
  );
}
