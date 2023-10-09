import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1000px;
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

const ImageContainer = styled.svg`
  height: 250px;
  width: 250px;
  color: grey;
  background: grey;
  flex-shrink: 0;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <ImageContainer></ImageContainer>
      <TextContent>
        <h2>Welcome</h2>
        <p>
          comes from a line in section 1.10.32. The standard chunk of Lorem
          Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham.
        </p>
        <p>
          literature, discovered the undoubtable source. Lorem Ipsum comes from
          sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
          treatise on the theory of ethics, very popular during the Renaissance.
          The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
        </p>
      </TextContent>
    </HomePageContainer>
  );
};

export default HomePage;
