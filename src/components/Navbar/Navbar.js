import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // Ensure this path is correct

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
            React.createElement(
                'div', { className: 'logo' },
                React.createElement('img', { src: logo, alt: 'WeCare Hospital Logo' }),
                React.createElement('h1', null, 'WeCare Hospital')
            ),
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

            React.createElement(
                'div', { className: 'hamburger', onClick: toggleMenu },
                React.createElement('div', {
                    style: { transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)' }
                }),
                React.createElement('div', {
                    style: { opacity: isOpen ? 0 : 1 }
                }),
                React.createElement('div', {
                    style: { transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)' }
                })
            ),
            React.createElement(
                'ul', { className: `nav-links mobile ${isOpen ? 'active' : ''}` },
                React.createElement(
                    'div', { className: 'close-button', onClick: toggleMenu },
                    '×'
                ),
                React.createElement('li', null, React.createElement('a', { href: '#home', onClick: toggleMenu }, 'Home')),
                React.createElement('li', null, React.createElement('a', { href: '#services', onClick: toggleMenu }, 'Services')),
                React.createElement('li', null, React.createElement('a', { href: '#about', onClick: toggleMenu }, 'About Us')),
                React.createElement('li', null, React.createElement('a', { href: '#contact', onClick: toggleMenu }, 'Contact Us')),
                React.createElement('li', null, React.createElement('a', { href: '#blog', onClick: toggleMenu }, 'Blog')),
                React.createElement('li', null, React.createElement('a', { href: '#gallery', onClick: toggleMenu }, 'Gallery')),
                React.createElement('li', null, React.createElement('a', { href: '#team', onClick: toggleMenu }, 'Team'))
            ),
            React.createElement('div', {
                className: `menu-overlay ${isOpen ? 'active' : ''}`,
                onClick: toggleMenu
            })
        )
    );
};

export default Navbar;