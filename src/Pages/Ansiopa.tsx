import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';


import siopa1 from '/Images/AnSIopa/siopaposter.jpg';
import tech1 from '/Images/AnSiopa/tech1.jpg';
import tech2 from '/Images/AnSiopa/tech2.jpg';
import tech3 from '/Images/AnSiopa/tech3.png';
//import tech4 from '/Images/AnSiopa/tech4.png';
import final1 from '/Images/AnSiopa/final1.png';
import gallery1 from '/Images/AnSiopa/gallery1.jpg';
import gallery2 from '/Images/AnSiopa/gallery2.jpg';
import gallery3 from '/Images/AnSiopa/gallery3.jpg';
import gallery4 from '/Images/AnSiopa/gallery4.png';
import gallery5 from '/Images/AnSiopa/gallery5.png';
import gallery6 from '/Images/AnSiopa/gallery6.png';
import gallery7 from '/Images/AnSiopa/2.png';
import gallery8 from '/Images/AnSiopa/3.png';
import siopame from '/Images/AnSiopa/siopame.jpeg';
import pres6 from '/Images/AnSiopa/6.png';
import pres7 from '/Images/AnSiopa/7.png';
import pres8 from '/Images/AnSiopa/8.png';
import ui1 from '/Images/AnSiopa/ui1.png';
import ui2 from '/Images/AnSiopa/ui2.png';
import ui3 from '/Images/AnSiopa/ui3.png';
import ui4 from '/Images/AnSiopa/ui4.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import gdhover from '/Images/Homepage/gdhover.png';


