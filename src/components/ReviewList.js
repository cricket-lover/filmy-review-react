import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";

const StyledNoReviews = styled.div`
  font-size: 19px;
  margin-top: 1rem;
  margin-bottom: 1px;
`;

const StyledReviewList = styled.div`
  margin: 2rem;
  width: 30rem;
  text-align: justify;
`;

const ReviewListText = styled.div`
  font-size: large;
  font-weight: bold;
`;

const NoReviews = () => {
  return <StyledNoReviews>No reviews yet</StyledNoReviews>;
};

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map((review, index) => {
    return <ReviewCard key={index} review={review} />;
  });
  return (
    <StyledReviewList>
      <ReviewListText>Reviews</ReviewListText>
      <div>{reviewList.length === 0 ? <NoReviews /> : reviewList}</div>
    </StyledReviewList>
  );
};

export default ReviewList;
