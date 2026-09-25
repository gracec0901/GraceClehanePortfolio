import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/CSS/NavBar.css';
import mediaLogo from '../assets/logo.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={mediaLogo} alt="headerLogo" className="headerLogo" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <Link to="/about">about</Link>
          <Link to="/project">work</Link>
          <Link to="/contact">contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
            <button 
            className="menu-text-btn" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            >
            {isOpen ? '-' : '+'}
            </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link to="/about" onClick={closeMenu}>about</Link>
          <Link to="/project" onClick={closeMenu}>work</Link>
          <Link to="/contact" onClick={closeMenu}>contact</Link>
        </nav>
      </div>
    </header>
  );
}