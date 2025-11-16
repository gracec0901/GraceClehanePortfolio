import { useState } from "react";
import '../Pages/CSS/Photography.css';
import PassionImage from '/Images/Photography/PassionImage.jpg';
import Aesthetic from '/Images/Photography/Aesthetic.jpg';
import HeadshotEdited from '/Images/Photography/HeadshotEdited.jpg';

const images = [
  { 
    src: HeadshotEdited, 
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
      "Adobe Photoshop",
      "Adobe Lightroom",
      "When I started editing this picture, I only wanted to make small changes as I really think it turned out well, it has nice natural lighting, it's a clear image the quality is great so all I wanted to do was to fix a few small things. Any minor skin imperfections I used the cloning tool in Photoshop to adjust. Then  I decided to try using Lightroom which I don't have much experience in but decided it would be a great time to start learning how to use it , even though it’s quite similar to Photoshop. Although the aperature of f4.5 blurred the background a little, I adjusted the background in Lightroom to make it a little blurrier so the image is less busy and more focused on the headshot itself and this seems like standard practice with professional headshots. I adjusted the lighting too by using the light panel, working with exposure, highlights and shadows, whites and blacks with only minimal changes but together they really elevated the photo and makes it a lot bolder."
    ],
    depiction: `The aim I had for my headshot was to create an image that represents who I am professionally while still feeling authentic to my work and personality. I felt that taking a picture with a white background, although is very professional, didn't represent who I am and what I do. So, with a classmate, we scouted a location, the Foundation Building on the UL campus. This space had very nice natural lighting from the skylight. The original plan was to use the mosaic mural in the building but when reviewing the photos, I felt that there was then too much going on in the image so it would be better, in a professional context, to use a simpler and less loud backdrop. At the entrance to the concert hall, there was a small area with wooden panelling, and the light was hitting it at a really nice, natural angle so we tried taking photos here too. But I still adjusted the ISO to 4000 to make up for the lack of light in that corner. This ended up working really well as there was a really nice beam of light hitting the wood so there was no need to use any artificial lighting. I tried using flash as well but it didn't look as well because I'm a glasses wearer and it lit up the background in a very unnatural and obvious way, these issues could have been solved in Photoshop and Lightroom but I decided that the chosen picture was best.
      
    I chose to stand at a slight angle because it looks more welcoming and makes the image a bit more dynamic. Originally the image was wider, showing a lot more of the panelling but for the purpose of this assignment I cropped it to the standard headshot dimensions of a portrait image but there are other images, experimenting with positioning and wider compositions worked really well but not for this exact context. Having the focal length at 42mm was ideal as it didn't distort and created a flattering perspective, perfect for headshots.

    Overall, I think the final photo has a warm and inviting feel, using natural colours from my clothing, the background, and the lighting to create a professional yet approachable image.

    `
  },

  { 
    src: Aesthetic, 
    alt: "Aesthetic Image",
    technical: {
      camera: "iPhone 11",
      focalLength: "26mm",
      aperture: "f1.8",
      shutter: "1/122s",
      iso: "80",
      bullets: [

      ]
    },
    editing: [
      "Adobe Lightroom",
      "When it came to editing this image, I wanted to make only minimal changes just to enhance the natural tones. I adjusted the white and black tones. I liked the composition, but I wanted to adjust the lighting and colours to bring out the textures and colours surrounding the bridge to really bring out the contrast.",
      "I only slightly adjusted the exposure to bring out the details under the bridge, I really liked how you could see the green from the surrounding reflected off the metal, so I wanted to highlight this more. The ISO was at 80, whcih is quite low because the photo was taken in a well lit area, this resulted in a clearer image that I didn't need to fix much in editing.",
      "The tones were quite muted in the original image, this is partly due to the lighting because it was a dull cloudy day and I was working with a phone camera. I adjusted the white balance to bring out the colour of the plants around the bridge but not in an unnatural way.",
      "I added a little bit more clarity to bring out the details more, defining any small details in the bridge or the plants. Just adding more depth to the picture",
      "I experimented with trying to blur the background a bit more to make the bridge stand out more but this didn’t work with the image, so I didn't keep that edit in. Having the shutter speed at 1/122s helped too as it minimised camera shake and sharpened the image."

    ],
    depiction: `I live next to the River Shannon, and I really appreciate this opportunity being so close to a really beautiful walk. So, I took a walk along the river in hopes to find the castle (a goal of mine that I haven't succeeded in yet). This walk is really enjoyable for me because I always find something interesting on it. I love walking under the bridge because it's such a big structure that so many people use and somehow it just goes well with the landscape, it's not an eyesore. And when you walk underneath it you realise how big it really is and I wanted to capture this in an image.

      I experimented with different ways of framing the bridge and found that centring it was the best, it just seemed satisfying to me and visually pleasing, seeing it unravels backwards and the arms of the bridge reaching the sides of the image. And because I was working with an iPhone camera, I find that chanigng the focal length outside of 26mm lowers the quality of the image but the composition allowed me to use 26mm and it was framed perfectly. I liked the contrast in composition. On the top half of the image, its mostly populated by the bridge and the bottom is nature and I liked the duality and how they complimented each other. Especially with the colours, the bridge a big, dark, precise structure and the foliage surrounding it underneath, with colours peeking through although it's winter. 
 
    `
  },

  { 
    src: PassionImage, 
    alt: "Passion Image",
    technical: {
      camera: "iPhone 11",
      focalLength: "26mm",
      aperture: "f1.8",
      shutter: "1/60s",
      iso: "400",
      bullets: [
      ]
    },
    editing: [
      "Adobe Lightroom",
      "When it came to editing this image, I wanted to highlight the contrast between the pictures and the leaves but keeping the organic look and feel. I wanted to keep the lighting and depth in the original photo, so I mainly focused on clarity and colour editing touch ups.",
      "I found it hard at the start to edit this photo because I only wanted to change a couple of things but ended up making it too vibrant or too dark so I needed to make minor adjustments that together would just elevate the image. I used the light and dark settings to reveal the postcard textures more and in the leaves too because I love the amount of detail in the original image and wanted to highlight it a little more. Because this was taken in a forest so it was a darker setting, the ISO was at 400.",
      "The green in the leaves were already quite strong so, I used the white balance to keep the colours natural and not to overpower the image. Then I added a bit of vibrance to enhance the photos but also keeping the soft look of the environment.",
      "By using portrait mode to take the image, there was a blur in the background of the image, I really wanted to keep this in the edit, so I made sure to not disturb it much when editing. The aperature also helped with this because now in the image the focus is drawn more towards the images and the leaves are blurred a bit more due to the shallow depth of field."

    ],
    depiction: `In 2022, I took part in an Erasmus semester in Utrecht, studying Immersive Design and here I fell in love with the use of technology and art to convey and tell stories. These images represent my passion for creating immersive experiences and constantly exploring and experiencing new interactive installations. But they also represent a few small passions in life for me, like postcard collecting. They were postcards that visitors could collect all over the city of Eindhoven during 'STRP', an art and technology festival, and when they visited an installation they can take a postcard and ever since then they have stuck with me and reminded me of my passion in life. 

      I thought it would be nice to make a composition out in nature because I'm lucky enough to now be living by the River Shannon, so for me this picture represents how far my interest has brought me that I'm able to do a master’s in it now.

      I tried a couple of different angles for this photo, but I decided that this was the best. Just like the aesthetic phot the focal length was 26mm but it worked well with the way the camera is positioned, I tried several angles and this final one created a macro effect but while also including a lot of the surrounding scene. The shutter speed was really low as well at 1/60s, so I needed to hold the camera really still, so there are areas with blurring but I think it adds to the overall effect of the image.I liked the depth of field seen in it, created by using the portrait mode on my iPhone. I like the colours as well, it marries well with the other two photos in this collection, the theme of nature and grounding. 
 
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

        <div className="section">
      <h2 className="section-title">Editing</h2>
      <ul className="bullet-list">
        <p>{active.editing.map((b, i) => <li key={i}>{b}</li>)}</p>
      </ul>
      </div>


        <div className="section">
      <h2 className="section-title">Thought Process</h2>
      <p className="depiction-text">
        {active.depiction}
      </p>
      </div>
    </div>
  );
}