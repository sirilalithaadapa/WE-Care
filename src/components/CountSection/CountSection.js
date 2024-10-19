import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserFriends, FaCity, FaUsers, FaUserMd } from 'react-icons/fa'; // Font Awesome icons
import './CountSection.css';

const CountSection = () => {
    const countItems = [
        { end: 40000, label: 'Patients Treated', icon: React.createElement(FaUserFriends) },
        { end: 100, label: 'Cities Patients', icon: React.createElement(FaCity) },
        { end: 7000, label: 'People Attended Workshop', icon: React.createElement(FaUsers) },
        { end: 100, label: 'Team of Experts', icon: React.createElement(FaUserMd) },
    ];

    return React.createElement(
        'div', { className: 'count-section' },
        countItems.map((item, index) =>
            React.createElement(
                motion.div, {
                    className: 'count-box',
                    key: index,
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.2 }
                },
                React.createElement('div', { className: 'count-icon' }, item.icon),
                React.createElement(
                    'div', { className: 'count' },
                    React.createElement(CountUp, { end: item.end, duration: 3, separator: ',' }),
                    React.createElement('span', null, '+')
                ),
                React.createElement('p', null, item.label)
            )
        )
    );
};

export default CountSection;