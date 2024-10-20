import React from 'react';
import './Services.css';

// Import your image files
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

const services = [
    { name: "Medical Gastroenterology", description: "Endoscopy Procedures\nLiver Disease Management\nIBD & IBS Treatments", img: gastroImg },
    { name: "Surgical Gastroenterology", description: "Minimally Invasive Surgery\nLiver & Pancreas Surgery\nBariatric Surgery", img: surgicalGastroImg },
    { name: "Centre of Hepatology & Regenerative Medicine", description: "Liver Transplant\nAdvanced Hepatitis Care\nStem Cell Therapy", img: hepatologyImg },
    { name: "Cardiology", description: "Open Heart Surgery\nHeart Bypass Surgery\nCardiac Stent Procedures", img: cardiologyImg },
    { name: "Cardiothoracic Surgery", description: "Heart Valve Surgery\nLung Transplant\nAortic Aneurysm Repair", img: cardiothoracicImg },
    { name: "Neurosurgery & Spine Surgery", description: "Brain Tumor Surgery\nSpine Decompression\nEpilepsy Surgery", img: neurosurgeryImg },
    { name: "Pulmonology", description: "Asthma Management\nCOPD Treatment\nLung Cancer Screening", img: pulmonologyImg },
    { name: "Oncology", description: "Chemotherapy\nRadiation Therapy\nSurgical Oncology", img: oncologyImg },
    { name: "Urology", description: "Kidney Stone Removal\nProstate Surgery\nBladder Cancer Treatment", img: urologyImg },
    { name: "Nephrology", description: "Dialysis\nKidney Transplant\nChronic Kidney Disease Management", img: nephrologyImg },
    { name: "Orthopedics", description: "Joint Replacement\nArthroscopic Surgery\nFracture Repair", img: orthopedicsImg },
    { name: "Rheumatology", description: "Arthritis Treatment\nLupus Management\nOsteoporosis Care", img: rheumatologyImg },
    { name: "Obstetrics and Gynecology", description: "Prenatal Care\nHigh-Risk Pregnancy Management\nGynecological Surgeries", img: gynecologyImg },
    { name: "Pediatrics", description: "Child Immunization\nPediatric Surgery\nNewborn Care", img: pediatricsImg },
    { name: "Neurology", description: "Stroke Treatment\nEpilepsy Management\nParkinson’s Disease Care", img: neurologyImg },
    { name: "Psychiatry", description: "Mental Health Counseling\nPsychiatric Disorders\nSubstance Abuse Treatment", img: psychiatryImg },
    { name: "Endocrinology", description: "Diabetes Management\nThyroid Disorders\nHormonal Imbalance Treatment", img: endocrinologyImg },
    { name: "Dermatology", description: "Acne Treatment\nSkin Cancer Screening\nCosmetic Procedures", img: dermatologyImg }
];

const Services = () => {
    return React.createElement(
        'section', { id: 'services', className: 'services' },

        React.createElement('h2', { className: 'section-title' }, 'Centres of Excellence'),

        React.createElement(
            'p', { className: 'section-description' },
            'Depth and expertise define our Centers of Excellence in Super Specialty Tertiary Healthcare.'
        ),

        React.createElement(
            'div', { className: 'service-container' },
            services.map((service, index) =>
                React.createElement(
                    'div', { key: index, className: 'service-card' },
                    React.createElement(
                        'div', {
                            className: 'service-icon',
                            style: { backgroundImage: `url(${service.img})` }
                        }
                    ),
                    React.createElement('h3', null, service.name),
                    React.createElement('p', null, service.description)
                )
            )
        )
    );
};

export default Services;