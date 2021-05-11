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
  width: 900px;
  height: 460px;
  background: #aaa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 340px;
  height: 340px;
  background: #f00;
`;

export const ImageWrapper = styled.div`
  width: 340px;
  height: 100%;
  background: #f0f;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  width: 500px;
  height: 100%;
  background: #00f;
`;

export const DetailWrapperHeading = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
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
  font-size: 1.1em;
  color: #f0f0f7;
  padding-top: 20px;
`;
