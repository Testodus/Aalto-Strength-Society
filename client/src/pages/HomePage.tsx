import React from 'react';
import styled from 'styled-components';
import {
  Bodytext,
  Heading2,
  RoundDivLarge,
} from '../assets/styles/shared-styles';
import KettlebellTransparent from '../components/KettlebellTransparent';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 62rem;
  width: 100%;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }

  div,
  svg {
    margin: 0.5rem 2rem 0.5rem 2rem;

    @media only screen and (max-width: 640px) {
      margin: 2rem;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * The Homepage-component, this is used as the landing page (the index-role is defined on the router-const in index.tsx).
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <RoundDivLarge>
      <HomePageContainer>
        <KettlebellTransparent></KettlebellTransparent>
        <TextContent>
          <Heading2>Welcome</Heading2>
          <Bodytext>
            Welcome to Aalto Strength Society, where strength meets community!
            As the premier lifting association at Aalto University, we`re
            dedicated to fostering a culture of empowerment, support, and growth
            through the world of lifting.
          </Bodytext>
          <Bodytext>
            Whether you`re a seasoned lifter or just starting your journey, join
            us in celebrating strength in all its forms. Explore our vibrant
            community, expert guidance, and exciting events designed to inspire,
            educate, and elevate your lifting experience. Let`s unlock your full
            potential together!
          </Bodytext>
        </TextContent>
      </HomePageContainer>
    </RoundDivLarge>
  );
};

export default HomePage;
