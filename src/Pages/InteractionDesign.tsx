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
      introText="A collection of master's projects exploring physical computing, participatory research, and slow, tactile interactions."
      year={["2026"]}
      scope={["UX/UI Design", "Physical Computing", "Human-Computer Interaction", "Interactive Media", "User Testing"]}
      discipline={["MSc in Interaction & Experience Design at the University of Limerick"]}
      sections={[
        {
          title: "Threaded Maps",
          text: (
            <>
              Threaded Maps is a tactile, generative installation designed as a slow, intuitive experience to create a personalised unique map based off of tactile responses and colour. By replacing traditional interfaces with exposed physical wiring, the project invites participants to pause, reflect, and answer personal prompts through physical contact.
              <br/><br/>
              <strong>Process & Tech:</strong> Built using capacitive touch sensors wired to microcontrollers, touching the colour-coded wires dynamically shifts the room’s background atmosphere while drawing a unique digital 'thread' on screen in real-time (p5.js/Processing). Once complete, the participant's line gently fades into a persistent background visual, merging into a collective digital tapestry created by past visitors.
            </>
          ),
          media: [
            { type: "image", src: threadedmap2 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/threadedmap1.mp4` },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/threadedmap2.MP4` },
            { type: "video", src: "https://www.youtube.com/embed/lgF9-0jpxoI?si=S_2xABFpm6I2VeQa" }
          ]
        },
        {
          title: "Domestic Energy Monitor",
          text: (
            <>
              Developed to address household energy literacy, this project reinterprets domestic resource consumption through tactile hardware. Rather than relying on passive app dashboards, the interactive prototype translates invisible energy spikes into immediate physical feedback so the user learns about their home energy usage while making changes.
              <br/><br/>
              <strong>Process & Tech:</strong> The handheld device integrates an embedded multimeter circuit with custom haptic and tactile actuators. Designed through iterative ergonomic modeling and rapid prototyping, the physical shell sits naturally in domestic spaces while guiding users to identify high-consumption appliances through physical exploration and real-time visual feedback.
            </>
          ),
          media: [
            { type: "image", src: device1 },
            { type: "image", src: device },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/device3.mp4` },
            { type: "video", src: "https://www.youtube.com/embed/UtX2-t5Kt3U?si=OHRJos4yvm5EM3iq" }
          ]
        },
        {
          title: "Cniotáil",
          text: (
            <>
              Cniotáil (Irish for <em>Knitting</em>) is an interactive installation celebrating the rhythm, patience, and tactile qualities of traditional textile crafts. By translating the physical act of assembling knitted patterns into generative visuals, the project bridges heritage craft with digital media.
              <br/><br/>
              <strong>Process & Tech:</strong> Four modular wooden blocks were fabricated using laser cutting, fitted with hand-crocheted exterior covers, and wired with custom resistor networks. As participants position the tactile blocks together, an Arduino micro-controller reads the shifting voltage values and drives real-time, generative textile patterns rendered in TouchDesigner.
            </>
          ),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/knit1.MOV` },
            { type: "video", src: "https://www.youtube.com/embed/-zKygFpbFEo" },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/knit2.mp4` }
          ]
        },
        {
          title: "Ivee",
          text: (
            <>
              Created as part of a participatory design study on domestic reappropriation within rental housing, <em>Ivee</em> addresses the constraints faced by tenants who cannot modify their living spaces or risk losing security deposits.
              <br/><br/>
              <strong>Process & Tech:</strong> Grounded in research insights gathered from custom cultural probe kits, <em>Ivee</em> was developed as a non-destructive, modular interactive vine sculpture. Constructed from lightweight modular components, it attaches cleanly to walls—allowing tenants to hang personal artefacts, adjust ambient lighting, and physically expand the structure over time as their connection to the space grows.
            </>
          ),
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