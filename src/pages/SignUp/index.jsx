import { Input, Button } from '../../styles/global';

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
