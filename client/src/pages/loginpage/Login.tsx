import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '../../styles/shared-styles';

/**
 * TODO: the login form
 * @returns Loginpage
 */
const Login = () => {
  const [noMatch, setNoMatch] = useState(false);
  const [inputValues, setInputValues] = useState({
    password: '',
    email: '',
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      commentText: { value: string };
    };

    const validate = true; // chnage when there is actually a validation

    if (validate) {
      setNoMatch(false);
      setInputValues({ email: '', password: '' });
    } else {
      setNoMatch(true);
    }
  };

  return (
    <FullWidthDiv>
      <RoundDivMedium>
        <Heading2>Login</Heading2>
        <Bodytext>Here you can log in to the ASS-website.</Bodytext>
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
