import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map((review, index) => {
    return <ReviewCard key={index} review={review} />;
  });

  return (
    <div className="review-list">
      <div className="review-list-text">Reviews</div>
      <div>{reviewList}</div>
    </div>
  );
};

export default ReviewList;
