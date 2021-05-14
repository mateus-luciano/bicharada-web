import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 300px;
  height: 380px;
  background: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em .4em;
`;

export const Image = styled.img`
  width: 220px;
  height: 220px;
  margin: 0 auto;
  overflow: hidden;
  display: block;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 1.4em;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  font-size: 1em;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextCity = styled.span`
  font-size: .9em;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkAdoption = styled(Link)`
  text-decoration: none;
`;
