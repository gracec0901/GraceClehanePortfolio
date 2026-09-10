import './CSS/Projectone.css';
import UNPhones2 from '/Images/Project One/UNPhones2.png';
import { Link } from 'react-router-dom';
import UNPortfolio from '/Images/Project One/UNPortfolio.jpg';
import UNPoster from '/Images/Project One/UNPoster.jpg';
import UNDisplay from '/Images/Project One/UNDisplay.jpg';
import UNHand from '/Images/Project One/UNHand.png';
import UNPhone3 from '/Images/Project One/UNPhone3.png';
import UNDrawing from '/Images/Project One/UNDrawing.jpg';
import UNPhone1 from '/Images/Project One/UNPhone1.png';
import UNStatue from '/Images/Project One/UNStatue.png';
import UNLogo from '/Images/Project One/UNLogo.png';
import placeholder2 from'/Placeholders/project2placeholder.png';
import VideographyHero from '/Images/Videography/VideographyHero.jpg';

function Projectone() {
return(
<section className="projecthero">

<div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>URBAN NOTES</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Munster Technological University]</h3>
        <h3 className='projectIntroCentre'>[2024]</h3>
        <h3 className='projectIntroRight'>[Final Year Project]</h3>
        </div>
    </div>
</div>

<div className='projectDescription'>
    <div className='firstText'>
        <ul className='skillList'>
            <h3>[Software]</h3>
            <li>Photoshop</li>
            <li>Figma</li> 
            <li>Illustrator</li>
            <li>Procreate</li>
            <li>Snapchat Lens</li> 
            <h3>[Skills]</h3>
            <li>AR/VR</li>
            <li></li>
        </ul>

    <p>For my Final Year Project, I independently designed an application aimed towards local citizens and tourists, allowing them to explore and interact with the street art of Cork independently and learn the stories behind the art and the artists. Growing up, I have always admired the street art of Cork and I wanted to have an engaging and interesting way to interact and to give back to the talented artists that give us these powerful works of art, beautifying our city. I wanted to create a product that allowed the user to easily access this information in an interactive and engaging way while also being able to open up a discussion about the art with the rest of the community.</p>
    </div>
    
    <div className='imagesTrio'>
    <img src={UNPortfolio} alt="UNPortfolio" className='UNPortfolio'></img>
    <img src={UNPoster} alt="UNPoster" className='UNPoster'></img>
    <img src={UNDisplay} alt="UNDisplay" className='UNDisplay'></img>
    </div>
    
<h1 className='slogan'>"Explore, Engage, Create"</h1>
    <div className='furtherText'>
        
        <p>Urban Notes is a community-based application where the user benefits from the immersive design of interacting with the artworks, gaining a knowledge into the cultural significance and stories of the art and the artists gain exposure from the art, through the AR stories showing their name and links to appropriate websites such as portfolios or web shops.</p>
        <p>The aim behind this project is to bridge the disconnect we have with art that is telling our stories. Urban Notes aims to open up an engagement between the public realm and the community.</p>
        <p>Urban Notes is based in Cork City, but this application has the capabilities to be expanded beyond Cork City and be used in cities all across Ireland and even Europe. Urban Notes is a tool for exploration and engagement which is a function that can be expanded on to include more domains.
        </p>
    </div>
    
</div>

    <div className='techText'>
        <h3 className="projectFurtherTitle">[TECHNOLOGY]</h3>
        <p>Urban Notes works off of AR technology to function the personalised notes, by using Lens Studio, an AR filter was built to mimic how a mural artist would spray paint the wall and from here developed the idea that the user would use their hand to draw their chosen note and this would then be put on the art piece.<br /><br />I wanted to add this functionality as AR is a growing technology and through testing other apps utilising AR I wanted to implement this into the application to maximise engagement and interest. The AR can be seen through the premade AR stories, bringing the art to life telling its story and its message. This function is useful to provide context and history behind the piece to both the local citizens and visitors to the city. Then the virtual notes using Lens Studio and Unity adds a level of interactivity and immersion, inviting users to leave their own interpretation and message on the art in a non damaging way as it's completely digital.</p>
    </div>

<div className="parallax"></div>

<div className='prizeText'>
        <h3 className="projectFurtherTitle">[Prize For Innovation]</h3>
        <p>Urban Notes was honoured to be shortlisted for the MTU Prize for Innovation in 2024. The experience was incredibly rewarding, as it provided the opportunity to pitch the project to potential investors and connect with fellow young entrepreneurs, gaining insights into their inspiring ideas.
It was pitched to possible investors and the prize judges in which valuable advice and insights were gained into how the project can be made more valuable to customers. With the support from customers such as Fáilte Ireland and the Arts Council, it can be used as a tool for general cultural exploration and engagement, for example it can be used for music or tourist attractions..</p>
     
    </div>

<div className="scroll-container">
  <img src={UNPhones2} alt="UNPhones2" width="600" height="400"></img>
  <img src={UNHand} alt="UNHand"></img>
  <img src={UNPhone3} alt="UNPhone3"></img>
  <img src={UNDrawing} alt="UNDrawing"></img>
  <img src={UNPhone1} alt="UNPhone1"></img>
  <img src={UNStatue} alt="UNStatue"></img>
  <img src={UNLogo} alt="UNLogo"></img>
</div>

    <div className="project-nav">
        <Link to="/Videography">
        <div className="nav-item left">
            <span className="nav-label">← Previous project</span>
            <img src={VideographyHero} alt="Previous Project" className="nav-image" />
        </div>
        </Link>

        <Link to="/Projecttwo">
        <div className="nav-item right">
            <span className="nav-label">Next project →</span>
            <img src={placeholder2} alt="Next Project" className="nav-image" />
        </div>
        </Link>
    </div>


</section>
);
}

export default Projectone;

