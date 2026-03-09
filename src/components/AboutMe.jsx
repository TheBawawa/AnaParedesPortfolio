import React from 'react';
import '../styles/aboutme.css';
import profilePicture from '../assets/professionalmepic.jpg';

const AboutMe = () => {
    const skillGroups = [
        { title: "Frontend", skills: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS"] },
        { title: "Backend", skills: ["Python", "C", "Java", "JavaScript"] },
        { title: "Game Development", skills: ["Unity", "C#"] },
        { title: "Other", skills: ["Git", "GitHub"] }
    ];

    return (
        <div className="AboutMe">
            <div className="top-section">
                <img src={profilePicture} alt="Profile" className="profilePicture" />
                <div className="HeaderInfo">
                    <h1>Ana Gabriela Paredes Fernandez</h1>
                    <h2>Full Stack and Game Developer</h2>
                    <p>I am a full stack and game developer passionate about building modern, responsive applications. I am a quick learner and enjoy collaborative environments.</p>
                </div>
            </div>
            
            <div className="skills-container">
                <div className="skills-row">
                    {skillGroups.slice(0, 2).map(group => (
                        <div key={group.title} className="skill-group">
                            <h3>{group.title}</h3>
                            <div className="skill-boxes">
                                {group.skills.map(skill => <span key={skill} className="skill-box">{skill}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills-row centered">
                    {skillGroups.slice(2).map(group => (
                        <div key={group.title} className="skill-group">
                            <h3>{group.title}</h3>
                            <div className="skill-boxes">
                                {group.skills.map(skill => <span key={skill} className="skill-box">{skill}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
