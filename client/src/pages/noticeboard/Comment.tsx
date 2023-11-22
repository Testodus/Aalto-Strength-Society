import React from 'react';
import styled from 'styled-components';
import { DetailText, Bodytext } from '../../assets/styles/shared-styles';
import { Link } from 'react-router-dom';
import { DummyProfiles } from '../../assets/noticeBoardDummy';
import { Comment } from '../../shared-types';

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: #f0e2cc;
  padding: 1rem;
  justify-content: space-between;
  height: min-content;
  margin: 0.5rem;

  p,
  a {
    margin: 0.2rem;
  }
`;

type CommentProps = {
  comment: Comment;
};

/**
 *Can be used as the full Notice with comments and all with FullNotice: true and as a teaser with FullNotice:false
 * @returns Notice -element
 */
const CommentEl = ({ comment }: CommentProps) => {
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
    <CommentDiv>
      <DetailText>
        <Link to={'/profile/' + comment.userID}>
          {getUsername(comment.userID)}
        </Link>{' '}
        {getDate(comment.timeStamp)}
      </DetailText>
      <Bodytext>{comment.comment}</Bodytext>
    </CommentDiv>
  );
};

export default CommentEl;
