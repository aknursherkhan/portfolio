import React, { useState, useRef, useEffect } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { siteContent } from '../data/content';

const ProfileBanner: React.FC<{ onVideoReady?: () => void }> = ({ onVideoReady }) => {
  const { hero } = siteContent;
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force re-render and reset video on mount
  useEffect(() => {
    setIsVideoReady(false);
    setRenderKey(prev => prev + 1);
  }, []);

  const handlePlayClick = () => {
    window.open(hero.resumeUrl, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(hero.linkedinUrl, '_blank');
  };

  const handleVideoCanPlay = () => {
    console.log('✓ Video ready to play:', hero.heroVideoUrl);
    setIsVideoReady(true);
    if (onVideoReady) onVideoReady();
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const error = e.currentTarget.error;
    console.error('❌ Error loading hero video:', hero.heroVideoUrl, error);
  };

  const handleLoadStart = () => {
    console.log('📹 Video loading started:', hero.heroVideoUrl);
  };

  // Add cache-busting query param to force fresh load
  const videoCacheBuster = `${hero.heroVideoUrl}?t=${Date.now()}`;

  return (
    <div className="profile-banner">
      <div className="banner-media">
        <video
          key={`video-${renderKey}`}
          ref={videoRef}
          className="banner-video"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.heroPosterUrl}
          preload="none"
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          onLoadStart={handleLoadStart}
          style={{ visibility: isVideoReady ? 'visible' : 'hidden' }}
        >
          <source src={videoCacheBuster} type="video/mp4" />
        </video>
        <div className="banner-overlay" />
      </div>

      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {hero.headline}
        </h1>
        <p className="banner-description">{hero.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
