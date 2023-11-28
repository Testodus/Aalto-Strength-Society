import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import {
  Bodytext,
  DetailText,
  Heading2,
  Heading3,
  RoundDivLarge,
  TertiaryButton,
} from '../../assets/styles/shared-styles';
import { Profile } from '../../shared-types';
import styled from 'styled-components';
import Kettlebell from '../../components/Kettlebell';
import { useAuth } from '../../provider/authProvider';
import { deleteProfile } from '../../shared-functions';

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
  const context = useAuth();
  const navigate = useNavigate();

  const deleteActionProfile = async () => {
    if (context?.token && profile?.userID) {
      await deleteProfile(profile?.userID, context?.token);
      if (context?.userID + '' === profile.userID + '') {
        context?.setUser(null, null);
        navigate('/out', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  };

  return (
    <>
      {profile ? (
        <RoundDivLarge>
          <Heading2>Profiles</Heading2>
          <ResponsiveContainer>
            <Kettlebell></Kettlebell>
            <div>
              {context?.userID + '' === profile.userID + '' ? (
                <DetailText>
                  <Link to="/edit-profile">Edit profile</Link>
                </DetailText>
              ) : null}
              {context?.userID + '' === '8' ||
              context?.userID + '' === profile.userID + '' ? (
                <TertiaryButton onClick={deleteActionProfile}>
                  Delete Profile
                </TertiaryButton>
              ) : null}
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
