import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const Dashboard = ({ details }) => {
  const movies = details.map((movie, index) => {
    return (
      <Link to={`/movie/${movie.id}`} key={index}>
        <MovieCard details={movie} />
      </Link>
    );
  });
  return <div className="movie-list">{movies}</div>;
};

export default Dashboard;
