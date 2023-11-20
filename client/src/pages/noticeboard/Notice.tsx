import React, { useState } from 'react';
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
} from '../../styles/shared-styles';
import { Link } from 'react-router-dom';
import { DummyProfiles } from '../../assets/noticeBoardDummy';
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
} from '../../styles/variables';

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

/**
 *Can be used as the full Notice with comments and all with FullNotice: true and as a teaser with FullNotice:false
 * @returns Notice -element
 */
const NoticeEl = ({ fullNotice, notice }: NoticeProps) => {
  const [comments, setComments] = useState(notice.comments);
  const [shortComment, setShortComment] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');

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

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      commentText: { value: string };
    };

    if (target.commentText.value.length > 0) {
      const newComment: Comment = {
        comment: target.commentText.value,
        userID: '3',
        commentID: notice.noticeID + '-' + (comments.length + 1),
        noticeID: notice.noticeID,
        timeStamp: Date.now(),
      };

      setComments([...comments, newComment]);
      setShortComment(false);
      setTextAreaValue('');
    } else {
      setShortComment(true);
    }
  };

  return (
    <NoticeDiv $fullNotice={fullNotice}>
      <Heading4>{notice.title}</Heading4>
      <DetailText>
        <Link to={'/profile/' + notice.userID}>
          {getUsername(notice.userID)}
        </Link>{' '}
        {getDate(notice.timeStamp)}
      </DetailText>
      {fullNotice ? (
        <>
          <Bodytext>{notice.notice}</Bodytext>
          {comments.map((comment, i) => (
            <CommentEl
              key={'comment-' + comment.commentID + i}
              comment={comment}
            ></CommentEl>
          ))}
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
