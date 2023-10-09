import React from 'react';
import styled from 'styled-components';
import { DummyProfiles, BasicBoard } from '../../assets/noticeBoardDummy';
import { useState } from 'react';
import {
  DetailText,
  Heading2,
  Heading3,
  Heading4,
  NoteBodyText,
} from '../../text-styles';

const NoticeBoardContainer = styled.div`
  width: 100%;
  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 5rem;
  color: white;
`;

const NotesMenuBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const MenuButton = styled.button`
  text-decoration: none;
  font-size: 16px;
  border-radius: 1rem;
  margin: 1rem;
  background: #d0d1f2;
  border: 1px solid #8889c2;
  width: max-content;
  padding: 0.5rem 1rem;
  align-self: center;
`;

const NotesContainer = styled.div`
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

const Noticeboard = () => {
  const [currentBoard, setCurrentBoard] = useState(BasicBoard);

  const getUsername = (id: string) => {
    const user = DummyProfiles.find(profile => profile.userID === id);
    return user ? user.username : 'did not find it';
  };

  const getDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return (
      date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString()
    );
  };

  return (
    <NoticeBoardContainer>
      <Heading2>Notice Board</Heading2>
      <NotesMenuBar>
        <Heading3>{currentBoard.title}</Heading3>
        <MenuButton>Post a Note</MenuButton>
      </NotesMenuBar>
      <NotesContainer>
        {currentBoard.notes.length
          ? currentBoard.notes.map((note, i) => (
              <Note key={currentBoard.title + '-note-' + i}>
                <Heading4>{note.title}</Heading4>
                <DetailText>
                  <i>{getUsername(note.userID)}</i> {getDate(note.timestamp)}
                </DetailText>
                <NoteBodyText>{note.note}</NoteBodyText>
                <MenuButton>Comment</MenuButton>
              </Note>
            ))
          : null}
      </NotesContainer>
    </NoticeBoardContainer>
  );
};

export default Noticeboard;
