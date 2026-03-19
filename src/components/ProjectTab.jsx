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
  { src: game1, link: "https://thebawawa.itch.io/try-to-survive", title: "Try To Survive", description: "Top down puzzle game. Collect the fruits to open the door and escape!" },
  { src: game2, link: "https://thebawawa.itch.io/beat-the-tank", title: "Beat The Tank", description: "Action 2D game. Dodge bullets, and shoot back to destroy the enemy tank!" },
  { src: game3, link: "https://thebawawa.itch.io/apocalypse", title: "Apocalypse", description: "Survival 2D shooter.  You are now a survivor! Use your wepon to survive the day." },
  { src: game4, link: "https://thebawawa.itch.io/crunchy-pinball", title: "Crunchy Pinball", description: "A classic pinball experience with crunchy sound effects in a candyworld!" },
  { src: game5, link: "https://thebawawa.itch.io/gogetthemkitty", title: "Go Get Them Kitty", description: "2D platformer where you play as an adventurous feline! Jump, collect yarn, and explore the house." },
];

const APP_PROJECTS = [
  { src: project1, link: "https://wiki-val.vercel.app/", title: "WikiVal", description: "A data visualization  for Valorant agents, maps, and weapons with a sleek, minimalistic, and responsive UI." },
  { src: project2, link: "https://re-craft.vercel.app/", title: "ReCraft", description: "Social media recycling application to help you connect, and share your crafts with recyclable materials." },
];

const ProjectSection = ({ title, projects }) => {
  const [index, setIndex] = useState(0);

  const scroll = (dir) => {
    setIndex(prev => dir === 'left' 
      ? (prev === 0 ? projects.length - 1 : prev - 1)
      : (prev === projects.length - 1 ? 0 : prev + 1)
    );
  };

  const visible = [projects[index]];

  return (
    <div className="ProjectSection">
      <div className="ProjectHeader"><h1>{title}</h1></div>
      <div className="ProjectsContainer">
        <Image src={arrowL} alt="Left" className="arrows" onClick={() => scroll('left')} />
        <div className="Projects">
          {visible.map((p, i) => (
            <div key={index} className="projectItem">
              <a href={p.link} target="_blank" rel="noreferrer" className="projectLink">
                <Image src={p.src} alt="project" className="projectImage" />
              </a>
              <div className="projectInfo">
                <h2 className="projectTitle">{p.title}</h2>
                <p className="projectDesc">{p.description}</p>
              </div>
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