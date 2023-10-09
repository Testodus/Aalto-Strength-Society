import React from 'react';
import { Link } from 'react-router-dom';
import { Bodytext, Heading2 } from '../../text-styles';

const Register = () => {
  return (
    <div>
      <Heading2>Register</Heading2>
      <Bodytext>If you are already user login </Bodytext>
      <Link to="/login">here.</Link>
    </div>
  );
};

export default Register;
