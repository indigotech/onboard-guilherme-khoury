const loginPattern = /\S+@\S+\.com/;
const passwordPattern1 = /\S*[A-Za-z]+\S*\d+\S*/;
const passwordPattern2 = /\S*\d+\S*[A-Za-z]+\S*/;

export const loginValidation = (login: string, password: string) => {
  if (login === '') {
    alert("Por favor, preencha o campo 'E-mail'!");
    return false;
  } else if (login.match(loginPattern) === null) {
    alert("Por favor, obedeça o formato '####@####.com'!");
    return false;
  }
  if (password === '') {
    alert("Por favor, preencha o campo 'Senha'!");
    return false;
  }
  if (password.length < 7) {
    alert('A senha deve conter pelo menos 7 caracteres!');
    return false;
  }
  if (password.match(passwordPattern1) === null && password.match(passwordPattern2) === null) {
    alert('A senha deve conter pelo menos 1 letra e 1 número!');
    return false;
  }
  return true;
};

const emailPattern = /\S+@\S+\.com/;
const alertMessage = 'Por favor, preencha todos os campos!';

export const newUserValidation = (
  name: string,
  email: string,
  password: string,
  phone: string,
  birthDate: string,
  role: string,
) => {
  if (name === '') {
    alert(alertMessage);
    return false;
  }

  if (email === '') {
    alert(alertMessage);
    return false;
  }

  if (email.match(emailPattern) === null) {
    alert('Por favor, preencha o campo E-mail com o formato ####@####.com');
    return false;
  }

  if (password === '') {
    alert(alertMessage);
    return false;
  }

  if (phone === '') {
    alert(alertMessage);
    return false;
  }

  if (phone.length < 8) {
    alert('Por favor, preenche com um número de telefone válido!');
    return false;
  }

  if (birthDate === '') {
    alert(alertMessage);
    return false;
  }

  if (role === '') {
    alert(alertMessage);
    return false;
  }

  return true;
};
