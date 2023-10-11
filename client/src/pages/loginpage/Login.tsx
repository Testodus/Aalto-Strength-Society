import React from 'react';
import { Link } from 'react-router-dom';
import { Bodytext, Heading2 } from '../../shared-styles';

/**
 * TODO: the login form
 * @returns Loginpage
 */
const Login = () => {
  return (
    <div>
      <Heading2>Login here</Heading2>
      <Bodytext>If you are not a user, register </Bodytext>
      <Link to="/register">here.</Link>
    </div>
  );
};

export default Login;
