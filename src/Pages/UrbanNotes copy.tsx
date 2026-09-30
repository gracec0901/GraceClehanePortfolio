import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';

import ScrollArrow from '../Components/ScrollArrow';

import UNPhones2 from '/Images/Project One/UNPhones2.png';
import UNPortfolio from '/Images/Project One/UNPortfolio.jpg';
import UNPoster from '/Images/Project One/UNPoster.jpg';
import UNDisplay from '/Images/Project One/UNDisplay.jpg';
import PFI1 from '/Images/Project One/PFI1.jpeg';
import UNPhone3 from '/Images/Project One/UNPhone3.png';
import UNPhone1 from '/Images/Project One/UNPhone1.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';



function UrbanNotes() {
    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>Urban Notes</h5>
                <h3>BA Creative Digital Media at Munster Technological University 2024</h3>
            </div>

            <div className="ixParallax">
                <div className="ixParallaxInner"></div>
            </div>


            <div className='ProjectDescription'>
                <p>For my Final Year Project, I independently designed an application aimed towards local citizens and tourists, allowing them to explore and interact with the street art of Cork independently and learn the stories behind the art and the artists. Growing up, I have always admired the street art of Cork and I wanted to have an engaging and interesting way to interact and to give back to the talented artists that give us these powerful works of art, beautifying our city. I wanted to create a product that allowed the user to easily access this information in an interactive and engaging way while also being able to open up a discussion about the art with the rest of the community.
                 </p>
            </div>


            <section className='mainContent'>

            <div className='Outcome'>
                <h3>"Explore, Engage, Create"</h3>
                <p>Urban Notes is a community-based application where the user benefits from the immersive design of interacting with the artworks, gaining a knowledge into the cultural significance and stories of the art and the artists gain exposure from the art, through the AR stories showing their name and links to appropriate websites such as portfolios or web shops.<br/><br/>
                The aim behind this project is to bridge the disconnect we have with art that is telling our stories. Urban Notes aims to open up an engagement between the public realm and the community.<br/><br/>
                Urban Notes is based in Cork City, but this application has the capabilities to be expanded beyond Cork City and be used in cities all across Ireland and even Europe. Urban Notes is a tool for exploration and engagement which is a function that can be expanded on to include more domains.
                </p>
            </div>

            <div className="outcomeunImages">
                <div className="ouncolumn">
                    <img src={UNPortfolio} alt="Snow" className='outcomeunImage1'></img>
                </div>
                <div className="ouncolumn">
                    <img src={UNPoster} alt="Snow" className='outcomeunImage2'></img>
                </div>
                <div className="ouncolumn">
                    <img src={UNDisplay} alt="Snow" className='outcomeunImage3'></img>
                </div>
            </div>
            

            <div className='Process'>
                <h3>TECHNOLOGY</h3>
                <p>Urban Notes works off of AR technology to function the personalised notes, by using Lens Studio, an AR filter was built to mimic how a mural artist would spray paint the wall and from here developed the idea that the user would use their hand to draw their chosen note and this would then be put on the art piece.<br /><br />I wanted to add this functionality as AR is a growing technology and through testing other apps utilising AR I wanted to implement this into the application to maximise engagement and interest. The AR can be seen through the pre-made AR stories, bringing the art to life telling its story and its message. This function is useful to provide context and history behind the piece to both the local citizens and visitors to the city. Then the virtual notes using Lens Studio and Unity adds a level of interactivity and immersion, inviting users to leave their own interpretation and message on the art in a non damaging way as it's completely digital.
                </p>
            </div>

            <div className="outcomeImages">
                <div className="column">
                    <img src={UNPhone1} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <img src={UNPhones2} alt="Snow" className='outcomeImage1'></img>
                </div>
                <div className="column">
                    <img src={UNPhone3} alt="Snow" className='outcomeImage1'></img>
                </div>
            </div>




            <div className='Technology'>
                <h3>Prize For Innovation</h3>
                <p>Urban Notes was honoured to be shortlisted for the MTU Prize for Innovation in 2024. The experience was incredibly rewarding, as it provided the opportunity to pitch the project to potential investors and connect with fellow young entrepreneurs, gaining insights into their inspiring ideas.<br/><br/>
                It was pitched to possible investors and the prize judges in which valuable advice and insights were gained into how the project can be made more valuable to customers. With the support from customers such as Fáilte Ireland and the Arts Council, it can be used as a tool for general cultural exploration and engagement, for example it can be used for music or tourist attractions.
                </p>
            </div>

            <div className="unImages">
                <div className="uncolumn">
                    <video src={`${import.meta.env.BASE_URL}videos/UNVid.mp4`} autoPlay loop muted playsInline className='unImage2'></video>
                </div>
                <div className="uncolumn">
                    <img src={PFI1} alt="Snow" className='unImage1'></img>
                </div>
                <div className="uncolumn">
                    <video src={`${import.meta.env.BASE_URL}videos/UNVid2.mp4`} autoPlay loop muted playsInline className='unImage3'></video>
                </div>
            </div>




            </section>

            


            <div className="project-nav">
                <Link to="/Ansiopa">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={ixuxhover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/ImmersiveDesign">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={ixdnotehover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default UrbanNotes;
