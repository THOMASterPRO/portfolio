import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="top-bar">
            <span className="top-bar-title">Thomas Bezemer</span>
            
            <div className="nav-links desktop-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>

            <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`burger-icon ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
            
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/projects" onClick={closeMenu}>Projects</Link>
            </div>
        </nav>
    );
};

export default TopBar;
