import { useState } from 'react';
import { Input, Button } from '../../styles/global';

import api from '../../services/api';

import LoginImage from '../../assets/images/undraw_Access_account_re_8spm.svg';
// Fazer o esquema de quando estiver tudo clearTimeout, entra o loading e
// faz o login e depois redireciona
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  async function handleStoreSignUp(e) {
    e.preventDefault();

    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
        city,
      });
    } catch (error) {
      setShowErrorAlert(true);
    }
  }

  return(
    <SignUpContainer>
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
