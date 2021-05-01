import { Input, Button } from '../../styles/global';

import LoginImage from '../../assets/images/undraw_Access_account_re_8spm.svg';

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
