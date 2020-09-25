import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import MovieCard from './MovieCard';
import AddReview from './AddReview';
import ReviewList from './ReviewList';

const MoviePage = (props) => {
  const [movieDetails, setMovieDetails] = useState({ reviews: [] });
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/movie/${id}`)
      .then((res) => res.json())
      .then(setMovieDetails);
  }, [id]);

  const handleClick = (headline, content) => {
    fetch('/api/addReview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, headline, content }),
    })
      .then((res) => res.json())
      .then(setMovieDetails);
  };

  return (
    <div>
      <Header handleChange={props.handleChange} value={props.value} />
      <div className="movie-container">
        <MovieCard details={movieDetails} />
        <AddReview handleClick={handleClick} />
        <ReviewList reviews={movieDetails.reviews} />
      </div>
    </div>
  );
};

export default MoviePage;
