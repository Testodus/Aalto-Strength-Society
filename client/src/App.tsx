import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  Bodytext,
  DetailText,
  Heading4,
  Heading1,
} from './assets/styles/shared-styles';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './assets/images/ass.png';
import {
  BG_COLOR_FOOTER,
  BG_COLOR_HEADER,
  BG_COLOR_MAIN,
} from './assets/styles/variables';

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 10% 2rem 10%;
  align-items: center;
  background: ${BG_COLOR_HEADER};

  @media only screen and (max-width: 640px) {
    padding: 0rem;
    flex-direction: column;
  }

  svg,
  h1 {
    margin: 1rem;
  }
`;

const FrameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem 0rem 3rem 0rem;
  background: ${BG_COLOR_MAIN};

  box-shadow:
    0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.1) inset,
    0 -0.3rem 0.6rem 0 rgba(0, 0, 0, 0.1) inset;

  @media only screen and (max-width: 640px) {
    padding: 2rem 0rem 2rem 0rem;
  }
`;

const AppFooter = styled.footer`
  min-height: 15vh;
  background: ${BG_COLOR_FOOTER};
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterNode = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
/***
 * The app: contains the basic structure of the whole thing
 */
function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // get the window dimensions
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // when the website is on use, update the dimensions (follows with eventListener if the window resizes)
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <div>
      <AppHeader>
        <img height={190} width={190} src={logo}></img>
        <Heading1>
          {screenSize.width > 465 ? 'Aalto Strength Society' : 'ASS'}
        </Heading1>
      </AppHeader>
      <Navbar />
      <FrameDiv>
        <Outlet />
      </FrameDiv>
      <AppFooter>
        <FooterNode>
          <Heading4>Aalto Strenght Society</Heading4>
          <Bodytext>
            See you at the gym!
            <br />
            Keep Lifting!
          </Bodytext>
        </FooterNode>
        <FooterNode>
          <DetailText>Copyright is....</DetailText>
        </FooterNode>
      </AppFooter>
    </div>
  );
}

export default App;
