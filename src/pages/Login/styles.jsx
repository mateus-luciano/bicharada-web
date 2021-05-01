import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../styles/global';

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
  background: #00f;
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
  background: #0ff;

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
  background: #f00;

  Button {
    @media(max-width: 960px) {
      width: 300px;
      margin-top: 2em;
    } 
  }
`;

export const HomeHeaderTitle = styled.h1`
  font-size: 1.8em;
`;
