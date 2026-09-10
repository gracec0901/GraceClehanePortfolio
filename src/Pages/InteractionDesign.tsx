import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';

import ScrollArrow from '../Components/ScrollArrow';
import unthumb from '/Images/Homepage/unthumb.png';
import threadedmap2 from '/Images/IXUX/threadedmap2.jpeg';
import device from '/Images/IXUX/device.png';
import device1 from '/Images/IXUX/device1.png';


import siopabit from '/Images/AnSiopa/siopabit.png';


function AnSiopa() {
//const [selected, setSelected] = useState<{ src: string; caption?: string } | null>(null);
//const extraImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>Interaction & Experience Design</h5>
                <h3>Masters of Science at the University of Limerick 2026</h3>
            </div>

            <div className="ixParallax">
                <div className="ixParallaxInner"></div>
            </div>


            <div className='ProjectDescription'>
                <p>In 2025, I began my Masters at the University of Limerick. <br/><br/>
                Below are a selection of projects completed within the course:
                 </p>
            </div>


            <section className='mainContent'>

            <div className='Outcome'>
                <h3>Threaded Maps</h3>
                <p>A project created using capacitative sensors to create a personalised, artistic experience for the participant. Threaded Maps aimed to create a slow and thoughtful experience for the user by asking them questions and allowing them to answer personally through touching colour coded wires to change the visuals. Both the background colour changes and they have their own digital 'thread' being created on the screen based off of their input. Once the experience finishes, their thread remains faded on screen and is added to the map of threads created by other participants.
                </p>
            </div>


            <div className="mapImages">
                <div className="mapcolumn">
                    <video src={`${import.meta.env.BASE_URL}videos/threadedmap1.mp4`} autoPlay loop muted playsInline  className='mapImage1'></video>
                </div>
                <div className="mapcolumn">
                    <img src={threadedmap2} alt="Snow" className='mapImage2'></img>
                </div>
                <div className="mapcolumn">
                    <video src={`${import.meta.env.BASE_URL}videos/threadedmap2.MP4`} autoPlay loop muted playsInline  className='mapImage3'></video>
                </div>
            </div>

            

            <div className='Process'>
                <h3>Smart Device Prototype</h3>
                <p>I was tasked to develop a prototype to solve the issue of energy usage within households. Through researching the issue and consumer needs and iterative prototyping and problem-solving the final prototype was developed.
                <br/><br/>
                A handheld interactive interface with a multimeter embedded to guide the user to where the most amount of energy is being used in their home. Through tactile and haptic interactions, the final poutcome is user-friendly, accessible and engaing to interact with. A small, aethetic item that can be placed within the home without looking out of place. And importantly, it teaches the user about their own personal energy usage through the act of looking for that spike and learning what they can do to lessen the amount of energy they use through doing and a visual experience.
                </p>
            </div>

            <div className="outcomeImages">
                <div className="column">
                    <img src={device1} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <img src={device} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/device3.mp4`} autoPlay loop muted playsInline  className='outcomeImage3'></video>
                </div>
            </div>

            <div className="youtubeVidSolo">
                <iframe 
                    src="https://www.youtube.com/embed/UtX2-t5Kt3U?si=OHRJos4yvm5EM3iq"
                    allowFullScreen>
                </iframe>
            </div>



            <div className='Technology'>
                <h3>Cniotáil</h3>
                <p>Cniotáil was an interactive experience created to represent the slow and tactile interaction assocaited with knitting. FOur interactive boxes were made through laser cutting, soldering resistors and crocheted covers to create an immersive and tactile experience. When the blocks were place together slowly, a visual shows representing the patterns created through knitting.
                The visuals were created in TouchDesigner and Arduino handled the resistor values.
                </p>
            </div>

            <div className="youtubeVidShort">
                
            </div>

            <div className="knitImages">
                <div className="knitcolumn">
                    <div className="mediaBox">
                    <video src={`${import.meta.env.BASE_URL}videos/knit1.MOV`} autoPlay loop muted playsInline />
                    </div>
                </div>

                <div className="knitcolumn">
                    <div className="mediaBox">
                    <iframe
                        src="https://www.youtube.com/embed/-zKygFpbFEo"
                        title="CS6042 Final Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                    </div>
                </div>

                <div className="knitcolumn">
                    <div className="mediaBox">
                    <video src={`${import.meta.env.BASE_URL}videos/knit2.mp4`} autoPlay loop muted playsInline />
                    </div>
                </div>
                </div>


           <div className='Technology'>
                <h3>Ivee</h3>
                <p>Ivee was developed as part of a short Participatory Design study entitled "Cultural Probes: Domestic Reappropriation under Rental Constraints" as part of the Applied Interaction Design module.
                <br/><br/>
                'Ivee' is a modular interactive sculpture that aims to represent and provide
                agency for the tenant. After analysing the probe kits and the answers given, key
                themes and common answers were seen to be similar through each of the participants kits.
                These included; inability to use wall space in fear of losing the security deposit, the sense of
                community with housemates and being able to add personal artefacts to the space. These key
                aspects drove the final design concept. The modular ivy sculpture, a living connection vine
                that changes with the space. This prototype is a, non-destructive sculpture that adds another
                layer to the walls to allow the tenant to add their own pictures, change the lighting and add
                their own personal artefacts. The modular tree also grows with you in the space as you add
                more memories, showing the transformation and personal growth of you and the space. 
    
                </p>
            </div>

            <div className="youtubeVidSolo">
                <iframe 
                    src="https://www.youtube.com/embed/xxRnV7VteBM?si=zjNdx6WJEJS9nkQW"
                    allowFullScreen>
                </iframe>
            </div>

            </section>

            


            <div className="project-nav">
                <Link to="/Ansiopa">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={siopabit} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Projectone">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={unthumb} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default AnSiopa;
