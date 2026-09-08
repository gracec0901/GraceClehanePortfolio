import { Link } from "react-router-dom";

type ProjectItem = {
  title: string;
  link: string;
  image: string;
  tilt?: string;
  shiftX?: string;
  shiftY?: string;
  hoverColor: string;
};

type ProjectGridProps = {
  items: ProjectItem[];
};

export default function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="projectGallery">
      {items.map((item, i) => (
        <div
          key={i}
          className="projectImageClick"
          style={
            {
              "--hoverColor": item.hoverColor,
              "--tilt": item.tilt,
              "--shiftX": item.shiftX,
              "--shiftY": item.shiftY
            } as React.CSSProperties
          }
        >
          <Link to={item.link}>
            <div className="imageOverlayContainer">
              <img src={item.image} alt={item.title} className="projectImage" />
              <div className="overlayText">{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
