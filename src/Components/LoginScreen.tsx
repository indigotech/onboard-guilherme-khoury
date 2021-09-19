import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Validation } from './Validations';
import { LOGIN_MUTATION } from '../GraphQL/LoginMutation';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';


interface LoginMutation {
  login: {
    token: string;
  }
} 

function LoginScreen () {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginSubmission, { loading }] = useMutation<LoginMutation>(LOGIN_MUTATION);
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  if(loading){
    console.log('Submetendo...');
  }

  const loginMutation = async (login:string, password: string) => {
    if (Validation(login, password)){
      try{ 
        const resposta = await loginSubmission({
          variables: {
            email: login,
            password: password,
          },
        });
        console.log(resposta);
        localStorage.setItem('token', resposta.data?.login?.token);
        return true;
      }
      catch(error){
        console.log(error);
        alert(error);
        return false;
      }
    }
  }

  async function HandleSubmit(e:any){
    e.preventDefault();
    setLoading(true);
    if(await loginMutation(login, password)){
        history.push("/userslist");
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Bem Vindo(a) à Taqtile</h1>
        <form>
          <div>
            <label>
              E-mail:
            </label>
            <input 
              id="login"
              onChange = {event => setLogin(event.target.value)}/>
          </div>
          
          <div>
            <label>
              Senha:
            </label>
            <input 
              id="senha"
              type = "password"
              onChange = {event => setPassword(event.target.value)}/>
          </div>
          
          <div>
            <button type="submit"
              onClick = {HandleSubmit}
              hidden={isLoading}>Entrar</button>
            <ClipLoader loading={isLoading}/>
          </div>
          
        </form>
      </header>
      
    </div>
  );
}

export default LoginScreen;
