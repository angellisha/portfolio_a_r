import React from 'react';
import '../Assets/Styles/DesignsArt.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import CherryBlossom from '../Assets/Images/Cherry_Blossom.png';

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <Header />
      <div className="project-intro">
        <p>
            Welcome to my project gallery! This is a collection of personal and collaborative works I've built to explore design, code, and creativity. Each project highlights different skills, tools, and concepts I've been learning along the way — from animations to functional UI, from clean layouts to full-stack features. I'm constantly growing, and this space evolves with me!
        </p>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
