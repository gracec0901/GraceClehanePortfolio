import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";

import unnotehover from '/Images/Homepage/unnotehover.png';
import gdhover from '/Images/Homepage/gdhover.png';
import ef1 from '/Images/ProjectTwo/ef1.jpeg';
import ef2 from '/Images/ProjectTwo/ef2.jpeg';
import ef3 from '/Images/ProjectTwo/ef3.png';
import characters from '/Images/ProjectTwo/characters.jpg';
import bp4 from '/Images/ProjectTwo/bp4.jpeg';

export default function ImmersiveDesign() {
  return (
    <ProjectTemplate
      introTitle="Immersive Design"
      introText="I was very lucky to be offered an Erasmus position, specialising in 'Immersive Design' at Hogeschool Utrecht. There I learned very valuable skills such as storytelling, creating engaging and interactive experiences and teamwork."
      year={["2022"]}
      scope={["Experiential Design", "Storytelling", "Projection Mapping", "AR Design", "Client Communication", "Art Direction"]}
      discipline={["Specialisation in Immersive Design at Hogeschool Utrecht"]}
      sections={[
        {
          title: "Beeld en Geluid",
          text: "We collaborated with the client, Beeld en Geluid, to design an immersive experience tailored for younger visitors at their newly renovated museum. Our team developed an engaging storyline where users assisted a group of characters in solving challenges throughout the museum, creating an interactive and educational experience.",
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/bg1.mp4` },
            { type: "image", src: bp4 },
            { type: "image", src: characters }
          ]
        },
        {
          title: "Elapsed Frequencies",
          text: "For the final project, we were tasked to build an immersive experience with peers who were interested in the same technology and subjects, so I teamed with three others to build 'Elapsed Frequencies', an immersive experience guiding the user through the development and growth of music.",
          media: [
            { type: "image", src: ef1 },
            { type: "image", src: ef3 },
            { type: "image", src: ef2 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/efvid.mp4` }
          ]
        }
      ]}
      prevProject={{ to: "/Ansiopa", label: "Previous project", image: unnotehover }}
      nextProject={{ to: "/GraphicDesign", label: "Next project", image: gdhover }}
    />
  );
}