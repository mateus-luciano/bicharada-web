import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';

import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
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
} from './styles';

export default () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

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
        // todo login
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
            id="email"
            label="E-mail"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="name"
            label="Nome"
            type="text"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              />
            )}
          </InputMask>
          <SelectContainer>
            <FormControl
              style={{ width: 170 }}
              variant="outlined"
            >
              <Select
                value={region}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" disabled>
                  Região
                </MenuItem>
                <MenuItem value={1}>Vale do Paranhana</MenuItem>
                <MenuItem value={2}>Vale do Sinos</MenuItem>
              </Select>
              <FormHelperText>Selecione a sua região</FormHelperText>
            </FormControl>
            <FormControl
              style={{ width: 170 }}
              variant="outlined"
            >
              { region === 1 ? (
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" disabled>
                    Cidade
                  </MenuItem>
                  <MenuItem value="Parobé">Parobé</MenuItem>
                  <MenuItem value="Taquara">Taquara</MenuItem>
                  <MenuItem value="Igrjinha">Igrejinha</MenuItem>
                </Select>
              ) : (
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="" disabled>
                    Cidade
                  </MenuItem>
                  <MenuItem value="Sapiranga">Sapiranga</MenuItem>
                  <MenuItem value="Campo Bom">Campo Bom</MenuItem>
                  <MenuItem value="Novo Hamburgo">Novo Hamburgo</MenuItem>
                  <MenuItem value="Araricá">Araricá</MenuItem>
                </Select>
              ) }
              <FormHelperText>Selecione a sua cidade</FormHelperText>
            </FormControl>
          </SelectContainer>
          <Button type="submit">
            Salvar
          </Button>
        </Form>
      </SignUpSection>
    </SignUpContainer>
  );
};
