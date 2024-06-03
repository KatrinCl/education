import './../../styles/programs.css';

import React from 'react'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src="/1.JPG" alt="" />
            <div className="caption">
                <img src="public/i.webp" alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className="program">
            <img src="/3.JPG" alt="" />
            <div className="caption">
                <img src="public/i.webp" alt="" />
                <p>Masters Degree</p>
            </div>

        </div>

        <div className="program">
            <img src="/4.JPEG" alt="" />
            <div className="caption">
                <img src="/i.WEBP" alt="" />
                <p>Post Graduation</p>
            </div>

        </div>
    </div>
  )
}

export default Programs