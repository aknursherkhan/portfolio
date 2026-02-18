import React, { useEffect } from 'react';
import './TitleModal.css';
import { TitleItem } from '../data/content';

interface TitleModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: TitleItem | null;
}

const TitleModal: React.FC<TitleModalProps> = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      return () => document.body.classList.remove('modal-open');
    }
    return undefined;
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const hasVideo = Boolean(item.previewVideoUrl);
  const hasEmbed = Boolean(item.embedUrl);

  return (
    <div className="title-modal" role="dialog" aria-modal="true">
      <div className="title-modal__backdrop" onClick={onClose} />
      <div className="title-modal__content">
        <button className="title-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="title-modal__media">
          {hasEmbed ? (
            <iframe
              src={item.embedUrl}
              title={item.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : hasVideo ? (
            <video autoPlay muted loop playsInline poster={item.image}>
              <source src={item.previewVideoUrl} type="video/mp4" />
            </video>
          ) : (
            <img src={item.image} alt={item.title} />
          )}
        </div>
        <div className="title-modal__details">
          <div className="title-modal__header">
            <div>
              <h2>{item.title}</h2>
              {item.subtitle && <p className="title-modal__subtitle">{item.subtitle}</p>}
            </div>
            {item.externalUrl && (
              <a
                className="title-modal__link"
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            )}
          </div>
          <p className="title-modal__synopsis">{item.synopsis}</p>
          <div className="title-modal__meta">
            {item.metadata.map(entry => (
              <div key={entry.label} className="title-modal__meta-row">
                <span>{entry.label}</span>
                <strong>{entry.value}</strong>
              </div>
            ))}
          </div>
          <div className="title-modal__tags">
            {item.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleModal;
