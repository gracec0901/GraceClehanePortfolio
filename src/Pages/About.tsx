import './CSS/About.css';
import profileImg from '/Images/Homepage/menote.png';
import StickyStackWithText from '../Components/StickyStackWithText';

// Background images for the hero scatter
import zineImg1 from '/Images/Homepage/about1.png';
import zineImg2 from '/Images/Homepage/about2.png';
import zineImg3 from '/Images/Homepage/about3.png';
import zineImg4 from '/Images/Homepage/about4.png';
import zineImg5 from '/Images/Homepage/about5.png';

export default function About() {
  return (
    <main className="about-page">

      {/* Editorial Scatter Hero */}
      {/* Tasha Sheleg Style Hero Section */}
      <section className="about-hero-poster">
        
        {/* Top Header Row */}
        <div className="poster-meta meta-top">
          <span className="meta-item"></span>
          <span className="meta-item"></span>
        </div>

        {/* Large Typography sitting BEHIND */}
        <h1 className="poster-headline">
          ABOUT ME
        </h1>

        {/* Overlapping Image Belt sitting IN FRONT */}
        <div className="poster-image-belt">
          <img src={zineImg1} alt="" className="belt-card card-1" />
          <img src={zineImg2} alt="" className="belt-card card-2" />
          <img src={zineImg3} alt="" className="belt-card card-3" />
          <img src={zineImg4} alt="" className="belt-card card-4" />
          <img src={zineImg5} alt="" className="belt-card card-5" />
        </div>

      </section>

      {/* Bio Grid */}
      <section className="about-grid">
        <div className="about-bio-col">
          <p >
            I'm an interaction and experience designer interested in how
            design can bring people together through curiosity,
            participation and play.
          </p>

          <p>
            My work combines physical objects, digital systems and
            storytelling. Through installations, graphic design,
            research and creative technology, I explore how people
            interact with places, communities and each other.
          </p>

          <p>
            I enjoy creating tactile experiences that invite people
            to touch, explore and contribute. Whether through an
            interactive artefact, exhibition or digital interface,
            my goal is to create experiences that feel human,
            playful and memorable.
          </p>
        </div>

        <div className="polaroid-card">
          <img src={profileImg} alt="Grace Clehane Portrait" />
        </div>
      </section>

      {/* Sticky Stack Interactive Thought Section */}
      <StickyStackWithText />

      {/* Education Timeline */}
      <section className="timeline-section">
        <h3>EDUCATION</h3>

        <div className="timeline">
          <div className="timeline-item">
            <span>2025–2026</span>
            <div>
              <h4>MSc Interaction & Experience Design</h4>
              <p>University of Limerick</p>
              <small>First Class Honours • Class Representative</small>
            </div>
          </div>

          <div className="timeline-item">
            <span>2020–2024</span>
            <div>
              <h4>BA Creative Digital Media</h4>
              <p>Munster Technological University</p>
              
            </div>
          </div>

          <div className="timeline-item">
            <span>2022</span>
            <div>
              <h4>Specialisation in Immersive Design</h4>
              <p>Hogeschool Utrecht</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h3>SKILLS</h3>
        <ul className="skills-list">
          <li>Interaction Design</li>
          <li>UX Research</li>
          <li>Creative Technology</li>
          <li>Physical Computing</li>
          <li>Graphic Design</li>
          <li>Frontend Web Development</li>
          <li>TouchDesigner</li>
          <li>Laser Cutting & Fabrication</li>
          <li>Videography</li>
        </ul>
      </section>

      {/* Links */}
      <section className="links-section">
        <h3>LINKS</h3>
        <ul>
          <li>
            <a
              href="http://dawn.ul.ie/ixuxdesign/2026/GraceClehane/"
              target="_blank"
              rel="noreferrer"
            >
              DAWN Exhibition →
            </a>
          </li>
          <li>
            <a
              href="https://graduatearchive.mtu.ie/artist/grace-clehane"
              target="_blank"
              rel="noreferrer"
            >
              MTU Crawford Exhibition →
            </a>
          </li>
        </ul>
      </section>

    </main>
  );
}