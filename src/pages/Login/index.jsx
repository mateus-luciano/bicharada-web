import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const dispatch = useDispatch();

  async function handleStoreLogin(e) {
    e.preventDefault();
    console.log('aqui');
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      console.log(response.data);
      const isAdmin = response?.data?.user?.admin;
      dispatch(userActions.login(response.data));
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
        <Form>
          <h2>Login</h2>
          <Input
            desk
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            desk
            id="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="button" onClick={handleStoreLogin}>
            Entrar
          </Button>
        </Form>
      </LoginSection>
    </LoginContainer>
  );
};
