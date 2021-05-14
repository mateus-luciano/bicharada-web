import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MuiAlert from '@material-ui/lab/Alert';
import {
  Collapse,
  Snackbar,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

import Spinner from '../../components/Spinner';

import api from '../../services/api';

import {
  AdoptionContainer,
  Form,
  Input,
  Title,
  ButtonAdd,
} from './styles';

export default () => {
  const userData = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [newAdoption, setNewAdoption] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [messageSuccessAlert, setMessageSuccessAlert] = useState();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [messageErrorAlert, setMessageErrorAlert] = useState();
  const [open, setOpen] = useState(true);

  const handleChange = (event) => {
    setType(event.target.value);
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

  async function handleStoreAdoption() {
    setShowAlert(false);
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
    setLoading(true);
    try {
      const response = await api.post('/adoptions', {
        title,
        description,
        address,
        type,
        user_uid: userData?.user?.uid,
        region: 'bf682f61-1e48-46f3-80b8-fba86381ee8c',
      }, {
        headers: { Authorization: `Bearer ${userData?.token}` },
      });
      setNewAdoption(response?.data);
      setLoading(false);
      setShowSuccessAlert(true);
      setShowAlert(true);
      if (response?.data?.message) {
        setMessageSuccessAlert(response?.data?.message);
      } else {
        setMessageSuccessAlert('Adoção cadastrada!');
      }
    } catch (error) {
      setLoading(false);
      setShowErrorAlert(true);
      setShowAlert(true);
      if (error?.response?.data?.message) {
        setMessageErrorAlert(error?.response?.data?.message);
      } else {
        setMessageErrorAlert(
          'Erro ao tentar cadastrar adoção. Tente novamente mais tarde.',
        );
      }
    }
    setTitle('');
    setDescription('');
    setAddress('');
    setType('');
    setLoading(false);
  }

  return(
    <AdoptionContainer>
      <Spinner visible={loading} />
      <Form>
        <Title>Adicionar uma adoção</Title>
        <Input
          id="title"
          label="Titulo"
          type="text"
          variant="outlined"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          id="description"
          label="Descrição"
          type="text"
          variant="outlined"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          id="address"
          label="Endereço"
          type="text"
          variant="outlined"
          autoComplete="off"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* <Input
          id="type"
          label="Tipo"
          type="text"
          variant="outlined"
          value={type}
          onChange={(e) => setType(e.target.value)}
        /> */}
        <FormControl
          style={{ width: 300 }}
          variant="outlined"
        >
          <Select
            value={type}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Tipo
            </MenuItem>
            <MenuItem value="Gato">Gatos</MenuItem>
            <MenuItem value="Cachorro">Cachorros</MenuItem>
          </Select>
          <FormHelperText>Qual animal você está doando?</FormHelperText>
        </FormControl>
        <ButtonAdd
          color="primary"
          variant="contained"
          onClick={handleStoreAdoption}
        >
          Salvar
        </ButtonAdd>
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
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert onClose={handleClose} severity="success">
                {messageSuccessAlert}
              </Alert>
            </Snackbar>
          )}
        </Collapse>
      </Form>
    </AdoptionContainer>
  );
};
