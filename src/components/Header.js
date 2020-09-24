import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Link to="/">
      <div className="header">Filmy Review</div>;
    </Link>
  );
};

export default Header;
