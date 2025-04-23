import React from 'react';
import "../Styles/Home.css";
import Header from '../Components/Header';

import { MdOutlineSchool, MdKeyboardDoubleArrowRight } from "react-icons/md";

import Banner from '../Assets/Images/Banner.png';
import AboutPhoto from '../Assets/Images/main_photo_polaroid_nobg.png';
import Line from '../Assets/Images/line.svg';

const Home = () => {
    return(
        <div className='h-main-container'>
            <img src={Banner} alt="Home" style={{ width: '100%', height: 'auto' }} />
            <Header />

            <div className='about-container'>
                <div className='about-section'>
                    <figure>
                        <img src={AboutPhoto} alt="About" className='about-image' />
                        <figcaption className='about-caption'>St. Johns, NL, Canada</figcaption>
                    </figure>
                    <p className='about-paragraph'>Hi, I'm Anhelina — a frontend developer, creative thinker, and artist at heart. <br /><br />
                    Originally from Ukraine, I'm currently wrapping up my Software Development diploma at Keyin College, Canada. My journey into tech began with curiosity and grew into a love for building digital experiences that are functional, visual, and a little playful. <br /><br />
                    I work mainly with React, Figma, HTML/CSS, and JavaScript. I enjoy styling interfaces as much as testing them — and yes, I'll absolutely redraw a button three times if it doesn't “feel” right. <br /><br />
                    Outside of coding, I have a deep love for digital art, K-pop, anime, and storytelling. I draw in Clip Studio Paint, dance when no one's watching (or sometimes when they are), and enjoy blending my cultural interests into how I think and create. <br /><br />
                    Whether it's a web page or a party, I love bringing things to life — especially when it brings people together. <br /><br />
                    </p>
                </div>
                <img src={Line} alt="Line" className='line-image' />
            </div>

            <div className='info-container'>
                <div className='section-left'>

                    {/* Education Container */}
                    <div className='education'>
                        <h2 className='ed-title'>EDUCATION</h2>
                        <div className='ed-box'>
                            <MdOutlineSchool className='ed-icon' />     
                            <p>
                                Vatutine school, Ukraine, Cherkasy region, Vatutine - (2010 - 2021).
                            </p>
                        </div>
                        <div className='ed-box'>
                            <MdOutlineSchool className='ed-icon' /> 
                            <p>
                                Cherkasy State Technological University in Software Development, Front-end course - (September 2021 - October 2022).
                            </p>
                        </div>
                        <div className='ed-box'>
                            <MdOutlineSchool className='ed-icon' /> 
                            <p>
                                Keyin College in Software Development - (January 2024 - Aprile 2025).
                            </p>
                        </div>
                    </div>

                    {/* Skills Container */}
                    <div className='skills'>
                        <h2 className='skills-title'>SKILLS</h2>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>HTML, CSS, JavaScript, React</p>
                        </div>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>Figma</p>
                        </div>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>Digital Drawing</p>
                        </div>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>Web-testing</p>
                        </div>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>Python, Java</p>
                        </div>
                        <div className='skills-box'>
                            <MdKeyboardDoubleArrowRight className='ed-icon' />
                            <p>PostgresSQL/MySQL databases</p>
                        </div>
                    </div>
                </div>


                <div className='section-right'>

                </div>
            </div>
        </div>
    )
};
export default Home;