import {
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
import { Profile, Notice } from '../shared-types';
import { DummyProfiles } from '../assets/noticeBoardDummy';
import { BasicBoard } from '../assets/noticeBoardDummy';

// the pathnames for loaders
const PathNames = {
  profilePath: '/profile/:userID',
  noticePath: '/view-notice/:noticeID',
  noticePathEditor: '/notice-editor/:noticeID',
} as const;

// interface to type the Args of the profileLoader
interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.profilePath>>;
}

// function to query profile from the dummydata
export const getProfile = (userID: string) => {
  // TÄÄLLÄ ETSITÄÄN PROFILE
  const profile = DummyProfiles.find(profile => profile.userID === userID);
  return profile ? profile : null;
};

/**
 * Loader for profile-pages
 *
 * this is ran when a page with path '/profile/:userID' is entered. The loader will use the query function to find the correct profile.
 *
 * Then the Loader will load the profile and hand it to the Profile-component (it is a single component that renders itself depending on usedID).
 *
 * Returns either the Profile or null
 */
export const profileLoader: LoaderFunction = async ({
  params,
}: Args): Promise<Profile | null> => {
  if (params.userID === undefined) return null;
  const profile = await getProfile(params.userID);
  return profile?.userID ? profile : null;
};

// NOTICE

// function to query profile from the dummydata // TÄÄLLÄ ETSITÄÄN NOTICE
export const getNotice = (noticeID: string) => {
  const notice = BasicBoard.notices.find(
    notice => notice.noticeID === noticeID
  );
  return notice ? notice : null;
};

// interface to type the Args of the noticeLoader
interface NoticeArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.noticePath>>;
}

// Loader for notices
export const noticeLoader: LoaderFunction = async ({
  params,
}: NoticeArgs): Promise<Notice | null> => {
  if (params.noticeID === undefined) return null;
  const notice = await getNotice(params.noticeID);
  return notice?.noticeID ? notice : null;
};

// interface to type the Args of the noticeLoader for editor
interface NoticeArgsEditor extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.noticePathEditor>>;
}

// Loader for notices in editor
export const noticeLoaderEditor: LoaderFunction = async ({
  params,
}: NoticeArgsEditor): Promise<Notice | null> => {
  if (params.noticeID === undefined) return null;
  const notice = await getNotice(params.noticeID);
  return notice?.noticeID ? notice : null;
};
