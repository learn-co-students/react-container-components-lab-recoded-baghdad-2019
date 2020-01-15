import React, { Component } from 'react';
import 'isomorphic-fetch';

const MovieReviews = ({ Movie }) => (
  <div className="movie-list">
    { movie.map(movie => <Movie title={movie.title} img_url={movie.img_url} />) }
  </div>
)
 
export default MovieReviews;