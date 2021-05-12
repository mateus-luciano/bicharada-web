import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Container } from '../../styles/global';

export const DashboardContainer = styled(Container)`
  min-width: 1360px;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    min-width: 360px;
  } 
`;

export const TitleAdoption = styled.h2`
  font-size: 1.8em;
  margin-top: 20px;

  @media(max-width: 768px) {
    margin-top: 30px;
  }
`;

export const AdoptionContainer = styled.div`
  width: 100%;
  background: #8b8b8b;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SpanHeader = styled.span`
  font-size: 1em;
  text-indent: 1.1em;
`;

export const TextHeader = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  text-indent: .4em;
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

    @media(max-width: 768px) {
      font-size: 1.2em;
    }
  }
`;

export const AdminContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #aaa;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonDelete = styled(Button)`
  background: #f00;
  text-decoration: uppercase;
`;
