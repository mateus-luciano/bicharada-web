import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import {  } from '@material-ui/core';
import { Input, Button } from '../../styles/global';

import LoginImage from '../../assets/images/undraw_Access_account_re_8spm.svg';

import api from '../../services/api';

import * as userActions from '../../store/modules/user/actions';

import {
  LoginContainer,
  SignUpSection,
  LoginSection,
  Image,
  Title,
  IntLink,
  Form,
} from './styles';

export default () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const dispatch = useDispatch();

  async function handleStoreLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      // const tokenApi = response?.data?.token;
      const { uid, name } = response?.data?.user;
      console.log(uid, name);
      // console.log(tokenApi);
      // localStorage.setItem('token', tokenApi);
      console.log(response.data);
      const isAdmin = response?.data?.user?.admin;
      console.log(isAdmin);
      // dispatch(userActions.login(response.data));
      if (response) {
        dispatch(
          userActions.login(response.data),
        );
        history.push('/dashboard');
      }
    } catch (error) {
      setShowErrorAlert(true);
    }
  }

  return(
    <LoginContainer>
      <SignUpSection>
        <Image src={LoginImage} />
        <Title>
          AINDA NÃO TEM CONTA?
        </Title>
        <IntLink to="/sign-up">
          <Button>
            Cadastrar-se
          </Button>
        </IntLink>
      </SignUpSection>
      <LoginSection>
        <Form onSubmit={handleStoreLogin}>
          <h2>Login</h2>
          <Input
            desk
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            desk
            name="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">
            Entrar
          </Button>
        </Form>
      </LoginSection>
    </LoginContainer>
  );
};
