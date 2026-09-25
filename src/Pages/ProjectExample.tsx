import ProjectRow from '../Components/Projects';

// Import your project preview images
import map1 from '/Images/ThreadedMaps/gallery1.jpg';
import map2 from '/Images/ThreadedMaps/gallery2.jpg';
import map3 from '/Images/ThreadedMaps/gallery3.jpg';

export default function WorkPage() {
  return (
    <main className="work-page-container" style={{ padding: '4rem 0' }}>
      
      {/* Introduction text */}
      <div style={{ maxWidth: '1300px', margin: '0 auto 4rem auto', padding: '0 2rem' }}>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          In 2025, I began my Masters at the University of Limerick.<br />
          Below are a selection of projects completed within the course:
        </p>
      </div>

      {/* Project 1: Threaded Maps */}
      <ProjectRow 
        category="Masters Project / Tangible Interaction"
        year="2025"
        title="Threaded Maps"
        description="A project created using capacitive sensors to create a personalised, artistic experience for the participant. Threaded Maps aimed to create a slow and thoughtful experience for the user by asking them questions and allowing them to answer personally through touching colour-coded wires to change the visuals."
        link="/threaded-maps"
        images={[map1, map2, map3]}
      />

      {/* Project 2: An Siopa (You can reuse the exact same component!) */}
      {/* 
      <ProjectRow 
        category="Civic Interactive Artefact"
        year="2025"
        title="An Siopa"
        description="A civic interactive installation that transforms the familiar mechanics of a store cash register into a tool for community voice and civic agency, addressing derelict Irish corner shops."
        link="/ansiopa"
        images={[siopaImg1, siopaImg2, siopaImg3]}
      /> 
      */}

    </main>
  );
}