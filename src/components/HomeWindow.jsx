import Window from './Window';
import AppIcon from './AppIcon';
import '../styles/homewindow.css';
import linkedInIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import itchIcon from '../assets/applearcade.png';


const HomeWindow = ({ icons, onIconClick, onHoverChange }) => {
  return (
    <div className="home-content">
      <h1 className="home-title">hi, i'm ana!</h1>
      <p className="home-subtitle">welcome to my portfolio!</p>
      
      <div className="home-icons-row">
        {icons.map(icon => (
          <AppIcon 
            key={icon.id}
            label={icon.label || icon.title}
            type={icon.id}
            onClick={() => onIconClick(icon.id)}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          />
        ))}
      </div>

      <div className="home-social-links">
        <a href="https://www.linkedin.com/in/ana-paredes-2850b51a6/" target="_blank" rel="noopener noreferrer" className="home-social-icon" title="LinkedIn">
          <img src={linkedInIcon} alt="LinkedIn" className="social-img-icon" /> LinkedIn
        </a>
        <a href="https://github.com/TheBawawa" target="_blank" rel="noopener noreferrer" className="home-social-icon" title="GitHub">
          <img src={githubIcon} alt="GitHub" className="social-img-icon" /> GitHub
        </a>
        <a href="https://thebawawa.itch.io/" target="_blank" rel="noopener noreferrer" className="home-social-icon" title="Itch.io">
          <img src={itchIcon} alt="Itch.io" className="social-img-icon" /> Itch.io
        </a>
      </div>
    </div>
  );
};

export default HomeWindow;
