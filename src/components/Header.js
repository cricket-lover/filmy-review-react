import React from 'react';
import { useHistory } from 'react-router-dom';
import searchImage from '../search.svg';

const Buttons = ({ user, setUser }) => {
  const logout = () =>
    fetch('/logout')
      .then((res) => res.json())
      .then(() => setUser({}));

  if (user.id) return <div onClick={logout}>Logout</div>;
  else return <a href={`http://localhost:3001/authenticate`}>Login</a>;
};

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
      {props.isHomePage && (
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
      )}
      <Buttons user={props.user} setUser={props.setUser} />
    </div>
  );
};

export default Header;
