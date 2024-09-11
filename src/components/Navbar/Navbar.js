import React from 'react';
import './Navbar.css';
import logo from './logo.png'; // Ensure this path is correct

const Navbar = () => {
    return (
        <header>
            <div className="top-banner">
                <p>Our Clinic sees over 10,000 patients every year! <a href="#stories">Hear Their Real Stories</a></p>
                <p className="emergency-info">Emergency Line: xxxxxx | Location: Hyderabad</p>
            </div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="WeCare Hospital Logo" />
                    <h1>WeCare Hospital</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
                <a href="#appointment" className="appointment-button">Make Appointment</a>
            </nav>
        </header>
    );
};

export default Navbar;
