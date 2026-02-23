import React, { useEffect, useState, useCallback } from 'react';
import './TitleModal.css';
import { TitleItem } from '../data/content';

interface TitleModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: TitleItem | null;
}

const TitleModal: React.FC<TitleModalProps> = ({ isOpen, onClose, item }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Reset slide index whenever a new item opens
  useEffect(() => {
    setSlideIndex(0);
  }, [item?.id]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      return () => document.body.classList.remove('modal-open');
    }
    return undefined;
  }, [isOpen]);

  const goToPrev = useCallback(() => {
    if (!item?.images?.length) return;
    setSlideIndex(i => (i - 1 + item.images!.length) % item.images!.length);
  }, [item]);

  const goToNext = useCallback(() => {
    if (!item?.images?.length) return;
    setSlideIndex(i => (i + 1) % item.images!.length);
  }, [item]);

  // Keyboard navigation for slideshow
  useEffect(() => {
    if (!isOpen || !item?.images?.length) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, item, goToPrev, goToNext]);

  if (!isOpen || !item) return null;

  const hasImages = Array.isArray(item.images) && item.images.length > 0;
  const hasVideo = Boolean(item.previewVideoUrl);
  const hasEmbed = Boolean(item.embedUrl);

  const renderMedia = () => {
    // Slideshow takes priority when images are present
    if (hasImages) {
      const images = item.images!;
      const total = images.length;
      return (
        <div className="title-modal__slideshow">
          {/* Prev arrow */}
          {total > 1 && (
            <button
              className="title-modal__slide-arrow title-modal__slide-arrow--prev"
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
          )}

          {/* Image */}
          <img
            key={images[slideIndex]}
            src={images[slideIndex]}
            alt={`${item.title} – slide ${slideIndex + 1}`}
            className="title-modal__slide-img"
          />

          {/* Next arrow */}
          {total > 1 && (
            <button
              className="title-modal__slide-arrow title-modal__slide-arrow--next"
              onClick={goToNext}
              aria-label="Next slide"
            >
              &#8250;
            </button>
          )}

          {/* Dot indicators */}
          {total > 1 && (
            <div className="title-modal__slide-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`title-modal__slide-dot${idx === slideIndex ? ' title-modal__slide-dot--active' : ''}`}
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          {total > 1 && (
            <div className="title-modal__slide-counter">
              {slideIndex + 1} / {total}
            </div>
          )}
        </div>
      );
    }

    if (hasEmbed) {
      return (
        <iframe
          src={item.embedUrl}
          title={item.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    }

    if (hasVideo) {
      return (
        <video autoPlay muted loop playsInline poster={item.image}>
          <source src={item.previewVideoUrl} type="video/mp4" />
        </video>
      );
    }

    return <img src={item.image} alt={item.title} />;
  };

  return (
    <div className="title-modal" role="dialog" aria-modal="true">
      <div className="title-modal__backdrop" onClick={onClose} />
      <div className="title-modal__content">
        <button className="title-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className={`title-modal__media${hasImages ? ' title-modal__media--slideshow' : ''}`}>
          {renderMedia()}
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