import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';

import ScrollArrow from '../Components/ScrollArrow';
import unthumb from '/Images/Homepage/unthumb.png';

import ef1 from '/Images/ProjectTwo/ef1.jpeg';
import ef2 from '/Images/ProjectTwo/ef2.jpeg';
import ef3 from '/Images/ProjectTwo/ef3.png';
import characters from '/Images/ProjectTwo/characters.jpg';
import bp4 from '/Images/ProjectTwo/bp4.jpeg';
import ccbit from '/Images/Homepage/ccbit.png';

function AnSiopa() {
    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>Immersive Design</h5>
                <h3>Specialisation in Immersive Design at Hogeschool Utrecht 2022</h3>
            </div>

            <div className="ixParallax">
                <div className="ixParallaxInner"></div>
            </div>


            <div className='ProjectDescription'>
                <p>I was very lucky to be offered an Erasmus position, specialising in 'Immersive Design' at hogechool Utrecht. There I learned very valuable skills such as storytelling, creating engaging and interactive experiences and teamwork.
                 </p>
            </div>


            <section className='mainContent'>

            <div className='Outcome'>
                <h3>Beeld en Geluid</h3>
                <p>We collaborated with the client, Beeld en Geluid, to design an immersive experience tailored for younger visitors at their newly renovated museum. Our team developed an engaging storyline where users assisted a group of characters in solving challenges throughout the museum, creating an interactive and educational experience.</p>
            </div>

            <div className="bgImages">
                <div className="bgcolumn">
                    <div className="bgMediaBox">
                    <video src={`${import.meta.env.BASE_URL}videos/bg1.mp4`} autoPlay loop muted playsInline />
                    </div>
                </div>

                <div className="bgcolumn">
                    <div className="bgMediaBox">
                    <img src={bp4} alt="" />
                    </div>
                </div>

                <div className="bgcolumn">
                    <div className="bgMediaBox">
                    <img src={characters} alt="" />
                    </div>
                </div>
                </div>

            

            <div className='Process'>
                <h3>Elapsed Frequencies</h3>
                <p>For the final project, we were tasked to build an immersive experience with peers that were interested in the same technology and subjects, so I teamed with three others to build 'Elapsed Frequencies', an immersive experience guiding the user through the development and growth of music. <br /><br />Through audio and visual technology we built an environment where through storytelling we could guide the audience through this experience. I was tasked to create the visuals which were projected on four walls.
                </p>
            </div>

            <div className="outcomeImages">
                <div className="column">
                    <img src={ef1} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <img src={ef3} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <img src={ef2} alt="Snow" className='outcomeImage1'></img>
                </div>
            </div>

            <div className="youtubeVidSolo">
                <iframe 
                    src="https://www.youtube.com/embed/lBNirBKhoPI?si=1ovIu2qA4zyoobnT"
                    allowFullScreen>
                </iframe>
            </div>


            </section>

            


            <div className="project-nav">
                <Link to="/Ansiopa">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={unthumb} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Contentcreation">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={ccbit} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default AnSiopa;
