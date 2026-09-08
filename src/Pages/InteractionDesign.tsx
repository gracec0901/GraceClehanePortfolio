import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';
//import ParallaxTrack from '../Components/ParallaxTrack';
//import { ImageModal } from '../Components/ImageModal';
//import { useState } from "react";
import ScrollArrow from '../Components/ScrollArrow';
//import GalleryGrid from '../Components/GalleryGrid';
import threadedmap1 from '/Images/IXUX/threadedmap1.mp4';
import threadedmap2 from '/Images/IXUX/threadedmap2.jpeg';


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
                <p>In 2025, I began my Masters at the University of Limerick, here I began studies into HUman Compuet Interaction, <br/><br/>
                Below are a selection of projects completed within the course:
                 </p>
            </div>


            <section className='mainContent'>

            <div className='Outcome'>
                <h3>Threaded Maps</h3>
                <p>A project created using Physical Computing 
                </p>
            </div>


            <div className="outcomeImages">
                <div className="column">
                    <video src={threadedmap1} autoPlay loop muted playsInline className='outcomeImage2'></video>
                </div>
                <div className="column">
                    <img src={threadedmap2} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <video src={threadedmap1} autoPlay loop muted playsInline  className='outcomeImage3'></video>
                </div>
            </div>

            

            <div className='Process'>
                <h3>Smart Device Prototype</h3>
                <p>To create and research this project, the <span className="highlight">Research through Design Methodology (RtD)</span> was adopted as the overarching method for the design process, while <span className="highlight">user-centred design principles</span> were used to ensure the final outcome was grounded in human experience, wants and needs.
                <br/><br/>
                Five iterative design phases were completed
                <ul><li>Preliminary research and brainstorming,</li><li>Low-fidelity prototyping (sketching, user personas, user flow explorations)</li><li>Mid-fidelity prototyping (Cardboard prototypes, technical exploration and implementation)</li><li>High-fidelity prototyping (Final cardboard prototype, user-testing & evaluation, final technical implementation.)</li><li>Final artefact (Laser cut frame, 3D printed caps, technology combined with the final physical frame.)</li></ul>
                </p>
            </div>

            

            <div className='Technology'>
                <h3>Cniotáil</h3>
                <p>There was a large amount of technical exploration and experimentation completed throughout this process as part of the iterative design process. It was important to find equipment that was accessible and intuitive to users and remained cohesive to ensure users felt safe and invited to interact.
                <br/><br/>
                The main components looked at were: the digital display, an NFC reader and tags, a thermal receipt printer and the software to connect all of these components. After months of exploring these different aspects and testing them to see if they were user-friendly and immersive, the final components were decided on. It was important to me to remain close to the literature studied as part of the thesis as it helped create a framework for me to work upon. City-hacking and tactical urbanism, were two approaches that really helped ground and develop this project. By using technology already publicly available for a different use and so that inspired me to use technology for a different use and in itself reappropriate not only the space but the interaction.
                </p>
            </div>

            <div className='Technology'>
                <h3>The Tenant Box</h3>
                <p>There was a large amount of technical exploration and experimentation completed throughout this process as part of the iterative design process. It was important to find equipment that was accessible and intuitive to users and remained cohesive to ensure users felt safe and invited to interact.
                <br/><br/>
                The main components looked at were: the digital display, an NFC reader and tags, a thermal receipt printer and the software to connect all of these components. After months of exploring these different aspects and testing them to see if they were user-friendly and immersive, the final components were decided on. It was important to me to remain close to the literature studied as part of the thesis as it helped create a framework for me to work upon. City-hacking and tactical urbanism, were two approaches that really helped ground and develop this project. By using technology already publicly available for a different use and so that inspired me to use technology for a different use and in itself reappropriate not only the space but the interaction.
                </p>
            </div>

            
            </section>


                


                {/*<ParallaxTrack
                    images={[
                        { src: gallery1, caption: "WEBSITE POSTER" },
                        { src: gallery2, caption: "INPUTS & OUTPUTS" },
                        { src: gallery3, caption: "USER INTERACTION FLOW" },
                        { src: gallery4, caption: "LIMITATIONS & FUTURE" },
                        { src: gallery5, caption: "FINAL OUTCOME" },
                        { src: gallery6, caption: "3D-PRINTED KEYBOARD CAPS" },
                        { src: final1, caption: "USER-JOURNEY" },
                        { src: final2, caption: "FINAL UI" }
                    ]}
                    onSelect={(src, caption) => setSelected({ src, caption })}
                    />

                    <ImageModal 
                        src={selected?.src ?? null} 
                        caption={selected?.caption} 
                        onClose={() => setSelected(null)} 
                    />*/}
            


            <div className="project-nav">
                <Link to="/Ansiopa">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={siopabit} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Photography">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default AnSiopa;
