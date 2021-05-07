import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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

  async function handleStoreAdoption() {
    setLoading(true);
    try {
      const response = await api.post('/adoptions', {
        title,
        description,
        address,
        type,
        user_uid: userData?.user?.uid,
        region: 'bf682f61-1e48-46f3-80b8-fba86381ee8c',
      });
      setNewAdoption(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return(
    <AdoptionContainer>
      <Form>
        <Title>Adicionar uma adoção</Title>
        <Input
          id="title"
          label="Titulo"
          type="text"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          id="description"
          label="Descrição"
          type="text"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          id="address"
          label="Endereço"
          type="text"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          id="type"
          label="Tipo"
          type="text"
          variant="outlined"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <ButtonAdd
          color="primary"
          variant="contained"
          onClick={handleStoreAdoption}
        >
          Salvar
        </ButtonAdd>
      </Form>
    </AdoptionContainer>
  );
};
