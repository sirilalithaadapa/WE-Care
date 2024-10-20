import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // Ensure this path is correct
import { ReactComponent as SearchIcon } from './search.svg'; // Adjust the path as needed

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( <
        header >
        <
        nav className = "navbar" > { /* Logo Section */ } <
        div className = "logo" >
        <
        img src = { logo }
        alt = "WeCare Hospital Logo" / >
        <
        h1 > WeCare Hospital < /h1> <
        /div>

        { /* Search Bar */ } <
        div className = "search-container" >
        <
        SearchIcon className = "search-icon" / >
        <
        input type = "text"
        placeholder = "Search..."
        className = "search-bar" / >
        <
        /div>

        { /* Nav Links */ } <
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
        /ul>

        { /* Hamburger Menu for Mobile */ } <
        div className = "hamburger"
        onClick = { toggleMenu } >
        <
        div className = { isOpen ? 'line open' : 'line' } > < /div> <
        div className = { isOpen ? 'line hidden' : 'line' } > < /div> <
        div className = { isOpen ? 'line open' : 'line' } > < /div> <
        /div>

        { /* Mobile Menu */ } <
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
        /ul>

        { /* Overlay when menu is active */ } <
        div className = { `menu-overlay ${isOpen ? 'active' : ''}` }
        onClick = { toggleMenu } > < /div> <
        /nav> <
        /header>
    );
};

export default Navbar;