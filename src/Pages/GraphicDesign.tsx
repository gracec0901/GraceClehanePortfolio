import { Link } from 'react-router-dom';
import './CSS/Home.css';
import '../App.css';
import './CSS/GraphicDesign.css';
import ScrollArrow from '../Components/ScrollArrow';
//import GalleryGrid from '../Components/GalleryGrid';
import { ImageModal } from '../Components/ImageModal';
import { useState } from "react";
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';
import vidhover from '/Images/Homepage/vidhover.png';


import gd1 from '/Images/GraphicDesign/gd1.jpeg';
import gd2 from '/Images/GraphicDesign/gd2.jpg';
import gd3 from '/Images/GraphicDesign/gd3.jpg';
import gd4 from '/Images/GraphicDesign/gd4.png';
import gd5 from '/Images/GraphicDesign/gd5.png';
import gd6 from '/Images/GraphicDesign/gd6.png';
import gd7 from '/Images/GraphicDesign/gd7.png';
import gd8 from '/Images/GraphicDesign/gd8.png';
import gd9 from '/Images/GraphicDesign/gd9.png';
import gd10 from '/Images/GraphicDesign/gd10.png';
import gd11 from '/Images/GraphicDesign/gd11.png';
import gd12 from '/Images/GraphicDesign/gd12.png';
import gd13 from '/Images/GraphicDesign/gd13.png';
import gd14 from '/Images/GraphicDesign/gd14.png';
import gd15 from '/Images/GraphicDesign/gd15.png';
import gd16 from '/Images/GraphicDesign/gd16.png';
import gd17 from '/Images/GraphicDesign/gd17.png';
import gd18 from '/Images/GraphicDesign/gd18.png';
import gd19 from '/Images/GraphicDesign/gd19.png';
import gd20 from '/Images/GraphicDesign/gd20.png';
import gd21 from '/Images/GraphicDesign/gd21.png';

import siopa1 from '/Images/Homepage/siopa1.jpg';


function GraphicDesign() {
const [selected, setSelected] = useState<string | null>(null);
    return (
        
        <section className="siopaMain">

        <ScrollArrow />
            <div className="ProjectIntroduction">
                <h5>Graphic Design</h5>
                <h3>A collection of graphic design work created. <br/><br/>Some are gathered from my time as an intern working alongside Adobe Express</h3>
            </div>





        
    <div className="gdrow"> 

      <div className="gdcolumn">
        <img src={gd1} onClick={() => setSelected(gd1)} />
        <video
          src={`${import.meta.env.BASE_URL}videos/iveevid.MP4`}
          autoPlay
          loop
          muted
          playsInline
          onClick={() => setSelected(`${import.meta.env.BASE_URL}videos/iveevid.MP4`)}
        />
        <img src={gd11} className="gdImg" onClick={() => setSelected(gd11)} />
        <img src={gd12} className="gdImg" onClick={() => setSelected(gd12)} />
        <img src={gd17} className="gdImg" onClick={() => setSelected(gd17)} />
      </div>

      <div className="gdcolumn">
        <img src={siopa1} className="gdImg" onClick={() => setSelected(siopa1)} />
        <img src={gd6} className="gdImg" onClick={() => setSelected(gd6)} />
        <img src={gd7} className="gdImg" onClick={() => setSelected(gd7)} />
        <img src={gd8} className="gdImg" onClick={() => setSelected(gd8)} />
        <img src={gd13} className="gdImg" onClick={() => setSelected(gd13)} />
        <img src={gd18} className="gdImg" onClick={() => setSelected(gd18)} />
        <img src={gd21} className="gdImg" onClick={() => setSelected(gd21)} />
      </div>

      <div className="gdcolumn">
        <img src={gd2} className="gdImg" onClick={() => setSelected(gd2)} />
        <img src={gd3} className="gdImg" onClick={() => setSelected(gd3)} />
        <img src={gd5} className="gdImg" onClick={() => setSelected(gd5)} />
        <img src={gd14} className="gdImg" onClick={() => setSelected(gd14)} />
        <img src={gd19} className="gdImg" onClick={() => setSelected(gd19)} />
        <img src={gd20} className="gdImg" onClick={() => setSelected(gd20)} />
      </div>

      <div className="gdcolumn">
        <video
          src={`${import.meta.env.BASE_URL}videos/gcvid.MOV`} className="gdImg" 
          autoPlay
          loop
          muted
          playsInline
          onClick={() => setSelected(`${import.meta.env.BASE_URL}videos/gcvid.MOV`)}
        />
        <img src={gd4} className="gdImg" onClick={() => setSelected(gd4)} />
        <img src={gd9} className="gdImg" onClick={() => setSelected(gd9)} />
        <img src={gd10} className="gdImg" onClick={() => setSelected(gd10)} />
        <img src={gd15} className="gdImg" onClick={() => setSelected(gd15)} />
        <img src={gd16} className="gdImg" onClick={() => setSelected(gd16)} />
      </div>

    </div>

    <ImageModal src={selected} onClose={() => setSelected(null)} />


            <div className="project-nav">
                <Link to="/ImmersiveDesign">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={ixdnotehover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Contentcreation">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={vidhover} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default GraphicDesign;
