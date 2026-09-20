import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';
import ScrollArrow from '../Components/ScrollArrow';
import gdhover from '/Images/Homepage/gdhover.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';



function AnSiopa() {

    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>Videography</h5>
                <h3>A collection of content and videos created.</h3>
            </div>

            <div className="sParallax">
                <div className="sParallaxInner"></div>
            </div>


            


            <section className='mainContent'>

            <div className="ytRow">
                <div className="ytColumn">
                    <div className="ytBox">
                    <iframe
                        src="https://www.youtube.com/embed/J8yvdcbllX0?si=FTWX1I5l35A3vqmL"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>

                <div className="ytColumn">
                    <div className="ytBox">
                    <iframe
                        src="https://www.youtube.com/embed/8r8ca24nFZM"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>

                <div className="ytColumn">
                    <div className="ytBox">
                    <iframe
                        src="https://www.youtube.com/embed/3WSWEyMppbk"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
                </div>

                <div className="youtubeVidSolo">
                <iframe 
                    src="https://www.youtube.com/embed/hGXjlXMoMAo?si=mE2LlVF1HVZEcU0B"
                    allowFullScreen>
                </iframe>
            </div>

            </section>

            <div className="project-nav">
                <Link to="/GraphicDesign">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={gdhover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Ansiopa">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={ansiopahover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default AnSiopa;

