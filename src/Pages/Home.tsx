import './CSS/Home.css';
import placeholder1 from'/Placeholders/project1placeholder.png';
import placeholder2 from'/Placeholders/project2placeholder.png';
import placeholder3 from'/Placeholders/project3placeholder.jpeg';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import VideographyHero from '/Images/Videography/VideographyHero.jpg';
import CCHero from '/Images/ContentCreation/CCHero.jpeg';
import PassionImage from '/Images/Photography/PassionImage.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <main className="container">
      <section id="hero" className='hero'>
       <h1 className="h1hero"> <span className="highlightText">Hi, I'M GRACE.</span></h1>
        <p className="phero">A Cork based digital designer, passionate in creating <br />
        creative, impactful and immersive experiences.</p>
      </section>

    <div className='abouthomewrapper'>
      <section id="abouthome" className='abouthome'>
        <div className="aboutgrid">
          
            <div className="aboutlink">
            <Link to="/About"><h4>About</h4></Link>
            </div>
            <div className="abouttext">
            <p>I’m a passionate digital designer based in Cork City, Ireland. With an Honours Degree in Creative Digital Media, I’ve developed a versatile skillset that allows me to craft visually compelling and user-friendly experiences.Proficient in the Adobe Creative Cloud, web design, branding, graphic design, and videography.</p>
          </div>
           <div className="aboutBtn">
            
          </div>
        </div>
      </section>
      </div>
    

<section className="projects">
        
    <div className='workHomeHeader'>
      <h1 className='workHeading'>Work</h1>
      <Link to="/Project" className="workBtn">+</Link>
    </div>

  <div className='projectGallery'>
      <div className='projectImageClick'>
        <Link to="/Projectone">
          <div className="imageOverlayContainer">
            <img src={placeholder1} alt="placeholder1" className="projectImage" />
            <div className="overlayText">Urban Notes</div>
          </div>
        </Link>
      </div>

      <div className='projectImageClick'>
        <Link to="/Projecttwo">
          <div className="imageOverlayContainer">
            <img src={placeholder2} alt="placeholder2" className="projectImage" />
            <div className="overlayText">Immersive Design</div>
          </div>
        </Link>
      </div>

      <div className='projectImageClick'>
        <Link to="/InteractionDesign">
          <div className="imageOverlayContainer">
            <img src={placeholder3} alt="placeholder3" className="projectImage" />
            <div className="overlayText">Interaction & Experience Design</div>
          </div>
        </Link>
      </div>

      <div className='projectImageClick'>
        <Link to="/Contentcreation">
          <div className="imageOverlayContainer">
            <img src={CCHero} alt="ContentCHero" className="projectImage" />
            <div className="overlayText">Content Creation</div>
          </div>
        </Link>
      </div>

        <div className='projectImageClick'>
        <Link to="/Photography">
          <div className="imageOverlayContainer">
            <img src={PassionImage} alt="PhotographyHero" className="projectImage" />
            <div className="overlayText">Photography</div>
          </div>
        </Link>
      </div>

        <div className='projectImageClick'>
        <Link to="/Videography">
          <div className="imageOverlayContainer">
            <img src={VideographyHero} alt="VideographyHero" className="projectImage" />
            <div className="overlayText">Video Production</div>
          </div>
        </Link>
      </div>

  </div>
 
      
    
</section>

      
    </main>
  );
}

export default Home;
