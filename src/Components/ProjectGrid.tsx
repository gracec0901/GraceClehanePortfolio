import { Link } from "react-router-dom";

type ProjectItem = {
  title: string;
  link: string;

  sticky: string;   // PNG sticky note
  pixel: string;    // bitmap/halftone image
  mode: "text-on-base" | "image-on-base";

  tilt?: string;
  shiftX?: string;
  shiftY?: string;
};

type ProjectGridProps = {
  items: ProjectItem[];
};

export default function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="projectGallery">
      {items.map((item, i) => (
        <Link
          to={item.link}
          key={i}
          className="projectImageClick"
          style={{
            // your old animation variables
            ["--tilt" as any]: item.tilt || "0deg",
            ["--shiftX" as any]: item.shiftX || "0px",
            ["--shiftY" as any]: item.shiftY || "0px"
          }}
        >
          {/* Sticky note base */}
          <img src={item.sticky} className="projectImage" alt={item.title} />

          {/* Hover overlay */}
          {item.mode === "text-on-base" && (
            <img src={item.pixel} className="tilePixel" alt={item.title} />
          )}

          {item.mode === "image-on-base" && (
            <div className="overlayText">{item.title}</div>
          )}
        </Link>
      ))}
    </div>
  );
}
