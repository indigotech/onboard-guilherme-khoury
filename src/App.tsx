import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const Validation = (login:string, password:string) => {

    const loginPattern = /\S+@\S+\.com/;
    const passwordPattern1 = /\S*[A-Za-z]+\S*\d+\S*/;
    const passwordPattern2 = /\S*\d+\S*[A-Za-z]+\S*/;
    
    if (login === ""){
      alert("Por favor, preencha o campo 'E-mail'!");
      return false;
    }
    if (login.match(loginPattern) === null){
      alert("Por favor, obedeça o formato '####@####.com'!");
      return false;
    }
    if (password === ""){
      alert("Por favor, preencha o campo 'Senha'!");
      return false;
    }
    if (password.length < 7){
      alert("A senha deve conter pelo menos 7 caracteres!");
      return false;
    }
    if (password.match(passwordPattern1) === null && password.match(passwordPattern2) === null){
      alert("A senha deve conter pelo menos 1 letra e 1 número!");
      return false;
    }
    return true;
  }; 

  return (
    <div className="App">
      <header className="App-header">

        <h1>Bem Vindo(a) à Taqtile</h1>
        <form>
          <label>
            E-mail:
          </label>
          <input 
            id="login"
            onChange = {event => setLogin(event.target.value)}/>

          <div></div>

          <label>
            Senha:
          </label>
          <input 
            id="senha"
            onChange = {event => setPassword(event.target.value)}/>

          <div></div>
  
          <button type="submit" onClick = {() => Validation(login, password)}>Entrar</button>
        </form>

      </header>
    </div>
  );
}


export default App;



