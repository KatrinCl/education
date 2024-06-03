import './../../styles/videoP.css'

import React, { useRef } from 'react'

const VideoP = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src="./cambridge.mp4" autoPlay muted controls></video>
    </div>
  )
}

export default VideoP