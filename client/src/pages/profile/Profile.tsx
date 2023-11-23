import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Bodytext,
  Heading2,
  Heading3,
  RoundDivLarge,
} from '../../assets/styles/shared-styles';
import { Profile } from '../../shared-types';
import styled from 'styled-components';
import Kettlebell from '../../components/Kettlebell';

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
        <RoundDivLarge>
          <Heading2>Profiles</Heading2>
          <ResponsiveContainer>
            <Kettlebell></Kettlebell>
            <div>
              <Heading3>{profile.username}</Heading3>
              {profile.contactInfo ? (
                <Bodytext>
                  <b>Contact information: </b>
                  {profile.contactInfo}
                </Bodytext>
              ) : null}
              {profile.favouriteLift ? (
                <Bodytext>
                  <b>{profile.username + '´s favourite lift: '}</b>
                  {profile.favouriteLift}
                </Bodytext>
              ) : null}
            </div>
          </ResponsiveContainer>
        </RoundDivLarge>
      ) : (
        <RoundDivLarge>
          <Heading2> Profile does not exist </Heading2>
          <Bodytext>Profile you are looking for does not exist!</Bodytext>
          <Bodytext>Please try another profile.</Bodytext>
        </RoundDivLarge>
      )}
    </>
  );
};

export default ProfileElement;
