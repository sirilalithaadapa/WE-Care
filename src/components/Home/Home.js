import React from 'react';
import './Home.css';

// Importing image
import slide1 from './hero-bg.png';

const Home = () => {
    return ( <
        section id = "home"
        className = "home" >
        <
        div className = "hero-section" >
        <
        img src = { slide1 }
        alt = "Welcome to WeCare Hospital"
        className = "hero-image" /
        >
        <
        div className = "hero-text" >
        <
        h1 > Welcome to WeCare Hospital < /h1> <
        p > We provide high - quality healthcare services < /p> <
        /div> <
        /div> <
        div className = "info-slider" >
        <
        div className = "info-box emergency" >
        <
        i className = "fa fa-phone" > < /i> <
        h2 > Emergency Cases < /h2> <
        p >
        Please feel welcome to contact our staff with any general or medical enquiry.Call us:
        <
        /p> <
        h3 > 7288944972 < /h3> <
        button className = "action-btn" > Book Appointment < /button> <
        /div> <
        div className = "info-box timetable" >
        <
        i className = "fa fa-calendar" > < /i> <
        h2 > Doctors Timetable < /h2> <
        p >
        Qualified doctors available six days a week.View our timetable to make an appointment. <
        /p> <
        button className = "action-btn" > Second Opinion < /button> <
        /div> <
        div className = "info-box hours" >
        <
        i className = "fa fa-clock" > < /i> <
        h2 > Opening Hours < /h2> <
        ul >
        <
        li > Monday - Friday: 8: 00 AM - 7: 00 PM < /li> <
        li > Saturday: 9: 00 AM - 8: 00 PM < /li> <
        li > Sunday: 10: 00 AM - 9: 00 PM < /li> <
        li > Emergency: 24 HR / 7 DAYS < /li> <
        /ul> <
        /div> <
        div className = "info-box location" >
        <
        i className = "fa fa-map-marker" > < /i> <
        h2 > Location, Directions < /h2> <
        p > M.G.Road, Kothagudem, Bhadradri < /p> <
        p > Kothagudem Dist.Telangana. < /p> <
        div className = "map-container" >
        <
        iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.927671960463!2d80.61548438046235!3d17.558629940447922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3410bb9716f395%3A0xdc85873df57d3b68!2sV-CARE%20MULTISPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1726679850298!5m2!1sen!2sin"
        width = "100%"
        height = "150"
        style = {
            { border: 0 } }
        allowFullScreen loading = "lazy"
        referrerPolicy = "no-referrer-when-downgrade"
        title = "Hospital Location" >
        < /iframe> <
        /div> <
        /div> <
        /div> <
        /section>
    );
};

export default Home;