import { useState } from 'react';
import './CSS/archive.css';

// Import your archive / experiment images directly
import archiveImg1 from '/Images/Videography/VideographyHero.jpg';
import archiveImg2 from '/Images/Videography/VideographyHero.jpg';
import vrproject1 from '/Images/Archive/vrproject1.jpg';
import vrproject2 from '/Images/Archive/vrproject2.jpg';

interface ArchiveItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  coverImage?: string;
  coverVideo?: string; // Optional cover video
  gallery: { type: 'image' | 'video'; src: string }[];
  top: string;
  left: string;
  width: string;
  rotation: string;
  zIndex: number;
}

const archiveProjects: ArchiveItem[] = [
  {
    id: "arch-1",
    title: "Tactile Sound Experiment",
    year: "2025",
    category: "Physical Computing",
    description: "An exploratory physical interface translating touch into generative soundscapes using capacitive sensors.",
    tags: ["TouchDesigner", "Arduino", "Sound Design"],
    coverVideo: `${import.meta.env.BASE_URL}videos/bg1.mp4`, // Video used on the table card
    gallery: [
      { type: 'video', src: `${import.meta.env.BASE_URL}videos/bg1.mp4` },
      { type: 'image', src: archiveImg1 }
    ],
    top: "5%",
    left: "4%",
    width: "320px",
    rotation: "-3deg",
    zIndex: 2
  },
  {
    id: "arch-2",
    title: "DAWN Identity & Ephemera",
    year: "2026",
    category: "Graphic Design",
    description: "Visual identity and printed catalogue ephemera designed for the UL MSc Showcase.",
    tags: ["Editorial", "Identity", "Print"],
    coverImage: archiveImg2,
    gallery: [
      { type: 'image', src: archiveImg2 }
    ],
    top: "12%",
    left: "42%",
    width: "380px",
    rotation: "2deg",
    zIndex: 4
  },
    {
    id: "arch-3",
    title: "VR World Development",
    year: "2024",
    category: "Virtual Reality",
    description: "Virtual reality environment inspired by the Grand Budapest Hotel",
    tags: ["Blender", "Unreal Engine"],
    coverImage: vrproject1,
    gallery: [
      { type: 'image', src: vrproject2 },
      {type: 'video', src: `${import.meta.env.BASE_URL}videos/vrproject.mp4` }
    ],
    top: "50%",
    left: "12%",
    width: "380px",
    rotation: "2deg",
    zIndex: 4
  },
  {
    id: "arch-4",
    title: "Motion Graphic",
    year: "2021",
    category: "Motion Graphics",
    description: "An exploratory physical interface translating touch into generative soundscapes using capacitive sensors.",
    tags: ["TouchDesigner", "Arduino", "Sound Design"],
    coverVideo: `${import.meta.env.BASE_URL}videos/ardu.mp4`, // Video used on the table card
    gallery: [
      { type: 'video', src: `${import.meta.env.BASE_URL}videos/ardu.mp4` }
    ],
    top: "60%",
    left: "40%",
    width: "320px",
    rotation: "9deg",
    zIndex: 2
  }
];

export default function Archive() {
  const [selectedProject, setSelectedProject] = useState<ArchiveItem | null>(null);

  return (
    <main className="archive-page">
      <header className="archive-header">
        <h1 className="archive-title">ARCHIVE</h1>
      </header>

      {/* Table Canvas Layout */}
      <section className="table-canvas">
        {archiveProjects.map((project) => (
          <div
            key={project.id}
            className="table-card"
            style={{
              top: project.top,
              left: project.left,
              width: project.width,
              transform: `rotate(${project.rotation})`,
              zIndex: project.zIndex
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="table-thumb">
              {/* Renders Video or Image for the Card Thumbnail */}
              {project.coverVideo ? (
                <video src={project.coverVideo} autoPlay loop muted playsInline />
              ) : (
                <img src={project.coverImage} alt={project.title} />
              )}
              <span className="table-category">[{project.category}]</span>
            </div>
            
            <div className="table-info">
              <h2>{project.title}</h2>
              <span className="table-year">{project.year}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Slide-out Drawer */}
      {selectedProject && (
        <div className="drawer-overlay" onClick={() => setSelectedProject(null)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <button className="drawer-close" onClick={() => setSelectedProject(null)}>
              ✕ CLOSE
            </button>

            <div className="drawer-header">
              <span className="drawer-cat">[{selectedProject.category}] • {selectedProject.year}</span>
              <h2>{selectedProject.title}</h2>
            </div>

            <p className="drawer-desc">{selectedProject.description}</p>

            <div className="drawer-tags">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className="archive-tag">[{tag}]</span>
              ))}
            </div>

            {/* Gallery Supporting Both Photos & Video Media */}
            <div className="drawer-gallery">
              {selectedProject.gallery.map((media, idx) => (
                <div key={idx} className="drawer-media-wrap">
                  {media.type === 'video' ? (
                    <video controls autoPlay loop muted playsInline src={media.src} />
                  ) : (
                    <img src={media.src} alt={`${selectedProject.title} detail ${idx + 1}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}