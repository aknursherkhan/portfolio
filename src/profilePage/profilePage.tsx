import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { ProfileKey, siteContent } from '../data/content';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif =
    location.state?.backgroundGif ||
    'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif';
  const { profileName } = useParams<{ profileName: string }>();
  const [showBackground, setShowBackground] = useState(false);

  const allowedProfiles = siteContent.profiles.map(profile => profile.key);
  const profile = (allowedProfiles.includes(profileName as ProfileKey)
    ? profileName
    : 'recruiter') as ProfileKey;

  useEffect(() => {
    // Hide background GIF until the hero video for this profile is ready
    setShowBackground(false);
  }, [backgroundGif, profileName]);

  return (
    <>
      <div
        className="profile-page"
        style={{
          backgroundImage: showBackground ? `url(${backgroundGif})` : undefined,
          backgroundColor: showBackground ? undefined : '#000',
        }}
      >
        <ProfileBanner onVideoReady={() => setShowBackground(true)} />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
