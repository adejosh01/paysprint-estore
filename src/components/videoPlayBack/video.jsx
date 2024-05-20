import "./video.styles.scss";
import React from 'react';
import video_file from 'assets/ashopree/getstarted.mp4';


const VideoBackground = () => {

  
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source src={video_file} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
