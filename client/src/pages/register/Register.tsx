import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <p>If you are already user login </p>
      <Link to="/login">here.</Link>
    </div>
  );
};

export default Register;
