import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  root: {
    --background-color: #f0f0f7;
    --primary-color: #0b8653;
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: black !important;
  box-shadow: 0 0 0px 1000px #c7c7c7 inset;
  transition: background-color 5000s ease-in-out 0s;
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

  /* @media(max-width: 1366px) {
    max-width: 1300px;
  }  */

  /* @media(max-width: 1920px) {
    max-width: 1800px;
  }  */
`;

export const Button = styled.button`
  border-radius: 4px;
  color: #000;
  white-space: nowrap;
  background: ${({ primary }) => (primary ? '#0de48a' : '#0467fb')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all .3s ease-out;
    background: ${({ primary }) => (primary ? '#0db871' : '#4b59f7')};
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
