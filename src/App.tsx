import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'; 
import mediaLogo from'./assets/IMG_0557.png';
import './App.css';
import ScrollToTop from "./Components/ScrollTop";



import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import ProjectOne from './Pages/Projectone';
import ProjectTwo from './Pages/Projecttwo';
import InteractionDesign from './Pages/InteractionDesign';
import Photography from './Pages/Photography';
import Videography from './Pages/Videography';
import Contentcreation from './Pages/Contentcreation';

function App() {
  return(
  
  
 
  <div className="index">
    <header className="header">
      <nav>
      <div className="logo-container">
        <Link to="/" id="home"><img src={mediaLogo} alt="Media Logo" className="logo react-logo"></img></Link>
      </div>
      <ul className='navBar'>
        <li><Link to="/Contact" className='navItem'>contact</Link></li>
        <li className="navItem dropdown">
          <Link to="/Project" className="navLink">work</Link>
          <ul className="dropdown-menu">
            <li><Link to="/Projectone">Web Projects</Link></li>
            <li><Link to="/Projecttwo">Arduino Installations</Link></li>
            <li><Link to="/InteractionDesign">Collaborative Art</Link></li>
          </ul>
        </li>
        <li><Link to="/About" className='navItem'>about</Link></li>
      </ul>
      </nav>
    </header>

    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projectone" element={<ProjectOne />} />
      <Route path="/Projecttwo" element={<ProjectTwo />} />
      <Route path="/InteractionDesign" element={<InteractionDesign />} />
      <Route path="/Photography" element={<Photography />} />
      <Route path="/Videography" element={<Videography />} />
      <Route path="/Contentcreation" element={<Contentcreation />} />
    </Routes>
    
 
    <footer className="footer">
      <div className="footer-container">

        <div className="footersocials">
        <ul>
        <li className="footerlink"><a href="https://www.linkedin.com/in/grace-clehane-85a66922b/" >LinkedIn</a></li>
        <li className="footerlink"><a href="https://www.instagram.com/graceclehanemedia/" >Instagram</a></li>
        <li className="footerlink"><a href="mailto:graceclehanemedia@gmail.com" >Email</a></li>
        </ul>
        </div>

        <div className="footer-center">
        <Link to="/" id="home"><img src={mediaLogo} alt="Media Logo" className="footer-logo"></img></Link>
        <p className="footerDate">&copy; {new Date().getFullYear()} Grace Clehane. All Rights Reserved.</p>
        </div>

        <div className="footermenu">
        <ul>
        <li><Link to="/Contact">contact</Link></li>
        <li><Link to="/Project">work</Link></li>
        <li><Link to="/About">about</Link></li>
        </ul>
        </div>

      </div>
    </footer>

  </div>

  );
}

export default App;