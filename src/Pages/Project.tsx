import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Project.css';

// 1. IMPORT YOUR IMAGES DIRECTLY
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import unnotehover from '/Images/Homepage/unnotehover.png';
import vidhover from '/Images/Homepage/vidhover.png';
import gdhover from '/Images/Homepage/gdhover.png';


// 2. ASSIGN IMPORTED VARIABLES TO YOUR PROJECTS DATA
const projects = [
  {
    title: "An Siopa",
    description: "A Civic Interactive Artefact for Reappropriating Abandoned Irish Corner Shops",
    skills: "UX/UI // PHYSICAL COMPUTING // USER-TESTING",
    path: "/Ansiopa",
    buttonClass: "projectButtonOne",
    image: ansiopahover
  },
  {
    title: "Interaction & Experience Design",
    description: "Collection of works from MSc Interaction & Experience Design",
    skills: " IXD // RESEARCH // PROTOTYPING ",
    path: "/InteractionDesign",
    buttonClass: "projectButtonTwo",
    image: ixuxhover
  },
  {
    title: "Urban Notes",
    description: "An application allowing the user to explore their cities’ art and culture through augmented reality.",
    skills: " AR // MOBILE APP // UX/UI // GRAPHIC DESIGN",
    path: "/UrbanNotes",
    buttonClass: "projectButtonThree",
    image: unnotehover
  },
  {
    title: "Immersive Design",
    description: "A collection of work associated with my specialisation in Immersive Design.",
    skills: " 3D SPACES // SPATIAL DESIGN // PROJECTION MAPPING",
    path: "/ImmersiveDesign",
    buttonClass: "projectButtonFour",
    image: ixdnotehover
  },
  {
    title: "Graphic Design",
    description: "A collection of professional graphic design work.",
    skills: "BRANDING // VISUAL IDENTITY",
    path: "/GraphicDesign",
    buttonClass: "projectButtonSix",
    image: gdhover
  },
  {
    title: "Videography",
    description: "A collection of content created for University commissioned content and module work.",
    skills: "VIDEO PRODUCTION // EDITING ",
    path: "/ContentCreation",
    
    image: vidhover
  }
];

function Project() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="projects">
      <div className="container">
        {/* Floating Cursor Image Container */}
        {activeImage && (
          <div
            className="cursor-image-preview"
            style={{
              transform: `translate3d(${cursorPos.x + 20}px, ${cursorPos.y + 20}px, 0)`
            }}
          >
            <img src={activeImage} alt="Project Preview" />
          </div>
        )}

        {/* 4 Columns: Entire row wrapped in <Link> */}
        {projects.map((proj, index) => (
          <Link
            to={proj.path}
            className="projectCont"
            key={index}
            onMouseEnter={() => setActiveImage(proj.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <div className="col-title">
              <h6>{proj.title}</h6>
            </div>

            <div className="col-desc">
              <p>{proj.description}</p>
            </div>

            <div className="col-skills">
              <span className="skillTag">{proj.skills}</span>
            </div>

            {/*<div className="col-action">
              <span className={proj.buttonClass}>
                +
              </span>
            </div>*/}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Project;