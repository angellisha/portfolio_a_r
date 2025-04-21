import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <a href="#about" style={{ margin: '0 10px' }}>About</a>
                <a href="#projects" style={{ margin: '0 10px' }}>Projects</a>
                <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;