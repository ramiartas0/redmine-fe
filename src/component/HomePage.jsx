import React from 'react';
import withAuth from '../withAuth';

const Home = () => {
 
  return (
      <h1>Merhaba</h1>
  );
};

export default withAuth(Home);
