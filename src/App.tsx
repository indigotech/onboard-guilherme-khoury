import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem Vindo(a) à Taqtile</h1>
        <label>
          E-mail:
        </label>
        <input type="email"/>
        <br/>
        <label>
          Senha:
        </label>
        <input type="password"/>
        <br/>
        <button type="submit">Entrar</button>
      </header>
    </div>
  );
}

export default App;
