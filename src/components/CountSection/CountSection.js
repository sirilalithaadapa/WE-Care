import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserFriends, FaCity, FaUsers, FaUserMd } from 'react-icons/fa'; // Font Awesome icons
import './CountSection.css';

const CountSection = () => {
    const countItems = [
        { end: 200000, label: 'Patients Treated', icon: < FaUserFriends / > },
        { end: 300, label: 'Cities Patients', icon: < FaCity / > },
        { end: 700000, label: 'People Attended Workshop', icon: < FaUsers / > },
        { end: 400, label: 'Team of Experts', icon: < FaUserMd / > },
    ];

    return ( <
        div className = "count-section" > {
            countItems.map((item, index) => ( <
                motion.div className = "count-box"
                key = { index }
                initial = {
                    { opacity: 0, y: 20 } }
                animate = {
                    { opacity: 1, y: 0 } }
                transition = {
                    { duration: 0.5, delay: index * 0.2 } } >
                <
                div className = "count-icon" > { item.icon } < /div> <
                div className = "count" >
                <
                CountUp end = { item.end }
                duration = { 3 }
                separator = "," / >
                <
                span > + < /span> <
                /div> <
                p > { item.label } < /p> <
                /motion.div>
            ))
        } <
        /div>
    );
};

export default CountSection;