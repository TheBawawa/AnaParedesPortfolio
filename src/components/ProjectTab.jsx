import React from "react";
import { useState } from "react";
import '../styles/projecttab.css';
import { Image } from "react-bootstrap";
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import arrowR from '../assets/arrowR.png';
import arrowL from '../assets/arrowL.png';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';


const GAME_PROJECTS = [
  { src: game1, link: "https://thebawawa.itch.io/try-to-survive" },
  { src: game2, link: "https://thebawawa.itch.io/beat-the-tank" },
  { src: game3, link: "https://thebawawa.itch.io/apocalypse" },
  { src: game4, link: "https://thebawawa.itch.io/crunchy-pinball" },
  { src: game5, link: "https://thebawawa.itch.io/gogetthemkitty" },
];

const APP_PROJECTS = [
  { src: project1, link: "https://wiki-val.vercel.app/" },
  { src: project2, link: "https://re-craft.vercel.app/" },
];

const ProjectSection = ({ title, projects }) => {
  const [index, setIndex] = useState(0);

  const scroll = (dir) => {
    setIndex(prev => dir === 'left' 
      ? (prev === 0 ? projects.length - 1 : prev - 1)
      : (prev === projects.length - 1 ? 0 : prev + 1)
    );
  };

  const visible = Array.from({ length: Math.min(projects.length, 4) }, (_, i) => 
    projects[(index + i) % projects.length]
  );

  return (
    <div className="ProjectSection">
      <div className="ProjectHeader"><h1>{title}</h1></div>
      <div className="ProjectsContainer">
        <Image src={arrowL} alt="Left" className="arrows" onClick={() => scroll('left')} />
        <div className="Projects">
          {visible.map((p, i) => (
            <div key={i} className="projectItem">
              <a href={p.link} target="_blank" rel="noreferrer">
                <Image src={p.src} alt="project" className="projectImage" />
              </a>
            </div>
          ))}
        </div>
        <Image src={arrowR} alt="Right" className="arrows" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

const ProjectTab = () => (
  <div className="ProjectTab">
    <ProjectSection title="Game Projects" projects={GAME_PROJECTS} />
    <div className="section-divider" />
    <ProjectSection title="Web Projects" projects={APP_PROJECTS} />
  </div>
);

export default ProjectTab;