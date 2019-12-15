import React from 'react';

const Review = (info) => {
  return (

    <div
      key={info.display_title}
      className="review"
    >
      <h3>{info.display_title}</h3>
      <p>{info.headline}</p>
      <p>movie is rated {info.mpaa_rating}</p>
      <p>{info.summary_short}</p>
      <a href={info.link.url}>link here</a>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">
                                            {reviews.map(Review)}
                                        </div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;