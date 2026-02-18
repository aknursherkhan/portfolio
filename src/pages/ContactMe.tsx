import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';
import { siteContent } from '../data/content';

const ContactMe: React.FC = () => {
  const { contact, landingName } = siteContent;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={contact.profileImageUrl} alt={landingName} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{landingName}</h3>
          <p className="badge-title">Designer · Developer · Storyteller</p>
          <p className="badge-description">
            Open to collaborations, product design roles, and creative projects.
          </p>
          <p className="badge-company">Based in Kazakhstan · Available globally</p>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View LinkedIn
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaGithub className="linkedin-icon" /> View GitHub
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>Always up for a chat or a coffee. Reach out anytime.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contact.email}`} className="contact-link">
            {contact.email}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
