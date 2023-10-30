import React from 'react';
import styled from 'styled-components';
import { DummyProfiles, BasicBoard } from '../../assets/noticeBoardDummy';
import { useState } from 'react';
import { Heading2, Heading3, PrimaryButton } from '../../shared-styles';
import Notice from './Notice';

const NoticeBoardContainer = styled.div`
  width: 100%;
  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 5rem;
  color: F2F2F2;

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

  const getUsername = (id: string) => {
    const user = DummyProfiles.find(profile => profile.userID === id);
    return user ? user.username : 'did not find it';
  };

  const addZeroToTime = (number: number) =>
    number > 9 ? number : '0' + number;

  const getDate = (timeStamp: number) => {
    const date = new Date(timeStamp);
    return (
      addZeroToTime(date.getHours()) +
      ':' +
      addZeroToTime(date.getMinutes()) +
      ', ' +
      date.toDateString()
    );
  };

  return (
    <NoticeBoardContainer>
      <Heading2>Notice Board</Heading2>
      <NoticesMenuBar>
        <Heading3>{currentBoard.title}</Heading3>
        <PrimaryButton>Post a Notice</PrimaryButton>
      </NoticesMenuBar>
      <NoticesContainer>
        {currentBoard.notices.length
          ? currentBoard.notices.map((notice, i) => (
              <Notice
                key={currentBoard.title + '-Notice-' + i}
                notice={notice.notice}
                title={notice.title}
                username={getUsername(notice.userID)}
                time={getDate(notice.timeStamp)}
                userID={notice.userID}
              ></Notice>
            ))
          : null}
      </NoticesContainer>
    </NoticeBoardContainer>
  );
};

export default Noticeboard;
