import './CSS/About.css';
import profileImg from '/Images/Homepage/menote.png';

export default function About() {
  return (
    <main className="about-page">

  <section className="about-hero">
    <h1 className="about-headline">
      Grace Clehane
    </h1>

    <p className="about-subtitle">
      Interaction Designer  //  Creative Technologist  //  Cork, Ireland
    </p>
  </section>

  <section className="about-grid">

    <div className="about-bio-col">

      <p className="lead-text">
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
      <img src={profileImg}></img>
    </div>

  </section>

  {/*<section className="currently-section">
    <h3>CURRENTLY</h3>

    <p>
      Exploring physical computing, participatory design and
      immersive experiences through creative technology.
    </p>

    <p>
      Open to opportunities in interaction design, creative
      technology, graphic design and cultural design.
    </p>
  </section>8*/}

  <section className="timeline-section">

    <h3>EDUCATION</h3>

    <div className="timeline">

      <div className="timeline-item">
        <span>2025–26</span>

        <div>
          <h4>MSc Interaction & Experience Design</h4>
          <p>University of Limerick</p>
          <small>First Class Honours • Class Representative</small>
        </div>
      </div>

      <div className="timeline-item">
        <span>2020–24</span>

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

  <section className="links-section">

    <h3>LINKS</h3>

    <li><a
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
  </section>

</main>
  );
}