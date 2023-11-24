import styled from 'styled-components';
import * as palette from './variables';

/**
 * This is file for shared styles on the different components: text-styles and buttons.
 */

// Text-styles
export const DetailText = styled.p`
  font-size: ${palette.DETAIL_SIZE};
  color: ${palette.DETAIL_TC};

  font-family: 'Nunito', sans-serif;
  font-weight: 300;

  a {
    text-decoration: none;
    color: ${palette.DETAIL_ACCENT};
    font-weight: bold;
  }
`;

export const Heading1 = styled.h1`
  font-size: ${palette.HEADING_1_SIZE};
  color: ${palette.TEXT_COLOR_MAIN};
  text-align: center;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Heading2 = styled.h2`
  color: ${palette.TEXT_COLOR_MAIN};
  font-size: ${palette.HEADING_2_SIZE};
  margin: 1rem;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Heading3 = styled.h3`
  color: ${palette.TEXT_COLOR_ACCENT};
  font-size: ${palette.HEADING_3_SIZE};
  margin: 0;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 400;
`;

export const Heading4 = styled.h4`
  color: ${palette.TEXT_COLOR_ACCENT};
  font-size: ${palette.HEADING_4_SIZE};
  margin: 0;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Bodytext = styled.p`
  font-size: ${palette.BODYTEXT_SIZE};
  color: ${palette.TEXT_COLOR_MAIN};

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;

  a {
    text-decoration: none;
    color: ${palette.DETAIL_ACCENT};
    font-weight: bold;
  }
`;

export const Bodylist = styled.ol`
  font-size: ${palette.BODYTEXT_SIZE};
  color: ${palette.TEXT_COLOR_MAIN};

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;

  a {
    text-decoration: none;
    color: ${palette.DETAIL_ACCENT};
    font-weight: bold;
  }
`;

export const WarningText = styled.p`
  font-size: ${palette.DETAIL_SIZE};
  color: #a83d2f;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  margin: 0;
`;

// Buttons

export const PrimaryButton = styled.button`
  text-decoration: none;
  font-size: ${palette.PRIMARY_BUTTON_SIZE};

  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  border-radius: 1.5rem;
  margin: 1rem;
  border: none;
  background: ${palette.PRIMARY_BUTTON_BG};
  color: ${palette.PRIMARY_BUTTON_TC};
  width: max-content;
  padding: 0.6rem 1.2rem;
  align-self: center;
`;

export const SecondaryButton = styled.button`
  text-decoration: none;
  font-size: ${palette.SECONDARY_BUTTON_SIZE};
  color: ${palette.SECONDARY_BUTTON_TC};

  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  border-radius: 1.5rem;
  margin: 1rem;
  background: ${palette.SECONDARY_BUTTON_BG};
  border: none;
  width: max-content;
  padding: 0.5rem 1rem;
  align-self: center;
`;

// FORM

export const FormLabel = styled.label`
  font-size: 1rem;
  color: #151515;

  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  margin: 0.1rem;
  display: flex;
  flex-direction: row;
`;

export const FormTextarea = styled.textarea`
  border: 1px solid #3d3e8a;
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 1rem;
  min-height: 2rem;
  resize: both;
  overflow: hidden;
  width: 90%;
`;

export const FormInput = styled.input`
  border: 1px solid #3d3e8a;
  border-radius: 0.5rem;
  padding: 0rem 0.4rem;
  overflow: hidden;
  max-width: 15rem;
  width: 100%;
  height: 2rem;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem;
  width: 100%;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  widht: 100%;
  max-width: 30rem;
`;

// DIVS

export const RoundDivMedium = styled.div`
  background: ${palette.BG_ROUND_DIV_MEDIUM};
  border-radius: 2rem;
  max-width: 44rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 640px) {
    width: 90%;
    margin: 1.5%;
    padding: 0.5rem;
  }
`;

export const RoundDivLarge = styled.div`
  background: ${palette.BG_ROUND_DIV_LARGE};
  border-radius: 2rem;
  width: 100%;
  max-width: 62rem;
  margin: 0.2rem;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 640px) {
    width: 94%;
    margin: 3%;
    padding: 0.5rem;
  }
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
    padding: 0rem;
  }
`;

export const PaddingEl = styled.div`
  padding: 1.5rem 1rem;
  @media only screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

// images

export const NoMarginsSVG = styled.svg`
  margin: 0;
  padding: 0;
  flex-shrink: 0;
`;

export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 62rem;
  width: 90%;
  text-align: left;
  align-items: start;
  margin: 1rem 0 1rem 0;
  background: none;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;
