import React from 'react';
import styled from 'styled-components';
import { BasicBoard } from '../../assets/noticeBoardDummy';
import { useState } from 'react';
import {
  Bodytext,
  Heading2,
  Heading3,
  PrimaryButton,
} from '../../shared-styles';
import NoticeEl from './Notice';

const NoticeBoardContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 5rem;

  overflow: hidden;

  @media only screen and (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

const NoticesMenuBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NoticesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  max-widht: 800px;
  widht: 100%;
  margin: 2rem;

  @media only screen and (max-width: 640px) {
    margin: 0rem;
  }
`;

/**
 * This creates the notice board component. It contains the headers, menumar for buttons and the notices section
 *
 * Notices section is formatted with responsive grid layout.
 *
 * Should be fully responsive
 * @returns Noticeboard
 */
const Noticeboard = () => {
  const [currentBoard, setCurrentBoard] = useState(BasicBoard);

  return (
    <NoticeBoardContainer>
      <Heading2>Notice Board</Heading2>
      <NoticesMenuBar>
        <div>
          <Heading3>{currentBoard.title}</Heading3>
          <Bodytext>{currentBoard.description}</Bodytext>
        </div>
        <PrimaryButton>Post a Notice</PrimaryButton>
      </NoticesMenuBar>
      <NoticesContainer>
        {currentBoard.notices.length
          ? currentBoard.notices.map((notice, i) => (
              <NoticeEl
                key={currentBoard.title + '-Notice-' + i}
                notice={notice}
                fullNotice={false}
              ></NoticeEl>
            ))
          : null}
      </NoticesContainer>
    </NoticeBoardContainer>
  );
};

export default Noticeboard;
