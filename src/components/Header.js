import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();
  const updateHistory = () => {
    props.handleChange('');
    history.push('/');
  };
  return (
    <div className="header">
      <div className="logo-name" onClick={updateHistory}>
        Filmy Review
      </div>
    </div>
  );
};

export default Header;
