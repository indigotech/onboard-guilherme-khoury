import React from 'react';
import './App.css';

export default function UsersList(){

    const users = [
        {name: 'Taqtile', email: 'admin@taqtile.com.br'},
        {name: 'Guilherme', email: 'gui.khoury@gmail.com'},
        {name: 'João', email: 'joão@gmail.com'},
        {name: 'Maria', email: 'maria@gmail.com'},
        {name: 'Carlos', email: 'carlos@gmail.com'}
    ];

    return(
    <div className="App">
        <header className="App-header">       
            <h1>Lista de Usuários</h1>
            <table className='Users-table'> 
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
                {users.map(users => (
                    <tr>
                        <td key={users.name}>{users.name}</td>
                        <td key={users.name}>{users.email}</td>
                    </tr>
                ))}
            </table>
        </header>
    </div>
    )
  }
  