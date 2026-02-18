import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import { siteContent } from './data/content';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error('Audio play error:', error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div
        className={`netflix-title ${isClicked ? 'animate' : ''}`}
        aria-label={`${siteContent.landingName} Netflix intro`}
      >
        {siteContent.landingName}
      </div>
      <div className="netflix-subtitle">Click to enter</div>
    </div>
  );
};

export default NetflixTitle;
