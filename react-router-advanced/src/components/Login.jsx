// src/components/Login.jsx

import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth(); // Get the login function from useAuth

  const handleLogin = () => {
    login(); // Simulate login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;