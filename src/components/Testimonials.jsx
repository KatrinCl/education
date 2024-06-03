import './../../styles/testimonials.css';

import React, { useRef } from 'react'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

  return (
    <div className='testimonials'>
        <img src="/next1.svg" alt="" className='next-btn' onClick={slideForward} />
        <img src="/back.svg" alt="" className='back-btn' onClick={slideBackward} />

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="public/u-1.JPG" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                            the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="public/u-2.JPEG" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                            the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="public/u-3.JPG" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                            the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>
                </li>
                
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="public/u-4.JPEG" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                            the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials