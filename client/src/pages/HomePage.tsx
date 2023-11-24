import React from 'react';
import styled from 'styled-components';
import {
  Bodylist,
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
            Aalto Strength Society, or more commonly known as ´ASS´is a strength
            sports focused sporting club in Aalto University. The primary focus
            of the club is in powerlifting and strongman sports, but we are up
            for anything strength-related. That is, we lift heavy objects
            together and we have fun doing it.
          </Bodytext>
          <Bodytext>When it comes to events we organize: </Bodytext>
          <Bodylist>
            <li>
              Practices in which those who are new to strength sports can get a
              grip on it{' '}
            </li>{' '}
            <li>
              Internal competitions, in which you can test your limits in a
              friendly environment{' '}
            </li>
            <li>Excursions to other strength-related events, and </li>
            <li>Pretty much anything and everything else strength related</li>
          </Bodylist>
        </TextContent>
      </HomePageContainer>
    </RoundDivLarge>
  );
};

export default HomePage;
