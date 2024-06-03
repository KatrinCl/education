import './../../styles/campus.css';

import React from 'react'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="/g-1.jpg" alt="" />
            <img src="/g-2.jpg" alt="" />
            <img src="/g-3.jpg" alt="" />
            <img src="/g-4.jpg" alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src="/next.svg" alt="" /></button>

    </div>
  )
}

export default Campus