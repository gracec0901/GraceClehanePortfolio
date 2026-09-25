import { Link } from 'react-router-dom';
import '../Pages/CSS/Footer.css';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-grid">
        {/* Column 1: Socials */}
        <div className="footer-column">
          <span className="footer-heading">SOCIALS</span>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/grace-clehane-85a66922b/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://www.instagram.com/ggracedesignn/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <a href="mailto:your-email@example.com">EMAIL</a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <span className="footer-heading">NAVIGATION</span>
          <div className="footer-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/work">WORK</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>

        {/* Column 3: Reach Out / Info */}
        <div className="footer-column">
          <span className="footer-heading">REACH OUT</span>
          <p className="footer-subtext">Available for select design projects and collaborations.</p>
          <span className="copyright">© {new Date().getFullYear()} GRACE CLEHANE. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}