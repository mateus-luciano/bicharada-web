/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MuiAlert from '@material-ui/lab/Alert';
import {
  Collapse,
  Snackbar,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
  const [images, setImages] = useState([]);

  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
        }, 2000);
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
      setImages(response?.data?.attachments);
      await getUserData(response?.data?.data?.user_uid);
      console.log(response?.data?.attachments);
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
            {/* {images.map((image) => {
              <Image src={image.url} alt={adoption.title} />;
            })} */}
            <Paper square elevation={0}>
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Image src={step.imgPath} alt={step.label} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={(
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
        )}
              backButton={(
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
        )}
            />
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
