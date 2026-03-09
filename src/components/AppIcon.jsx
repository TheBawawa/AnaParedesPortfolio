import React from 'react';
import '../styles/appicon.css';

const AppIcon = ({ label, onClick, type, onMouseEnter, onMouseLeave }) => {
  const icons = {
    about: '👤',
    resume: '📄',
    projects: '🕹️',
    contact: '📱'
  };

  return (
    <div 
      className="app-icon" 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="icon-box">
        {icons[type] || '📄'}
      </div>
      <span className="icon-label">{label}</span>
    </div>
  );
};

export default AppIcon;
