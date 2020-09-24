import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="headline">{review.headline}</div>
      <div className="content">{review.content}</div>
    </div>
  );
};

export default ReviewCard;
