import React, { useEffect, useRef } from 'react';
import './Services.css';

// Import images (ensure images are placed in the public folder or imported correctly)
import gastroImg from './gastro.png';
import surgicalGastroImg from './surgical-gastro.png';
import hepatologyImg from './hepatology.png';
import cardiologyImg from './cardiology.png';
import cardiothoracicImg from './cardiothoracic.png';
import neurosurgeryImg from './neurosurgery.png';
import pulmonologyImg from './pulmonologyImg.jpg';
import oncologyImg from './oncology.png';
import urologyImg from './urology.png';
import nephrologyImg from './nephrology.png';
import orthopedicsImg from './orthopedic.png';
import rheumatologyImg from './rheumatologyImg.png';
import gynecologyImg from './gynecology.png';
import pediatricsImg from './pediatrics.png';
import neurologyImg from './neurology.png';
import psychiatryImg from './psychiatry.png';
import endocrinologyImg from './endocriology.png';
import dermatologyImg from './dermatology.png';

const Services = () => {
    const scrollRef = useRef(null);

    const services = [
        { name: "Medical Gastroenterology", img: gastroImg },
        { name: "Surgical Gastroenterology", img: surgicalGastroImg },
        { name: "Centre of Hepatology & Regenerative Medicine", img: hepatologyImg },
        { name: "Cardiology", img: cardiologyImg },
        { name: "Cardiothoracic Surgery", img: cardiothoracicImg },
        { name: "Neurosurgery & Spine Surgery", img: neurosurgeryImg },
        { name: "Pulmonology", img: pulmonologyImg },
        { name: "Oncology", img: oncologyImg },
        { name: "Urology", img: urologyImg },
        { name: "Nephrology", img: nephrologyImg },
        { name: "Orthopedics", img: orthopedicsImg },
        { name: "Rheumatology", img: rheumatologyImg },
        { name: "Obstetrics and Gynecology", img: gynecologyImg },
        { name: "Pediatrics", img: pediatricsImg },
        { name: "Neurology", img: neurologyImg },
        { name: "Psychiatry", img: psychiatryImg },
        { name: "Endocrinology", img: endocrinologyImg },
        { name: "Dermatology", img: dermatologyImg }
    ];

    // Horizontal scrolling with mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX } = e;
            const container = scrollRef.current;
            if (container) {
                const { offsetWidth, scrollWidth } = container;
                const maxScrollLeft = scrollWidth - offsetWidth;
                const scrollX = (clientX / window.innerWidth) * maxScrollLeft;
                container.scrollTo({
                    left: scrollX,
                    behavior: 'smooth',
                });
            }
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        React.createElement('section', { id: "services", className: "services" },
            React.createElement('h2', { className: "section-title" }, "Centres of Excellence"),
            React.createElement('p', { className: "section-description" },
                "Depth and expertise define our Centers of Excellence in Super Specialty Tertiary Healthcare."
            ),
            React.createElement('div', { className: "service-container", ref: scrollRef },
                React.createElement('div', { className: "service-list" },
                    services.map((service, index) => (
                        React.createElement('div', { key: index, className: "service" },
                            React.createElement('div', {
                                className: "icon",
                                style: { backgroundImage: `url(${service.img})` }
                            }),
                            React.createElement('h3', null, service.name)
                        )
                    ))
                )
            )
        )
    );
};

export default Services;