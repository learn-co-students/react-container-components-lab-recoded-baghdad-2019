import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JGu6GQSlaiaGBCGxx1bXgGKfkL8rsZ7k';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state ={
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({reviews: response.results}))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
