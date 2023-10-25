import styled from 'styled-components';
import * as palette from './variables';

/**
 * This is file for shared styles on the different components: text-styles and buttons.
 */

// Text-styles
export const DetailText = styled.p`
  font-size: ${palette.DETAIL_SIZE};
  color: ${palette.TEXT_COLOR_DETAIL_GREY};

  font-family: 'Nunito', sans-serif;
  font-weight: 300;

  a {
    text-decoration: none;
    color: ${palette.TEXT_COLOR_DETAIL_ACCENT};
    font-weight: bold;
  }
`;

export const Heading1 = styled.h1`
  font-size: ${palette.HEADING_1_SIZE};
  color: ${palette.TEXT_COLOR_DARK_MAIN};
  text-align: center;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Heading2 = styled.h2`
  color: ${palette.TEXT_COLOR_DARK_MAIN};
  font-size: ${palette.HEADING_2_SIZE};
  margin: 1rem;
  padding: 0;

  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
`;

export const Heading3 = styled.h3`
  color: ${palette.TEXT_COLOR_DARK_ACCENT};
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
  color: ${palette.TEXT_COLOR_DARK_MAIN};

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

export const DarkBodyText = styled.p`
  font-size: ${palette.BODYTEXT_SIZE};
  color: #304f42;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
`;

export const WarningText = styled.p`
  font-size: ${palette.DETAIL_SIZE};
  color: #a83d2f;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
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

export const RoundDivSmall = styled.div`
  background: ${palette.BG_COLOR_ROUND_DIV_MEDIUM};
  border-radius: 2rem;
  max-width: 700px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const RoundDivMedium = styled.div`
  background: ${palette.BG_COLOR_ROUND_DIV_MEDIUM};
  border-radius: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0.2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 640px) {
    widht: 97%;
    margin: 1.5%;
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
    padding: 0rem 1rem;
  }
`;

export const Padding2Rem = styled.div`
  padding: 2rem;
`;
