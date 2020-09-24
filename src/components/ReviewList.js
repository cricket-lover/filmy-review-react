import React from 'react';
import ReviewCard from './ReviewCard';

const NoReviews = () => {
  return <div className="headline">No reviews yet</div>;
};

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map((review, index) => {
    return <ReviewCard key={index} review={review} />;
  });
  return (
    <div className="review-list">
      <div className="review-list-text">Reviews</div>
      <div>{reviewList.length === 0 ? <NoReviews /> : reviewList}</div>
    </div>
  );
};

export default ReviewList;
