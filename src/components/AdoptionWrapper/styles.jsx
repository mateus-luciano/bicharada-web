import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 276px;
  height: 420px;
  background: #aaa;
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 4px;
  border-radius: 6px;

  @media(max-width: 1440px) {
    width: 276px;
  }

  @media(max-width: 1366px) {
    width: 306px;
  }

  @media(max-width: 1280px) {
    width: 292px;
  }
`;

export const Image = styled.img`
  max-width: 264px;
  width: 100%;
  height: 240px;
  margin: 0 auto;
  overflow: hidden;
  display: block;
  object-fit: cover;
  // border: 1px solid #000;
  border-radius: 6px;

  @media(max-width: 1440px) {
    max-width: 240px;
  }

  @media(max-width: 1366px) {
    max-width: 290px;
  }

  @media(max-width: 1280px) {
    max-width: 280px;
  }
`;

export const Title = styled.h1`
  font-size: 1.4em;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
`;

export const Text = styled.p`
  font-size: .9em;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const TextCity = styled.span`
  font-size: 1.1em;
  font-weight: 600;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FooterWrapper = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;

export const LinkAdoption = styled(Link)`
  text-decoration: none;
`;
