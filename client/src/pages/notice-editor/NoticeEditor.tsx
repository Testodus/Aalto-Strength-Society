import { Notice } from '../../shared-types';
import { useLoaderData } from 'react-router-dom';
import {
  FormInputContainer,
  FormStyle,
  FormInput,
  FormLabel,
  WarningText,
  Heading2,
  FormTextarea,
  PaddingEl,
  SecondaryButton,
} from '../../assets/styles/shared-styles';
import styled from 'styled-components';
import { useState } from 'react';
import { BG_ROUND_DIV_LARGE } from '../../assets/styles/variables';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/authProvider';
import { postNotice, updateNotice } from '../../shared-functions';

const ViewNoticeContainer = styled.div`
  width: 100%;
  max-width: 44rem;
`;

const emptyNotice = {
  notice: '',
  title: '',
};

const NoticeDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background: ${BG_ROUND_DIV_LARGE};
  padding: 1rem;

  justify-content: space-between;
  height: min-content;
  margin: 0.3rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
`;
//

type EditorProps = {
  newNotice: boolean;
};

const NoticeEditor = ({ newNotice }: EditorProps) => {
  const notice = useLoaderData() as Notice | null;
  const context = useAuth();
  const navigate = useNavigate();

  const [noticeValues, setNoticeValues] = useState(
    newNotice ? emptyNotice : { notice: notice?.notice, title: notice?.title }
  );

  const [errorMessages, setErrorMessages] = useState('');

  const clearValues = () => {
    setNoticeValues(emptyNotice);
  };

  const postNewNotice = async (
    notice: string,
    title: string,
    userID: number,
    token: string
  ) => {
    try {
      const newNoticeID = await postNotice(notice, title, userID, token);
      if (newNoticeID) {
        clearValues();
        // navigate to the landing page
        navigate('/view-notice/' + newNoticeID, { replace: true });
      }
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const updateOldNotice = async (
    notice: string,
    title: string,
    noticeID: number,
    token: string
  ) => {
    try {
      const success = await updateNotice(notice, title, noticeID, token);
      if (success) {
        clearValues();
        // navigate to the landing page
        navigate('/view-notice/' + noticeID, { replace: true });
      }
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      notice: { value: string };
      title: { value: string };
    };
    if (
      !target.notice?.value?.length ||
      !target.title?.value?.length ||
      !context?.userID ||
      !context?.token
    ) {
      setErrorMessages('Notice and Title can not be empty');
    } else {
      if (newNotice)
        postNewNotice(
          target.notice.value,
          target.title.value,
          context.userID,
          context.token
        );
      else if (notice?.noticeID)
        updateOldNotice(
          target.notice.value,
          target.title.value,
          context.userID,
          context.token
        );
    }
  };

  return (
    <ViewNoticeContainer>
      <NoticeDiv>
        <Heading2>{newNotice ? 'Create Notice' : 'Edit Notice'}</Heading2>
        <PaddingEl>
          <FormStyle onSubmit={onSubmit}>
            <WarningText>{errorMessages}</WarningText>
            <FormInputContainer>
              <FormLabel htmlFor="title">
                Title<WarningText>*</WarningText>
              </FormLabel>
              <FormInput
                id="title"
                value={noticeValues.title}
                onChange={e =>
                  setNoticeValues({ ...noticeValues, title: e.target.value })
                }
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="notice">
                Notice<WarningText>*</WarningText>
              </FormLabel>
              <FormTextarea
                id="notice"
                value={noticeValues.notice}
                onChange={e =>
                  setNoticeValues({ ...noticeValues, notice: e.target.value })
                }
              />
            </FormInputContainer>
            <SecondaryButton type="submit">Post Notice</SecondaryButton>
          </FormStyle>
        </PaddingEl>
      </NoticeDiv>
    </ViewNoticeContainer>
  );
};

export default NoticeEditor;
