import React from 'react';
import '../Styles/Header.css'; 
import { IoPersonCircleOutline, IoCodeSlash } from 'react-icons/io5';
import { FaPaintbrush } from "react-icons/fa6";

const Header: React.FC = () => {
    return (
        <header>
            <nav className='header-nav'>
                <a href="#about">
                    <IoPersonCircleOutline className='icon-header' /> Home
                </a>
                <a href="#projects">
                    <IoCodeSlash className='icon-header' /> Projects
                </a>
                <a href="#contact">
                    <FaPaintbrush className='icon-header' /> Designs/Art
                </a>
            </nav>
        </header>
    );
};

export default Header;