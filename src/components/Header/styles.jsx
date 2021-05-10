import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHollowCat } from 'react-icons/gi';
import { Container, Button } from '../../styles/global';

export const Nav = styled.nav`
  background: #0b8653;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 2em;

  @media(max-width: 420px) {
    font-size: 1.4em;
  } 
`;

export const NavIcon = styled(GiHollowCat)`
  margin-right: .5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media(max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8em; 
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    // height: 90vh;
    height: 160vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all .5s ease;
    background: #0b8653;
  } 
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    /* border-bottom: 2px solid #075232; */
    border-bottom: 2px solid #d36205;
  }

  @media(max-width: 768px) {
    width: 100%;

    &::hover {
      border: none;
    }
  } 
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media(max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    // display: table;
    border-bottom: 2px solid #aaa;
    flex-direction: column;
    align-items: flex-start;

    &:hover {
      color: #4b59f7;
      transition: all .3s ease;
    }

    Button {
      display: none;
    }
  } 
`;

export const NavItemBtn = styled.li`
  @media(max-width: 768px) {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;

export const NavBtnLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 4px;
  border: none;
  outline: none;
`;

export const ButtonLogin = styled(Button)`
  background: none;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* filter: brightness(0.95); */
    background: #055a37;
    color: #f0f0f7;
  }
`;

export const ButtonSignup = styled(Button)`
  background: #0d3a9c;
  transition: .3s;
  padding: 13px 24px;

  &:hover {
    /* filter: brightness(0.95); */
    background: #062464;
    color: #f0f0f7;
  }
`;

export const ContainerNavbtn = styled.div`
  display: flex;
  flex-direction: row;
`;
