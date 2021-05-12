import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MuiAlert from '@material-ui/lab/Alert';
import {
  Collapse,
  Snackbar,
} from '@material-ui/core';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Spinner from '../../components/Spinner';

import api from '../../services/api';
// imagem de teste
import notFoundSvg from '../../assets/images/undraw_not_found_60pq.svg';

import {
  AdoptionContainer,
  AdoptionWrapper,
  DetailWrapper,
  ImageWrapper,
  DetailWrapperHeading,
  DetailWrapperMain,
  DetailWrapperFooter,
  Image,
  Title,
  Description,
  Span,
  SpanAddress,
  ButtonDelete,
} from './style';

export default () => {
  const { slug } = useParams();
  const history = useHistory();
  const userData = useSelector((state) => state?.user);

  const [loading, setLoading] = useState(false);
  const [adoption, setAdoption] = useState('');
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState(false);
  const [adoptionNotFound, setAdoptionNotFound] = useState('');
  const [open, setOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [messageSuccessAlert, setMessageSuccessAlert] = useState();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [messageErrorAlert, setMessageErrorAlert] = useState();

  const UserIsAdmin = () => {
    setAdmin(false);
    const isAdmin = userData?.user?.admin;
    if (isAdmin) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };
  useEffect(() => {
    UserIsAdmin();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  async function handleDeleteAdoption() {
    setShowAlert(false);
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
    setLoading(true);
    try {
      const response = await api.delete(`adoptions/${slug}`, {
        headers: { Authorization: `Bearer ${userData?.token}` },
      });
      if (response?.status === 204) {
        setShowSuccessAlert(true);
        setShowAlert(true);
        setTimeout(() => {
          history.push('/adoptions');
        }, 3000);
      }
      setLoading(false);
      if (response?.data?.message) {
        setMessageSuccessAlert(response?.data?.message);
      } else {
        setMessageSuccessAlert('Apagado com sucesso!');
      }
    } catch (error) {
      setLoading(false);
      setShowErrorAlert(true);
      setShowAlert(true);
      if (error?.response?.data?.message) {
        setMessageErrorAlert(error?.response?.data?.message);
      } else {
        setMessageErrorAlert(
          'Erro ao tentar apagar a adoção. Tente novamente mais tarde.',
        );
      }
    }
    setLoading(false);
  }

  async function getUserData(uid) {
    setLoading(true);
    setUser('');
    try {
      const response = await api.get(`/users/${uid}`);
      setUser(response?.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function findAdoption() {
    setLoading(true);
    setAdoption('');
    try {
      const response = await api.get(`/adoptions/${slug}`);
      await getUserData(response?.data?.data?.user_uid);
      setAdoption(response?.data?.data);
      setLoading(false);
    } catch (error) {
      if (error.response.status === 404) {
        setAdoptionNotFound(
          <AdoptionWrapper>
            { error?.response?.data?.message ? (
              <Title>
                {error?.response?.data?.message}
              </Title>
            ) : (
              <Title>
                Não encontrado
              </Title>
            ) }
          </AdoptionWrapper>,
        );
      }
      setLoading(false);
    }
  }
  useEffect(() => {
    findAdoption();
  }, []);

  return(
    <AdoptionContainer>
      <Spinner visible={loading} />
      { adoption ? (
        <AdoptionWrapper>
          <ImageWrapper>
            <Image src={notFoundSvg} alt={adoption.title} />
            <SpanAddress>
              {adoption.address}
            </SpanAddress>
            { admin ? (
              <ButtonDelete
                variant="contained"
                color="secondary"
                onClick={handleDeleteAdoption}
              >
                Apagar
              </ButtonDelete>
            ) : '' }
          </ImageWrapper>
          <DetailWrapper>
            <DetailWrapperHeading>
              <Title>
                {adoption.title}
              </Title>
            </DetailWrapperHeading>
            <DetailWrapperMain>
              <Description>
                {adoption.description}
              </Description>
            </DetailWrapperMain>
            <DetailWrapperFooter>
              <Span>
                {user.name}
              </Span>
              <Span>
                <WhatsAppIcon />
                {user.phone}
              </Span>
            </DetailWrapperFooter>
          </DetailWrapper>
        </AdoptionWrapper>
      ) : adoptionNotFound }
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
    </AdoptionContainer>
  );
};
