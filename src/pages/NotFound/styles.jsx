import styled from 'styled-components';
import { Container, Button } from '../../styles/global';

export const NotFoundContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  Button {
    margin: 1em 0;

    @media(max-width: 960px) {
      width: 300px;
      margin-top: 2em;
    } 
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;

  @media(max-width: 1366px) {
    width: 325px;
    height: 325px;
  } 

  @media(max-width: 960px) {
    width: 400px;
    height: 400px;
  } 
`;
