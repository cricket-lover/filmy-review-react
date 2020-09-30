import React, { useEffect } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

const Homepage = ({ details, handleChange, value, user, setUser }) => {
  useEffect(() => {
    fetch('/api/getUser')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div className="main-container">
      <Header
        isHomePage={true}
        handleChange={handleChange}
        value={value}
        user={user}
        setUser={setUser}
      />
      <Dashboard details={details} />
    </div>
  );
};

export default Homepage;
