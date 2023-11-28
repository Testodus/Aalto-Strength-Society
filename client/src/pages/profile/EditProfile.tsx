import {
  FullWidthDiv,
  RoundDivMedium,
  PaddingEl,
  Heading2,
  Bodytext,
  FormStyle,
  FormInput,
  FormInputContainer,
  FormLabel,
  SecondaryButton,
} from '../../assets/styles/shared-styles';
import { useAuth } from '../../provider/authProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProfile } from '../../loaders/loaders';
import axios from 'axios';
import { Profile } from '../../shared-types';

const emptyProfileFields = {
  typeOfLifting: '',
  favouriteLift: '',
  profilePicture: '',
  favouriteGym: '',
  favouriteGymTime: '',
  contactInfo: '',
};

type ProfileData = {
  typeOfLifting: string;
  favouriteLift: string;
  profilePicture: string;
  favouriteGym: string;
  favouriteGymTime: string;
  contactInfo: string;
};

const EditProfile = () => {
  const context = useAuth();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(emptyProfileFields);
  const [load, setLoad] = useState(false);

  if (!context?.userID) navigate('/', { replace: true });

  const fetcData = async () => {
    const oldProfileValues = await getProfile(context?.userID as number);

    const profileFields: ProfileData = {
      typeOfLifting: oldProfileValues.typeOfLifting,
      favouriteLift: oldProfileValues.favouriteLift,
      profilePicture: oldProfileValues.profilePicture,
      favouriteGym: oldProfileValues.favouriteGym,
      favouriteGymTime: oldProfileValues.favouriteGymTime,
      contactInfo: oldProfileValues.contactInfo,
    };

    setInputValues(profileFields);
    setLoad(true);
  };

  if (!load && context) {
    fetcData();
  }

  const clearValues = () => {
    setInputValues(emptyProfileFields);
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // try to log in
    try {
      await axios.patch(
        process.env.REACT_APP_API_URL + '/users/' + context?.userID,
        JSON.stringify(inputValues),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + context?.token,
          },
        }
      );
      clearValues();
      navigate('/profile/' + context?.userID, { replace: true });
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <FullWidthDiv>
      <RoundDivMedium>
        <Heading2>Edit Profile</Heading2>
        <PaddingEl>
          <Bodytext>
            Update profile information. Password, username or email can not be
            changed.
          </Bodytext>
        </PaddingEl>
        <FormStyle onSubmit={onSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="typeOfLifting">Type of Lifting</FormLabel>
            <FormInput
              id="typeOfLifting"
              value={inputValues.typeOfLifting}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  typeOfLifting: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="favouriteLift">
              What is your favourite lit?
            </FormLabel>
            <FormInput
              id="favouriteLift"
              value={inputValues.favouriteLift}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  favouriteLift: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="profilePicture">
              Choose a Profile picture?
            </FormLabel>
            <FormInput
              id="profilePicture"
              value={inputValues.profilePicture}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  profilePicture: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="favouriteGym">favouriteGym</FormLabel>
            <FormInput
              id="favouriteGym"
              value={inputValues.favouriteGym}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  favouriteGym: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="favouriteGymTime">favouriteGymTime</FormLabel>
            <FormInput
              id="favouriteGymTime"
              value={inputValues.favouriteGymTime}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  favouriteGymTime: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="contactInfo">Contact information</FormLabel>
            <FormInput
              id="contactInfo"
              value={inputValues.contactInfo}
              onChange={e =>
                setInputValues({
                  ...inputValues,
                  contactInfo: e.target.value,
                })
              }
            />
          </FormInputContainer>
          <SecondaryButton type="submit">Update</SecondaryButton>
        </FormStyle>
      </RoundDivMedium>
    </FullWidthDiv>
  );
};

export default EditProfile;
