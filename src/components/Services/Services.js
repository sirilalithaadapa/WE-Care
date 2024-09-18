import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
    const scrollRef = useRef(null);

    const services = [
        { name: "Medical Gastroenterology", iconClass: "medical-gastro", img: "./gastro.png" },
        { name: "Surgical Gastroenterology", iconClass: "surgical-gastro", img: "/surgical-gastro-icon.png" },
        { name: "Centre of Hepatology & Regenerative Medicine", iconClass: "hepatology", img: "/hepatology-icon.png" },
        { name: "Cardiology", iconClass: "cardiology", img: "/cardiology-icon.png" },
        { name: "Cardiothoracic Surgery", iconClass: "cardiothoracic", img: "/cardiothoracic-icon.png" },
        { name: "Neurosurgery & Spine Surgery", iconClass: "neurosurgery", img: "/neurosurgery-icon.png" },
        { name: "Pulmonology", iconClass: "pulmonology", img: "/pulmonology-icon.png" },
        { name: "Oncology", iconClass: "oncology", img: "/oncology-icon.png" },
        { name: "Urology", iconClass: "urology", img: "/urology-icon.png" },
        { name: "Nephrology", iconClass: "nephrology", img: "/nephrology-icon.png" },
        { name: "Orthopedics", iconClass: "orthopedics", img: "/orthopedics-icon.png" },
        { name: "Rheumatology", iconClass: "rheumatology", img: "/rheumatology-icon.png" },
        { name: "Obstetrics and Gynecology", iconClass: "gynecology", img: "/gynecology-icon.png" },
        { name: "Pediatrics", iconClass: "pediatrics", img: "/pediatrics-icon.png" },
        { name: "Neurology", iconClass: "neurology", img: "/neurology-icon.png" },
        { name: "Psychiatry", iconClass: "psychiatry", img: "/psychiatry-icon.png" },
        { name: "Endocrinology", iconClass: "endocrinology", img: "/endocrinology-icon.png" },
        { name: "Dermatology", iconClass: "dermatology", img: "/dermatology-icon.png" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return ( <
        section id = "services"
        className = "services" >
        <
        h2 className = "section-title" > Centres of Excellence < /h2> <
        p className = "section-description" >
        Depth and expertise define our Centers of Excellence in Super Specialty Tertiary Healthcare.

        <
        /p> <
        div className = "service-container"
        ref = { scrollRef } >
        <
        div className = "service-list" > {
            services.map((service, index) => ( <
                div key = { index }
                className = "service" >
                <
                div className = "icon"
                style = {
                    { backgroundImage: `url(${service.png})` }
                }
                /> <
                h3 > { service.name } < /h3> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /section>
    );
};

export default Services;