import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HomeContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 200px);
`;

export const HomeHeader = styled.header`
  width: 100%;
  height: 200px;
  padding: .6em;
  background: #f00;
`;

export const HomeHeaderTitle = styled.h1`
  font-size: 1.8em;
`;

export const HomeHeaderSubtitle = styled.h2`
  font-size: 1.4em;
  font-weight: 500;
  color: #aaaa;
`;

export const HomeHeaderText = styled.h2`
  font-size: 1.1em;
  text-indent: 1em;
`;

export const HomeMain = styled.main`
  width: 100%;
  height: 300px;
  background: #ff0;
`;
