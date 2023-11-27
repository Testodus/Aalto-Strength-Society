import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bodytext,
  DetailText,
  FullWidthDiv,
  Heading2,
  RoundDivMedium,
  FormInputContainer,
  FormLabel,
  FormInput,
  WarningText,
  SecondaryButton,
  FormStyle,
  PaddingEl,
} from '../../assets/styles/shared-styles';
import { useAuth } from '../../provider/authProvider';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const emptyLogin = {
  password: '',
  email: '',
};
/**
 * TODO: the login form
 * @returns Loginpage
 */
const Login = () => {
  const [noMatch, setNoMatch] = useState(false);
  const [inputValues, setInputValues] = useState(emptyLogin);

  const context = useAuth();
  const navigate = useNavigate();

  const clearValues = () => {
    setInputValues(emptyLogin);
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/auth/login',
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
      setNoMatch(true);
    }
  };

  return (
    <FullWidthDiv>
      <RoundDivMedium>
        <Heading2>Login</Heading2>
        <PaddingEl>
          <Bodytext>Here you can log in to the ASS-website.</Bodytext>
        </PaddingEl>
        <FormStyle onSubmit={onSubmit}>
          {noMatch ? (
            <WarningText>Email or password was not valid</WarningText>
          ) : null}
          <FormInputContainer>
            <FormLabel htmlFor="email">email</FormLabel>
            <FormInput
              id="email"
              value={inputValues.email}
              onChange={e =>
                setInputValues({ ...inputValues, email: e.target.value })
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
          <SecondaryButton type="submit">Log in</SecondaryButton>
        </FormStyle>
        <DetailText>
          {'If you are not an user, register '}
          <Link to="/register">here.</Link>
        </DetailText>
      </RoundDivMedium>
    </FullWidthDiv>
  );
};

export default Login;
