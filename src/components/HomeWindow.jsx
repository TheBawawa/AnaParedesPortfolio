import Window from './Window';
import AppIcon from './AppIcon';
import '../styles/homewindow.css';

const HomeWindow = ({ icons, onIconClick, onHoverChange }) => {
  return (
    <div className="home-content">
      <h1 className="home-title">hi, I am Ana!</h1>
      <p className="home-subtitle">Welcome to my portfolio!</p>
      
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
    </div>
  );
};

export default HomeWindow;
