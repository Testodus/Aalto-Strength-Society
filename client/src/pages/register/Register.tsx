import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
} from '../../assets/styles/shared-styles';
import axios, { AxiosError } from 'axios';
import { filterErrors } from '../../shared-functions';
import { emptyErrors } from '../../shared-functions';
import { useAuth } from '../../provider/authProvider';
import { jwtDecode } from 'jwt-decode';

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

  const context = useAuth();
  const navigate = useNavigate();

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
        process.env.REACT_APP_API_URL + '/auth/register',
        JSON.stringify(inputValues),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const accessToken = response.data.access_token;
      const userID = jwtDecode(accessToken).sub as unknown as number;
      // set user-information
      context?.setUser(accessToken, userID);
      // clear form values
      clearValues();
      // navigate to the landing page
      navigate('/in', { replace: true });
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
