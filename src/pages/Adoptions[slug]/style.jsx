import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Container } from '../../styles/global';

export const AdoptionContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 210px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdoptionWrapper = styled.div`
  width: 900px;
  height: 460px;
  background: #aaa;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    width: 360px;
    height: 900px;
    justify-content: center;
    flex-direction: column;
    margin: 40px 0;
  } 
`;

export const Image = styled.img`
  width: 340px;
  height: 340px;

  @media(max-width: 768px) {
    width: 320px;
    height: 320px;
  } 
`;

export const ImageWrapper = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 320px;
    height: 440px;
  } 
`;

export const DetailWrapper = styled.div`
  width: 500px;
  height: 100%;

  @media(max-width: 768px) {
    width: 320px;
  } 
`;

export const DetailWrapperHeading = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailWrapperMain = styled.div`
  width: 100%;
  height: 260px;
  border: 3px solid #aaa;
  border-radius: 10px;
`;

export const DetailWrapperFooter = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.9em;
`;

export const Description = styled.p`
  font-size: 1.1em;
  text-indent: .8em;
`;

export const Span = styled.span`
  color: #000;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanAddress = styled.span`
  width: 100%;
  font-size: 1.1em;
  color: #f0f0f7;
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  
  @media(max-width: 768px) {
    border-bottom: 1px solid #000;
  } 
`;

export const ButtonDelete = styled(Button)`
  height: 40px;
  text-decoration: uppercase;
`;
