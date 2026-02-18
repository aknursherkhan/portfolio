import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { siteContent } from '../data/content';

const ProfileBanner: React.FC = () => {
  const { hero } = siteContent;

  const handlePlayClick = () => {
    window.open(hero.resumeUrl, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(hero.linkedinUrl, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-media">
        <video
          className="banner-video"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.heroPosterUrl}
        >
          <source src={hero.heroVideoUrl} type="video/mp4" />
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
