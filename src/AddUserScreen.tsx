import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { CREATE_USER } from './AddUserMutation';
import { newUserValidation } from './Validations';
import { useHistory } from 'react-router-dom';

export interface UserData {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  role: string;
}

export default function newUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    role: '',
  });

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

  const userMutation = async (user: UserData) => {
    if (newUserValidation(user)) {
      try {
        await userSubmission({
          variables: {
            data: user,
          },
        });
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    }
  };

  const handleInputChange = (event: { target: { id: string; value: string } }) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (await userMutation(user)) {
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
            <input type='text' id='name' onChange={handleInputChange} />
          </div>
          <div>
            <label className='form-label'>E-mail:</label>
            <input type='email' id='email' onChange={handleInputChange} placeholder='####@####.com' />
          </div>
          <div>
            <label className='form-label'>Senha:</label>
            <input type='password' id='password' onChange={handleInputChange} />
          </div>
          <div>
            <label className='form-label'>Telefone:</label>
            <input type='number' id='phone' onChange={handleInputChange} />
          </div>
          <div>
            <label className='form-label'>Data de Nascimento:</label>
            <input type='date' id='birthDate' max={maxDate} onChange={handleInputChange} />
          </div>
          <div>
            <label className='form-label'> Função:</label>
            <select id='role' onChange={handleInputChange}>
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
