import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';

// Importing images
import slide1 from './hero-bg2.png';
import slide2 from './hero-bg.png';

const Home = () => {
    return React.createElement(
        'section', { id: 'home', className: 'home' },
        React.createElement(AwesomeSlider, { className: 'hero-slider', animation: 'none' },
            React.createElement('div', { 'data-src': slide1 },

            ),
            React.createElement('div', { 'data-src': slide2 },

            )
        )
    );
};

export default Home;