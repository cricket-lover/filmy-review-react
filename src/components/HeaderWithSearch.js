import React from 'react';
import { useHistory } from 'react-router-dom';
import searchImage from '../search.svg';

const HeaderWithSearch = (props) => {
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
      <div className="search">
        <input
          value={props.value}
          type="text"
          placeholder="Search your movie here"
          className="search-text"
          onChange={(event) => {
            props.handleChange(event.target.value.trim());
          }}
        />
        <img src={searchImage} alt="search" className="search-image" />
      </div>
    </div>
  );
};

export default HeaderWithSearch;
