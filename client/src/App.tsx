import React from 'react';
import NavBarRouter from './router/main';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 15% 2rem 15%;
  align-items: center;

  @media only screen and (max-width: 640px) {
    padding: 0rem;
    flex-direction: column;
  }

  svg,
  h1 {
    margin: 1rem;
  }
`;

const AppFooter = styled.footer`
  background: black;
`;

const ImageContainer = styled.svg`
  height: 100px;
  width: 100px;
  color: grey;
  background: grey;
  flex-shrink: 0;
`;

const MainHeading = styled.h1`
  font-size: 45px;
  text-align: center;

  @media only screen and (max-width: 465px) {
    font-size: 70px;
  }
`;

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

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
        <ImageContainer></ImageContainer>
        <MainHeading>
          {screenSize.width > 465 ? 'Aalto Strength Society' : 'ASS'}
        </MainHeading>
      </AppHeader>
      <NavBarRouter />
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
