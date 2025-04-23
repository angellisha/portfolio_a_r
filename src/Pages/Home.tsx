import React from 'react';
import "../Styles/Home.css";
import Header from '../Components/Header';

import Banner from '../Assets/Images/Banner.png';

const Home = () => {
    return(
        <div className='h-main-container'>
            <img src={Banner} alt="Home" style={{ width: '100%', height: 'auto' }} />
            <Header />
        </div>
    )
};
export default Home;