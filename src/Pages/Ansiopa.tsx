import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';
//import ParallaxTrack from '../Components/ParallaxTrack';
//import { ImageModal } from '../Components/ImageModal';
//import { useState } from "react";
import ScrollArrow from '../Components/ScrollArrow';
import GalleryGrid from '../Components/GalleryGrid';


import siopa1 from '../assets/siopa1.jpg';
import tech1 from '/Images/AnSiopa/tech1.jpg';
//import final1 from '/Images/AnSiopa/final1.png';
import gallery1 from '/Images/AnSiopa/gallery1.jpg';
import gallery2 from '/Images/AnSiopa/gallery2.jpg';
import gallery3 from '/Images/AnSiopa/gallery3.jpg';
import gallery4 from '/Images/AnSiopa/gallery4.png';
import gallery5 from '/Images/AnSiopa/gallery5.png';
import gallery6 from '/Images/AnSiopa/gallery6.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import vidhover from '/Images/Homepage/vidhover.png';


function AnSiopa() {
//const [selected, setSelected] = useState<{ src: string; caption?: string } | null>(null);
const extraImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>An Siopa</h5>
                <h3>'An Siopa' - A Civic Interactive Artefact for Reappropriating Abandoned Irish Corner Shops</h3>
            </div>

            <div className="sParallax">
                <div className="sParallaxInner"></div>
            </div>


            <div className='ProjectDescription'>
                <p>'An Siopa' was researched and developed as the final part of my Masters study. Over 6 months, I researched the issue of dereliction within Ireland, studied the guerilla techniques of tactical urbanism and "city-hacking" and the human need and right for creating and ownership within their own city. Specifically in this case, I looked into how we can reappropriate Irish independent corner shops into third places once again. <br /><br />
                My findings fueled the design of a handmade cash register and overall experience entitled 'An Siopa'. I took the familiar interaction and algorithm of a cash register, selecting an item, scanning it, paying and speaking to the shopkeeper and getting a receipt. But in this case, its function was reappropriated to serve as a civic cultural probe, provoking thought and agency around what we can do with our vacant and derelict corner shops. <br /><br />
                The project combined fabrication methods such as laser cutting, 3D printing, backend and frontend coding, technical debugging and implementation and my favourite part, using a 20 year old warehouse label printer to be reused as a thermal receipt printer.</p>
            </div>


            <section className='mainContent'>

            <div className='Outcome'>
                <h3>Outcome</h3>
                <p>The final outcome was a handmade interactive cash register, where its function was transformed from a site of economic exchange to an interface provoking individual and communal reflection of public space transformation possibilities.
                <br/><br/>
                'An Siopa' is a civic interactive installation that transforms the familiar mechanics and interaction of a store cash register into a tool for community voice and civic agency. Instead of serving customers, this reappropriated interface invites members of the public to anonymously share personal perspectives and future visions for these vacant spaces. By reusing a familiar symbol of commercial transactions and turning it into a civic tool, the project encourages people to reconsider how underused shop spaces can be reclaimed from the ground up.
                <br/><br/>
                Visitors interact with the experience by answering guided prompts about vacancy, memory and what these spaces once represented in community life. Personalised tangible receipts are given to the visitor and invite them to keep one copy and to add the other to a growing public archive. By blending intuitive hardware and interactions with individualised storytelling, the installation bridges the gap between passive observation of the vacant spaces and active participation with imagining their futures.
                </p>
            </div>

            <div className="outcomeImages">
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/AnSiopaUse.mp4`} autoPlay loop muted playsInline className='outcomeImage2'></video>
                </div>
                <div className="column">
                    <img src={siopa1} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/AnSiopaView.mp4`} autoPlay loop muted playsInline className='outcomeImage3'></video>
                </div>
            </div>

            <div className='Process'>
                <h3>Process</h3>
                <p>To create and research this project, the <span className="highlight">Research through Design Methodology (RtD)</span> was adopted as the overarching method for the design process, while <span className="highlight">user-centred design principles</span> were used to ensure the final outcome was grounded in human experience, wants and needs.
                <br/><br/>
                Five iterative design phases were completed
                <ul><li>Preliminary research and brainstorming,</li><li>Low-fidelity prototyping (sketching, user personas, user flow explorations)</li><li>Mid-fidelity prototyping (Cardboard prototypes, technical exploration and implementation)</li><li>High-fidelity prototyping (Final cardboard prototype, user-testing & evaluation, final technical implementation.)</li><li>Final artefact (Laser cut frame, 3D printed caps, technology combined with the final physical frame.)</li></ul>
                </p>
            </div>

            <div className="processImages">
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/Process2.mp4`} autoPlay loop muted playsInline  className='processImage4'></video>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/Process5.mp4`} autoPlay loop muted playsInline  className='processImage1'></video>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/Process3.mp4`} autoPlay loop muted playsInline  className='processImage3'></video>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/Process.mp4`} autoPlay loop muted playsInline className='processImage2'></video>
                </div>
            </div>

            <div className='Technology'>
                <h3>Technology</h3>
                <p>There was a large amount of technical exploration and experimentation completed throughout this process as part of the iterative design process. It was important to find equipment that was accessible and intuitive to users and remained cohesive to ensure users felt safe and invited to interact.
                <br/><br/>
                The main components looked at were: the digital display, an NFC reader and tags, a thermal receipt printer and the software to connect all of these components. After months of exploring these different aspects and testing them to see if they were user-friendly and immersive, the final components were decided on. It was important to me to remain close to the literature studied as part of the thesis as it helped create a framework for me to work upon. City-hacking and tactical urbanism, were two approaches that really helped ground and develop this project. By using technology already publicly available for a different use and so that inspired me to use technology for a different use and in itself reappropriate not only the space but the interaction.
                </p>
            </div>

            <div className="technologyImages">
                <div className="column">
                    <img src={tech1} className='techImage4'></img>
                </div>
                <div className="column">
                    <video src={`${import.meta.env.BASE_URL}videos/final2.mp4`} autoPlay loop muted playsInline  className='finalImage2'></video>
                </div>
            </div>
            </section>


                <details className="gall eryOpen">
                    <summary className="galleryTitle">GALLERY🡮</summary>
                    <GalleryGrid images={extraImages} />
                </details>


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
                <Link to="/Contentcreation">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={vidhover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/InteractionDesign">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={ixuxhover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default AnSiopa;
