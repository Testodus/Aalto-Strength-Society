import React from 'react';
import NavBarRouter from './router/main';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { DarkBodyText, DetailText, Heading4, Heading1 } from './shared-styles';

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 10% 2rem 10%;
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
  min-height: 15vh;
  background: #f2f2f2;
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

const ImageContainer = styled.svg`
  height: 100px;
  width: 100px;
  color: grey;
  background: grey;
  flex-shrink: 0;
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
        <Heading1>
          {screenSize.width > 465 ? 'Aalto Strength Society' : 'ASS'}
        </Heading1>
      </AppHeader>
      <NavBarRouter />
      <AppFooter>
        <FooterNode>
          <Heading4>App Footer</Heading4>
          <DarkBodyText>
            {' '}
            Hello and Welcome, please contact us here: diibadaaba duu.
          </DarkBodyText>
        </FooterNode>
        <FooterNode>
          <DetailText>Second node</DetailText>
        </FooterNode>
      </AppFooter>
    </div>
  );
}

export default App;
