
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    }, []);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;

