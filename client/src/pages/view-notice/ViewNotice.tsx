import NoticeEl from '../noticeboard/Notice';
import { Notice } from '../../types';
import { useLoaderData } from 'react-router-dom';

const ProfileElement = () => {
  const notice = useLoaderData() as Notice | null;

  return <></>;
};

export default ProfileElement;
