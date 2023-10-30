import {
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
import { Profile } from '../types';
import { DummyProfiles } from '../assets/noticeBoardDummy';

// the pathnames for loaders
const PathNames = {
  profilePath: '/profile/:userID',
} as const;

// interface to type the Args of the profileLoader
interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.profilePath>>;
}

// function to query profile from the dummydata
export const getProfile = (userID: string) => {
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
