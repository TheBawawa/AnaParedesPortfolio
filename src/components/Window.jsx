import React from 'react';
import '../styles/window.css';

const Window = ({ title, onClose, children }) => (
  <div className="window-overlay">
    <div className="window-container">
      <div className="window-header">
        <div className="window-title">{title}</div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="window-content">{children}</div>
    </div>
  </div>
);

export default Window;
