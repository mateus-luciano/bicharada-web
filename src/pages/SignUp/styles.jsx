import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { Container } from '../../styles/global';

export const SignUpContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  @media(max-width: 960px) {
    flex-direction: column;
  } 
`;

export const LoginSection = styled.div`
  min-width: 500px;
  height: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  Button {
    @media(max-width: 960px) {
      width: 200px;
    } 
  }
`;

export const SignUpSection = styled.div`
  min-width: 500px;
  height: 100%;
  background: #aaa;
  border-radius: 10px;

  @media(max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;

export const IntLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #000;
`;

export const Title = styled.h2`
  font-size: 1.4em;
  margin: 1.2em 0;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;

  @media(max-width: 960px) {
    display: none;
  } 
`;

export const Input = styled(TextField)`
  width: 300px;
  height: 62px;
  // background: #fff;

  input {
    // height: 12px;
    background: #c7c7c7;
    border-radius: 4px;

    &::placeholder {
      padding-bottom: 40px;
      padding-left: 10px;
    }
  }
`;

export const Form = styled.form`
  width: 440px;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em;

  @media(max-width: 500px) {
    width: 375px;
  } 

  Button {
    @media(max-width: 960px) {
      width: 300px;
      margin-top: 2em;
    } 
  }

  Input {
    @media(max-width: 500px) {
      width: 340px;
    } 
  }
`;
