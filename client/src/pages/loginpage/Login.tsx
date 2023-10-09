import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <p>If you are not a user, register </p>
      <Link to="/register">here.</Link>
    </div>
  );
};

export default Login;
