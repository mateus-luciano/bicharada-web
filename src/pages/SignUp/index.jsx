import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input, Button } from '../../styles/global';

import Spinner from '../../components/Spinner';

import api from '../../services/api';

import * as userActions from '../../store/modules/user/actions';

import LoginImage from '../../assets/images/undraw_Access_account_re_8spm.svg';
import {
  SignUpContainer,
  SignUpSection,
  LoginSection,
  Title,
  IntLink,
  Image,
  Form,
} from './styles';

export default () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const dispatch = useDispatch();

  async function handleStoreLogin() {
    try {
      setLoading(true);

      const response = await api.post('/login', {
        email,
        password,
      });

      if (response) {
        dispatch(
          userActions.login(response.data),
        );
        history.push('/dashboard');
      }
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  }

  async function handleStoreSignUp(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
        city,
        region: 'bf682f61-1e48-46f3-80b8-fba86381ee8c',
      });

      if (response.status === 201) {
        // login
        handleStoreLogin();
      }
    } catch (error) {
      setShowErrorAlert(true);
      setLoading(false);
    }
    setLoading(false);
  }

  return(
    <SignUpContainer>
      <Spinner visible={loading} />
      <LoginSection>
        <Image src={LoginImage} />
        <Title>
          JÁ TEM CONTA?
        </Title>
        <IntLink to="/login">
          <Button>
            Entrar
          </Button>
        </IntLink>
      </LoginSection>
      <SignUpSection>
        <Form onSubmit={handleStoreSignUp}>
          <h2>Sign up</h2>
          <Input
            desk
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            desk
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            desk
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            desk
            name="phone"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            desk
            name="city"
            placeholder="Cidade"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit">
            Salvar
          </Button>
        </Form>
      </SignUpSection>
    </SignUpContainer>
  );
};
