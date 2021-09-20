import React, { useState } from 'react';
import { NewUserValidation } from './Validations';

export default function newUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  const todayDate = new Date();
  const year = todayDate.getFullYear().toString();
  const month = todayDate.getMonth() + 1;

  let monthString = '';
  if (month < 10) {
    monthString = '0'.concat(month.toString());
  } else {
    monthString = month.toString();
  }

  const day = todayDate.getDate();
  let dayString = '';
  if (day < 10) {
    dayString = '0'.concat(day.toString());
  } else {
    dayString = day.toString();
  }

  const maxDate = year.concat('-', monthString, '-', dayString);

  function handleSubmit(e: any) {
    e.preventDefault();
    NewUserValidation(name, email, phone, birthDate, role);
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
            <label className='form-label'>Telefone:</label>
            <input type='number' id='phone' onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Data de Nascimento:</label>
            <input type='date' id='birthDate' max={maxDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <div>
            <label className='form-label'> Papel:</label>
            <input type='text' id='role' onChange={(e) => setRole(e.target.value)} />
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
