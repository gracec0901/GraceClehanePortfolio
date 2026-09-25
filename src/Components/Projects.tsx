import { Link } from 'react-router-dom';
import '../Pages/CSS/Project.css';

export default function ProjectTemplate({ 
  title, 
  subtitle, 
  metaInfo, 
  introduction, 
  sections, 
  nextProjectLink, 
  nextProjectImage 
}) {
  return (
    <article className="zine-project">
      
      {/* Project Header */}
      <header className="zine-header">
        <div className="zine-meta-box">
          {metaInfo.map((item, index) => (
            <span key={index} className="meta-tag">{item}</span>
          ))}
        </div>
        <h5 className="zine-sub-heading">{subtitle}</h5>
        <h1 className="zine-title">{title}</h1>
      </header>

      {/* Introduction / Overview with Post-it Vibe */}
      <section className="zine-intro-section">
        <div className="zine-intro-text">
          <p>{introduction}</p>
        </div>
      </section>

      {/* Dynamic Content Sections (Process, Outcome, Technology, etc.) */}
      {sections.map((sec, index) => (
        <section className="zine-content-section" key={index}>
          <div className="section-header-block">
            <h3>{sec.heading}</h3>
            <p className="section-text">{sec.text}</p>
          </div>

          {/* Associated Media/Images Grid */}
          {sec.media && sec.media.length > 0 && (
            <div className={`zine-media-grid layout-${sec.mediaLayout || 'grid'}`}>
              {sec.media.map((item, mIndex) => (
                <div className="zine-media-item" key={mIndex}>
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted playsInline />
                  ) : (
                    <img src={item.src} alt={`${sec.heading} visual ${mIndex + 1}`} />
                  )}
                  {item.caption && <span className="bitmap-caption">{item.caption}</span>}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Bottom Navigation to Next Project */}
      <footer className="zine-footer-nav">
        <Link to={nextProjectLink} className="next-project-link">
          <span>NEXT PROJECT</span>
          <div className="next-preview-row">
            <h3>→</h3>
            {nextProjectImage && <img src={nextProjectImage} alt="Next project preview" />}
          </div>
        </Link>
      </footer>

    </article>
  );
}