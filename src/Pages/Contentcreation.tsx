
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';
import './CSS/ContentCreation.css';
import gdhover from '/Images/Homepage/gdhover.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';
import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";



function Videography() {

    return (
    <ProjectTemplate
      introTitle="Videography"
      introText="A collection of content and videos filmed and edited."
      year={["2023 - 2026"]}
      scope={["Editing", "Cinematography", "Storyboarding", "Directing"]}
      discipline={["Content Creation"]}
      sections={[
        {
          title: "MTU Anseo",
          text: (<>A collaborative project creating social media content for MTU Anseo. I worked alongside a peer to film and shape a series of short-form videos designed to highlight student life and campus activity.</>),
          media: [
            { type: "video", src: "https://www.youtube.com/embed/J8yvdcbllX0?si=FTWX1I5l35A3vqmL", orientation: "portrait"},
            { type: "video", src: "https://www.youtube.com/embed/8r8ca24nFZM", orientation: "portrait" },
            { type: "video", src: "https://www.youtube.com/embed/3WSWEyMppbk", orientation: "portrait" }
          ]
        },
        {
          title: "Coffee Advertisement",
          text: (<>A short commercial filmed at the University of Limerick promoting a new coffee offering. I worked as the editor, co‑director, and storyboard artist, shaping the visual tone and narrative flow of the final piece.</>),
          media: [
            { type: "video", src: "https://www.youtube.com/embed/hGXjlXMoMAo?si=mE2LlVF1HVZEcU0B", orientation: "landscape" }
          ]
        }
      ]}

      prevProject={{ to: "/AnSiopa", label: "Previous project", image: gdhover }}
      nextProject={{ to: "/UrbanNotes", label: "Next project", image: ansiopahover }}
    />
  );
}

export default Videography;

