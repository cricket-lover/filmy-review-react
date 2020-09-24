import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import Homepage from './components/Homepage';
import MoviePage from './components/MoviePage';
import './App.css';

const MovieData = ({ details }) => {
  const { id } = useParams();
  const data = details.find((movie) => movie.id === +id);
  return <MoviePage details={data} />;
};

function App() {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    fetch('/api/allMovies')
      .then((res) => res.json())
      .then(setMovieDetails);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage details={movieDetails} />
        </Route>
        <Route exact path="/movie/:id">
          <MovieData details={movieDetails} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
