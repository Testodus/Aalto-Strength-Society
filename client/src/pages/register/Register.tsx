import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bodytext,
  Heading2,
  FullWidthDiv,
  RoundDivMedium,
  FormStyle,
  WarningText,
  FormInputContainer,
  FormInput,
  FormLabel,
  DetailText,
  SecondaryButton,
} from '../../styles/shared-styles';

/**
 *TODO: the form for registering, can be accessed from the login page
 * @returns Register page
 */
const Register = () => {
  const [flawedFields, setflawedFields] = useState<Array<string>>([]); // array of the fields that have faulty values
  const [inputValues, setInputValues] = useState({
    password: '',
    username: '',
    email: '',
    typeOfLifting: '',
    favouriteLift: '',
    profilePicture: '',
    favouriteGym: '',
    favouriteGymTime: '',
    contactInfo: '',
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      commentText: { value: string };
    };

    const validate = true; // chnage when there is actually a validation

    if (validate) {
      setflawedFields([]);
      setInputValues({
        username: '',
        password: '',
        email: '',
        typeOfLifting: '',
        favouriteLift: '',
        profilePicture: '',
        favouriteGym: '',
        favouriteGymTime: '',
        contactInfo: '',
      });
    } else {
      setflawedFields(['yes', 'yes']);
    }
  };
  return (
    <FullWidthDiv>
      <RoundDivMedium>
        <Heading2>Register</Heading2>
        <Bodytext>Create a new user.</Bodytext>
        <FormStyle onSubmit={onSubmit}>
          {flawedFields.length ? (
            <WarningText>
              The values of following fields were not correct
              {flawedFields.map(fieldName => fieldName + ', ')}
            </WarningText>
          ) : null}
          <FormInputContainer>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              value={inputValues.email}
              onChange={e =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
              id="username"
              value={inputValues.username}
              onChange={e =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              id="password"
              value={inputValues.password}
              onChange={e =>
                setInputValues({ ...inputValues, password: e.target.value })
              }
            />
          </FormInputContainer>
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
          <SecondaryButton type="submit">Register</SecondaryButton>
        </FormStyle>
        <DetailText>
          {'Already have an account? Log in '}
          <Link to="/login">here.</Link>
        </DetailText>
      </RoundDivMedium>
    </FullWidthDiv>
  );
};

export default Register;
