import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <nav className="top-bar">
            <Link to="/portfolio/">Home</Link>
            <Link to="/portfolio/projects/">Projects</Link>
        </nav>
    );
};

export default TopBar;
