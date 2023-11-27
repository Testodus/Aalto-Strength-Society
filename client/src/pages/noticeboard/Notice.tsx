import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Heading4,
  DetailText,
  Bodytext,
  SecondaryButton,
  FormLabel,
  FormInputContainer,
  FormTextarea,
  WarningText,
} from '../../assets/styles/shared-styles';
import { Link, useNavigate } from 'react-router-dom';
import { Comment, Notice } from '../../shared-types';
import CommentEl from './Comment';
import {
  BG_ROUND_DIV_SMALL,
  BG_ROUND_DIV_LARGE,
  SECONDARY_BUTTON_BG,
  SECONDARY_BUTTON_SIZE,
  SECONDARY_BUTTON_TC,
  TEXT_COLOR_MAIN,
  NOTICE_BODYTEXT_SIZE,
  PRIMARY_BUTTON_TC,
} from '../../assets/styles/variables';
import { useAuth } from '../../provider/authProvider';
import { getProfile } from '../../loaders/loaders';
import { deleteNotice, getComments, postComment } from '../../shared-functions';

const NoticeDiv = styled.div.attrs<{ $fullNotice?: boolean }>(props => ({}))`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: ${props =>
    props.$fullNotice ? BG_ROUND_DIV_LARGE : BG_ROUND_DIV_SMALL};
  padding: 1rem;

  justify-content: space-between;
  height: min-content;
  margin: 0.3rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
`;
// jos haluut noticet saman kokosiks ota toi hieght pois

const EditDiv = styled.div`
  margin: 1rem 0;
  a {
    text-decoration: none;
    font-size: 1rem;

    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    border-radius: 1rem;
    margin: 1rem;
    border: none;
    background: grey;
    color: ${PRIMARY_BUTTON_TC};
    width: max-content;
    padding: 0.4rem 0.8rem;
    align-self: center;
  }
`;

const FadedContentGrid = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: 100%;

  a {
    text-decoration: none;
    font-size: ${SECONDARY_BUTTON_SIZE};
    color: ${SECONDARY_BUTTON_TC};

    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    border-radius: 1.5rem;
    margin: 1rem;
    background: ${SECONDARY_BUTTON_BG};
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

  background-image: linear-gradient(transparent, ${BG_ROUND_DIV_SMALL});
`;

export const BodyTextGrid = styled.p`
  font-size: ${NOTICE_BODYTEXT_SIZE};
  color: ${TEXT_COLOR_MAIN};

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;

  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  padding-bottom: 0.5rem;
`;

type NoticeProps = {
  fullNotice: boolean;
  notice: Notice;
};

type NoticeData = {
  text: string;
  userId: number;
  id: number;
  title: string;
  picture: string;
  createdAt: string;
  noticeComments?: Array<CommentData>;
};

type CommentData = {
  text: string;
  userId: number;
  createdAt: string;
  id: number;
  commentId: number;
  noticeId: number;
};

type ProfileData = {
  username: string;
};

/**
 *Can be used as the full Notice with comments and all with FullNotice: true and as a teaser with FullNotice:false
 * @returns Notice -element
 */
const NoticeEl = ({ fullNotice, notice }: NoticeProps) => {
  const [comments, setComments] = useState<Array<Comment> | null>(null);
  const [shortComment, setShortComment] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [loadReady, setLoad] = useState(false);
  const [username, setUsername] = useState('');

  const context = useAuth();
  const navigate = useNavigate();

  const fetchData = async () => {
    // change to get notice comments
    const noticeData: NoticeData = await getComments(notice.noticeID);
    const profileData: ProfileData = await getProfile(notice.userID);
    setUsername(profileData.username);
    if (noticeData?.noticeComments?.length) {
      const comments: Array<Comment> | undefined =
        noticeData.noticeComments.map((comment: CommentData) => {
          return {
            userID: comment.userId,
            timeStamp: comment.createdAt,
            comment: comment.text,
            commentID: comment.id,
            noticeID: comment.noticeId,
          };
        });
      setComments(comments);
    }
  };

  if (!loadReady) {
    fetchData();
    setLoad(true);
  }

  // API
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      commentText: { value: string };
    };

    if (target.commentText.value.length > 0) {
      postComment(
        target.commentText.value,
        context?.userID as number,
        notice.noticeID,
        context?.token as string
      ).then(() => {
        fetchData();
      });
      // fetch the comments again to update
      setShortComment(false);
      setTextAreaValue('');
    } else {
      setShortComment(true);
    }
  };

  const deleteActionNotice = async () => {
    if (context?.token) {
      const success = await deleteNotice(notice.noticeID, context?.token);
      if (success) navigate('/noticeboard', { replace: true });
    }
  };

  return (
    <NoticeDiv $fullNotice={fullNotice}>
      <Heading4>{notice.title}</Heading4>
      <EditDiv>
        {fullNotice && context?.userID + '' === notice.userID + '' ? (
          <>
            <Link to={'/notice-editor/' + notice.noticeID}> Edit Notice </Link>
            <SecondaryButton onClick={deleteActionNotice}>
              Delete Notice
            </SecondaryButton>
          </>
        ) : null}
        {fullNotice && context?.userID + '' === '8' ? (
          <SecondaryButton onClick={deleteActionNotice}>
            Delete Notice
          </SecondaryButton>
        ) : null}
      </EditDiv>
      <DetailText>
        <Link to={'/profile/' + notice.userID}>{username}</Link>{' '}
        {notice?.timeStamp?.slice(0, 10)}
      </DetailText>
      {fullNotice ? (
        <>
          <Bodytext>{notice.notice}</Bodytext>
          {comments
            ? comments.map((comment, i) => (
                <CommentEl
                  key={'comment-' + comment.commentID + i}
                  comment={comment}
                ></CommentEl>
              ))
            : null}
          <form onSubmit={onSubmit}>
            <FormInputContainer>
              <FormLabel htmlFor="commentText">Comment</FormLabel>
              {shortComment ? (
                <WarningText>Comment is too short!</WarningText>
              ) : null}
              <FormTextarea
                id="commentText"
                value={textAreaValue}
                onChange={e => setTextAreaValue(e.target.value)}
              />
            </FormInputContainer>
            <SecondaryButton type="submit">Comment</SecondaryButton>
          </form>
        </>
      ) : (
        <FadedContentGrid>
          <BodyTextGrid>
            {notice.notice.slice(0, 100) +
              (notice.notice.length > 100 ? '..' : '')}
          </BodyTextGrid>
          <Fade></Fade>
          <Link to={'/view-notice/' + notice.noticeID}>Show Notice</Link>
        </FadedContentGrid>
      )}
    </NoticeDiv>
  );
};

export default NoticeEl;
