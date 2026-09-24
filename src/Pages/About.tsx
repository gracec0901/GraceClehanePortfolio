import './CSS/About.css';
import menote from '/Images/Homepage/menote.png';


function About() {

    return (
    <section className="aboutIntro">
    <div className='container'>

      <div className="ProjectIntroduction">
                <h5>About</h5>
                <h3>Behind the design.</h3>
            </div>


      <div className="aboutBasic">
        <img src={menote} className='mebasic'></img>
        
        <p>
          I recently completed my masters in interaction and experience design at the University of Limerick. There I developed my skills and passion for creating immersive, tangible experiences and designs. Specifically I focused on tangible computing, user experience research methodologies and physical fabrication. Before, I graduated with a BA Honours in Creative Digital Media at Munster Technological University. Over the past four years, I’ve explored a wide range of digital media disciplines, including Web Design, Graphic Design, Videography, UX/UI, Studio Technology, and Media Business. In 2022, I had the incredible opportunity to study abroad at Hogeschool Utrecht in the Netherlands, where I completed a specialization in Immersive Design. During this time, I gained hands-on experience in storytelling, AR development, projection mapping, audio-visual design, client-based projects, and creative design research. If you’re interested in collaborating or learning more about my services, feel free to reach out—I’d love to connect and discuss your project! </p>
      </div>
      
      


      <div className="educationSection">

        <details className="collapsible">
          <summary><h2>Masters in Interaction and Experience Design</h2><span className='summaryToggle'></span></summary>
          <div className='collapsibleContent'>
            <ul>
          <li><h3>[University of Limerick]</h3></li>
          <li><h3>[2025-2026]</h3></li>
          </ul>
          <p>Interactive Media, Foundations of Interaction and Experience Design, Physical Computing, Information Design</p>
        </div>
        </details>

        <details className="collapsible">
        <summary><h2>BA Honours Creative Digital Media</h2><span className='summaryToggle'></span></summary>
        <div className='collapsibleContent'>
        <ul>
          <li> <h3>[Munster Technological University]</h3></li>
          <li><h3>[2020 - 2024]</h3></li>
        </ul>
        <p>Web design, Digital Media, Videography, Cinematography, Photography, Animation, Graphic Design, Project Management, Marketing & Media Law, Media Business and Enterprise, Audi Visual Technology, Studio Technology, Virtual Reality Technology, Tangible Computing, Usability and UX Evaluation</p>
        </div>
        </details>

        <details className="collapsible">
          <summary className='summaryh1'><h2>Specialisation in Immersive Design</h2><span className='summaryToggle'></span></summary>
          <div className='collapsibleContent'>
            <ul>
              <li> <h3>[Hogeschool Utrecht]</h3></li>
              <li><h3>[2022]</h3></li>
            </ul>
          <p>Storytelling, Audio & Visual Design, UX, Design Ethics, Persuasive Communication, Studio Design</p>
          </div>
        </details>

        
      </div>
    </div> 
    </section>  
    );
}

export default About;
