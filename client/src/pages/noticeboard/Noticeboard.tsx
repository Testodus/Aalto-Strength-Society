import React from 'react';
import styled from 'styled-components';
import { DummyProfiles, BasicBoard } from '../../assets/noticeBoardDummy';
import { useState } from 'react';
import { Heading2, Heading3, PrimaryButton } from '../../shared-styles';
import NoteElement from './Note';

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

const NotesMenuBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
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
      <NotesMenuBar>
        <Heading3>{currentBoard.title}</Heading3>
        <PrimaryButton>Post a Note</PrimaryButton>
      </NotesMenuBar>
      <NotesContainer>
        {currentBoard.notes.length
          ? currentBoard.notes.map((note, i) => (
              <NoteElement
                key={currentBoard.title + '-note-' + i}
                note={note.note}
                title={note.title}
                username={getUsername(note.userID)}
                time={getDate(note.timeStamp)}
                userID={note.userID}
              ></NoteElement>
            ))
          : null}
      </NotesContainer>
    </NoticeBoardContainer>
  );
};

export default Noticeboard;
