import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>DETAILS</li>
        <li>MENU</li>
        <li className="active">REVIEWS</li>
      </ul>
    </div>
  )
}

export default Navigation
