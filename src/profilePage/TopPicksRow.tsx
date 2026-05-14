import React, { useState } from 'react';
import './TopPicksRow.css';
import { ProfileKey, profileLabels, siteContent, TitleItem } from '../data/content';
import TitleModal from '../components/TitleModal';

type ProfileType = ProfileKey;

interface TopPicksRowProps {
  profile: ProfileType;
}

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const [selected, setSelected] = useState<TitleItem | null>(null);
  const personaTopPickIds = siteContent.personaContent[profile]?.topPicks.map(p => p.id) || [];
  const allProjects: { [key: string]: TitleItem } = {};
  siteContent.topPicks.forEach(project => {
    allProjects[project.id] = project;
  });
  const topPicks = personaTopPickIds
    .map(id => allProjects[id])
    .filter((project): project is TitleItem => !!project);

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profileLabels[profile]}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={pick.id}
            className="pick-card"
            onClick={() => setSelected(pick)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.image} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
      <TitleModal isOpen={Boolean(selected)} item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default TopPicksRow;
