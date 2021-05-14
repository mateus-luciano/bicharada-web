import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  TextField,
  Collapse,
} from '@material-ui/core';
import { Container } from '../../styles/global';

export const SignUpContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  @media(max-width: 768px) {
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
    @media(max-width: 768px) {
      width: 200px;
    } 
  }
`;

export const SignUpSection = styled.div`
  min-width: 500px;
  height: 620px;
  background: #aaa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  @media(max-width: 768px) {
    width: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
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

  @media(max-width: 768px) {
    display: none;
  } 
`;

export const Input = styled(TextField)`
  height: 100px;
  // margin: 40px 0;

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
      // border-color: #000;
    }
  }

  label {
    color: #0f0f0f;
  }
`;

export const Form = styled.form`
  width: 440px;
  height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  margin-top: 60px;

  @media(max-width: 420px) {
    width: 375px;
  } 

  @media(max-width: 768px) {
    width: 375px;
  } 

  Button {
    @media(max-width: 768px) {
      width: 300px;
      margin-top: 2em;
    } 
  }

  Input {
    @media(max-width: 500px) {
      width: 300px;
    } 
  }
`;

export const SelectContainer = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px 0;

  @media(max-width: 768px) {
    width: 320px;
  } 
`;

export const CollapseDiv = styled(Collapse)`
  height: 46px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 3px;
  margin: 2%;
`;

export const LinkUseTerms = styled(IntLink)`
  font-size: 1.2em;
  font-weight: 500;
  color: #00f;
  margin-bottom: 20px;
  // align-self: flex-start;
  // margin-top: 10px;

  &:hover {
    text-decoration: underline;
    color: #3737eb;
  }

  @media(max-width: 768px) {
    align-self: center;
    margin-top: 20px;
  } 
`;

export const TitleForm = styled.h1`
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 25px;
`;
