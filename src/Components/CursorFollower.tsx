import React, { useEffect, useState } from 'react';
import '../Pages/CSS/CursorFollower.css';

interface CursorFollowerProps {
  text: string;
  isVisible: boolean;
}

export default function CursorFollower({ text, isVisible }: CursorFollowerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="cursor-follower"
      style={{
        transform: `translate3d(${position.x + 12}px, ${position.y + 12}px, 0)`,
      }}
    >
      <span className="follower-text">{text}</span>
    </div>
  );
}