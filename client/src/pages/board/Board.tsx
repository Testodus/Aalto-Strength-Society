import React from 'react';
import {
  FullWidthDiv,
  RoundDivLarge,
  ContentFrame,
  PaddingEl,
  Heading2,
  Bodytext,
} from '../../assets/styles/shared-styles';

const Board = () => {
  return (
    <FullWidthDiv>
      <RoundDivLarge>
        <ContentFrame>
          <PaddingEl>
            <Heading2>Board</Heading2>
            <Bodytext>
              Here you can find the current board members for the year 2023 and
              their contact information as well as the email to reach all of the
              board.
            </Bodytext>
            <Bodytext>Board email: hallitus@aaltostrengthsociety.com</Bodytext>
            <Bodytext>
              <b>Board members of 2023</b>, their role and their contact
              information (Telegram)
            </Bodytext>
            <Bodytext>Chairperson: Valtteri Ingervo (@vadevade24)</Bodytext>
            <Bodytext>Vice chairperson: Leevi Halén (@kukkeliq)</Bodytext>
            <Bodytext>Treasurer: Tiina Mikkola (@tiinam)</Bodytext>
            <Bodytext>Väinö Tyynilä (@teukkis)</Bodytext>
            <Bodytext>Darman Bacha (@darmanbacha)</Bodytext>
            <Bodytext>Lucas Björklund (@lucaspuu)</Bodytext>
            <Bodytext>Abdulwahhab Hani (@Abdulwahh)</Bodytext>
            <Bodytext>Saana Liimatainen (@hammaspeikko)</Bodytext>
            <Bodytext>Tuomas Myllymäki (@Tumppi98)</Bodytext>
            <Bodytext>Henri Södergård (@SoediASS)</Bodytext>
          </PaddingEl>
        </ContentFrame>
      </RoundDivLarge>
    </FullWidthDiv>
  );
};

export default Board;
