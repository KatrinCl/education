import './../../styles/programs.css';

import React from 'react'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src="/1.jpg" alt="" />
            <div className="caption">
                <img src="/i.webp" alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src="/3.jpg" alt="" />
            <div className="caption">
                <img src="/i.webp" alt="" />
                <p>Masters Degree</p>
            </div>

        </div>

        <div className="program">
            <img src="/4.jpeg" alt="" />
            <div className="caption">
                <img src="/i.webp" alt="" />
                <p>Post Graduation</p>
            </div>

        </div>


    </div>
  )
}

export default Programs