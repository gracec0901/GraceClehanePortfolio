import './CSS/Home.css';
import { Link } from 'react-router-dom';
import ProjectGrid from "../Components/ProjectGrid";
//import siopabit from '/Images/AnSiopa/siopabit.png';
//import unthumb from '/Images/Homepage/unthumb.png';
//import idbit from '/Images/Homepage/idbit.png';
//import ixuxbit from '/Images/Homepage/ixuxbit.png';
//import ccbit from '/Images/Homepage/ccbit.png';
import ScrollArrow from '../Components/ScrollArrow';
//import logobit from '/Images/Homepage/logobit.png';
//import ixuxStickyPNG from '/Images/Homepage/ixuxStickyPNG.png';
import ixdnote from '/Images/Homepage/ixdnote.png';
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';
import ansiopanote from '/Images/Homepage/ansiopanote.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';
import ixuxnote from '/Images/Homepage/ixuxnote.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import unnote from '/Images/Homepage/unnote.png';
import unnotehover from '/Images/Homepage/unnotehover.png';
import vidnote from '/Images/Homepage/vidnote.png';
import vidhover from '/Images/Homepage/vidhover.png';
import gdnote from '/Images/Homepage/gdnote.png';
import gdhover from '/Images/Homepage/gdhover.png';
import StickyStack from '../Components/StickyStack';
import landingnote1 from '/Images/Homepage/landingnote1.png';
import landingnote2 from '/Images/Homepage/landingnote2.png';
import landingnote3 from '/Images/Homepage/landingnote3.png';
import landingnote4 from '/Images/Homepage/landingnote4.png';




function Home() {
  return (
    <main className="container">
      <section id="hero" className='hero'>
        <div className="stickyStackWrapper">
          <StickyStack
            images={[
              landingnote1,   
              landingnote2,   
              landingnote3,
              landingnote4 
            ]}
          />
        </div>
      </section>

      


<ScrollArrow />
    <div className='abouthomewrapper'>
      <section id="abouthome" className='abouthome'>
        <div className="aboutgrid">
          
            <Link to="/About" className="aboutlink">ABOUT</Link>
            <div className="abouttext">
            <p>I’m a passionate digital designer based in Cork City, Ireland. With a Masters of Science Degree in Interaction & Experience Design, I’ve developed a versatile skillset that allows me to craft visually compelling and user-friendly experiences.Proficient in the Adobe Creative Cloud, web design, branding, graphic design, and videography.</p>
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
      sticky: ansiopanote,      // default sticky note
      pixel: ansiopahover,   // hover sticky note
      mode: "text-on-base",
      tilt: "5deg",
      shiftX: "-6px",
      shiftY: "3px",
    },
    {
    title: "Interaction & Experience Design🡮",
      link: "/InteractionDesign",
      sticky: ixuxnote,      // default sticky note
      pixel: ixuxhover,   // hover sticky note
      mode: "text-on-base",
      tilt: "-2deg",
      shiftX: "3px",
      shiftY: "-4px"
    },
    {
      title: "Urban Notes🡮",
      link: "/Projectone",
      sticky: unnote,      // default sticky note
      pixel: unnotehover,   // hover sticky note
      mode: "text-on-base",
      tilt: "-4deg",
      shiftX: "-6px",
      shiftY: "3px",
    },
    {
      title: "Immersive Design",
      link: "/Projecttwo",
      sticky: ixdnote,      // default sticky note
      pixel: ixdnotehover,   // hover sticky note
      mode: "text-on-base",         // or "image-on-base"
      tilt: "-2deg",
      shiftX: "3px",
      shiftY: "-4px"
    },
    {title: "Graphic Design🡮",
      link: "/GraphicDesign",
      sticky: gdnote,      // default sticky note
      pixel: gdhover,   // hover sticky note
      mode: "text-on-base", 
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px"
    },
    {
      title: "Videography🡮",
      link: "/Contentcreation",
      sticky: vidnote,      // default sticky note
      pixel: vidhover,   // hover sticky note
      mode: "text-on-base",
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px",
    }
    
  ]}
/>

   {/* <ProjectGrid
  items={[
    {
      title: "An Siopa🡮",
      link: "/Ansiopa",
      image: siopabit,
      tilt: "5deg",
      shiftX: "-6px",
      shiftY: "3px",
      hoverColor: "#ff340c"
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
      hoverColor: "#f03272"
    },
    {
      title: "Immersive Design🡮",
      link: "/Projecttwo",
      image: idbit,
      tilt: "-3deg",
      shiftX: "4px",
      shiftY: "-2px",
      hoverColor: "#cbc308"
    },
    {
      title: "Graphic Design🡮",
      link: "/GraphicDesign",
      image: logobit,
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px",
      hoverColor: "#fe8d01"
    },
    {
      title: "Videography🡮",
      link: "/Contentcreation",
      image: ccbit,
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px",
      hoverColor: "#9ab3eb"
    },
    {
      title: "Photography🡮",
      link: "/Photography",
      image: ccbit,
      tilt: "2deg",
      shiftX: "-3px",
      shiftY: "2px",
      hoverColor: "#9ab3eb"
    }
  ]}
/>*/}
 
      
    
</section>

      
    </main>
  );
}

export default Home;
