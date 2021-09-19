import { useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import { USERS_QUERY } from '../GraphQL/UsersQuery';


export default function UsersList(){

    const {loading, error, data} = useQuery(USERS_QUERY);

    if (loading){
        return 'Carregando...';
    }

    if (error){
        return 'Erro! ${error.message}';
    }

    return(
    <div className="App">
        <header className="App-header">       
            <h1>Lista de Usuários</h1>
            <table className='Users-table'> 
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
                {data.users.nodes.map (user=> (
                    <tr>
                        <td key={user.id}>{user.name}</td>
                        <td key={user.id}>{user.email}</td>
                    </tr>
                ))}
            </table>
        </header>
    </div>
    )
  }
  