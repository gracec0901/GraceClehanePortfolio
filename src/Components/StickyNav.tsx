import { useState } from "react";
import { Link } from "react-router-dom";
import '../Pages/CSS/StickyNav.css';


type ArcPos = { x: number; y: number; rotate: number };

export default function ArcMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "about", to: "/about" },
    { label: "work", to: "/work" },
    { label: "contact", to: "/contact" }
  ];

  const [arcPositions, setArcPositions] = useState<ArcPos[]>(
    links.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  const createArc = () => {
    const radius = 70; // small + safe
    const startAngle = 230; // down-left
    const endAngle = 300;   // slightly up-left
    const step = (endAngle - startAngle) / (links.length - 1);

    const positions = links.map((_, i) => {
      const angleDeg = startAngle + step * i;
      const angleRad = angleDeg * (Math.PI / 180);

      return {
        x: Math.cos(angleRad) * radius,
        y: Math.sin(angleRad) * radius,
        rotate: angleDeg - 270
      };
    });

    setArcPositions(positions);
  };

  const toggleMenu = () => {
    const newState = !open;
    setOpen(newState);
    if (newState) createArc();
  };

  return (
    <div className="arcNav">
      <div className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`arcMenu ${open ? "show" : ""}`}>
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="arcItem"
            style={{
              transform: `translate(${arcPositions[i].x}px, ${arcPositions[i].y}px) rotate(${arcPositions[i].rotate}deg)`
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
