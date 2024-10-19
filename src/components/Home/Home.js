import React from 'react';
import './Home.css';

// Importing image
import slide1 from './hero-bg.png';

const Home = () => {
    return React.createElement(
        'section', { id: 'home', className: 'home' },
        React.createElement(
            'div', { className: 'hero-section' },
            React.createElement('img', {
                src: slide1,
                alt: 'Welcome to WeCare Hospital',
                className: 'hero-image'
            }),
            React.createElement(
                'div', { className: 'hero-text' },
                React.createElement('h1', null, 'Welcome to WeCare Hospital'),
                React.createElement('p', null, 'We provide high-quality healthcare services')
            )
        )
    );
};

export default Home;