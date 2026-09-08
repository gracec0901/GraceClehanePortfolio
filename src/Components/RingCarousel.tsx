import { useRef } from "react";

type SimpleCarouselProps = {
  images: string[];
  onSelect: (src: string) => void;
};

export default function SimpleCarousel({ images, onSelect }: SimpleCarouselProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDown = true;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    startX = pageX;
    scrollLeft = stripRef.current!.scrollLeft;
  };

  const drag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDown) return;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = pageX - startX;
    stripRef.current!.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDown = false;
  };

  return (
    <div className="simpleCarousel">
      <div
        className="imageStrip"
        ref={stripRef}
        onMouseDown={startDrag}
        onMouseMove={drag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={drag}
        onTouchEnd={stopDrag}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`image-${i}`}
            className="carouselImg"
            onClick={() => onSelect(src)}
          />
        ))}
      </div>
    </div>
  );
}
