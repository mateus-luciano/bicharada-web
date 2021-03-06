import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../styles/global';

export const AdoptionContainer = styled(Container)`
  //min-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1440px) {
    min-width: 1420px;
  }

  @media(max-width: 1366px) {
    min-width: 1360px;
  }

  @media(max-width: 1280px) {
    min-width: 1200px;
  }

  @media(max-width: 768px) {
    min-width: 100%;
    width: 100vw;
  }
`;

export const AdoptionHeader = styled.header`
  width: 1420px;
  height: 90px;
  background: #aaa;
  padding: 10px 0;

  @media(max-width: 1440px) {
    width: 1420px;
  }

  @media(max-width: 1366px) {
    width: 1256px;
  }

  @media(max-width: 1280px) {
    width: 1200px;
  }

  @media(max-width: 768px) {
    width: 360px;
  }
`;

export const TopHeader = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSelect = styled(Select)`
  width: 250px;
  height: 40px;

  @media(max-width: 768px) {
    min-width: 140px;
  } 
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`;

export const HeaderButton = styled(Button)`
  border-radius: .4em;
`;

export const FormHeader = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 20px;

  @media(max-width: 768px) {
    margin-left: 4px;
  } 
`;

export const CheckBoxContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    width: 90px;
  } 
`;

export const LabelCheckBoxHeader = styled.label`
  cursor: pointer;
  font-size: 1em;
  margin-right: 5px;

  @media(max-width: 768px) {
    font-size: .9em;
  } 
`;

export const CheckBoxHeader = styled.input`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  @media(max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

// export const CheckBoxHeader = styled.input.attrs({ type: 'checkbox' })`
//  display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
//   border-radius: 3px;
//   transition: all 150ms;
// `;

export const AdoptionMain = styled.main`
  width: 1420px;
  background: #8b8b8b;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 1440px) {
    width: 1420px;
  }

  @media(max-width: 1366px) {
    width: 1256px;
  }

  @media(max-width: 1280px) {
    width: 1200px;
  }

  @media(max-width: 768px) {
    width: 360px;
    flex-direction: column;
    align-items: center;
  } 
`;

export const AdoptionFooter = styled.footer`
  width: 100%;
  padding: .8em 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1``;

export const LinkAdoption = styled(Link)`
  text-decoration: none;
  color: #202020;
`;
