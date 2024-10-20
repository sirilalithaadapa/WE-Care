import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import MeetourDoctors from './components/MeetourDoctors/MeetourDoctors';
import CountSection from './components/CountSection/CountSection'; // Import the CountSection component
import EmergencyInfo from './components/EmergencyInfo/EmergencyInfo';
import Content from './components/Content/Content'
import './App.css';

function App() {
    return React.createElement(
        'div', { className: 'App' },
        React.createElement(Navbar),
        React.createElement(Home),
        React.createElement(Content),
        React.createElement(Services),
        React.createElement(EmergencyInfo),
        React.createElement(MeetourDoctors),
        React.createElement(CountSection),
        React.createElement(Testimonials),
        React.createElement(Contact),
        React.createElement(Footer)
    );
}

export default App;