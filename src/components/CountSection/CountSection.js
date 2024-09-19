import React from 'react';
import CountUp from 'react-countup';
import './CountSection.css'; // Import CSS file for styles

const CountSection = () => {
    return ( <
        div className = "count-section" > { /* Patients Treated */ } <
        div className = "count-box" >
        <
        div className = "count" >
        <
        CountUp end = { 200000 }
        duration = { 3 }
        separator = "," / >
        <
        span > + < /span> < /
        div > <
        p > Patients Treated < /p> < /
        div >

        { /* Cities Patients */ } <
        div className = "count-box" >
        <
        div className = "count" >
        <
        CountUp end = { 300 }
        duration = { 3 }
        separator = "," / >
        <
        span > + < /span> < /
        div > <
        p > Cities Patients < /p> < /
        div >

        { /* People Attended Ergonomics Workshop */ } <
        div className = "count-box" >
        <
        div className = "count" >
        <
        CountUp end = { 700000 }
        duration = { 3 }
        separator = "," / >
        <
        span > + < /span> < /
        div > <
        p > People Attended Workshop < /p> < /
        div >

        { /* Team of Experts */ } <
        div className = "count-box" >
        <
        div className = "count" >
        <
        CountUp end = { 400 }
        duration = { 3 }
        separator = "," / >
        <
        span > + < /span> < /
        div > <
        p > Team of Experts < /p> < /
        div > <
        /div>
    );
};

export default CountSection;