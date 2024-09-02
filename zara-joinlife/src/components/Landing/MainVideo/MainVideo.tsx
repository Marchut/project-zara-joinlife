import React from 'react';
import './MainVideo.scss';

const MainVideo: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MainVideo;