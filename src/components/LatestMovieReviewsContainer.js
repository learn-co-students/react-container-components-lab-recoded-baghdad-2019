import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



const LatestMovieReviewsContainer = ({ Movie }) => (
  <div className="movie-list">
    { movie.map(movie => <Movie title={movie.title} img_url={movie.img_url} />) }
  </div>
)
 
export default LatestMovieReviewsContainer;