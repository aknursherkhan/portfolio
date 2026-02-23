import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { siteContent } from '../data/content';

const ContactMe: React.FC = () => {
  const { contact, landingName } = siteContent;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={contact.profileImageUrl} alt={landingName} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{landingName}</h3>
          <p className="badge-title">AI & Data Systems · Product Engineering</p>
          <p className="badge-description">
            Open to product, data, and AI-focused roles.
          </p>
          <p className="badge-company">Based in San Francisco, CA · Available globally</p>
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
            className="badge-link github"
          >
            <FaGithub className="linkedin-icon" /> View GitHub
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>Happy to connect about building creative, data-driven products!</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contact.email}`} className="contact-link">
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
