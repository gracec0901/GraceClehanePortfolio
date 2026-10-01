import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';


import siopa1 from '/Images/AnSIopa/siopaposter.jpg';
import tech1 from '/Images/AnSiopa/tech1.jpg';
//import final1 from '/Images/AnSiopa/final1.png';
import gallery1 from '/Images/AnSiopa/gallery1.jpg';
import gallery2 from '/Images/AnSiopa/gallery2.jpg';
import gallery3 from '/Images/AnSiopa/gallery3.jpg';
import gallery4 from '/Images/AnSiopa/gallery4.png';
import gallery5 from '/Images/AnSiopa/gallery5.png';
import gallery6 from '/Images/AnSiopa/gallery6.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import gdhover from '/Images/Homepage/gdhover.png';


export default function AnSiopa() {
  return (
    <ProjectTemplate
      introTitle="An Siopa"
      introText="'An Siopa' - A Civic Interactive Artefact for Reappropriating Abandoned Irish Corner Shops"
      year={["2026"]}
      scope={["Human Computer Interaction", "User-Testing Methods", "Physical Computing", "Laser Cutting", "3D Printing", "Graphic Design"]}
      discipline={["Masters Thesis Project"]}
      sections={[
        {
          title: "Overview",
          text: (<>'An Siopa' was researched and developed as the final part of my Masters study. Over 6 months, I researched the issue of dereliction within Ireland, studied the guerilla techniques of tactical urbanism and "city-hacking" and the human need and right for creating and ownership within their own city. Specifically in this case, I looked into how we can reappropriate Irish independent corner shops into third places once again. <br /><br />
            My findings fueled the design of a handmade cash register and overall experience entitled 'An Siopa'. I took the familiar interaction and algorithm of a cash register, selecting an item, scanning it, paying and speaking to the shopkeeper and getting a receipt. But in this case, its function was reappropriated to serve as a civic cultural probe, provoking thought and agency around what we can do with our vacant and derelict corner shops. <br /><br />
            The project combined fabrication methods such as laser cutting, 3D printing, backend and frontend coding, technical debugging and implementation and my favourite part, using a 20 year old warehouse label printer to be reused as a thermal receipt printer.</>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/siopathesis.mp4` },
            { type: "image", src: gallery1 },
            { type: "image", src: gallery2 },
            { type: "image", src: gallery3 },
            { type: "image", src: gallery6 }
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
            { type: "video", src: `${import.meta.env.BASE_URL}videos/AnSiopaUse.mp4` },
            { type: "image", src: siopa1 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/AnSiopaView.mp4` }
          ]
        },
        {
          title: "Process",
          text: (<>To create and research this project, the Research through Design Methodology (RtD) was adopted as the overarching method for the design process, while user-centred design principles were used to ensure the final outcome was grounded in human experience, wants and needs.
                <br/><br/>
                Five iterative design phases were completed
                <ul><li>Preliminary research and brainstorming,</li><li>Low-fidelity prototyping (sketching, user personas, user flow explorations)</li><li>Mid-fidelity prototyping (Cardboard prototypes, technical exploration and implementation)</li><li>High-fidelity prototyping (Final cardboard prototype, user-testing & evaluation, final technical implementation.)</li><li>Final artefact (Laser cut frame, 3D printed caps, technology combined with the final physical frame.)</li></ul></>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process2.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/Process3.mp4` }
          ]
        },
        {
          title: "Technology",
          text: (<>There was a large amount of technical exploration and experimentation completed throughout this process as part of the iterative design process. It was important to find equipment that was accessible and intuitive to users and remained cohesive to ensure users felt safe and invited to interact.
                <br/><br/>
                The main components looked at were: the digital display, an NFC reader and tags, a thermal receipt printer and the software to connect all of these components. After months of exploring these different aspects and testing them to see if they were user-friendly and immersive, the final components were decided on. It was important to me to remain close to the literature studied as part of the thesis as it helped create a framework for me to work upon. City-hacking and tactical urbanism, were two approaches that really helped ground and develop this project. By using technology already publicly available for a different use and so that inspired me to use technology for a different use and in itself reappropriate not only the space but the interaction.</>),
          media: [
            { type: "image", src: tech1 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/final2.mp4` }
          ]
        },
        {
          title: "Gallery",
          text: "Additional process documentation and outtakes from across the project.",
          media: [
            { type: "image", src: gallery4, caption: "Limitations & future" },
            { type: "image", src: gallery5, caption: "Final outcome" }
          ]
        }
      ]}

      prevProject={{ to: "/GraphicDesign", label: "Previous project", image: gdhover }}
      nextProject={{ to: "/InteractionDesign", label: "Next project", image: ixuxhover }}
    />
  );
}