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

    const languages = ["English", "Spanish"];

    return (
        <div className="AboutMe">
            <div className="top-section">
                <img src={profilePicture} alt="Profile" className="profilePicture" />
                <div className="HeaderInfo">
                    <h1>Ana Paredes </h1>
                    <h2>Full Stack Web and Game Developer</h2>
                    <p>I am a full stack web and game developer passionate about building modern, responsive applications. I am a quick learner and enjoy collaborative environments.</p>
                </div>
            </div>
            
            <div className="section-container left-align">
                <h3 className="section-title">Education</h3>
                <div className="education-info">
                    <p><strong>Bachelor of Arts in Computer Science </strong></p>
                    <p>Minor in Game Development</p>
                    <p>Pace University, New York, NY</p>
                    <p>Expected Graduation: May 2026</p>
                </div>
            </div>

            <div className="section-container left-align">
                <h3 className="section-title">Languages</h3>
                <p className="languages-text">I have native fluency in both <span style={{color: "var(--accent-pink)"}}>English</span> and <span style={{color: "var(--accent-pink)"}}>Spanish</span>.</p>
                <p className="languages-text-small">Currently learning Japanese and Chinese.</p>
            </div>

            <div className="section-container skills-container">
                <h3 className="section-title">Skills</h3>
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
