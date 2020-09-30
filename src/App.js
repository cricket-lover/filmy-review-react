import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import MoviePage from './components/MoviePage';
import './App.css';

function App() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch('/api/allMovies')
      .then((res) => res.json())
      .then(setMovieDetails);
  }, []);
  const regex = new RegExp(searchText, 'i');
  const filteredMovies = movieDetails.filter((movie) =>
    movie.title.match(regex)
  );

  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage
            details={filteredMovies}
            handleChange={setSearchText}
            value={searchText}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/movie/:id">
          <MoviePage
            handleChange={setSearchText}
            value={searchText}
            user={user}
            setUser={setUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
