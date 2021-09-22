import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { USERS_QUERY } from './UsersQuery';
import ReactPaginate from 'react-paginate';
import ClipLoader from 'react-spinners/ClipLoader';
import { useHistory } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const limit = 5;
const initialPage = 0;

export let userId = 0;

function usersList() {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const offset = currentPage * limit;
  const { loading, error, data, fetchMore } = useQuery(USERS_QUERY, {
    variables: {
      offset: offset,
      limit: limit,
    },
  });
  const history = useHistory();

  if (loading) {
    return (
      <div className='App'>
        <header className='App-header'>
          <ClipLoader />
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

  function handleAddClick() {
    history.push('/newuser');
  }

  const handleDetailClick = (id:number) => {
    userId = id;
    history.push('/details');
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
            <tr key={user.id} onClick={() => handleDetailClick(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
        <Fab onClick={handleAddClick} aria-label='add' size='medium' color='secondary'>
          <AddIcon />
        </Fab>
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

export default usersList;