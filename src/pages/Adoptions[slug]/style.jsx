import styled from 'styled-components';
import { Container } from '../../styles/global';

export const AdoptionContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdoptionWrapper = styled.div`
  width: 500px;
  height: 600px;
  background: #aaa;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const Title = styled.h2`
  font-size: 1.4em;
`;

export const Description = styled.p`
  font-size: 1.1em;
`;

export const Span = styled.span`
  color: #f0f0f7;
`;
