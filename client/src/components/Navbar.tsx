import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavbarContainer = styled.nav`
  max-width: 1000px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem 1rem 1rem 1rem;
    font-size: 30px;

    @media only screen and (max-width: 640px) {
      font-size: 26px;
    }
  }
`;

const FullWidthDiv = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0;
  padding: 0;
`;

const SecondaryNavbarContainer = styled.nav`
  max-width: 1000px;
  widht: max-content
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem 1rem 1rem 1rem;
    font-size: 24px;

    @media only screen and (max-width: 640px) {
      font-size: 22px;
    }
  }
`;

const NavContainer = styled.div`
  width: 100%;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const NavButton = styled.button`
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: 20px;
  background: white;
  padding: 1rem;
  max-width: 8rem;
  margin: 0.5rem 2rem 0.5rem 2rem;

  @media only screen and (min-width: 640px) {
    display: none;
    widht: 0;
    height: 0;
  }
`;

const Navbar = () => {
  const [menuBarOpen, setMenubarOpen] = useState(window.innerWidth < 640);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  const CloseMenuBar = () => {
    setMenubarOpen(!menuBarOpen);
  };

  const CloseAboutUsMenu = () => {
    setSecondaryMenuOpen(!secondaryMenuOpen);
  };

  return (
    <NavContainer>
      <NavButton onClick={CloseMenuBar}> MENU </NavButton>
      {menuBarOpen || window.innerWidth > 640 ? (
        <FullWidthDiv>
          <NavbarContainer>
            <Link to="/">HOME</Link>
            <Link to="/contact">CONTACT</Link>
            <a onClick={CloseAboutUsMenu}>ABOUT US</a>
          </NavbarContainer>
          {secondaryMenuOpen ? (
            <SecondaryNavbarContainer>
              <Link to="/board">Board</Link>
              <Link to="/rules">Rules</Link>
              <Link to="/join">How to join?</Link>
              <Link to="/harassment">Harassment situations</Link>
            </SecondaryNavbarContainer>
          ) : null}
        </FullWidthDiv>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;