export default function AnSiopa() {
  return (
    <ProjectTemplate
      introTitle="An Siopa"
      introText="'An Siopa' - A Civic Interactive Artefact for Reappropriating Abandoned Irish Corner Shops"
      year={["2026"]}
      scope={["Human Computer Interaction", "UX/UI","User-Testing Methods", "Physical Computing", "Laser Cutting", "3D Printing", "Graphic Design"]}
      discipline={["Masters Thesis Project"]}
      sections={[
        {
          title: "Overview",
          text: (<>
  Across Ireland, independent corner shops are disappearing, leaving behind vacant spaces and eroding important community gathering places. <em>An Siopa</em> (Irish for <em>The Shop</em>) was developed as the final project of my MSc in Interaction & Experience Design, exploring how technology can encourage communities to reimagine these spaces and participate in conversations about their future.

  <br /><br />

  At the centre of the experience is a handmade interactive cash register that reinterprets the familiar rituals of a local shop. Rather than purchasing products, participants reflect on vacant spaces, share ideas, and receive personalised receipts capturing their thoughts and future visions for these places.

  <br /><br />

  Drawing on research into tactical urbanism, city hacking, and civic participation, the final artefact combines physical fabrication, electronics, and software development, including laser-cut components, 3D-printed elements, NFC interactions, and a repurposed 20-year-old warehouse label printer used as a thermal receipt printer.
</>
),
          media: [
            
            { type: "image", src: gallery1 },
            { type: "image", src: gallery2 },
            { type: "image", src: gallery3 },
            { type: "image", src: gallery6 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/siopathesis.mp4` }
          ]
        },
        {
          title: "Outcome",
          text: (<>The final outcome is a handmade interactive cash register, where its function was reappropriated from an interface of economic exchange to an interface provoking individual and communal reflection of public space transformation possibilities.
                <br/><br/>
                'An Siopa' is a civic interactive installation that transforms the familiar mechanics and interaction of a store cash register into a tool for community voice and civic agency. Instead of serving customers, this interface invites members of the public to anonymously share personal perspectives and future visions for these vacant spaces. By reusing a familiar symbol of commercial transactions and turning it into a civic tool, the project encourages people to reconsider how underused shop spaces can be reclaimed from the ground up.
                <br/><br/>
                Visitors answer guided prompts about vacancy, memory and what these spaces represented in community life. Personalised receipts are given to the user and invite them to keep one copy and to add the other to a growing public archive. By blending intuitive hardware and interactions with individualised storytelling, the installation bridges the gap between passive observation of vacant spaces and active participation with imagining their futures.</>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/AnSiopaView.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/AnSiopaJar.MOV` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/AnSiopaUse.mp4` },
            { type: "image", src: siopa1 },
            
          ]
        },
        {
          title: "Process",
          text: (<>
            The project evolved through a series of iterative research, prototyping, and evaluation cycles.

            <br /><br />

            Beginning with literature reviews, precedent studies, and exploratory research, I developed early concepts through sketching, user journeys, and speculative scenarios. These ideas were translated into low-fidelity physical prototypes which allowed interaction concepts to be tested and refined.

            <br /><br />

            Successive rounds of technical experimentation, user testing, and fabrication informed the final design. Through multiple iterations, the project developed into a fully realised artefact that combined physical computing, storytelling, and civic engagement.
            </>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process2.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process3.mp4` }
          ]
        },
        {
          title: "User Research & Testing",
          text: (<>
              To ensure An Siopa was grounded in lived experiences rather than assumptions, I conducted six rounds of semi-structured in-depth interviews exploring how citizens experience urban dereliction, spatial change, and civic participation.

              <br /><br />

              Interview participants represented a range of ages, locations, and levels of civic engagement. The research explored perceptions of vacant spaces, local decision-making, community identity, and everyday experiences of moving through Irish cities.

              <br /><br />

              Thematic analysis revealed six recurring themes: community and everyday urban life, governance and civic participation, emotional attachment to place, spatial conditions, reappropriation of space, and the impact of dereliction. These insights directly informed the design of An Siopa, highlighting the value of familiar, community-led interventions that encourage dialogue, reflection, and collective imagination.
              </>),
          media: [
            { type: "image", src: pres6 },
            { type: "image", src: pres7 },
            { type: "image", src: pres8 }
          ]
        },
        {
          title: "Technology",
          text: (<>
            The final system combined a digital display, NFC reader and tags, a thermal receipt printer, and custom-built software that connected these components into a cohesive interactive experience.

            <br /><br />

            Extensive prototyping and testing helped identify technologies that felt approachable, reliable, and intuitive for public audiences. Particular attention was paid to creating interactions that felt familiar and low-pressure, encouraging participation from people who may not typically engage with formal consultation processes.

            <br /><br />

            Inspired by ideas of tactical urbanism and city hacking, the project repurposes everyday technologies for a new civic purpose, transforming familiar retail systems into tools for conversation, reflection, and community participation.
            </>),
          media: [
            
            { type: "image", src: tech2 },
            { type: "image", src: tech3 },

            { type: "image", src: tech1 }
            
          ]
        },
        {
          title: "UX/UI",
          text: (<>
              Alongside the physical artefact, a significant amount of UX/UI design was undertaken to support the overall user journey.

              <br /><br />

              The experience was initially explored through sketching, storyboarding, bodystorming, and interactive Figma prototypes. Multiple iterations were developed and evaluated to refine the narrative structure, interaction flow, and emotional tone of the experience.

              <br /><br />

              Insights gathered from literature, interviews, and user testing informed the progression of the final interface. The completed experience was built using HTML and CSS, with Python managing the system logic and communication between the physical and digital components.
              </>),
          media: [
            { type: "image", src: ui1 },
            { type: "image", src: ui2 },
            { type: "image", src: ui3 },
            { type: "image", src: ui4 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/final2.mp4` }
          ]
        },
        {
          title: "Gallery",
          text: "Additional process documentation and outtakes from across the project.",
          media: [
            { type: "image", src: final1, caption: "Final User-journey" },
            { type: "image", src: gallery7, caption: "Motivations" },
            { type: "image", src: gallery8, caption: "Research Questions & Aims" },
            { type: "image", src: gallery4, caption: "Limitations & future" },
            { type: "image", src: gallery5, caption: "Final outcome" },
            { type: "image", src: siopame, caption: "Exhibiton" }
            
          ]
        }
      ]}

      prevProject={{ to: "/GraphicDesign", label: "Previous project", image: gdhover }}
      nextProject={{ to: "/InteractionDesign", label: "Next project", image: ixuxhover }}
    />
  );
}