import './../../styles/campus.css';

import React from 'react'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="public/g-1.JPG" alt="" />
            <img src="public/g-2.JPG" alt="" />
            <img src="public/g-3.JPG" alt="" />
            <img src="public/g-4.JPG" alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src="/next.svg" alt="" /></button>

    </div>
  )
}

export default Campus