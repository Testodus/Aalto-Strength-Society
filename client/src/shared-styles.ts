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
  color: #519a85;
  font-size: 30px;
  margin: 0;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Bodytext = styled.p`
  font-size: 20px;
  color: #f4f4f4;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

export const DarkBodyText = styled.p`
  font-size: 20px;
  color: #304f42;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

export const WarningText = styled.p`
  font-size: 16px;
  color: #a83d2f;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
`;

// Buttons

export const PrimaryButton = styled.button`
  text-decoration: none;
  font-size: 20px;

  font-family: 'Nunito', sans-serif;
  font-weight: 400;

  border-radius: 1.5rem;
  margin: 1rem;
  border: none;
  background: #d0d1f2;
  width: max-content;
  padding: 0.6rem 1.2rem;
  align-self: center;
`;

export const SecondaryButton = styled.button`
  text-decoration: none;
  font-size: 16px;
  color: #f4f4f4;

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

// FORM

export const FormLabel = styled.label`
  font-size: 16px;
  color: #151515;

  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  margin: 0.1rem;
`;

export const FormTextarea = styled.textarea`
  border: 1px solid #3d3e8a;
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 1rem;
  min-height: 2rem;
  resize: both;
  overflow: hidden;
`;

export const FormInput = styled.textarea`
  border: 1px solid #3d3e8a;
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
  overflow: hidden;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
`;

// DIVS

export const RoundDivLight = styled.div`
  background: ##1d4032;
  border-radius: 1rem;
  max-width: 700px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FullWidthDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    padding: 0rem 1rem;
  }
`;
