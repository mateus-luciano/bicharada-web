import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';

import MuiAlert from '@material-ui/lab/Alert';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
} from '@material-ui/core';

import { Button } from '../../styles/global';

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
  Input,
  SelectContainer,
  CollapseDiv as Collapse,
  LinkUseTerms,
  TitleForm,
} from './styles';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [messageSuccessAlert, setMessageSuccessAlert] = useState();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [messageErrorAlert, setMessageErrorAlert] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  const [open, setOpen] = useState(true);

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  async function handleStoreLogin() {
    setLoading(true);
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      if (response) {
        dispatch(
          userActions.login(response.data),
        );
        history.push('/dashboard');
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  }

  async function handleStoreSignUp(e) {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
      setShowAlert(true);
      setShowErrorAlert(true);
      setMessageErrorAlert('Erro, Senha deve conter no mínimo 8 caracteres');
      setLoading(false);
    } else {
      setShowAlert(false);
      setShowErrorAlert(false);
      setShowSuccessAlert(false);
      setLoading(true);

      try {
        const response = await api.post('/users', {
          name,
          email,
          password,
          phone,
          city,
          region,
        });

        if (response.status === 201) {
        // todo login
          handleStoreLogin();
        }
        setLoading(false);
        setShowSuccessAlert(true);
        setShowAlert(true);

        if (response?.data?.message) {
          setMessageSuccessAlert(response?.data?.message);
        } else {
          setMessageSuccessAlert('Usuário cadastrado!');
        }
      } catch (error) {
        setLoading(false);
        setShowErrorAlert(true);
        setShowAlert(true);

        if (error?.response?.data?.message) {
          setMessageErrorAlert(error?.response?.data?.message);
        } else {
          setMessageErrorAlert(
            'Erro ao tentar cadastrar o usuário. Tente novamente mais tarde.',
          );
        }
      }
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setCity('');
      setRegion('');
      setLoading(false);
    }
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
          <TitleForm>
            Sign up
          </TitleForm>
          <Input
            id="email"
            label="E-mail"
            type="email"
            variant="outlined"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            helperText="Use um endereço de e-mail válido"
          />
          { passwordError ? (
            <Input
              error
              id="password"
              label="Senha"
              type="password"
              variant="outlined"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              helperText="Mínimo de 8 dígito"
            />
          ) : (
            <Input
              id="password"
              label="Senha"
              type="password"
              variant="outlined"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              helperText="Mínimo de 8 dígito"
            />
          )}
          <Input
            id="name"
            label="Nome"
            type="text"
            variant="outlined"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            helperText="Use apenas letras"
          />
          <InputMask
            mask="(99) 9 9999-9999"
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <Input
                id="phone"
                label="Celular"
                type="text"
                variant="outlined"
                required
                helperText="Use um número de celular válido"
              />
            )}
          </InputMask>
          <SelectContainer>
            <FormControl
              style={{ width: 180 }}
              variant="outlined"
            >
              <Select
                value={region}
                style={{ background: '#c7c7c7' }}
                onChange={handleChangeRegion}
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" disabled>
                  Região
                </MenuItem>
                <MenuItem value="bf682f61-1e48-46f3-80b8-fba86381ee8c">Vale do Paranhana</MenuItem>
                <MenuItem value="06a3f7a3-60b5-45f6-bbb7-939b39a7412c">Vale do Sinos</MenuItem>
              </Select>
              <FormHelperText>Selecione a sua região</FormHelperText>
            </FormControl>
            <FormControl
              style={{ width: 180 }}
              variant="outlined"
            >
              { region === 'bf682f61-1e48-46f3-80b8-fba86381ee8c' ? (
                <Select
                  value={city}
                  style={{ background: '#c7c7c7' }}
                  onChange={handleChangeCity}
                  displayEmpty
                  required
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" disabled>
                    Cidade
                  </MenuItem>
                  <MenuItem value="Igrjinha">Igrejinha</MenuItem>
                  <MenuItem value="Lindolfo Collor">Lindolfo Collor</MenuItem>
                  <MenuItem value="Morro Reuter">Morro Reuter</MenuItem>
                  <MenuItem value="Parobé">Parobé</MenuItem>
                  <MenuItem value="Presidente Lucena">Presidente Lucena</MenuItem>
                  <MenuItem value="Riozinho">Riozinho</MenuItem>
                  <MenuItem value="Rolante">Rolante</MenuItem>
                  <MenuItem value="Santa Maria do Herval">Santa Maria do Herval</MenuItem>
                  <MenuItem value="Taquara">Taquara</MenuItem>
                  <MenuItem value="Três Coroas">Três Coroas</MenuItem>
                </Select>
              ) : (
                <Select
                  value={city}
                  style={{ background: '#c7c7c7' }}
                  onChange={handleChangeCity}
                  displayEmpty
                  required
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" disabled>
                    Cidade
                  </MenuItem>
                  <MenuItem value="Araricá">Araricá</MenuItem>
                  <MenuItem value="Campo Bom">Campo Bom</MenuItem>
                  <MenuItem value="Canoas">Canoas</MenuItem>
                  <MenuItem value="Dois Irmãos">Dois Irmãos</MenuItem>
                  <MenuItem value="Estância Velha">Estância Velha</MenuItem>
                  <MenuItem value="Esteio">Esteio</MenuItem>
                  <MenuItem value="Ivoti">Ivoti</MenuItem>
                  <MenuItem value="Nova Hartz">Nova Hartz</MenuItem>
                  <MenuItem value="Nova Santa Rita">Nova Santa Rita</MenuItem>
                  <MenuItem value="Novo Hamburgo">Novo Hamburgo</MenuItem>
                  <MenuItem value="Portão">Portão</MenuItem>
                  <MenuItem value="São Leopoldo">São Leopoldo</MenuItem>
                  <MenuItem value="Sapiranga">Sapiranga</MenuItem>
                  <MenuItem value="Sapucaia do Sul">Sapucaia do Sul</MenuItem>
                </Select>
              ) }
              <FormHelperText>Selecione a sua cidade</FormHelperText>
            </FormControl>
          </SelectContainer>
          <Button
            type="submit"
          >
            Salvar
          </Button>
          {/* <Collapse in={showAlert}>
            {showErrorAlert && (
              <Alert severity="error">{messageErrorAlert}</Alert>
            )}
            {showSuccessAlert && (
              <Alert severity="success">{messageSuccessAlert}</Alert>
            )}
          </Collapse> */}
          <Collapse in={showAlert}>
            {showErrorAlert && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert onClose={handleClose} severity="error">
                {messageErrorAlert}
              </Alert>
            </Snackbar>
            )}
            {showSuccessAlert && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert onClose={handleClose} severity="success">
                {messageSuccessAlert}
              </Alert>
            </Snackbar>
            )}
          </Collapse>
          <LinkUseTerms to="/use-terms">
            Termos de uso
          </LinkUseTerms>
        </Form>
      </SignUpSection>
    </SignUpContainer>
  );
};
