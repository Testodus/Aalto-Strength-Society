import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bodytext, Heading2 } from '../../shared-styles';
import { Profile } from '../../types';

const ProfileElement = () => {
  const profile = useLoaderData() as Profile | null;

  return (
    <>
      {profile ? (
        <div>
          <Heading2>Profiles</Heading2>
          <Bodytext>{profile.username}</Bodytext>
        </div>
      ) : (
        <Heading2> Profile does not exist </Heading2>
      )}
    </>
  );
};

export default ProfileElement;
