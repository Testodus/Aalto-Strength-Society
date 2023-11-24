import React from 'react';
import {
  Heading2,
  ContentFrame,
  FullWidthDiv,
  RoundDivLarge,
  PaddingEl,
  Bodytext,
} from '../../assets/styles/shared-styles';

const Harassment = () => {
  return (
    <FullWidthDiv>
      <RoundDivLarge>
        <ContentFrame>
          <PaddingEl>
            <Heading2>Harassment situations</Heading2>
            <Bodytext>
              Aalto Strength Society has zero tolerance for any sort of
              harassment or inappropriate treatment. The association is
              committed to the guidelines of AYY about harassment and
              inappropriate treatment, which you can read from{' '}
              <a href="https://yhdistysopas.ayy.fi/harassment-and-inappropriate-treatment/?lang=en">
                here:
              </a>{' '}
              https://yhdistysopas.ayy.fi/harassment-and-inappropriate-treatment/?lang=en
            </Bodytext>
            <Bodytext>
              The harassment contact person for 2023 is Väinö Tyynilä, who you
              can contact via Telegram with the username @teukkis if you
              experience or notice any harassment or inappropriate treatment.
            </Bodytext>
          </PaddingEl>
        </ContentFrame>
      </RoundDivLarge>
    </FullWidthDiv>
  );
};

export default Harassment;
