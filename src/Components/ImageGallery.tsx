import { useState } from "react";
import '../Pages/CSS/Photography.css';
import Headshot from '/Images/Photography/Headshot.jpg';
import AestheticImage from '/Images/Photography/AestheticImage.png';

const images = [
  { 
    src: Headshot, 
    alt: "Headshot",
    technical: {
      camera: "Canon E0S 850D",
      focalLength: "42mm",
      aperture: "f4.5",
      shutter: "1/200s",
      iso: "4000",
      bullets: [
      ]
    },
    editing: [
      "Photoshop",
      "When I started editing this picture, I only wanted to make small changes as I really think it turned out well, it has nice natural lighting, it's a clear image the quality is great so all I wanted to do was to fix a few small things. Any skin imperfections I used the cloning tool in Ph"
    ],
    depiction: `
      The aim I had for my headshot was to represent who I am professionally. I felt that taking a picture with a white background, although is very professional, didn't represent who I am and what I do well. So with a classmate, we scouted a location, the Foundation Building on the UL campus. This space had very nice natural lighting from the huge skylight. The original plan was to use the mosaic mural in the building but when reviewing the photos, I felt that there was then too much going on in the image so it would be better, in a professional context to use a simpler and less loud backdrop. At the entrance to the concert hall, there was a small are with wooden panelling and the light was hitting it at a really nice, natural angle so we tried taking photos here too. This ended up working really well as there was a really nice beam of light hitting wood and then there was no need to use any artificial lighting. I tried using flash as well but it didn't look as well because I'm a glasses wearer and it lit up the background in a very unnatural and obvious way, these issues could have been solved in Photoshop and Lightroom but I decided that the chosen picture was best. 

      I think the photo has a warm and welcoming feeling with natural colours from my clothes, the background and lighting.
    `
  },

  { 
    src: AestheticImage, 
    alt: "Aesthetic Image",
    technical: {
      camera: "Canon R5",
      focalLength: "24mm",
      aperture: "f/4",
      shutter: "1/800s",
      iso: "100",
      bullets: [
        "Captured during a cloudy winter afternoon.",
        "Shot handheld using natural diffused light.",
        "Minimal editing to preserve natural tones."
      ]
    },
    editing: [
      "Sharpened snow texture gently.",
      "Color-balanced to reduce blue tint.",
      "Clarity added to maintain depth."
    ],
    depiction: `
      A peaceful winter landscape with soft reflective light...
    `
  },

  { 
    src: "/img_mountains.jpg", 
    alt: "Mountains",
    technical: {
      camera: "Nikon D850",
      focalLength: "35mm",
      aperture: "f/8",
      shutter: "1/250s",
      iso: "200",
      bullets: [
        "Shot during golden hour.",
        "Tripod used for stable framing.",
        "Wide dynamic range captured sky + foreground."
      ]
    },
    editing: [
      "Warm tones enhanced for sunset glow.",
      "Clarity increased for rock details.",
      "Sky masked for color balance."
    ],
    depiction: `
      A dramatic mountain scene captured during golden hour...
    `
  }
];

export default function ImageGallery() {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="contentsection">
      
      <div className="row">
        {images.map((img) => (
          <div className="column" key={img.src}>
        <div className="thumb-wrapper">
          <img src={img.src} alt={img.alt} onClick={() => setActive(img)} />
          <div className="thumb-overlay">{img.alt}</div>
        </div>
      </div>
        ))}
      </div>

      {/* Expanded Image */}
      <div className="container expanded">
        <img id="expandedImg" src={active.src} alt={active.alt} />
        <div id="imgtext">{active.alt}</div>
      </div>

      {/* Technical Specifications */}
      <h2 className="section-title">Settings</h2>

      <div className="spec-grid">
          
          <div className="spec-item">
            <div className="spec-label">Camera</div>
            <div className="spec-value">{active.technical.camera}</div>
          </div>
        
          <div className="spec-item">
            <div className="spec-label">ISO</div>
            <div className="spec-value">{active.technical.iso}</div>
          </div>
          
          <div className="spec-item">
            <div className="spec-label">Focal Length</div>
            <div className="spec-value">{active.technical.focalLength}</div>
          </div>
          
          
          <div className="spec-item">
            <div className="spec-label">Aperture</div>
            <div className="spec-value">{active.technical.aperture}</div>
          </div>

          <div className="spec-item">
            <div className="spec-label">Shutter Speed</div>
            <div className="spec-value">{active.technical.shutter}</div>
          </div>
   
      </div>

      <ul className="bullet-list">
        <p>{active.technical.bullets.map((b, i) => <li key={i}>{b}</li>)}</p>
      </ul>

      <h2 className="section-title">Editing</h2>

      <ul className="bullet-list">
        <p>{active.editing.map((b, i) => <li key={i}>{b}</li>)}</p>
      </ul>

      <h2 className="section-title">Thought Process</h2>
      <p className="depiction-text">
        {active.depiction}
      </p>
    </div>
  );
}