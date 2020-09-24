import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

const Homepage = ({ details }) => {
  return (
    <div className="main-container">
      <Header />
      <Dashboard details={details} />
    </div>
  );
};

export default Homepage;
