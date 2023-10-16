import styled from 'styled-components';

/**
 * This is file for shared styles on the different components: text-styles and buttons.
 */

// Text-styles
export const DetailText = styled.p`
  font-size: 16px;
  color: #151515;

  font-family: 'Nunito', sans-serif;
  font-weight: 300;

  a {
    text-decoration: none;
    color: #1e4b69;
    font-weight: bold;
  }
`;

export const Heading1 = styled.h1`
  font-size: 80px;
  text-align: center;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 465px) {
    font-size: 80px;
  }
`;

export const Heading2 = styled.h2`
  color: #d9d9d9;
  font-size: 48px;
  margin: 1rem;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 400;
`;

export const Heading3 = styled.h3`
  color: #d9d9d9;
  font-size: 32px;
  margin: 0;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 300;
`;

export const Heading4 = styled.h4`
  color: #ad4805;
  font-size: 24px;
  margin: 0;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Bodytext = styled.p`
  font-size: 20px;
  color: #d9d9d9;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

export const DarkBodyText = styled.p`
  font-size: 20px;
  color: #ad4805;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

// Buttons

export const PrimaryButton = styled.button`
  text-decoration: none;
  font-size: 16px;

  font-family: 'Nunito', sans-serif;
  font-weight: 400;

  border-radius: 1.5rem;
  margin: 1rem;
  background: #d0d1f2;
  border: 1px solid #8889c2;
  width: max-content;
  padding: 0.5rem 1rem;
  align-self: center;
`;

export const SecondaryButton = styled.button`
  text-decoration: none;
  font-size: 16px;
  color: #f2f2f2;

  font-family: 'Nunito', sans-serif;
  font-weight: 400;

  border-radius: 1.5rem;
  margin: 1rem;
  background: #3d3e8a;
  border: 1px solid #d0d1f2;
  width: max-content;
  padding: 0.5rem 1rem;
  align-self: center;
`;
