import './CSS/Project.css';
import { Link } from 'react-router-dom';


function Project() {

    return (
    <section className="projects">
    <div className='container'>
        <div className="projectCont">
        <h4>Urban Notes</h4>
        <p>An application allowing the user to explore their cities’ art and culture through the use of augmented reality. By using their mobile phone, users can add their own virtual note onto the piece of art and through premade AR stories, they can see the stories behind the art and artists come to life.</p>
        <Link to="/Projectone" className="projectButtonOne">+</Link>
        </div>

        <div className="projectCont">
        <h4>Immersive Design</h4>
        <p>I completed a Specialisation in Immersive Design at Hogeschool Utrecht in The Netherlands. This experience was immensely impactful, as it allowed me to apply the principles I learned to all my projects, enhancing their immersion, interactivity, and user engagement.</p>
        <Link to="/Projecttwo" className="projectButtonTwo">+</Link>
        </div>

        <div className="projectCont">
        <h4>Interaction & Experience Design</h4>
        <p>I am currently studying a Masters in Interaction and Experience Design at the University of Limerick</p>
        <Link to="/InteractionDesign" className="projectButtonThree">+</Link>
        </div>

        <div className="projectCont">
        <h4>Content Creation</h4>
        <p>Content created for social media platforms</p>
        <Link to="/ContentCreation" className="projectButtonSix">+</Link>
        </div>

        <div className="projectCont">
        <h4>Photography</h4>
        <p>A collection of photos.</p>
        <Link to="/Photography" className="projectButtonFour">+</Link>
        </div>

        <div className="projectCont">
        <h4>Video Production</h4>
        <p>A collection of video productions completed.</p>
        <Link to="/Videography" className="projectButtonFive">+</Link>
        </div>

    </div>
    </section>



    );
}

export default Project;