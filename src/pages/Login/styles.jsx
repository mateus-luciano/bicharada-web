import styled from 'styled-components';
import { Container } from '../../styles/global';

export const LoginContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SignUpSection = styled.div`
  width: 50%;
  height: 100%;
  background: #00f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginSection = styled.div`
  width: 50%;
  height: 100%;
  background: #0ff;
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
`;

export const HomeHeaderTitle = styled.h1`
  font-size: 1.8em;
`;
