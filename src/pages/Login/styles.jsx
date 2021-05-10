import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TextField, Collapse } from '@material-ui/core';
import { Container } from '../../styles/global';

export const LoginContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media(max-width: 960px) {
    flex-direction: column-reverse;
  }  
`;

export const SignUpSection = styled.div`
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

export const LoginSection = styled.div`
  min-width: 500px;
  height: 100%;
  background: #aaa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;

  @media(max-width: 960px) {
    display: none;
  } 
`;

export const Title = styled.h2`
  font-size: 1.4em;
  margin: 1.2em 0;
`;

export const TitleForm = styled.h1`
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 25px;
`;

export const IntLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #000;
`;

export const Form = styled.form`
  width: 440px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em;

  @media(max-width: 420px) {
    width: 375px;
  } 

  Button {
    // margin-top: 20px;
    @media(max-width: 960px) {
      width: 300px;
      margin-top: 2em;
    } 
  }

  Input {
    @media(max-width: 420px) {
      width: 340px;
    } 
  }
`;

export const Input = styled(TextField)`
  height: 62px;

  input {
    width: 360px;
    background: #c7c7c7;
    border-radius: 4px;

    &::placeholder {
      padding-bottom: 40px;
      padding-left: 10px;
    }

    &:focus {
      background: #c7c7c7;
    }
  }
`;

export const HomeHeaderTitle = styled.h1`
  font-size: 1.8em;
`;

export const CollapseDiv = styled(Collapse)`
  height: 46px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 3px;
  margin: 2%;
`;

export const LinkForgotPassword = styled(IntLink)`
  font-size: 1.2em;
  font-weight: 500;
  color: #00f;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
    color: #3737eb;
  }
`;
