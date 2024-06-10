
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;

