import React from 'react';

const MovieCard = ({ details }) => {
  return (
    <div className="movie-card">
      <img src={details.image} alt={details.title} className="movie-poster" />
      <div className="movie-title">{details.title}</div>
      <div className="release-date">{details.dateOfRelease}</div>
    </div>
  );
};

export default MovieCard;
