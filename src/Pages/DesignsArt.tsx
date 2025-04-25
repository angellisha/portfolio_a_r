import React, { useRef, useState, useEffect } from 'react';
import '../Assets/Styles/DesignsArt.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Star from '../Assets/Images/star.png';
import FloatingIcon from '../Components/FloatingIcons';

// Images – Designs
import Banner from '../Assets/Images/designs/Banner.png';
import Checkout from '../Assets/Images/designs/Check_out.png';
import ShopingCart from '../Assets/Images/designs/Shoping_cart.png';
import FloraBanner from '../Assets/Images/designs/Flora_website_banner.png';
import Login from '../Assets/Images/designs/Login.png';
import Register from '../Assets/Images/designs/Register.png';
import OrderPage from '../Assets/Images/designs/Order_page.png';
import TodoList from '../Assets/Images/designs/todolist.png';
import Post from '../Assets/Images/designs/Post_coment_section_include.png';
import PostUp from '../Assets/Images/designs/Posts_phone_nav_up.png';
import PostDown from '../Assets/Images/designs/Posts_phone_nav_down.png';

// Images – Art
import CharacterHair from '../Assets/Images/art/Character_hair.jpg';
import Character from '../Assets/Images/art/character.jpg';
import CharacterDesign from '../Assets/Images/art/character_design.png';
import EveningCity from '../Assets/Images/art/evening_city.jpg';
import SnowyMountains from '../Assets/Images/art/snowy_mountains.jpg';
import MiniDetails from '../Assets/Images/art/mini_details_1page.png';
import ChibiMe from '../Assets/Images/art/chibi_me_pack.png';

const DesignsArt: React.FC = () => {
  const designImages = [Banner, Checkout, ShopingCart, FloraBanner, Login, Register, OrderPage, TodoList, Post, PostUp, PostDown];
  const artImages = [CharacterHair, Character, CharacterDesign, EveningCity, SnowyMountains, MiniDetails, ChibiMe];

  const designRefs = useRef<(HTMLImageElement | null)[]>([]);
  const artRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [designIndex, setDesignIndex] = useState(0);
  const [artIndex, setArtIndex] = useState(0);

  useEffect(() => {
    designRefs.current[designIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [designIndex]);

  useEffect(() => {
    artRefs.current[artIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [artIndex]);

  return (
    <div className="designs-art-page">
      <Header />
      <div className="designart-intro">
        <p>
            This is a collection of visual work — from UI designs I created during college to personal art pieces, both digital and on paper. Some were part of assignments, others were just fun experiments, but all of them helped me grow. Whether it's designing clean interfaces or sketching out characters, I love bringing ideas to life visually. It's a mix of creativity, curiosity, and a bit of chaos — and I'm excited to keep evolving from here!
        </p>
      </div>
      <div className="floating-icons">
        <FloatingIcon src={Star} className="floating-star-left" />
        <FloatingIcon src={Star} className="floating-star-right" />
      </div>
      
      <h2 className="carousel-heading">Designs</h2>

      <div className="carousel-container">
        <button className='carousel-btn' onClick={() => setDesignIndex((designIndex - 1 + designImages.length) % designImages.length)}>&lt;</button>
        <div className="carousel-track">
          {designImages.map((src, i) => (
            <img
              key={i}
              ref={(el) => {
                designRefs.current[i] = el;
              }}
              src={src}
              alt={`design-${i}`}
              className="carousel-image"
            />
          ))}
        </div>
        <button className='carousel-btn' onClick={() => setDesignIndex((designIndex + 1) % designImages.length)}>&gt;</button>
      </div>

      <h2 className="carousel-heading">Art</h2>

      <div className="carousel-container">
        <button className='carousel-btn' onClick={() => setArtIndex((artIndex - 1 + artImages.length) % artImages.length)}>&lt;</button>
        <div className="carousel-track">
          {artImages.map((src, i) => (
            <img
              key={i}
              ref={(el) => {
                artRefs.current[i] = el;
              }}
              src={src}
              alt={`art-${i}`}
              className="carousel-image"
            />
          ))}
        </div>
        <button className='carousel-btn' onClick={() => setArtIndex((artIndex + 1) % artImages.length)}>&gt;</button>
      </div>

      <Footer />
    </div>
  );
};

export default DesignsArt;