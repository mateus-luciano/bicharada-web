import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner';
import AdoptionWrapper from '../../components/AdoptionWrapper';

import api from '../../services/api';

import { DashboardContainer, AdoptionContainer } from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [myAdoptions, setMyAdoptions] = useState([]);
  const userData = useSelector((state) => state?.user);

  async function getUserData() {
    setLoading(true);

    try {
      const response = await api.get(`/users/${userData?.user?.uid}`, {
        headers: { Authorization: `Bearer ${userData?.token}` },
      });
      setMyAdoptions(response?.data?.adoptions);
      setLoading(false);
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
      <p>Bem vindo</p>
      { userData.user.name }
      <h1>Minha adoções</h1>
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
    </DashboardContainer>
  );
};
