import React from 'react'
import './ReviewItem.css'

const ReviewItem = () => {
  return (
    <div className="review-item">
      <div className="date">
        <p>28 May 2018</p>
      </div>
      <div className="title-stars">
        <h3>Giovanni Poveda</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorum.
        Dignissimos, officia! Maxime, at? Rem vel, optio, fugiat voluptates
        nesciunt quaerat hic consequatur officiis ipsa animi id libero
        voluptatum iure.
      </p>
    </div>
  )
}

export default ReviewItem
