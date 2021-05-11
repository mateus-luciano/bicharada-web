import styled from 'styled-components';
import { Container, Button } from '../../styles/global';

export const DashboardContainer = styled(Container)`
  min-width: 1360px;
  display: flex;
  flex-direction: column;
`;

export const AdoptionContainer = styled.div`
  width: 100%;
  background: #8b8b8b;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const EmptyAdoptionsWrapper = styled.div`
  width: 100%;
  height: 180px;
  background: #8b8b8b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    width: 100%;
    font-size: 1.4em;
    margin-bottom: 10px;
    text-align: center;
  }
`;
