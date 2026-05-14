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
  
  // Get persona-specific continue watching items
  const personaContinueWatchingItems = siteContent.personaContent[profile]?.continueWatching || [];
  
  // Create lookup maps
  const allProjects: { [key: string]: TitleItem } = {};
  siteContent.topPicks.forEach(project => {
    allProjects[project.id] = project;
  });
  
  // Map short-film and contact separately
  const continueWatchingLookup: { [key: string]: any } = {
    'short-film': {
      id: 'short-film',
      type: 'modal',
      image: '/assets/projects/short_film_poster.png',
      title: '인연 (Short Film)',
      modalData: siteContent.continueWatchingItems['short-film'],
    },
    'contact': {
      id: 'contact',
      type: 'link',
      image: '/assets/projects/contact_me.png',
      title: 'Contact Me',
      link: '/contact-me',
    },
  };
  
  // Combine all lookups
  const allLookups = { ...allProjects, ...continueWatchingLookup };
  
  // Get the actual items for this persona
  const continueWatching = personaContinueWatchingItems
    .map(item => {
      const project = allLookups[item.id];
      if (!project) return null;
      if (item.type === 'modal') {
        return {
          ...project,
          type: 'modal',
          modalData: project.modalData || project,
        };
      } else if (item.type === 'link') {
        return {
          ...project,
          type: 'link',
          link: project.link || '/contact-me',
        };
      }
      return project;
    })
    .filter(Boolean);

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
