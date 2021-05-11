import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Menu,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Popper,
  Grow,
  Paper,
} from '@material-ui/core';

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
  ContainerLinks,
  LinksLogout,
} from './styles';

import * as userActions from '../../store/modules/user/actions';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [name, setName] = useState('');
  // const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const getFirstName = () => {
    if (name === '') {
      // const userName = userData?.user?.name;
      // const userName = 'Usuário';
      const [, match] = userData?.user?.name.match(/(\S+) /) || [];
      setName(match);
    } else {
      setName('Usuário');
    }
  };
  useEffect(() => {
    getFirstName();
  }, [userData]);

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  // const handleAnchorElClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setTimeout(() => {
  //     setIsOpen(true);
  //   }, 1000);
  // };

  // const handleAnchorElClose = () => {
  //   setAnchorEl(null);
  // };

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
      setButton(false);
    } else {
      setMobile(false);
      setButton(true);
    }
  };
  useEffect(() => {
    isMobile();
  }, []);

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  function onLogout() {
    dispatch(userActions.logout());
    // handleAnchorElClose();
    history.push('/login');
  }

  // window.addEventListener('click', () => {
  //   if (isOpen) {
  //     handleAnchorElClose();
  //   }
  //   setIsOpen(false);
  // });

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
            { mobile ? (
              <ContainerLinks>
                { userData ? (
                  <NavItem>
                    <NavLinks to="/dashboard">Dashboard</NavLinks>
                  </NavItem>
                ) : ''}
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
              </ContainerLinks>
            ) : (
              <NavItem>
                <NavLinks to="/adoptions">Adote</NavLinks>
              </NavItem>
            ) }
            { userData
              ? (
                <NavItemBtn>
                  { button ? (
                    <NavItemBtn>
                      <ButtonLogin
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        {/* <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <LinksLogout to="/dashboard">
                              Dashboard
                            </LinksLogout>
                          </MenuItem>
                          <MenuItem onClick={onLogout}>
                            Sair
                          </MenuItem>
                        </Menu> */}
                        <AccountCircleIcon
                          style={{ marginRight: 5 }}
                        />
                        { name }
                      </ButtonLogin>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                  <MenuItem onClick={handleClose}>
                                    <LinksLogout to="/dashboard">
                                      Dashboard
                                    </LinksLogout>
                                  </MenuItem>
                                  <MenuItem onClick={onLogout}>
                                    Sair
                                  </MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </NavItemBtn>
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
                          <AccountCircleIcon
                            style={{ marginRight: 5 }}
                          />
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
                          <AccountCircleIcon
                            style={{ marginRight: 5 }}
                          />
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
