import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
} from './style';

export default () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [adoption, setAdoption] = useState('');
  const [user, setUser] = useState('');
  const [adoptionNotFound, setAdoptionNotFound] = useState('');

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
    </AdoptionContainer>
  );
};
