//import Placeholder from '/Placeholders/Placeholder.png';
//import Headshot from '/Images/Photography/Headshot.jpg';
//import { Link } from 'react-router-dom';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';
import { Link } from 'react-router-dom';
import ImageGallery from '../Components/ImageGallery';
import VideographyHero from '/Images/Videography/VideographyHero.jpg';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';


function Photography(){
    return(

        <section className="projecthero">

        <div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Photography</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Interactve Media Module]</h3>
        <h3 className='projectIntroCentre'>[2025]</h3>
        <h3 className='projectIntroRight'>[Assignment 3]</h3>
        </div>
    </div>
</div>

<ImageGallery />

{/*

<div className='imagesTrio'>
    <img src={Headshot} alt="UNPortfolio" className='UNPortfolio'></img>
    <img src={Placeholder} alt="UNPoster" className='UNPoster'></img>
    <img src={Placeholder} alt="UNDisplay" className='UNDisplay'></img>
    </div>

    <div className='projectImageClick'>
        <Link to="/Videography">
            <div className="imageOverlayContainer">
            <img src={VideographyHero} alt="VideographyHero" className="projectImage"/>
            <div className="overlayText">Video Production</div>
            </div>
        </Link>
    </div>*/}

    <div className="project-nav">
    <Link to="/Projectthree">
      <div className="nav-item left">
        <span className="nav-label">← Previous project</span>
        <img src={PhotographyHero} alt="Previous Project" className="nav-image" />
      </div>
    </Link>

    <Link to="/Videography">
      <div className="nav-item right">
        <span className="nav-label">Next project →</span>
        <img src={VideographyHero} alt="Next Project" className="nav-image" />
      </div>
    </Link>
    </div>


        </section>

    );
}

export default Photography;