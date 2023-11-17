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
  PaddingEl,
} from '../../styles/shared-styles';
import axios, { AxiosError } from 'axios';
import { filterErrors } from '../../shared-functions';
import { emptyErrors } from '../../shared-functions';

const emptyRegisterFields = {
  password: '',
  username: '',
  email: '',
  typeOfLifting: '',
  favouriteLift: '',
  profilePicture: '',
  favouriteGym: '',
  favouriteGymTime: '',
  contactInfo: '',
};
/**
 *TODO: the form for registering, can be accessed from the login page
 * @returns Register page
 */
const Register = () => {
  const [errorMessages, setErrorMessages] = useState(emptyErrors); // array of the fields that have faulty values
  const [inputValues, setInputValues] = useState(emptyRegisterFields);

  const clearValues = () => {
    setErrorMessages(emptyErrors);
    setInputValues(emptyRegisterFields);
  };

  // HANDLE SUBMIT
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // try to log in
    try {
      const response = await axios.post(
        'http://localhost:3333/auth/register',
        JSON.stringify(inputValues),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const accessToken = response?.data?.access_token;
      alert(accessToken ? 'yes' : 'no');
      // TODO: aseta käyttäjä!! setAuth({ username, password, accessToken });
      clearValues();
      // TODO: redirect
    } catch (err: unknown) {
      if (!(err instanceof AxiosError)) {
        setErrorMessages({ ...errorMessages, general: 'Server error' });
      } else if (err.response?.status === 400) {
        setErrorMessages({
          ...errorMessages,
          password: filterErrors('password', err.response.data.message),
          username: filterErrors('username', err.response.data.message),
          email: filterErrors('email', err.response.data.message),
        });
      } else {
        setErrorMessages({ ...errorMessages, general: 'Registering failed' });
      }
      // what is thiis?errRef.current.focus();
    }
  };
  return (
    <FullWidthDiv>
      <RoundDivMedium>
        <Heading2>Register</Heading2>
        <PaddingEl>
          <Bodytext>
            Create a new account. Registered users get access to discuss in the
            noticeboard.
          </Bodytext>
        </PaddingEl>
        <FormStyle onSubmit={onSubmit}>
          {errorMessages.general.length ? (
            <WarningText>{errorMessages.general}</WarningText>
          ) : null}
          <FormInputContainer>
            {errorMessages.email.length ? (
              <WarningText>{errorMessages.email}</WarningText>
            ) : null}
            <FormLabel htmlFor="email">
              Email<WarningText>*</WarningText>
            </FormLabel>
            <FormInput
              id="email"
              value={inputValues.email}
              onChange={e =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            {errorMessages.username.length ? (
              <WarningText>{errorMessages.username}</WarningText>
            ) : null}
            <FormLabel htmlFor="username">
              Username<WarningText>*</WarningText>
            </FormLabel>
            <FormInput
              id="username"
              value={inputValues.username}
              onChange={e =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
          </FormInputContainer>
          <FormInputContainer>
            {errorMessages.password.length ? (
              <WarningText>{errorMessages.password}</WarningText>
            ) : null}
            <FormLabel htmlFor="password">
              Password<WarningText>*</WarningText>
            </FormLabel>
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
