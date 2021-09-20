import React, { useState } from 'react';
import './App.css';
import { loginValidation } from './Validations';
import { LOGIN_MUTATION } from './LoginMutation';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoginMutation {
  login: {
    token: string;
  };
}

function loginScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginSubmission, { loading }] = useMutation<LoginMutation>(LOGIN_MUTATION);
  const history = useHistory();

  const loginMutation = async (login: string, password: string) => {
    if (loginValidation(login, password)) {
      try {
        const resposta = await loginSubmission({
          variables: {
            email: login,
            password: password,
          },
        });
        console.log(resposta);
        localStorage.setItem('token', resposta.data?.login?.token);
        return true;
      } catch (error) {
        alert(error);
        return false;
      }
    }
  };

  async function HandleSubmit(e: any) {
    e.preventDefault();
    if (await loginMutation(login, password)) {
      history.push('/userslist');
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Bem Vindo(a) à Taqtile</h1>
        <form>
          <div>
            <label>E-mail:</label>
            <input id='login' onChange={(event) => setLogin(event.target.value)} />
          </div>

          <div>
            <label>Senha:</label>
            <input id='senha' type='password' onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div>
            <button type='submit' onClick={HandleSubmit} hidden={loading}>
              Entrar
            </button>
            <ClipLoader loading={loading} />
          </div>
        </form>
      </header>
    </div>
  );
}

export default loginScreen;
