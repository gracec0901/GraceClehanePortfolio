import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder2 from'/Placeholders/project2placeholder.png';
import PCVideo from '/Images/ProjectThree/PCVideo.mp4'; 
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';
import './CSS/InteractionDesign.css';



function InteractionDesign(){
    return(
        <section className="projecthero">

            <div className='titleParallax'>
                <div className='titleOverlay'>
                    <h1>Interaction & Experience Design</h1>

                    <div className='projectIntro'>
                        <h3 className='projectIntroLeft'>[University of Limerick]</h3>
                        <h3 className='projectIntroCentre'>[2025 - 2026]</h3>
                        <h3 className='projectIntroRight'>[MSc]</h3>
                    </div>

                   <div className='projectDescription'>
                    <div className='firstText'>
                        <ul className='skillList'>
                            <h3>[Software]</h3>
                            <li>Visual Studio Code</li>
                            <li>Adobe Creative Suite</li> 
                            <li>Arduino IDE</li>
                            <li>Processing</li>
                            <h3>[Skills]</h3>
                            <li>Interaction Design</li>
                            <li>User Experience</li>
                            <li>Physical Computing</li>
                        </ul>
                    </div>
</div>
                        <h2>Physical Computing</h2>
                        <div className="Video">
                            
                            <video className="video-play" src={PCVideo} controls playsInline>
                                Your browser does not support the video tag. </video>
                        </div>
                </div>
            </div>
                

            <div className="project-nav">
        <Link to="/Projecttwo">
        <div className="nav-item left">
            <span className="nav-label">← Previous project</span>
            <img src={placeholder2} alt="Previous Project" className="nav-image" />
        </div>
        </Link>

        <Link to="/Photography">
        <div className="nav-item right">
            <span className="nav-label">Next project →</span>
            <img src={PhotographyHero} alt="Next Project" className="nav-image" />
        </div>
        </Link>
    </div>

        </section>
    );
}

export default InteractionDesign;
