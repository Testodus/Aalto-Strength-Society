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

const emptyProfileFields = {
  typeOfLifting: '',
  favouriteLift: '',
  profilePicture: '',
  favouriteGym: '',
  favouriteGymTime: '',
  contactInfo: '',
};

const EditProfile = () => {
  const context = useAuth();
  const navigate = useNavigate();

  if (!context?.userID) navigate('/', { replace: true });

  const oldProfileValues = getProfile(context ? (context.userID as number) : 1);

  const [inputValues, setInputValues] = useState(
    context ? emptyProfileFields : emptyProfileFields
  );

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // try to log in
    try {
      console.log('API kutus tänne');
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
            changed. This information is publicly available to other logged in
            users, so be mindful of what you share!
          </Bodytext>
        </PaddingEl>
        <FormStyle onSubmit={onSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="typeOfLifting">
              What type of lifting do you do?
            </FormLabel>
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
              What is your favourite lift?
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
            <FormLabel htmlFor="favouriteGym">
              Your favourite gym to go to?
            </FormLabel>
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
            <FormLabel htmlFor="favouriteGymTime">
              Your favourite gym time?
            </FormLabel>
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
