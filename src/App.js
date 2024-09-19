import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import MeetourDoctors from './components/MeetourDoctors/MeetourDoctors';
import CountSection from './components/CountSection/CountSection'; // Import the CountSection component

import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Home / >
        <
        About / >
        <
        CountSection / > { /* Add CountSection component here */ } <
        MeetourDoctors / >
        <
        Services / >
        <
        Testimonials / >
        <
        Contact / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;