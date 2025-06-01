import React, {  useRef } from 'react' 

import './VideoPlayer.css'
import video from '../../assets/video.mp4'


const VideoPlayer = ({palyStae , setPlayState}) => {

const palyer = useRef(null);

const closePlayer = (e) => {
  if(e.target === palyer.current){
      setPlayState(false);
  }
}

  return (
    <div className= {`video-plyaer ${palyStae? '' : 'heide'}`} ref={palyer} onClick={closePlayer} >
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
