import React from 'react';

const MovieCard = ({ details }) => {
  return (
    <div className="movie-card">
      <img src={details.image} alt={details.title} className="movie-poster" />
      <h1>{details.title}</h1>
      <h6>{details.dateOfRelease}</h6>
    </div>
  );
};

export default MovieCard;
