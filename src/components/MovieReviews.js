import React from 'react';

const DisplayReview = ({headline,byline,link,summary_short}) => {
    return (
        <div key={headline} className="review">
            <a  href={link.url}>{headline} </a>
            <br />
            <span className="author">{byline}</span>
            <p>{summary_short}</p>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(DisplayReview)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews