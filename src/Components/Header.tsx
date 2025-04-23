import React from 'react';
import '../Styles/Header.css'; 
import { FaHome, FaProjectDiagram, FaPaintBrush } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header>
            <nav className='header-nav'>
                <a href="#about" style={{ margin: '0 10px' }}>
                    <FaHome /> Home
                </a>
                <a href="#projects" style={{ margin: '0 10px' }}>
                    <FaProjectDiagram /> Projects
                </a>
                <a href="#contact" style={{ margin: '0 10px' }}>
                    <FaPaintBrush /> Designs/Art
                </a>
            </nav>
        </header>
    );
};

export default Header;