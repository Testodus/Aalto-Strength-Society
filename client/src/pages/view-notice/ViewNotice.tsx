import NoticeEl from '../noticeboard/Notice';
import { Notice } from '../../shared-types';
import { useLoaderData } from 'react-router-dom';
import { Heading3 } from '../../assets/styles/shared-styles';
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
        <Heading3>Notice does not exist.</Heading3>
      )}{' '}
    </ViewNoticeContainer>
  );
};

export default ViewNotice;
