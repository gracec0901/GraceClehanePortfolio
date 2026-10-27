import { useState } from 'react';
import '../Pages/CSS/StickyStackWithText.css';
import an1 from '/Images/Homepage/an1.png';
import an2 from '/Images/Homepage/an2.png';
import an3 from '/Images/Homepage/an3.png';
import an4 from '/Images/Homepage/an4.png';

const stackItems = [
  {
    image: an1,
    heading: "People First",
    body: "User research grounds my practice to ensure every experience remains centered around its audience. I design participatory research methods that yield meaningful insight while staying engaging for everyone involved."
  },
  {
    image: an2,
    heading: "Prototype & Explore",
    body: "I embrace Research through Design, learning by doing. Physical and digital prototyping allows me to unpack complex problems, test ideas quickly, and discover unexpected solutions in the physical world."
  },
  {
    image: an3,
    heading: "Iterate & Participate",
    body: "Design is a conversation. I invite communities to interact directly with prototypes, treating play and participation as core research tools to see how people naturally respond."
  },
  {
    image: an4,
    heading: "Polish & Deploy",
    body: "The final artefact brings together digital systems, clean interfaces, and physical installations to create memorable experiences that feel human and grounded."
  }
];

export default function StickyStackWithText() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const cycleStack = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % stackItems.length);
      setIsFlipping(false);
    }, 250);
  };

  const randomAngle = (index: number) => {
    const angles = [-3, 4, -2, 5];
    const xOffsets = [-2, 3, -4, 2];
    const yOffsets = [1, -2, 3, -1];
    const i = index % angles.length;
    return `rotate(${angles[i]}deg) translate(${xOffsets[i]}px, ${yOffsets[i]}px)`;
  };

  const currentData = stackItems[activeIndex];

  const orderedItems = [
    ...stackItems.slice(activeIndex),
    ...stackItems.slice(0, activeIndex)
  ];

  return (
    <div className="zine-method-wrapper">
      
      {/* LEFT: Interactive Sticky Stack */}
      <div className="zine-stack-container" onPointerUp={cycleStack}>
        <div className="zine-stack-canvas">
          {orderedItems.map((item, i) => (
            <img
              key={item.heading}
              src={item.image}
              className={`zine-card-item ${i === 0 && isFlipping ? "zine-card-flip" : ""}`}
              style={{
                zIndex: orderedItems.length - i,
                transform: randomAngle(i)
              }}
              alt="method note"
            />
          ))}
        </div>
        <span className="zine-stack-hint">[ TAP STACK TO CYCLE ]</span>
      </div>

      {/* RIGHT: Dynamic Companion Text */}
      <div className="zine-content-box">
        <h4>{currentData.heading}</h4>
        <p>{currentData.body}</p>
      </div>

    </div>
  );
}