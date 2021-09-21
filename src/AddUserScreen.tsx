import React, { useState } from 'react';
import { newUserValidation } from './Validations';

export default function newUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  const todayDate = new Date();
  const maxDate = todayDate.toISOString().split('T')[0];

  function handleSubmit(e: any) {
    e.preventDefault();
    newUserValidation(name, email, password, phone, birthDate, role);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Adicionar Usuário</h1>
        <form className='Add-user'>
          <div>
            <label className='form-label'>Nome:</label>
            <input type='text' id='name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>E-mail:</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='####@####.com' />
          </div>
          <div>
            <label className='form-label'>Senha:</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Telefone:</label>
            <input type='number' id='phone' onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Data de Nascimento:</label>
            <input type='date' id='birthDate' max={maxDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <div>
            <label className='form-label'> Função:</label>
            <select id='role' onChange={(e) => setRole(e.target.value)}>
              <option value='admin'>Administrador</option>
              <option value='user'>Usuário</option>
            </select>
          </div>
          <div>
            <button type='submit' onClick={handleSubmit}>
              Adicionar
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
