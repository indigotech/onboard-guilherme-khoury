import { useQuery } from '@apollo/client';
import React from 'react';
import { ClipLoader } from 'react-spinners';
import {DETAIL_QUERY} from './DetailsQuery';
import {userId} from './UsersList';
import {useHistory} from 'react-router-dom'; 

export default function detailScreen (){

    const {loading, error, data} = useQuery(DETAIL_QUERY,{
        variables:{
            id: userId,
        }
    })
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

      const userData = data.user;

      function handleBack(){
        history.push('/userslist');
      }

    return(
        <div className="App">
            <header className="App-header">
                <h1>Detalhes do Usuário</h1>
                <table className="Users-table">
                    <tbody>
                        <tr>
                            <td>Id:</td>
                            <td>{userData.id}</td>
                        </tr>
                        <tr>
                            <td>Nome:</td>
                            <td>{userData.name}</td>
                        </tr>
                        <tr>
                            <td>Telefone:</td>
                            <td>{userData.phone}</td>
                        </tr>
                        <tr>
                            <td>Data de Nascimento:</td>
                            <td>{userData.birthDate}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <td>Função:</td>
                            <td>{userData.role}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleBack}>Voltar</button>
            </header>
        </div>
    )
}
