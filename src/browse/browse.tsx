import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import './browse.css';
import { siteContent } from '../data/content';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: { key: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.key}`, {
      state: { profileImage: profile.image, backgroundGif: profile.backgroundGif },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {siteContent.profiles.map(profile => (
          <ProfileCard
            key={profile.key}
            name={profile.label}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
