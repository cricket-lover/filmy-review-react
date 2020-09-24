import React from 'react';
import HeaderWithSearch from './HeaderWithSearch';
import Dashboard from './Dashboard';

const Homepage = ({ details, handleChange, value }) => {
  return (
    <div className="main-container">
      <HeaderWithSearch handleChange={handleChange} value={value} />
      <Dashboard details={details} />
    </div>
  );
};

export default Homepage;
