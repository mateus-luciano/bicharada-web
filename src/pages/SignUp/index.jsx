import { Link } from 'react-router-dom';
import { Input, Button } from '../../styles/global';
import {
  SignUpContainer,
  SignUpSection,
  LoginSection,
  Form,
} from './styles';

export default () => {
  return(
    <SignUpContainer>
      <LoginSection>
        JÁ TEM CONTA?
        <Button>
          <Link to="/login">
            Entrar
          </Link>
        </Button>
      </LoginSection>
      <SignUpSection>
        <Form>
          <h2>Sign up</h2>
          <Input desk id="firstName" placeholder="Nome" />
          <Input desk id="lastName" placeholder="Sobrenome" />
          <Input desk id="email" placeholder="E-mail" />
          <Input desk id="password" placeholder="Senha" />
          <Button>
            Salvar
          </Button>
        </Form>
      </SignUpSection>
    </SignUpContainer>
  );
};
