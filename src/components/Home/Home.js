import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import slide1 from './hero-bg.png'; // Correct the path based on where your images are
import slide2 from './hero-bg2.png';
import slide3 from './hero-bg3.jpg';

const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return ( <
        section id = "home"
        className = "home" > { /* Carousel Section */ } <
        Slider {...sliderSettings }
        className = "carousel-section" >
        <
        div className = "carousel-slide" >
        <
        img src = { slide1 }
        alt = "Slide 1"
        className = "carousel-image" / >
        <
        div className = "carousel-text" >
        <
        h1 > Welcome to WeCare Hospital < /h1> <
        p > We provide high - quality healthcare services < /p> < /
        div > <
        /div> <
        div className = "carousel-slide" >
        <
        img src = { slide2 }
        alt = "Slide 2"
        className = "carousel-image" / >
        <
        div className = "carousel-text" >
        <
        h1 > Welcome to WeCare Hospital < /h1> <
        p > We provide high - quality healthcare services < /p> < /
        div > <
        /div> <
        div className = "carousel-slide" >
        <
        img src = { slide3 }
        alt = "Slide 3"
        className = "carousel-image" / >
        <
        div className = "carousel-text" >
        <
        h1 > Welcome to WeCare Hospital < /h1> <
        p > We provide high - quality healthcare services < /p> < /
        div > <
        /div> < /
        Slider >

        { /* Information Boxes Section */ } <
        div className = "info-section" >
        <
        div className = "info-box emergency" >
        <
        i className = "fa fa-phone" > < /i> <
        h2 > Emergency Cases < /h2> <
        p > Please feel welcome to contact our staff with any general or medical enquiry.Call us: < /p> <
        h3 > 7288944972 < /h3> < /
        div > <
        div className = "info-box timetable" >
        <
        i className = "fa fa-calendar" > < /i> <
        h2 > Doctors Timetable < /h2> <
        p > Qualified doctors available six days a week.View our timetable to make an appointment. < /p> <
        button className = "view-timetable-btn" > View Timetable < /button> < /
        div > <
        div className = "info-box hours" >
        <
        i className = "fa fa-clock" > < /i> <
        h2 > Opening Hours < /h2> <
        ul >
        <
        li > Monday - Friday: 8: 00 AM - 7: 00 PM < /li> <
        li > Saturday: 9: 00 AM - 8: 00 PM < /li> <
        li > Sunday: 10: 00 AM - 9: 00 PM < /li> <
        li > Emergency: 24 HR / 7 DAYS < /li> < /
        ul > <
        /div> <
        div className = "info-box location" >
        <
        i className = "fa fa-map-marker" > < /i> <
        h2 > Location, Directions < /h2> <
        p > M.G.Road, Kothagudem, Bhadradri < /p> <
        p > Kothagudem Dist.Telangana. < /p> <
        div className = "map-container" > { /* Embed Google Map here */ } <
        iframe src = "https://www.google.com/maps/embed?pb=..." // Use the correct Google Maps embed link here
        width = "100%"
        height = "150"
        style = {
            { border: 0 }
        }
        allowFullScreen = ""
        loading = "lazy"
        title = "Hospital Location" >
        <
        /iframe> < /
        div > <
        /div> < /
        div > <
        /section>
    );
};

export default Home;