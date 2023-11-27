import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {
  Bodytext,
  Heading2,
  Heading3,
  RoundDivLarge,
} from '../../assets/styles/shared-styles';
import NoticeEl from './Notice';
import { Link } from 'react-router-dom';
import {
  PRIMARY_BUTTON_BG,
  PRIMARY_BUTTON_SIZE,
  PRIMARY_BUTTON_TC,
} from '../../assets/styles/variables';
import { getAllNotices } from '../../loaders/loaders';
import { Notice } from '../../shared-types';

const NoticeBoardContainer = styled.div`
  width: 90%;
  max-width: 62rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;

  overflow: hidden;

  @media only screen and (max-width: 500px) {
    padding: 0rem 5%;
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

  a {
    text-decoration: none;
    font-size: ${PRIMARY_BUTTON_SIZE};

    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    border-radius: 1.5rem;
    margin: 1rem;
    border: none;
    background: ${PRIMARY_BUTTON_BG};
    color: ${PRIMARY_BUTTON_TC};
    width: max-content;
    padding: 0.6rem 1.2rem;
    align-self: center;
  }
`;

const NoticeboardInfoDiv = styled.div`
  max-width: 60%;
  @media only screen and (max-width: 640px) {
    max-width: none;
  }
`;

const NoticesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 2rem;
  max-width: 50rem;
  width: 100%;
  margin: 2rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 640px) {
    margin: 0rem;
  }
`;

type NoticeData = {
  text: string;
  userId: number;
  id: number;
  title: string;
  picture: string;
  createdAt: string;
  noticeComments: Array<unknown>;
};

/**
 * This creates the notice board component. It contains the headers, menumar for buttons and the notices section
 *
 * Notices section is formatted with responsive grid layout.
 *
 * Should be fully responsive
 * @returns Noticeboard
 */
const Noticeboard = () => {
  const [notices, setNotices] = useState<Array<Notice>>([]);
  const [loadReady, setLoad] = useState(false);

  const fetchData = async () => {
    const noticeData: Array<NoticeData> = await getAllNotices();
    const notices: Array<Notice> = noticeData.map((notice: NoticeData) => {
      return {
        notice: notice.text,
        userID: notice.userId,
        noticeID: notice.id,
        title: notice.title,
        imageSrc: notice.picture,
        timeStamp: notice.createdAt,
      };
    });
    setNotices(notices);
  };

  if (!loadReady) {
    fetchData();
    setLoad(true);
  }

  return (
    <RoundDivLarge>
      <NoticeBoardContainer>
        <Heading2>Notice Board</Heading2>
        <NoticesMenuBar>
          <NoticeboardInfoDiv>
            <Heading3>General notices</Heading3>
            <Bodytext>
              Welcome, here you are free to discuss all gym and training realted
              topics. Users that are logged in can post and others are able to
              just observe.
            </Bodytext>
          </NoticeboardInfoDiv>
          <Link to={'/notice-editor/new-notice'}>Post a Notice</Link>
        </NoticesMenuBar>
        <NoticesContainer>
          {notices.length
            ? notices
                .map((notice: Notice, i: number) => (
                  <NoticeEl
                    key={'-Notice-' + i}
                    notice={notice}
                    fullNotice={false}
                  ></NoticeEl>
                ))
                .reverse()
            : null}
        </NoticesContainer>
      </NoticeBoardContainer>
    </RoundDivLarge>
  );
};

export default Noticeboard;
