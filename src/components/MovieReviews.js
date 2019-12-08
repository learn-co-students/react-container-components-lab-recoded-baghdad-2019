import React from 'react'


let MovieReviews = ({ reviwes }) =>

      <ul className="review-list">{reviwes ? reviwes.map(review =>{
             return <li className='review'>{review.display_title}</li>}) : null}
      </ul>

export default MovieReviews