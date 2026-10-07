import './CSS/About.css';
import profileImg from '/Images/Homepage/menote.png'; // Swap with your actual portrait

export default function About() {
  return (
    <main className="about-page">
      {/* Top Manifesto / Intro */}
      <section className="about-hero">
        <h1 className="about-headline">
          Grace Clehane
        </h1>
      </section>

      {/* Main Grid: Bio & Portrait */}
      <section className="about-grid">
        <div className="about-bio-col">
          <p className="lead-text">
             Hi, I'm Grace, an interaction and experience designer from Cork. I create tactile, expressive and conversation‑starting experiences that invite people to touch, turn, explore and respond. I’m most at home when a project sparks curiosity or brings people together around something unexpected.
          </p>
          <p>
            I love taking familiar objects and giving them new jobs. For my thesis 'An Siopa', I transformed a handmade cash register into a tool for communities to imagine new futures for an abandoned corner shop, complete with a revived 20‑year‑old warehouse label printer to print their ideas on a receipt. Other projects have turned crochet into a slow visual experience, or built interactive music pieces that respond to touch and movement. I love to solve problems in an intuitive and fun manner, especially by giving new life to other elements.
          </p>
          <p>
            My process always begins with listening. I build things people can pick up, try, and react to, using research methods that feel enjoyable for participants and generative for designers. I care about making interaction design feel human, playful and grounded in real stories.
          </p>
          <p>I’m open to full‑time roles and freelance projects in digital design, creative technology and graphic design. If you’re working on something interesting, I’d love to hear about it.
</p>
        </div>

        {/* Asymmetrical Portrait Card with Brutalist Shadow */}
        <div className="about-image-col">
          <div className="polaroid-card">
            <img src={profileImg} alt="Grace Clehane Portrait" />
            <span className="bitmap-caption"></span>
          </div>
        </div>
      </section>

      {/* Background & Education Breakdown */}
      <section className="about-details-section">
        <div className="detail-block">
          <h3>EDUCATION</h3>
          <ul>
            <li>
              <span className="item-title">MSc Interaction & Experience Design</span>
              <span className="item-grade">First Class Honours 1.1</span>
              <span className="item-sub">University of Limerick • 2025 – 2026</span>
              <ul className="edudetails">
                <li>Class Representative</li>
                <li>UX/UI Designer - CSIS Hackathon</li>
                <li>UL Music Society - DJ</li>
                <li>Co-curator of the DAWN Exhibition</li>
              </ul>
            </li>
            <li>
              <span className="item-title">BA Creative Digital Media</span>
              <span className="item-grade">Second Class Honours 2.1</span>
              <span className="item-sub">Munster Technological University • 2020 – 2024</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h3>SKILLS</h3>
          <ul className="skills-list">
            <li></li>
            <li>Physical Fabrication</li>
            <li>UX/UI & Interaction Design</li>
            <li>Frontend Web Development</li>
            <li>Laser Cutting & 3D Printing</li>
            <li>Research through Design (RtD)</li>
            <li>Graphic Design</li>
            <li>Videography & Editing</li>
            <li>Photography</li>
            <li>Content Creation</li>
            <li>3D Modelling</li>
          </ul>
        </div>

        <div className="detail-block">
          <h3>TECHNOLOGY</h3>
          <ul className="skills-list">
            <li>Physical Computing & IoT</li>
            <li>React, Vite & HTML</li>
            <li>TouchDesigner</li>
            <li>Arduino IDE</li>
            <li>Adobe Creative Suite</li>
            <li>FreeCAD</li>
            <li>Blender</li>
          </ul>
        </div>

        <div className="detail-block">
          <h3>EXTRA LINKS</h3>
          <ul className="skills-list">
            <li><a href="http://dawn.ul.ie/ixuxdesign/2026/GraceClehane/">DAWN Exhibition</a></li>
            <li><a href="https://graduatearchive.mtu.ie/artist/grace-clehane">MTU Crawford Exhibition</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}