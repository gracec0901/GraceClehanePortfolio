import { useState, useRef } from "react";

type GalleryImage = {
  src: string;
  caption?: string;
};

type ParallaxTrackProps = {
  images: (string | GalleryImage)[];
  onSelect: (src: string, caption?: string) => void;
};

export default function ParallaxTrack({ images, onSelect }: ParallaxTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteImages = [...images, ...images, ...images];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const getTranslateValue = () => {
    if (!trackRef.current) return 0;
    const firstItem = trackRef.current.querySelector(".parallaxImg") as HTMLElement;
    if (!firstItem) return 0;
    
    const style = window.getComputedStyle(trackRef.current);
    const gap = parseInt(style.gap || "0", 10);
    const itemWidth = firstItem.offsetWidth + gap;
    
    return currentIndex * itemWidth;
  };

  return (
    <div className="carouselWrapper">
      <button className="carouselBtn prevBtn" onClick={handlePrev}>
        🡨
      </button>

      <div className="carouselViewport">
        <div
          className="parallaxTrack"
          ref={trackRef}
          style={{
            transform: `translateX(-${getTranslateValue()}px)`,
            transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {infiniteImages.map((item, i) => {
            const imgSrc = typeof item === "string" ? item : item.src;
            const imgCaption = typeof item === "string" ? undefined : item.caption;

            return (
              <img
                key={i}
                src={imgSrc}
                className="parallaxImg"
                draggable={false}
                onClick={() => onSelect(imgSrc, imgCaption)}
                alt={imgCaption || `Gallery item ${i}`}
              />
            );
          })}
        </div>
      </div>

      <button className="carouselBtn nextBtn" onClick={handleNext}>
       🡪
      </button>
    </div>
  );
}