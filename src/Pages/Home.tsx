import './CSS/Home.css';
import { Link } from 'react-router-dom';
import ProjectGrid from "../Components/ProjectGrid";
import ScrollArrow from '../Components/ScrollArrow';
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
            <p>I’m a digital designer based in Cork City, Ireland, with an MSc in Interaction & Experience Design. I create thoughtful, visually expressive and user‑centred work across interaction design, creative technology and graphic design. My practice blends research, storytelling and hands‑on making, from web and brand design to immersive, tactile experiences.</p>
          </div>
           <div className="aboutBtn">
            
          </div>
        </div>
      </section>
      </div>
    

<section className="projects">
        
    <div className='workHomeHeader'>
      <Link to="/Project" className="workHeading">Work +</Link>
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
      link: "/UrbanNotes",
      sticky: unnote,      // default sticky note
      pixel: unnotehover,   // hover sticky note
      mode: "text-on-base",
      tilt: "-4deg",
      shiftX: "-6px",
      shiftY: "3px",
    },
    {
      title: "Immersive Design",
      link: "/ImmersiveDesign",
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
    
</section>

      
    </main>
  );
}

export default Home;
