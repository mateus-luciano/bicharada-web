import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

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
  TitleForm,
  IntLink,
  Form,
  Input,
  CollapseDiv as Collapse,
  LinkForgotPassword,
  InputAdornmentDiv as InputAdornment,
  IconButtonDiv as IconButton,
  ContainerInputs,
} from './styles';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [messageErrorAlert, setMessageErrorAlert] = useState();
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [mobile, setMobile] = useState(false);
  // const [state, setState] = useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'center',
  // });

  const isMobile = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    isMobile();
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setState({ ...state, open: false });
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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
      // const isAdmin = response?.data?.user?.admin;
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

  window.addEventListener('resize', isMobile);

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
          <TitleForm>
            Acesse sua conta
          </TitleForm>
          { mobile ? (
            <ContainerInputs>
              <Input
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                required
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInputs>
          ) : (
            <ContainerInputs>
              <Input
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                required
                value={email}
                autoComplete="off"
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
                required
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
            </ContainerInputs>
          ) }
          {/* <Input
            id="email"
            label="E-mail"
            type="email"
            variant="outlined"
            required
            value={email}
            autoComplete="off"
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
            required
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
          /> */}
          <Button
            type="submit"
          >
            Entrar
          </Button>
          <LinkForgotPassword to="/forgot-password">
            Esqueceu sua senha?
          </LinkForgotPassword>
        </Form>
        <Collapse in={showAlert}>
          {showErrorAlert && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
              >
                {messageErrorAlert}
              </Alert>
            </Snackbar>
          )}
        </Collapse>
      </LoginSection>
    </LoginContainer>
  );
};
