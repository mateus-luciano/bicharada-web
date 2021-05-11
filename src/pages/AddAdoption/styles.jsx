import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { Container } from '../../styles/global';

export const AdoptionContainer = styled(Container)`
  min-width: 1360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    min-width: 360px;
    // margin-bottom: 600px;
  } 
`;

export const Form = styled.form`
  width: 500px;
  height: 600px;
  padding: 10px 5px;
  background: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 300px;
  height: 70px;
`;

export const ButtonAdd = styled(Button)`
  width: 200px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 1.8em;
  margin-bottom: 40px;
`;
