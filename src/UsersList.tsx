import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { USERS_QUERY } from './UsersQuery';

export default function usersList() {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) {
    return 'Carregando...';
  }

  if (error) {
    return 'Erro! ${error.message}';
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
          {data.users.nodes.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}
