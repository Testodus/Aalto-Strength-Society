import {
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
import { Profile } from '../types';
import { getProfile } from '../assets/noticeBoardDummy';

const PathNames = {
  profilePath: '/profile/:userID',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.profilePath>>;
}

export const profileLoader: LoaderFunction = async ({
  params,
}: Args): Promise<Profile | null> => {
  if (params.userID === undefined) return null;
  const profile = await getProfile(params.userID);
  return profile?.userID ? profile : null;
};
