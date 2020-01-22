// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  sideLine,
  link,
  summaryShort
}) => {
  return (
    <div
      key= {headline}
      className= "review"
    >
      <header>
        <a className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br />
        <span className="author">
          {sideLine}
        </span>
        <blockquote>{summaryShort}</blockquote>
      </header>
    </div>
  );
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
