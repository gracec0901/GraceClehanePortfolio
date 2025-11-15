import './CSS/About.css';


function About() {

    return (
    <section className="aboutIntro">
    <div className='container'>

      <section id="hero" className='hero'>
       <h1 className="h1hero"> <span className="highlightText">ABOUT</span></h1>
      </section>


      <div className="aboutBasic">
        <h3>[About Me]</h3>
        <p>I am a recent graduate of the BA Honours in Creative Digital Media a Munster Technological University. Over the past four years, I’ve explored a wide range of digital media disciplines, including Web Design, Graphic Design, Videography, UX/UI, Studio Technology, and Media Business.
        In 2022, I had the incredible opportunity to study abroad at Hogeschool Utrecht in the Netherlands, where I completed a specialization in Immersive Design. During this time, I gained hands-on experience in storytelling, AR development, projection mapping, audio-visual design, client-based projects, and creative design research. If you’re interested in collaborating or learning more about my services, feel free to reach out—I’d love to connect and discuss your project!</p>
      </div>
      

      <div className="educationSection">
        
        <details className="collapsible">
        <summary>Munster Technological University<span className='summaryToggle'></span></summary>
        <div className='collapsibleContent'>
        <ul>
          <li> <h3>[BA Honours Creative Digital Media]</h3></li>
          <li><h3>[2020 - 2024]</h3></li>
        </ul>
        <p>Web design, Digital Media, Videography, Cinematography, Photography, Animation, Graphic Design, Project Management, Marketing & Media Law, Media Business and Enterprise, Audi Visual Technology, Studio Technology, Virtual Reality Technology, Tangible Computing, Usability and UX Evaluation</p>
        </div>
        </details>

        <details className="collapsible">
          <summary className='summaryh1'>Hogeschool Utrecht<span className='summaryToggle'></span></summary>
          <div className='collapsibleContent'>
            <ul>
              <li> <h3>[Specialisation in Immersive Design]</h3></li>
              <li><h3>[2022]</h3></li>
            </ul>
          <p>Storytelling, Audio & Visual Design, UX, Design Ethics, Persuasive Communication, Studio Design</p>
          </div>
        </details>

        <details className="collapsible">
          <summary>University of Limerick<span className='summaryToggle'></span></summary>
          <div className='collapsibleContent'>
            <ul>
          <li><h3>[Masters in Interaction and Experience Design]</h3></li>
          <li><h3>[2025]</h3></li>
          </ul>
          <p>Interactive Media, Foundations of Interaction and Experience Design, Physical Computing, Information Design</p>
        </div>
        </details>
      </div>
    </div> 
    </section>  
    );
}

export default About;
