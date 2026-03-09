import React, { useState } from 'react';
import Window from './Window';
import Contact from './Contact';
import AboutMe from './AboutMe';
import ProjectTab from './ProjectTab';
import HomeWindow from './HomeWindow';
import '../styles/desktop.css';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleResumeDownload = () => {
    Object.assign(document.createElement('a'), {
      href: '/portfoliowallpaper.avif',
      download: 'Ana_Paredes_Resume.pdf'
    }).click();
  };

  const toggleWindow = (id) => {
    if (id === 'resume') return handleResumeDownload();
    setOpenWindows(prev => prev.includes(id) 
      ? prev.filter(win => win !== id) 
      : [...prev, id]
    );
  };

  const windows = [
    { id: 'about', title: 'About Me', content: <AboutMe /> },
    { id: 'resume', title: 'Resume' },
    { id: 'projects', title: 'Projects', content: <ProjectTab /> },
    { id: 'contact', title: 'Contact', content: <Contact /> },
  ];

  return (
    <div className="desktop" onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}>
      <div 
        className="custom-cursor" 
        style={{ 
          left: cursorPos.x, 
          top: cursorPos.y,
          opacity: isHovering ? 1 : 0,
        }}
      />
      
      <div className="persistent-window-container">
        <HomeWindow 
          icons={windows} 
          onIconClick={toggleWindow}
          onHoverChange={setIsHovering}
        />
      </div>

      {openWindows.map(id => {
        const win = windows.find(w => w.id === id);
        return win && (
          <Window key={win.id} title={win.title} onClose={() => toggleWindow(win.id)}>
            {win.content}
          </Window>
        );
      })}

      <footer className="footer">
        <p>© 2026 Ana Paredes</p>
      </footer>
    </div>
  );
};

export default Desktop;
