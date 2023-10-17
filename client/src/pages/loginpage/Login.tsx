import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DarkBodyText,
  DetailText,
  FullWidthDiv,
  Heading2,
  RoundDivLight,
  FormInputContainer,
  FormLabel,
  FormInput,
  WarningText,
  SecondaryButton,
  FormStyle,
} from '../../shared-styles';

/**
 * TODO: the login form
 * @returns Loginpage
 */
const Login = () => {
  const [noMatch, setNoMatch] = useState(false);
  const [inputValues, setInputValues] = useState({
    password: '',
    username: '',
  });

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      commentText: { value: string };
    };

    const validate = true; // chnage when there is actually a validation

    if (validate) {
      setNoMatch(false);
      setInputValues({ username: '', password: '' });
    } else {
      setNoMatch(true);
    }
  };

  return (
    <FullWidthDiv>
      <Heading2>Login</Heading2>
      <RoundDivLight>
        <DarkBodyText>Here you can log in to the ASS-website.</DarkBodyText>
        <FormStyle onSubmit={onSubmit}>
          {noMatch ? (
            <WarningText>Username or password was not valid</WarningText>
          ) : null}
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
          <SecondaryButton type="submit">Log in</SecondaryButton>
        </FormStyle>
        <DetailText>
          {'If you are not an user, register '}
          <Link to="/register">here.</Link>
        </DetailText>
      </RoundDivLight>
    </FullWidthDiv>
  );
};

export default Login;
