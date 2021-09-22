import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { CREATE_USER } from './AddUserMutation';
import { newUserValidation } from './Validations';
import { useHistory } from 'react-router-dom';

export default function newUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  const todayDate = new Date();
  const maxDate = todayDate.toISOString().split('T')[0];

  const history = useHistory();
  const [userSubmission, { loading }] = useMutation(CREATE_USER);

  if (loading) {
    return (
      <div className='App'>
        <header className='App-header'>
          <ClipLoader />
        </header>
      </div>
    );
  }

  const userMutation = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    birthDate: string,
    role: string,
  ) => {
    if (newUserValidation(name, email, password, phone, birthDate, role)) {

      try {
        await userSubmission({
          variables: {
            data: {
              name: name,
              email: email,
              phone: phone,
              birthDate: birthDate,
              password: password,
              role: role
            }
          }
        });
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (await userMutation(name, email, password, phone, birthDate, role)) {
      history.push('/userslist');
    }
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
