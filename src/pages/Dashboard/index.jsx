import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import AdoptionWrapper from '../../components/AdoptionWrapper';

import { Button } from '../../styles/global';

import api from '../../services/api';

import {
  DashboardContainer,
  AdoptionContainer,
  HeaderContainer,
  SpanHeader,
  TextHeader,
  EmptyAdoptionsWrapper,
  TitleAdoption,
  AdminContainer,
} from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [myAdoptions, setMyAdoptions] = useState([]);
  const [admin, setAdmin] = useState(false);
  const userData = useSelector((state) => state?.user);

  async function getUserData() {
    setLoading(true);
    setAdmin(false);
    try {
      const response = await api.get(`/users/${userData?.user?.uid}`, {
        headers: { Authorization: `Bearer ${userData?.token}` },
      });
      setMyAdoptions(response?.data?.adoptions);
      setLoading(false);
      const isAdmin = userData?.user?.admin;
      if (isAdmin) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

  return(
    <DashboardContainer>
      <Spinner visible={loading} />
      <HeaderContainer>
        <TextHeader>
          Bem vindo
        </TextHeader>
        <SpanHeader>
          { userData.user.name }
        </SpanHeader>
      </HeaderContainer>
      { admin ? (
        <AdminContainer>
          <h1>Admin ok</h1>
        </AdminContainer>
      ) : '' }
      <TitleAdoption>
        Minha adoções
      </TitleAdoption>
      { !myAdoptions || !myAdoptions.length ? (
        <EmptyAdoptionsWrapper>
          <p>Você ainda não fez adoções</p>
          <Link to="/adoptions/add">
            <Button>
              Adicionar
            </Button>
          </Link>
        </EmptyAdoptionsWrapper>
      ) : (
        <AdoptionContainer>
          {myAdoptions.map((adoption) => (
            <AdoptionWrapper
              image={adoption.title}
              title={adoption.title}
              text={adoption.description}
              city={adoption.address}
            />
          ))}
        </AdoptionContainer>
      ) }
    </DashboardContainer>
  );
};
