import React from 'react';
import '../styles/appicon.css';
import aboutIcon from '../assets/roundheart.png';
import resumeIcon from '../assets/files.png';
import projectsIcon from '../assets/reminders-hearts.png';
import contactIcon from '../assets/chatbubble.png';

const AppIcon = ({ label, onClick, type, onMouseEnter, onMouseLeave }) => {
  const icons = {
    about: aboutIcon,
    resume: resumeIcon,
    projects: projectsIcon,
    contact: contactIcon
  };

  return (
    <div 
      className="app-icon" 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="icon-box">
        <img src={icons[type] || resumeIcon} alt={label} className="app-icon-img" />
      </div>
      <span className="icon-label">{label}</span>
    </div>
  );
};

export default AppIcon;
