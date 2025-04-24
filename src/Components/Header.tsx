import React from 'react';
import '../Styles/Header.css'; 
import { IoPersonCircleOutline, IoCodeSlash } from 'react-icons/io5';
import { FaPaintbrush } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <header>
            <nav className='header-nav'>
                <a href="#about" onClick={() => navigate("/home")}>
                    <IoPersonCircleOutline className='icon-header' /> Home
                </a>
                <a href="#projects" onClick={() => navigate("/projects")}>
                    <IoCodeSlash className='icon-header' /> Projects
                </a>
                <a href="#contact" onClick={() => navigate("/projects")}>
                    <FaPaintbrush className='icon-header' /> Designs/Art
                </a>
            </nav>
        </header>
    );
};

export default Header;