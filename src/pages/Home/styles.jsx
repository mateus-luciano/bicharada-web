import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HomeContainer = styled(Container)`
  width: 100%;
  height: calc(100vh - 200px);
`;

export const HomeHeader = styled.header`
  width: 100%;
  height: 200px;
  background: #f00;
`;

export const HomeHeaderTitle = styled.h1`
  font-size: 1.8em;
`;

export const HomeHeaderSubtitle = styled.h2`
  font-size: 1.4em;
`;

export const HomeHeaderText = styled.h2`
  font-size: 1.1em;
`;
