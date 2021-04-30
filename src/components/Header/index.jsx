import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
} from './styles';

export default () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerHeight <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

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
            <NavItemBtn>
              { button ? (
                <NavBtnLink to="/login">
                  <Button primary>ENTRAR</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/login">
                  <Button fontBig primary>ENTRAR</Button>
                </NavBtnLink>
              ) }
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};
