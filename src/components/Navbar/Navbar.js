import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // Ensure this path is correct
import { ReactComponent as PhoneIcon } from './phone.svg'; // Ensure this path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return React.createElement(
        'header',
        null,
        React.createElement(
            'nav', { className: 'navbar' },
            // Logo Section
            React.createElement(
                'div', { className: 'logo' },
                React.createElement('img', { src: logo, alt: 'WeCare Hospital Logo' }),
                React.createElement('h1', null, 'WeCare Hospital')
            ),
            // Phone Number with Icon
            React.createElement(
                'div', { className: 'phone-number' },
                React.createElement(PhoneIcon, { className: 'phone-icon' }),
                React.createElement('a', { href: 'tel:+1234567890' }, '+1 (234) 567-890')
            ),
            // Nav Links
            React.createElement(
                'ul', { className: 'nav-links' },
                React.createElement('li', null, React.createElement('a', { href: '#home' }, 'Home')),
                React.createElement('li', null, React.createElement('a', { href: '#services' }, 'Services')),
                React.createElement('li', null, React.createElement('a', { href: '#about' }, 'About Us')),
                React.createElement('li', null, React.createElement('a', { href: '#contact' }, 'Contact Us')),
                React.createElement('li', null, React.createElement('a', { href: '#blog' }, 'Blog')),
                React.createElement('li', null, React.createElement('a', { href: '#gallery' }, 'Gallery')),
                React.createElement('li', null, React.createElement('a', { href: '#team' }, 'Team'))
            ),
            // Hamburger Menu for Mobile
            React.createElement(
                'div', { className: 'hamburger', onClick: toggleMenu },
                React.createElement('div', { className: isOpen ? 'line open' : 'line' }),
                React.createElement('div', { className: isOpen ? 'line hidden' : 'line' }),
                React.createElement('div', { className: isOpen ? 'line open' : 'line' })
            ),
            // Mobile Menu
            React.createElement(
                'ul', { className: `nav-links mobile ${isOpen ? 'active' : ''}` },
                React.createElement(
                    'div', { className: 'close-button', onClick: toggleMenu },
                    '\u00D7'
                ),
                React.createElement('li', null, React.createElement('a', { href: '#home', onClick: toggleMenu }, 'Home')),
                React.createElement('li', null, React.createElement('a', { href: '#services', onClick: toggleMenu }, 'Services')),
                React.createElement('li', null, React.createElement('a', { href: '#about', onClick: toggleMenu }, 'About Us')),
                React.createElement('li', null, React.createElement('a', { href: '#contact', onClick: toggleMenu }, 'Contact Us')),
                React.createElement('li', null, React.createElement('a', { href: '#blog', onClick: toggleMenu }, 'Blog')),
                React.createElement('li', null, React.createElement('a', { href: '#gallery', onClick: toggleMenu }, 'Gallery')),
                React.createElement('li', null, React.createElement('a', { href: '#team', onClick: toggleMenu }, 'Team'))
            ),
            // Overlay when menu is active
            React.createElement(
                'div', {
                    className: `menu-overlay ${isOpen ? 'active' : ''}`,
                    onClick: toggleMenu
                }
            )
        )
    );
};

export default Navbar;