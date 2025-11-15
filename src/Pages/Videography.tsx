import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder1 from'/Placeholders/project1placeholder.png';

function Videography(){
    return(

        <section className="projecthero">

        <div className='titleParallax'>
    <div className='titleOverlay'>
        <h1>Videography</h1>
        <div className='projectIntro'>
            <h3 className='projectIntroLeft'>[Collection]</h3>
            <h3 className='projectIntroCentre'>[2020 - 2025]</h3>
            <h3 className='projectIntroRight'>[Videos]</h3>

            <div className="Video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OaO_EhgVy9M?si=ilgtwkMLkQ-KnjTz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>

<div className="project-nav">
        <Link to="/Photography">
        <div className="nav-item left">
            <span className="nav-label">← Previous project</span>
            <img src={PhotographyHero} alt="Previous Project" className="nav-image" />
        </div>
        </Link>

        <Link to="/Projectone">
        <div className="nav-item right">
            <span className="nav-label">Next project →</span>
            <img src={placeholder1} alt="Next Project" className="nav-image" />
        </div>
        </Link>
    </div>

</section>
    );
}

export default Videography;