import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Button } from '../../styles/global';
import Spinner from '../../components/Spinner';
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
  Input,
  CollapseDiv as Collapse,
} from './styles';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [messageErrorAlert, setMessageErrorAlert] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  async function handleStoreLogin(e) {
    e.preventDefault();

    setShowAlert(false);
    setShowErrorAlert(false);
    setLoading(true);
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      // const tokenApi = response?.data?.token;
      // console.log(tokenApi);
      // localStorage.setItem('token', tokenApi);
      const isAdmin = response?.data?.user?.admin;
      // dispatch(userActions.login(response.data));
      if (response) {
        dispatch(
          userActions.login(response.data),
        );
        history.push('/dashboard');
      }
      setLoading(false);
      setShowAlert(true);
    } catch (error) {
      setLoading(false);
      setShowErrorAlert(true);
      setShowAlert(true);

      if (error?.response?.data?.message) {
        setMessageErrorAlert(error?.response?.data?.message);
      } else {
        setMessageErrorAlert(
          'Erro ao tentar logar. Tente novamente mais tarde.',
        );
      }
    }
    setEmail('');
    setPassword('');
    setLoading(false);
  }

  return(
    <LoginContainer>
      <Spinner visible={loading} />
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
            id="email"
            label="E-mail"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AccountCircleIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Input
            id="password"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit">
            Entrar
          </Button>
        </Form>
        <Collapse in={showAlert}>
          {showErrorAlert && (
            <Alert severity="error">{messageErrorAlert}</Alert>
          )}
        </Collapse>
      </LoginSection>
    </LoginContainer>
  );
};
