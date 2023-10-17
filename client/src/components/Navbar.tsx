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
    color: #304f42;
    padding: 1rem 1rem 1rem 1rem;
    font-size: 30px;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    @media only screen and (max-width: 640px) {
      font-size: 24px;
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
  widht: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: #304f42;
    padding: 1rem 1rem 1rem 1rem;
    font-size: 26px;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    @media only screen and (max-width: 640px) {
      font-size: 22px;
    }
  }
`;

const NavContainer = styled.div`
  width: 100%;
  background: #f0e2cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const SecondaryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
`;

// Button that opens the About us menu, literally identical to the nav Links
const NavButton = styled.button`
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: 24px;
  background: #f4f4f4;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  max-width: 8rem;
  margin: 1rem 2rem 1rem 2rem;

  font-family: 'Nunito', sans-serif;
  font-weight: 400;

  @media only screen and (min-width: 640px) {
    display: none;
    widht: 0;
    height: 0;
  }
`;

/***
 * Navbar is a Component to create a Navbar.
 *
 * It uses the react-router-dom -Links to make the navigation links.
 *
 * Menu is responsible. The Menu-button appears on mobile (closes/opens the menu).
 *
 * About Us is not a direct link. It is a button that opens a secondary menu. Secondary menu closes if any of the links is pressed
 */
const Navbar = () => {
  const [menuBarOpen, setMenubarOpen] = useState(window.innerWidth < 640);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  // close the whole menu
  const CloseMenuBar = () => {
    setMenubarOpen(!menuBarOpen);
  };

  // Open or close the Secondary menu to opposite of its state
  const ChangeAboutUsMenu = () => {
    setSecondaryMenuOpen(!secondaryMenuOpen);
  };

  // Close the secondary menu, but do not open it
  const CloseMenus = () => {
    setSecondaryMenuOpen(false);
  };

  return (
    <>
      <NavContainer>
        <NavButton onClick={CloseMenuBar}> MENU </NavButton>
        {menuBarOpen || window.innerWidth > 640 ? (
          <FullWidthDiv>
            <NavbarContainer>
              <Link onClick={CloseMenus} to="/">
                HOME
              </Link>
              <a onClick={ChangeAboutUsMenu}>ABOUT US</a>
              <Link onClick={CloseMenus} to="/noticeboard">
                NOTICE BOARD
              </Link>
              <Link onClick={CloseMenus} to="/login">
                LOG IN
              </Link>
            </NavbarContainer>
          </FullWidthDiv>
        ) : null}
      </NavContainer>
      <SecondaryMenuContainer>
        {secondaryMenuOpen && (menuBarOpen || window.innerWidth > 640) ? (
          <SecondaryNavbarContainer>
            <Link onClick={CloseMenus} to="/board">
              Board
            </Link>
            <Link onClick={CloseMenus} to="/rules">
              Rules
            </Link>
            <Link onClick={CloseMenus} to="/join">
              How to join?
            </Link>
            <Link onClick={CloseMenus} to="/harassment">
              Harassment situations
            </Link>
          </SecondaryNavbarContainer>
        ) : null}
      </SecondaryMenuContainer>
    </>
  );
};

export default Navbar;
