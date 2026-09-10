import './CSS/Projecttwo.css';
import { Link } from 'react-router-dom';
import placeholder3 from'/Placeholders/project3placeholder.jpeg';
import placeholder1 from'/Placeholders/project1placeholder.png';

function Projecttwo() {
return(
<section className="projecthero">

<div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Immersive Design</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Hogeschool Utrecht]</h3>
        <h3 className='projectIntroCentre'>[2022]</h3>
        <h3 className='projectIntroRight'>[Erasmus]</h3>
        </div>
    </div>
</div>

<div className='projectDescription'>
    <div className='firstText'>
        <ul className='skillList'>
            <h3>[Software]</h3>
            <li>After Effects</li>
            <li>Adobe Aero</li> 
            <li>Illustrator</li>
            <li>Eyejack</li> 
            <h3>[Skills]</h3>
            <li>AR/VR</li>
            <li>Storytelling</li>
        </ul>

    <p>I was very lucky to be offered an Erasmus position, specialising in 'Immersive Design' at hogechool Utrecht. There I learned very valuable skills such as storytelling, creating engaging and interactive experiences and teamwork.</p></div></div>


    <div className='prizeText'>
        <h3 className="projectFurtherTitle">[Beeld en Geluid]</h3>
        <p>We collaborated with the client, Beeld en Geluid, to design an immersive experience tailored for younger visitors at their newly renovated museum. Our team developed an engaging storyline where users assisted a group of characters in solving challenges throughout the museum, creating an interactive and educational experience.</p>
    </div>
    
    <div className='prizeText'>
        <h3 className="projectFurtherTitle">[Elapsed Frequencies]</h3>
        <p>For the final project, we were tasked to build an immersive experience with peers that were interested in the same technology and subjects, so I teamed with three others to build 'Elapsed Frequencies', an immersive experience guiding the user through the development and growth of music. <br /><br />IThrough audio and visual technology we built an environment where through storytelling we could guide the audience through this experience. I was tasked to create the visuals which were projected on four walls.</p>
    </div>



    <div className="project-nav">
        <Link to="/Projectone">
        <div className="nav-item left">
            <span className="nav-label">← Previous project</span>
            <img src={placeholder1} alt="Previous Project" className="nav-image" />
        </div>
        </Link>

        <Link to="/Projectthree">
        <div className="nav-item right">
            <span className="nav-label">Next project →</span>
            <img src={placeholder3} alt="Next Project" className="nav-image" />
        </div>
        </Link>
    </div>

</section>
);
}

export default Projecttwo;