import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Bodytext,
  Heading2,
  Heading3,
  RoundDivMedium,
} from '../../shared-styles';
import { Profile } from '../../types';
import styled from 'styled-components';

// TODO use actual images
const ImageContainer = styled.div`
  height: 250px;
  width: 250px;
  color: grey;
  background: grey;
  flex-shrink: 0;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 62rem;
  width: 100%;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }

  div,
  svg {
    margin: 0.5rem 2rem 0.5rem 2rem;

    @media only screen and (max-width: 640px) {
      margin: 2rem;
    }
  }
`;

/**
 * TODO: create the profile layout
 * @returns ProfileElement
 */
const ProfileElement = () => {
  const profile = useLoaderData() as Profile | null;

  return (
    <>
      {profile ? (
        <RoundDivMedium>
          <Heading2>Profiles</Heading2>
          <ResponsiveContainer>
            <ImageContainer>
              <Heading3>
                {profile.profilePictureSrc
                  ? profile.profilePictureSrc
                  : 'No profile picture set'}
              </Heading3>
            </ImageContainer>
            <div>
              <Heading3>{profile.username}</Heading3>
              {profile.contactInformation ? (
                <Bodytext>
                  <b>Contact information: </b>
                  {profile.contactInformation}
                </Bodytext>
              ) : null}
              {profile.favoriteLift ? (
                <Bodytext>
                  <b>{profile.username + '´s favourite lift: '}</b>
                  {profile.favoriteLift}
                </Bodytext>
              ) : null}
            </div>
          </ResponsiveContainer>
        </RoundDivMedium>
      ) : (
        <Heading2> Profile does not exist </Heading2>
      )}
    </>
  );
};

export default ProfileElement;
