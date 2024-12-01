// src/components/ProtectedRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;