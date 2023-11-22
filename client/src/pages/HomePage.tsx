import React from 'react';
import styled from 'styled-components';
import {
  Bodytext,
  Heading2,
  RoundDivLarge,
} from '../assets/styles/shared-styles';

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

// TODO: use actual images
const ImageContainer = styled.svg`
  height: 250px;
  width: 250px;
  color: grey;
  background: grey;
  flex-shrink: 0;
`;

/**
 * The Homepage-component, this is used as the landing page (the index-role is defined on the router-const in index.tsx).
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <RoundDivLarge>
      <HomePageContainer>
        <ImageContainer></ImageContainer>
        <TextContent>
          <Heading2>Welcome</Heading2>
          <Bodytext>
            comes from a line in section 1.10.32. The standard chunk of Lorem
            Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
            Cicero are also reproduced in their exact original form, accompanied
            by English versions from the 1914 translation by H. Rackham.
          </Bodytext>
          <Bodytext>
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
            amet..,
          </Bodytext>
        </TextContent>
      </HomePageContainer>
    </RoundDivLarge>
  );
};

export default HomePage;
