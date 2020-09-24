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

  const filteredMovies = movieDetails.filter((movie) =>
    movie.title.match(searchText)
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage
            details={filteredMovies}
            handleChange={setSearchText}
            value={searchText}
          />
        </Route>
        <Route exact path="/movie/:id">
          <MoviePage handleChange={setSearchText} value={searchText} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
