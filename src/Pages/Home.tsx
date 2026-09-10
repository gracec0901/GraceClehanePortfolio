import './CSS/Home.css';
//import VideographyHero from '/Images/Videography/VideographyHero.jpg';
//import PassionImage from '/Images/Photography/PassionImage.jpg';
import { Link } from 'react-router-dom';
import ProjectGrid from "../Components/ProjectGrid";
import siopabit from '/Images/AnSiopa/siopabit.png';
import unthumb from '/Images/Homepage/unthumb.png';
import idbit from '/Images/Homepage/idbit.png';
import ixuxbit from '/Images/Homepage/ixuxbit.png';
import ccbit from '/Images/Homepage/ccbit.png';



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

    <ProjectGrid
  items={[
    {
      title: "An Siopa🡮",
      link: "/Ansiopa",
      image: siopabit,
      tilt: "5deg",
      shiftX: "-6px",
      shiftY: "3px",
      hoverColor: "#ff3000"
    },
    {
      title: "Interaction & Experience Design🡮",
      link: "/InteractionDesign",
      image: ixuxbit,
      tilt: "-2deg",
      shiftX: "3px",
      shiftY: "-4px",
      hoverColor: "#0066ff"
    },
    {
      title: "Urban Notes🡮",
      link: "/Projectone",
      image: unthumb,
      tilt: "-4deg",
      shiftX: "-6px",
      shiftY: "3px",
      hoverColor: "#FF1856"
    },
    {
      title: "Immersive Design🡮",
      link: "/Projecttwo",
      image: idbit,
      tilt: "-3deg",
      shiftX: "4px",
      shiftY: "-2px",
      hoverColor: "#ddff00"
    },
    
    {
      title: "Videography🡮",
      link: "/Contentcreation",
      image: ccbit,
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px",
      hoverColor: "#71f200"
    }
  ]}
/>
 
      
    
</section>

      
    </main>
  );
}

export default Home;
