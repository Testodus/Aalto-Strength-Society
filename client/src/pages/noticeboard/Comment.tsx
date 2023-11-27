import React, { useState } from 'react';
import styled from 'styled-components';
import { DetailText, Bodytext } from '../../assets/styles/shared-styles';
import { Link } from 'react-router-dom';
import { Comment } from '../../shared-types';
import { getProfile } from '../../loaders/loaders';

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

type ProfileData = {
  username: string;
};

/**
 *Can be used as the full Notice with comments and all with FullNotice: true and as a teaser with FullNotice:false
 * @returns Notice -element
 */
const CommentEl = ({ comment }: CommentProps) => {
  const [commentInfo, setCommentInfo] = useState(comment);
  const [loadReady, setLoad] = useState(false);

  const fetchData = async () => {
    // change to get notice comments
    const profileData: ProfileData = await getProfile(comment.userID);

    setCommentInfo({ ...commentInfo, username: profileData.username });
  };

  if (!loadReady) {
    fetchData();
    setLoad(true);
  }

  return (
    <CommentDiv>
      <DetailText>
        <Link to={'/profile/' + commentInfo.userID}>
          {commentInfo.username}
        </Link>{' '}
        {commentInfo?.timeStamp?.slice(0, 10)}
      </DetailText>
      <Bodytext>{commentInfo.comment}</Bodytext>
    </CommentDiv>
  );
};

export default CommentEl;
