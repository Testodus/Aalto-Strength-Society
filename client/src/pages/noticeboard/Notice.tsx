import React from 'react';
import styled from 'styled-components';
import {
  Heading4,
  DetailText,
  DarkBodyText,
  SecondaryButton,
} from '../../shared-styles';
import { Link } from 'react-router-dom';
import { DummyProfiles } from '../../assets/noticeBoardDummy';
import { Notice } from '../../types';

const NoticeDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: #f1f1f1;
  padding: 1rem;
  justify-content: space-between;
  height: min-content;
`;
// jos haluut noticet saman kokosiks ota toi hieght pois

const FadedContentGrid = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: 100%;

  a {
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

    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
  }
`;

const Fade = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 3;

  background-image: linear-gradient(transparent, #f2f2f2);
`;

export const DarkBodyTextGrid = styled.p`
  font-size: 20px;
  color: #ad4805;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;

  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
`;

type NoticeProps = {
  fullNotice: boolean;
  notice: Notice;
};

/**
 *Can be used as the full Notice with comments and all with FullNotice: true and as a teaser with FullNotice:false
 * @returns Notice -element
 */
const NoticeEl = ({ fullNotice, notice }: NoticeProps) => {
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
    <NoticeDiv>
      <Heading4>{notice.title}</Heading4>
      <DetailText>
        <Link to={'/profile/' + notice.userID}>
          {getUsername(notice.userID)}
        </Link>{' '}
        {getDate(notice.timeStamp)}
      </DetailText>
      {fullNotice ? (
        <>
          <DarkBodyText>{notice.notice}</DarkBodyText>
          <SecondaryButton>Comment</SecondaryButton>
        </>
      ) : (
        <FadedContentGrid>
          <DarkBodyTextGrid>
            {notice.notice.slice(0, 100) + '..'}
          </DarkBodyTextGrid>
          <Fade></Fade>
          <Link to={'/join'}>Show Notice</Link>
        </FadedContentGrid>
      )}
    </NoticeDiv>
  );
};

export default NoticeEl;
