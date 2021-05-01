import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HomeContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media(max-width: 768px) {
    flex-direction: column;
  } 
`;

export const TextWrapper = styled.div`
    max-width: 440px;
    display: flex;
    flex-direction: column;

    Button {
      width: 200px;
      align-self: center;
      margin-top: 1em;

      Link {
        text-decoration: none;
      }
    }

  @media(max-width: 768px) {
    margin: 2em 0;
  } 
`;

export const Heading = styled.h1`
  font-size: .9em;
  color: #a9b3c1;
`;

export const Subtitle = styled.h2`
  font-size: 3.2em;
  font-weight: 500;
  letter-spacing: 2.4px;
  color: #101522;
  margin-top: .2em;

  @media(max-width: 768px) {
    font-size: 2.6em;
  } 
`;

export const Text = styled.h2`
  font-size: 1.1em;
  font-weight: 500;
  text-indent: 1em;
  margin-top: .6em;
  color: #a9b3c1;

  @media(max-width: 768px) {
    padding: 0 2em;
  }
`;

export const ImageWrapper = styled.div`
    max-width: 440px;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
`;
