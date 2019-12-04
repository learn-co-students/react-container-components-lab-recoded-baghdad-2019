import React from 'react';

const Review = (props) => {
  return (

    <div
      key={props.headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={props.link.url}
        >
          {props.headline}
        </a>
        <br/>
        <span className="author">{props.byline}</span>
      </header>
      <blockquote>{props.summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = (props) => <div className="review-list">{props.reviews.map(Review)}</div>;


export default MovieReviews;