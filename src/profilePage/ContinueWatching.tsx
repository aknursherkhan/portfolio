import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { ProfileKey, profileLabels, siteContent, TitleItem } from '../data/content';
import TitleModal from '../components/TitleModal';

type ProfileType = ProfileKey;

interface ContinueWatchingProps {
  profile: ProfileType;
}

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const [selected, setSelected] = useState<TitleItem | null>(null);
  const continueWatching = siteContent.continueWatching;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profileLabels[profile]}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => {
          if (pick.type === 'link') {
            return (
              <Link to={pick.link || '#'} key={pick.id} className="pick-card">
                <img src={pick.image} alt={pick.title} className="pick-image" />
                <div className="overlay">
                  <div className="pick-label">{pick.title}</div>
                </div>
              </Link>
            );
          }

          return (
            <div
              key={pick.id}
              className="pick-card"
              onClick={() => setSelected(pick.modalData || null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={pick.image} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <TitleModal isOpen={Boolean(selected)} item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default ContinueWatching;
