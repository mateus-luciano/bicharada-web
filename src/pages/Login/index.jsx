import { Link } from 'react-router-dom';
import { Input, Button } from '../../styles/global';
import {
  LoginContainer,
  SignUpSection,
  LoginSection,
  Form,
} from './styles';

export default () => {
  return(
    <LoginContainer>
      <SignUpSection>
        AINDA NÃO TEM CONTA?
        <Button>
          <Link to="/sign-up">
            Cadastrar-se
          </Link>
        </Button>
      </SignUpSection>
      <LoginSection>
        <Form>
          <h2>Login</h2>
          <Input desk id="email" placeholder="E-mail" />
          <Input desk id="password" placeholder="Senha" />
          <Button>
            Entrar
          </Button>
        </Form>
      </LoginSection>
    </LoginContainer>
  );
};
