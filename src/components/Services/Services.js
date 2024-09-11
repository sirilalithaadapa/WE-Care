import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const [showMore, setShowMore] = useState(false);

    const services = [
        { name: "Medical Gastroenterology", iconClass: "medical-gastro" },
        { name: "Surgical Gastroenterology", iconClass: "surgical-gastro" },
        { name: "Centre of Hepatology & Regenerative Medicine", iconClass: "hepatology" },
        { name: "Cardiology", iconClass: "cardiology" },
        { name: "Cardiothoracic Surgery", iconClass: "cardiothoracic" },
        { name: "Neurosurgery & Spine Surgery", iconClass: "neurosurgery" },
        // Additional services can be added here
    ];

    return (
        <section id="services" className="services">
            <h2 className="section-title">Centres of Excellence</h2>
            <p className="section-description">
                Our depth of each center of excellence, making it a force to reckon with in the field of Super Specialty Tertiary Healthcare.
            </p>
            <div className="service-container">
                <button className="arrow left-arrow">&#10094;</button>
                <div className={`service-list ${showMore ? 'show-more' : ''}`}>
                    {services.map((service, index) => (
                        <div key={index} className="service">
                            <div className={`icon ${service.iconClass}`}></div>
                            <h3>{service.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="arrow right-arrow">&#10095;</button>
            </div>
            <div className="view-more">
                <button
                    className="view-more-button"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "View Less" : "View More"}
                </button>
            </div>
        </section>
    );
};

export default Services;
