import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'; 
import mediaLogo from'./assets/IMG_0557.png';
import './App.css';
import ScrollToTop from "./Components/ScrollTop";
import { useState } from "react";
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import ImmersiveDesign from './Pages/ImmersiveDesign';
import InteractionDesign from './Pages/InteractionDesign';
import Photography from './Pages/Photography';
import Contentcreation from './Pages/Contentcreation';
import AnSiopa from './Pages/Ansiopa';
import GraphicDesign from './Pages/GraphicDesign';
import UrbanNotes from './Pages/UrbanNotes';

function App() {
  return(
  
  
 
  <div className="index">

    <Navbar />

    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/UrbanNotes" element={<UrbanNotes />} />
      <Route path="/ImmersiveDesign" element={<ImmersiveDesign />} />
      <Route path="/InteractionDesign" element={<InteractionDesign />} />
      <Route path="/Photography" element={<Photography />} />
      <Route path="/Contentcreation" element={<Contentcreation />} />
      <Route path="/AnSiopa" element={<AnSiopa />} />
      <Route path="/GraphicDesign" element={<GraphicDesign />} />
    </Routes>
    
    <Footer />

  </div>

  );
}

export default App;
