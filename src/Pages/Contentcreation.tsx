import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder1 from'/Placeholders/project1placeholder.png';
import DepopVideo from '/Images/ContentCreation/DepopMTU.mp4'; 
import StudentVideo from '/Images/ContentCreation/StudentMTU.mov';
import InterviewVideo from '/Images/ContentCreation/InterviewMTU.mov';
import Thumbnail from '/Images/ContentCreation/Thumbnail.png';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';
import './CSS/ContentCreation.css';


function Videography(){
    return(
        <section className="projecthero">

            <div className='titleParallax'>
                <div className='titleOverlay'>
                    <h1>Content Creation</h1>

                    <div className='projectIntro'>
                        <h3 className='projectIntroLeft'>[Videography]</h3>
                        <h3 className='projectIntroCentre'>[2023 - 2026]</h3>
                        <h3 className='projectIntroRight'>[Client - MTU]</h3>
                    </div>


                        

                <div className='contentVideos'>
                    <div className='ccvid'>
                        <video className="CCvideo" src={DepopVideo} controls>
                                Your browser does not support the video tag. </video>
                    </div>

                    
                    <div className='ccvid'>
                        <video className="CCvideo" src={StudentVideo} controls >
                                Your browser does not support the video tag. </video>
                    </div>

                    <div className='ccvid'>
                        <video className="CCvideo" src={InterviewVideo} controls poster={Thumbnail}>
                                Your browser does not support the video tag. </video>
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
