import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';

import api from '../../services/api';

import {
  AdoptionContainer,
  AdoptionWrapper,
  Image,
  Title,
  Description,
  Span,
} from './style';

export default () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [adoption, setAdoption] = useState('');

  async function findAdoption() {
    setLoading(true);
    setAdoption('');
    try {
      const response = await api.get(`/adoptions/${slug}`);
      setAdoption(response?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    findAdoption();
  }, []);

  return(
    <AdoptionContainer>
      <Spinner visible={loading} />
      <AdoptionWrapper>
        <Image src={adoption.title} alt={adoption.title} />
        <Title>
          {adoption.title}
        </Title>
        <Description>
          {adoption.description}
        </Description>
        <Span>
          {adoption.city}
        </Span>
      </AdoptionWrapper>
    </AdoptionContainer>
  );
};
