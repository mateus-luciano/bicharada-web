import styled from 'styled-components';
import { Container } from '../../styles/global';

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  background: #f0f0f7;
  border-top: 1px solid #aaaa;
`;

export const FooterContainer = styled(Container)`
  background: inherit;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
`;

export const FooterTextHeading = styled.h2`
  font-size: 1.3em;
  color: #000a;
`;

export const FooterSubtitle = styled.p`
  font-size: 1em;
  color: #000;
`;

export const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SocialIconLink = styled.a`
  color: #341096;
  font-size: 2em;
  margin: 0 .1em;
  transition: filter .2s;

  &:hover {
    cursor: pointer;
    filter: brightness(.4);
  }
`;
