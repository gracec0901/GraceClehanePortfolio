import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder1 from'/Placeholders/project1placeholder.png';
import IMVideo from '/Images/Videography/Group5_InteractiveMedia_Assignment4.mp4'; 
import GroupImage from '/Images/Videography/GroupImage.jpg';
import DirectingImage from '/Images/Videography/DirectingImage.jpg';
import ShootingImage from '/Images/Videography/ShootingImage.jpg';
import BTS from '/Images/Videography/BTSImage.jpeg';
import Brainstorm from '/Images/Videography/Brainstorm.jpeg';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';


function Videography(){
    return(
        <section className="projecthero">

            <div className='titleParallax'>
                <div className='titleOverlay'>
                    <h1>Videography</h1>

                    <div className='projectIntro'>
                        <h3 className='projectIntroLeft'>[Interactive Media Module]</h3>
                        <h3 className='projectIntroCentre'>[2025]</h3>
                        <h3 className='projectIntroRight'>[Assignment 4]</h3>
                    </div>

                        <div className="Video">
                            <video className="video-play" src={IMVideo} controls >
                                Your browser does not support the video tag. </video>
                        </div>

                   <div className='projectDescription'>
                    <div className='firstText'>
                        <h2>Specifications</h2>
                        <ul>
                            <li>iPhone 16 Pro</li>
                            <li>iPhone 15 Pro Max</li>
                            <li>Premiere Pro</li>
                        </ul>
                    </div>

</div>

                     
                    <div className='videoText'>
                        <h2>Filming</h2>
                        <h3>21/11/25 & 25/11/25</h3>
                        <p>
                        We began by meeting as a team and brainstorming ideas. We wanted something simple but high-quality and since we’re all college students, we based the concept on everyday student life. After discussing possible ideas, we settled on coffee and developed a light, humorous idea. Although we originally considered multiple locations, we decided to film everything on campus, which Róisín had already planned for in her storyboards. We divided roles, scheduled filming days, and left time for reshoots and editing.
                        <br/><br/>    
                        Most footage was captured on the first day, with a few extra shots done by Róisín and me on the second day. Róisín walked us through her storyboard, and I added cinematography notes before we began shooting. The computer lab was our first location, and despite the poor lighting, we managed it by adjusting blinds and overhead lights. I focused mainly on composition and camera angles throughout the shoot. When filming Mughunthan entering the classroom, I took the lead and attempted a dolly-zoom style shot without a gimbal, which turned out surprisingly well. I had practiced it before with Róisín to figure out how it could be done and if it would fit in with the other footage.
                        <br/><br/>  
                      Filming the shot of him leaving the building took longer due to foot traffic and timing, but we captured a great moment when a stranger pointed out the toilet paper on his shoe, an unplanned detail that made the scene funnier. For the plaza scene, we spent time perfecting composition and pacing as three of us walked past him, reacting subtly to his pyjamas and toilet paper. 
                        <br/><br/>  
                        The opening shot was filmed behind the CSIS building to create a darker atmosphere. For the black and white to colour transition, Róisín and I tested ideas using TikTok drafts, and I refined the effect in the edit. We also used a trick shot where someone else held the cup so the actor could change outfits. 
                        <br/><br/>  
                        Overall, filming went smoothly, and planning made the process efficient. I really enjoyed experimenting with visuals and felt like an unofficial cinematographer.</p>

                        <img src={BTS} alt="BTSImage" className='VideoImage'></img>

                        <h2>Editing</h2>
                        <p>My main role was the editor. I had some experience from my Bachelors but this project let me continue to develop this skill.
                        Because we shot on iPhones, colour correction took longer than expected, and the footage often shifted to green, blue, or yellow when adjusted. To solve this, I used a combination of small adjustments in Lumetri and a HDR Conversion LUT, which helped even out saturation issues. I also adjusted the sequence settings around with the colour management working colour space to see if this helped solve the issue so I experimented around with everything. We kept the opening scenes in black and white using adjustment layers, and despite using three different phones, the clips matched well in the end.
                        <br/><br/>
                        I wanted to try out LUT's after being introduced to them in class, and found this really helped with the saturation issue. After researching with YouTube videos, forums and experimenting and learning how to use them I ended up using a "HDR Conversion LUT", this helped make the incoming clips look less striking and had a more aesthetic look. I now understand how LUTs can be used to solve colour issues. We decided to stick with a black and white look for the opening scenes where the actor walked around having a bad day. I wanted to keep the aesthetic and the quality of the footage, ending up with the following. I used adjustment layers to get this look. It was challenging to match all of the clips to look cohesive together since we used three different phones due to scheduling issues but I think with the editing they matched well.
                        <br/><br/>
                        Exporting was challenging too. To keep the file under 25 MB, I experimented with different export settings. I exported a high-quality version from Premiere, then used HandBrake to make a custom preset that reduced the size while keeping the quality acceptable. I uploaded the high quality file to YouTube just so the team could see what it was like uncompressed. <a href="https://youtu.be/hGXjlXMoMAo?si=7WMgsoiYwAAW1WaP" target="_blank" rel="noopener noreferrer">It can be accessed here.</a>
                        <br/><br/>
                        I really enjoyed this process, although it was fairly time consuming as I was learning new skills and I really wanted it to look well, I now know for next time how to shorten the time while maintaining quality work.
                        </p>
                        

                        
                        <div className="scroll-container">
                        <img src={DirectingImage} alt="DirectingImage" className='VideoImage'></img>
                        <img src={ShootingImage} alt="ShootingImage" className='VideoImage'></img>
                        <img src={Brainstorm} alt="Brainstorm" className='VideoImage'></img>
                        </div>
                      
                        <h2>Reflection</h2>
                        <p>Overall I think this project went well, from brainstorming, planning and filming to editing. Especially with the editing, it was a great learning curve learning how to work with iPhone footage from different phones and trying to make them match and to make the colours look well on screen. I enjoyed the filming and being able to experiment and work with different angles and compositions and putting into practice the theory we learnt. It was nice to figure out which area we each all thrived in and worked well together, for example we discovered that Sindhu was a really good camera operator so she filmed a lot of the footage. 
                        <br/><br/>
                        If I was to repeat this project, I’d try filming with proper cameras to practise manual settings, manage my editing time more efficiently, and shoot more varied footage to strengthen the storytelling. Next time, I would plan a more detailed shot list to reduce reshoots. I would also introduce a consistent camera format so colour grading would be easier, I realised halfway through filming that the camera settings on the two phones were different. I would try to manage my time better when editing, I think I became a bit too nit picky with especially the colour grading when I could have stuck with using LUT's but it gave me a lot more knowledge and experience with editing.
                        </p>

                        <img src={GroupImage} alt="GroupImage" className='VideoImage'></img>

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
