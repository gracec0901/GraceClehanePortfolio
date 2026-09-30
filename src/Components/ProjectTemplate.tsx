import { useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";

interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

interface SectionBlock {
  title: string;
  text: ReactNode;
  media: MediaItem[];
}

interface ProjectNavLink {
  to: string;
  label?: string;
  image?: string;
}

interface ProjectTemplateProps {
  introTitle: string;
  introText: ReactNode;
  year?: string[];
  scope?: string[];
  discipline?: string[];
  sections: SectionBlock[];
  prevProject?: ProjectNavLink;
  nextProject?: ProjectNavLink;
}

export default function ProjectTemplate({
  introTitle,
  introText,
  year = [],
  scope = [],
  discipline = [],
  sections,
  prevProject,
  nextProject
}: ProjectTemplateProps) {

  /* MODAL STATE */
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalType, setModalType] = useState<"image" | "video" | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  /* SCROLL-LINKED SECTION */
  const [activeSection, setActiveSection] = useState(0);

  // Stable per-image random scatter offsets, computed once per `sections`
  // reference instead of inline in JSX. Previously Math.random() ran on
  // every render, so every scroll-triggered state update reshuffled the
  // rotation/offset of every image (visible jitter).
  const scatterStyles = useMemo(
    () =>
      sections.map((sec) =>
        sec.media.map(() => ({
          rot: `${Math.random() * 4 - 2}deg`,
          x: `${Math.random() * 20 - 10}px`,
          y: `${Math.random() * 20 - 10}px`,
          scale: `${1 + Math.random() * 0.15}`
        }))
      ),
    [sections]
  );

  /* TRACK WHICH SECTION IS "ACTIVE" AS THE PAGE SCROLLS */
  // Uses IntersectionObserver instead of a manual scroll handler:
  // the old version listened for a "scroll" event on .right-column,
  // but .right-column has overflow: visible (it doesn't scroll itself —
  // the page/window does), so that listener never fired.
  useEffect(() => {
    const groups = Array.from(
      document.querySelectorAll<HTMLElement>(".media-group")
    );
    if (groups.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSection(index);
          }
        });
      },
      {
        // Treat the vertical center band of the viewport as the "active" zone.
        // A section becomes active once its media group crosses that band.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0
      }
    );

    groups.forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, [sections]);

  /* FLATTEN MEDIA FOR MODAL NAVIGATION */
  const allMedia = sections.flatMap((sec) => sec.media);
  const currentIndex = allMedia.findIndex((m) => m.src === modalSrc);

  const goToPrevImage = () => {
    const prev = (currentIndex - 1 + allMedia.length) % allMedia.length;
    setModalSrc(allMedia[prev].src);
    setModalType(allMedia[prev].type);
    setZoomLevel(1);
  };

  const goToNextImage = () => {
    const next = (currentIndex + 1) % allMedia.length;
    setModalSrc(allMedia[next].src);
    setModalType(allMedia[next].type);
    setZoomLevel(1);
  };

  return (
    <div className="project-layout">
      <ScrollArrow />

      {/* INTRO BLOCK */}
      <header className="intro-block">
        <div className="intro-top">

          <div className="intro-left">
            <h1 className="intro-title">{introTitle}</h1>
            <p className="intro-text">{introText}</p>
          </div>

          <div className="intro-right">
            {year.length > 0 && (
              <div className="meta-group">
                <h4>Year</h4>
                <ul>{year.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            )}

            {scope.length > 0 && (
              <div className="meta-group">
                <h4>Scope</h4>
                <ul>{scope.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            )}

            {discipline.length > 0 && (
              <div className="meta-group">
                <h4>Discipline</h4>
                <ul>{discipline.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* TWO COLUMN LAYOUT */}
      <div className="columns">

        {/* LEFT — sticky text */}
        <aside className="left-column">
          {/* key={activeSection} forces React to remount this element whenever
              the active section changes, which retriggers the fade-in
              animation defined in the CSS below. */}
          <section className="text-section" key={activeSection}>
            <h2>{sections[activeSection].title}</h2>
            <div className="text-body">{sections[activeSection].text}</div>
          </section>
        </aside>

        {/* RIGHT — media groups, one per section, flowing with the page */}
        <div className="right-column">
          {sections.map((sec, i) => (
            <div key={i} className="media-group" data-index={i}>
              {/* Only visible on mobile (see CSS) — replaces the sticky
                  left-column text, which has no room on a narrow screen */}
              <div className="mobile-section-heading">
                <h2>{sec.title}</h2>
                <div className="text-body">{sec.text}</div>
              </div>
              {sec.media.map((item, j) => {
                const style = scatterStyles[i][j];
                return (
                  <div
                    className={`scatter-item ${item.src.includes("youtube.com") ? "youtube" : ""}`}
                    key={j}
                    onClick={() => {
                      setModalSrc(item.src);
                      setModalType(item.type);
                    }}
                  >
                    {item.type === "image" && (
                      <img src={item.src} alt={item.caption ?? ""} />
                    )}

                    {item.type === "video" && (
                      item.src.includes("youtube.com")
                        ? (
                            <iframe
                              src={item.src}
                              className="youtube-frame"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                            />
                          )
                        : (
                            <video
                              src={item.src}
                              muted
                              loop
                              playsInline
                              autoPlay
                            />
                          )
                    )}
                  </div>


                );
              })}
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {modalSrc && (
        <div
          className="modal-overlay"
          onClick={() => setModalSrc(null)}
          onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            const end = e.changedTouches[0].clientX;
            if (touchStart !== null) {
              if (touchStart - end > 50) goToNextImage();
              if (end - touchStart > 50) goToPrevImage();
            }
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal-media"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {modalType === "image" && (
                <img src={modalSrc} alt="" className="modal-img" />
              )}

              {modalType === "video" && (
                <video
                  src={modalSrc}
                  controls
                  autoPlay
                  className="modal-video"
                />
              )}
            </div>

            {allMedia[currentIndex]?.caption && (
              <p className="modal-caption">{allMedia[currentIndex].caption}</p>
            )}

            <div className="zoom-controls">
              <button onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 3))}>
                +
              </button>
              <button onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 1))}>
                –
              </button>
            </div>

            <button className="nav-button nav-prev" onClick={goToPrevImage}>
              ‹
            </button>

            <button className="nav-button nav-next" onClick={goToNextImage}>
              ›
            </button>

            <button className="modal-close" onClick={() => setModalSrc(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* PROJECT NAV — only rendered if at least one link is passed in */}
      {(prevProject || nextProject) && (
        <div className="project-nav">
          {prevProject && (
            <Link to={prevProject.to}>
              <div className="nav-item left">
                {prevProject.label && (
                  <span className="nav-label">← {prevProject.label}</span>
                )}
                {prevProject.image && (
                  <img
                    src={prevProject.image}
                    alt={prevProject.label ?? "Previous project"}
                    className="nav-image"
                  />
                )}
              </div>
            </Link>
          )}

          {nextProject && (
            <Link to={nextProject.to}>
              <div className="nav-item right">
                {nextProject.label && (
                  <span className="nav-label">{nextProject.label} →</span>
                )}
                {nextProject.image && (
                  <img
                    src={nextProject.image}
                    alt={nextProject.label ?? "Next project"}
                    className="nav-image"
                  />
                )}
              </div>
            </Link>
          )}
        </div>
      )}

    </div>
  );
}