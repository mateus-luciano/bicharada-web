import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../styles/global';

import notFoundSvg from '../../assets/images/undraw_not_found_60pq.svg';

import { NotFoundContainer, Image } from './styles';

export default function NotFound() {
  const history = useHistory();
  return (
    <NotFoundContainer>
      <Image src={notFoundSvg} />
      <h1>OPS!</h1>
      <h3>A página não foi encontrada!</h3>
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        Voltar
      </Button>
    </NotFoundContainer>
  );
}
