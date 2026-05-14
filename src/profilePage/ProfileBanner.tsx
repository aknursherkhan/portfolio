import React, { useState, useRef, useEffect } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { siteContent } from '../data/content';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

interface ProfileBannerProps {
  hero: typeof siteContent.heroes.ds_recruiter;
  onVideoReady?: () => void;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ hero, onVideoReady }) => {
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

  const handleGithubClick = () => {
    window.open(siteContent.contact.githubUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteContent.contact.email}`;
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
          <button className="more-info-button" onClick={handleGithubClick} type="button">
            <div className="icon-container">
              <FaGithub size={24} style={{ fill: 'white' }} />
            </div>
            <div className="spacer"></div>
            <span className="label">GitHub</span>
          </button>
          <button className="more-info-button" onClick={handleEmailClick} type="button">
            <div className="icon-container">
              <FaEnvelope size={24} style={{ fill: 'white' }} />
            </div>
            <div className="spacer"></div>
            <span className="label">Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
