import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  root: {
    --background-color: #f0f0f7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html,
  body {
    background: var(--background-color);
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  color: #fff;
  white-space: nowrap;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all .3s ease-out;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: ${({ desk }) => (desk ? '400px' : '220px')};
  height: 40px;
  border: none;
  outline: none;
  border-radius: .6em;
  padding-left: .8em;
  margin: 1em 0;
`;
