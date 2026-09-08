import { useState } from "react";

type GalleryGridProps = {
  images: string[]; // array of image URLs or imported assets
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="galleryGrid">
        {images.map((img: string, i: number) => (
          <div
            key={i}
            className="galleryTile"
            onClick={() => setSelected(img)}
          >
            <img src={img} alt="" className="galleryImg" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="galleryModal" onClick={() => setSelected(null)}>
          <img src={selected} className="galleryModalImg" />
        </div>
      )}
    </>
  );
}
