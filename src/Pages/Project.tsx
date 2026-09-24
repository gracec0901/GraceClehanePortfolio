import './CSS/Project.css';
import { Link } from 'react-router-dom';


function Project() {

    return (
    <section className="projects">
    <div className='container'>

        <div className="projectCont">
        <h6>An Siopa</h6>
        <p>A Civic Interactive Artefact for Reappropriating Abandoned Irish Corner Shops</p>
        <Link to="/Ansiopa" className="projectButtonOne">+</Link>
        </div>

        <div className="projectCont">
        <h6>Interaction & Experience Design</h6>
        <p>Collection of works from MSc Interaction of Design</p>
        <Link to="/InteractionDesign" className="projectButtonTwo">+</Link>
        </div>

        <div className="projectCont">
        <h6>Urban Notes</h6>
        <p>An application allowing the user to explore their cities’ art and culture through the use of augmented reality.Through AR technology, users can add and see virtual notes added to the murals.</p>
        <Link to="/UrbanNotes" className="projectButtonThree">+</Link>
        </div>

        <div className="projectCont">
        <h6>Immersive Design</h6>
        <p>A collection of work associated with my specialisation in Immersive Design.</p>
        <Link to="/ImmersiveDesign" className="projectButtonFour">+</Link>
        </div>

        <div className="projectCont">
        <h6>Graphic Design</h6>
        <p>A collection of professional graphic design work.</p>
        <Link to="/GraphicDesign" className="projectButtonSix">+</Link>
        </div>

        <div className="projectCont">
        <h6>Videography</h6>
        <p>A collection of content created for University commissioned content and module work.</p>
        <Link to="/ContentCreation" className="projectButtonFive">+</Link>
        </div>

        

        {/*<div className="projectCont">
        <h6>Video Production</h6>
        <p>A collection of video productions completed.</p>
        <Link to="/Videography" className="projectButtonFive">+</Link>
        </div>*/}

    </div>
    </section>



    );
}

export default Project;