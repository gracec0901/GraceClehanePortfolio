import { useState } from "react";

type StickyStackProps = {
  images: string[];
};

export default function StickyStack({ images }: StickyStackProps) {
  const [stack, setStack] = useState<string[]>(images);
  const [isFlipping, setIsFlipping] = useState(false);

  const randomAngle = () => {
    const angle = Math.floor(Math.random() * 10) - 5; // -5deg to +5deg
    const x = Math.floor(Math.random() * 10) - 5;     // -5px to +5px
    const y = Math.floor(Math.random() * 10) - 5;
    return `rotate(${angle}deg) translate(${x}px, ${y}px)`;
  };

  const cycleStack = () => {
    setIsFlipping(true);

    setTimeout(() => {
      setStack(prev => {
        const newStack = [...prev.slice(1), prev[0]];
        return newStack;
      });
      setIsFlipping(false);
    }, 400);
  };

  return (
    <div className="stickyStack" onPointerUp={cycleStack}>
      {stack.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`stickyNote ${i === 0 && isFlipping ? "flip" : ""}`}
          style={{
            zIndex: stack.length - i,
            transform: randomAngle()
          }}
          alt="sticky"
        />
      ))}
    </div>
  );
}
