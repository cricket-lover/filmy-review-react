import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Header from './Header';
import ReviewList from './ReviewList';
import { useParams } from 'react-router-dom';
import AddReview from './AddReview';

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
      <Header />
      <div className="movie-container">
        <MovieCard details={movieDetails} />
        <div className="reviews">
          <AddReview handleClick={handleClick} />
          <ReviewList reviews={movieDetails.reviews} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;