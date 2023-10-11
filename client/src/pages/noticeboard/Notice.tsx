import React from 'react';
import styled from 'styled-components';
import {
  Heading4,
  DetailText,
  DarkBodyText,
  SecondaryButton,
} from '../../shared-styles';
import { Link } from 'react-router-dom';

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

type NoticeProps = {
  title: string;
  time: string;
  username: string;
  notice: string;
  userID: string | number;
};

/**
 *
 * @param title: the title of the notice
 * @param time: the formatted time of the notice
 * @param username: username
 * @param notice: the content of the notice
 * @param userID: the ID of the user, is used to making the router link to correct profile
 * @returns Notice -element
 */
const Notice = ({ title, time, username, notice, userID }: NoticeProps) => {
  return (
    <NoticeDiv>
      <Heading4>{title}</Heading4>
      <DetailText>
        <Link to={'/profile/' + userID}>{username}</Link> {time}
      </DetailText>
      <DarkBodyText>{notice}</DarkBodyText>
      <SecondaryButton>Comment</SecondaryButton>
    </NoticeDiv>
  );
};

export default Notice;
