import React from 'react';
import styled from 'styled-components';
import {
  Heading4,
  DetailText,
  DarkBodyText,
  SecondaryButton,
} from '../../shared-styles';
import { Link } from 'react-router-dom';

const Note = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: #f1f1f1;
  padding: 1rem;
  justify-content: space-between;
  height: min-content;
`;
// jos haluut notet saman kokosiks ota toi hieght pois

type NoteProps = {
  title: string;
  time: string;
  username: string;
  note: string;
  userID: string | number;
};

const NoteElement = ({ title, time, username, note, userID }: NoteProps) => {
  return (
    <Note>
      <Heading4>{title}</Heading4>
      <DetailText>
        <Link to={'/profile/' + userID}>{username}</Link> {time}
      </DetailText>
      <DarkBodyText>{note}</DarkBodyText>
      <SecondaryButton>Comment</SecondaryButton>
    </Note>
  );
};

export default NoteElement;
