import NoticeEl from '../noticeboard/Notice';
import { Notice } from '../../shared-types';
import { useLoaderData } from 'react-router-dom';
import {
  RoundDivLarge,
  Heading2,
  Bodytext,
} from '../../assets/styles/shared-styles';
import styled from 'styled-components';

const ViewNoticeContainer = styled.div`
  width: 100%;
  max-width: 44rem;
`;

const ViewNotice = () => {
  const notice = useLoaderData() as Notice | null;

  return (
    <ViewNoticeContainer>
      {notice ? (
        <NoticeEl notice={notice} fullNotice={true}></NoticeEl>
      ) : (
        <RoundDivLarge>
          <Heading2> Notice does not exist </Heading2>
          <Bodytext>Notice you are looking for does not exist!</Bodytext>
          <Bodytext>Please try another notice.</Bodytext>
        </RoundDivLarge>
      )}{' '}
    </ViewNoticeContainer>
  );
};

export default ViewNotice;
