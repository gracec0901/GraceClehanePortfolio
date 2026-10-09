import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';


import unnotehover from '/Images/Homepage/unnotehover.png';
import threadedmap2 from '/Images/IXUX/threadedmap2.jpeg';
import device from '/Images/IXUX/device.png';
import device1 from '/Images/IXUX/device1.png';
import ansiopahover from '/Images/Homepage/ansiopahover.png';

export default function InteractionDesign() {
  return (
    <ProjectTemplate
      introTitle="Interaction & Experience Design"
      introText="Collection of work from my masters."
      year={["2026"]}
      scope={["UX/UI Design", "Physical Computing", "Human COmputer Interaction", "Interactive Media", "User-Testing"]}
      discipline={["Masters of Science at the University of Limerick"]}
      sections={[
        {
          title: "Threaded Maps",
          text: (<>A project created using capacitative sensors to create a personalised, artistic experience for the participant. Threaded Maps aimed to create a slow and thoughtful experience for the user by asking them questions and allowing them to answer personally through touching colour coded wires to change the visuals. Both the background colour changes and they have their own digital 'thread' being created on the screen based off of their input. Once the experience finishes, their thread remains faded on screen and is added to the map of threads created by other participants.</>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/threadedmap1.mp4` },
            { type: "image", src: threadedmap2 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/threadedmap2.MP4` },
            { type: "video", src: "https://www.youtube.com/embed/lgF9-0jpxoI?si=S_2xABFpm6I2VeQa" }
          ]
        },
        {
          title: "Smart Device Prototype",
          text: (<>I was tasked to develop a prototype to solve the issue of energy usage within households. Through researching the issue and consumer needs and iterative prototyping and problem-solving the final prototype was developed.
                <br/><br/>
                A handheld interactive interface with a multimeter embedded to guide the user to where the most amount of energy is being used in their home. Through tactile and haptic interactions, the final outcome is user-friendly, accessible and engaging to interact with. A small, aesthetic item that can be placed within the home without looking out of place. And importantly, it teaches the user about their own personal energy usage through the act of looking for that spike and learning what they can do to lessen the amount of energy they use through doing and a visual experience.</>),
          media: [
            { type: "image", src: device1 },
            { type: "image", src: device },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/device3.mp4` },
            { type: "video", src: "https://www.youtube.com/embed/UtX2-t5Kt3U?si=OHRJos4yvm5EM3iq" }
          ]
        },
        {
          title: "Cniotáil",
          text: (<>Cniotáil was an interactive experience created to represent the slow and tactile interaction associated with knitting. FOur interactive boxes were made through laser cutting, soldering resistors and crocheted covers to create an immersive and tactile experience. When the blocks were place together slowly, a visual shows representing the patterns created through knitting.
                The visuals were created in TouchDesigner and Arduino handled the resistor values.</>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/knit1.MOV` },
            { type: "video", src: "https://www.youtube.com/embed/-zKygFpbFEo" },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/knit2.mp4` }
          ]
        },
        {
          title: "Ivee",
          text: (<>Ivee was developed as part of a short Participatory Design study entitled "Cultural Probes: Domestic Reappropriation under Rental Constraints" as part of the Applied Interaction Design module.
                <br/><br/>
                'Ivee' is a modular interactive sculpture that aims to represent and provide
                agency for the tenant. After analysing the probe kits and the answers given, key
                themes and common answers were seen to be similar through each of the participants kits.
                These included; inability to use wall space in fear of losing the security deposit, the sense of
                community with housemates and being able to add personal artefacts to the space. These key
                aspects drove the final design concept. The modular ivy sculpture, a living connection vine
                that changes with the space. This prototype is a, non-destructive sculpture that adds another
                layer to the walls to allow the tenant to add their own pictures, change the lighting and add
                their own personal artefacts. The modular tree also grows with you in the space as you add
                more memories, showing the transformation and personal growth of you and the space.</>),
          media: [
            { type: "video", src: "https://www.youtube.com/embed/xxRnV7VteBM?si=zjNdx6WJEJS9nkQW" }
          ]
        },
      ]}

      prevProject={{ to: "/AnSiopa", label: "Previous project", image: ansiopahover }}
      nextProject={{ to: "/UrbanNotes", label: "Next project", image: unnotehover }}
    />
  );
}