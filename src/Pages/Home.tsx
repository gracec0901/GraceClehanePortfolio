import './CSS/Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectGrid from "../Components/ProjectGrid";
import ScrollArrow from '../Components/ScrollArrow';
import CursorFollower from '../Components/CursorFollower';
import ixdnote from '/Images/Homepage/ixdnote1.png';
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';
import ansiopanote from '/Images/Homepage/ansiopanote1.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';
import ixuxnote from '/Images/Homepage/ixuxnote1.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import unnote from '/Images/Homepage/unnote1.png';
import unnotehover from '/Images/Homepage/unnotehover.png';
import vidnote from '/Images/Homepage/vidnote1.png';
import vidhover from '/Images/Homepage/vidhover.png';
import gdnote from '/Images/Homepage/gdnote1.png';
import gdhover from '/Images/Homepage/gdhover.png';
import StickyStack from '../Components/StickyStack';
import landingnote1 from '/Images/Homepage/landingnote1.png';
import landingnote2 from '/Images/Homepage/landingnote1.2.png';
import landingnote3 from '/Images/Homepage/landingnote1.3.png';
import landingnote4 from '/Images/Homepage/landingnote1.4.png';




function Home() {
  const navigate = useNavigate();
  const [hoverText, setHoverText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (text: string) => {
    setHoverText(text);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate('/about'); // Replace '/about' with whatever route path you want to open
  };

  const handleClickcontact = () => {
    navigate('/contact'); // Replace '/about' with whatever route path you want to open
  };

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

      
<div className="loop-banner">
  <div className="loop-track">
    <p>Interaction & Experience Designer • Creative Technologist • Digital Designer •</p>
    <p>Interaction & Experience Designer • Creative Technologist • Digital Designer •</p>
  </div>
</div>


<ScrollArrow />
    <div className='abouthomewrapper'>
      <section id="abouthome" className='abouthome'>
          
              <div className="about-container">
                {/* 1. Floating cursor badge rendered at root level */}
                <CursorFollower text={hoverText} isVisible={isHovered} />

                {/* 2. Your paragraph with hover triggers */}
                <div className="abouttext">
                  <p
                    onMouseEnter={() => handleMouseEnter('ABOUT')}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    className="interactive-text"
                  >
                    I’m a digital designer based in Cork City, Ireland, with an MSc in Interaction & Experience Design. I create thoughtful, visually expressive and user‑centred work across interaction design, creative technology and graphic design. My practice blends research, storytelling and hands‑on making, from web and brand design to immersive, tactile experiences.
                  </p>

                  <div className='getintouch'>
                    
                    <p
                    onMouseEnter={() => handleMouseEnter('GET IN TOUCH')}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClickcontact}
                    className="interactive-text-git"
                  >
                    Open to work and freelance projects.
                  </p>
                  </div>
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
