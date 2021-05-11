import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../styles/global';

export const AdoptionContainer = styled(Container)`
  min-width: 1360px;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    min-width: 360px;
    /* justify-content: center;
    align-items: center; */
  } 
`;

export const AdoptionHeader = styled.header`
  width: 100%;
  height: 90px;
  background: #aaa;
  padding: 10px 0;
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

  @media(max-width: 768px) {
    width: 16px;
    height: 16px;
  } 
`;

export const AdoptionMain = styled.main`
  width: 100%;
  background: #8b8b8b;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media(max-width: 768px) {
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
