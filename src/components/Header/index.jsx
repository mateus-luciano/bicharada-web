import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IconContext } from 'react-icons/lib';

import { FaBars, FaTimes } from 'react-icons/fa';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Button } from '../../styles/global';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  ButtonLogin,
  ButtonSignup,
  ContainerNavbtn,
} from './styles';

import * as userActions from '../../store/modules/user/actions';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [mobile, setMobile] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const showButton = () => {
  //   if (window.innerHeight <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   showButton();
  // }, []);

  const isMobile = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
      console.log('mobile');
      setButton(false);
    } else {
      setMobile(false);
      console.log('desktop');
      setButton(true);
    }
  };
  useEffect(() => {
    isMobile();
  }, []);

  function onLogout() {
    dispatch(userActions.logout());
    history.push('/login');
  }

  window.addEventListener('resize', isMobile);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            Bicharada
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            { click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/adoptions">Adote</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contribute">Contribuir</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">Quem somos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contato</NavLinks>
            </NavItem>
            { userData
              ? (
                <NavItemBtn>
                  { button ? (
                    <Button
                      primary
                      onClick={onLogout}
                    >
                      SAIR
                    </Button>
                  ) : (
                    <Button
                      fontBig
                      primary
                      onClick={onLogout}
                    >
                      SAIR
                    </Button>
                  ) }
                </NavItemBtn>
              )
              : (
                <NavItemBtn>
                  { mobile ? (
                    <ContainerNavbtn>
                      <NavBtnLink to="/login">
                        <ButtonLogin>
                          <AccountCircleIcon />
                          Entrar
                        </ButtonLogin>
                      </NavBtnLink>
                      <NavBtnLink to="/sign-up">
                        <ButtonSignup>
                          Criar Conta
                        </ButtonSignup>
                      </NavBtnLink>
                    </ContainerNavbtn>
                  ) : (
                    <ContainerNavbtn>
                      <NavBtnLink to="/login">
                        <ButtonLogin>
                          <AccountCircleIcon />
                          Entrar
                        </ButtonLogin>
                      </NavBtnLink>
                      <NavBtnLink to="/sign-up">
                        <ButtonSignup>
                          Criar Conta
                        </ButtonSignup>
                      </NavBtnLink>
                    </ContainerNavbtn>
                  ) }
                </NavItemBtn>
              ) }
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};
