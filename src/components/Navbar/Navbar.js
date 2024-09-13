import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // Ensure this path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( <
        header >
        <
        div className = "top-banner" >
        <
        p > Our Clinic sees over 10, 000 patients every year! < a href = "#stories" > Hear Their Real Stories < /a></p >
        <
        p className = "emergency-info" > Emergency Line: xxxxxx | Location: Hyderabad < /p> <
        /div> <
        nav className = "navbar" >
        <
        div className = "logo" >
        <
        img src = { logo }
        alt = "WeCare Hospital Logo" / >
        <
        h1 > WeCare Hospital < /h1> <
        /div> { /* Desktop View */ } <
        ul className = "nav-links" >
        <
        li > < a href = "#home" > Home < /a></li >
        <
        li > < a href = "#services" > Services < /a></li >
        <
        li > < a href = "#about" > About Us < /a></li >
        <
        li > < a href = "#contact" > Contact Us < /a></li >
        <
        li > < a href = "#blog" > Blog < /a></li >
        <
        li > < a href = "#gallery" > Gallery < /a></li >
        <
        li > < a href = "#team" > Team < /a></li >
        <
        /ul> <
        a href = "#appointment"
        className = "appointment-button" > Make Appointment < /a> { /* Hamburger for Mobile View */ } <
        div className = "hamburger"
        onClick = { toggleMenu } >
        <
        div style = {
            { transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)' } } > < /div> <
        div style = {
            { opacity: isOpen ? 0 : 1 } } > < /div> <
        div style = {
            { transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)' } } > < /div> <
        /div> { /* Mobile Menu */ } <
        ul className = { `nav-links mobile ${isOpen ? 'active' : ''}` } >
        <
        div className = "close-button"
        onClick = { toggleMenu } > × < /div> <
        li > < a href = "#home"
        onClick = { toggleMenu } > Home < /a></li >
        <
        li > < a href = "#services"
        onClick = { toggleMenu } > Services < /a></li >
        <
        li > < a href = "#about"
        onClick = { toggleMenu } > About Us < /a></li >
        <
        li > < a href = "#contact"
        onClick = { toggleMenu } > Contact Us < /a></li >
        <
        li > < a href = "#blog"
        onClick = { toggleMenu } > Blog < /a></li >
        <
        li > < a href = "#gallery"
        onClick = { toggleMenu } > Gallery < /a></li >
        <
        li > < a href = "#team"
        onClick = { toggleMenu } > Team < /a></li >
        <
        /ul> { /* Overlay for mobile menu */ } <
        div className = { `menu-overlay ${isOpen ? 'active' : ''}` }
        onClick = { toggleMenu } >
        < /div> <
        /nav> <
        /header>
    );
};

export default Navbar;