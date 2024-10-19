import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import MeetourDoctors from './components/MeetourDoctors/MeetourDoctors';
import CountSection from './components/CountSection/CountSection'; // Import the CountSection component

import './App.css';

function App() {
    return React.createElement(
        'div', { className: 'App' },
        React.createElement(Navbar),
        React.createElement(Home),
        React.createElement(Services),
        React.createElement(CountSection),
        React.createElement(MeetourDoctors),
        React.createElement(Testimonials),
        React.createElement(Contact),
        React.createElement(Footer)
    );
}

export default App;