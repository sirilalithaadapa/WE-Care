import React from 'react';
import './MeetourDoctors.css';
import doctor1Image from './Dr. Vijaya Sree.jpeg';
import doctor2Image from './Dr. Mahmood Pasha.jpg';
import doctor3Image from './dravinash.png';

const doctorsData = [{
        name: "Dr. Vijaya Sri",
        specialty: "General Medicine",
        qualification: "M.D (General Medicine)",
        image: doctor1Image,
        diseases: "Hypertension, Diabetes, Respiratory issues",
    },
    {
        name: "Dr. Mahmood Pasha",
        specialty: "ENT",
        qualification: "MBBS, DLO, ENT Surgeon",
        image: doctor2Image,
        diseases: "Sinusitis, Tonsillitis, Hearing loss",
    },
    {
        name: "Dr. Avinash Chaithanya",
        specialty: "Head & Neck Specialist",
        qualification: "MBBS, Ms. FHNO",
        image: doctor3Image,
        diseases: "Thyroid disorders, Oral cancer, Neck tumors",
    }
];

const DoctorCard = ({ doctor }) => {
    return React.createElement(
        'div', { className: 'doctor-card' },
        React.createElement('img', {
            src: doctor.image,
            alt: doctor.name,
            className: 'doctor-image'
        }),
        React.createElement(
            'div', { className: 'doctor-info' },
            React.createElement('h3', null, doctor.name),
            React.createElement('p', null, doctor.specialty),
            React.createElement('p', null, doctor.qualification),
            React.createElement(
                'div', { className: 'diseases' },
                React.createElement('p', null,
                    React.createElement('strong', null, 'Treats: '),
                    doctor.diseases
                )
            )
        )
    );
};

const MeetourDoctors = () => {
    return React.createElement(
        'section', { className: 'meet-our-doctors' },
        React.createElement('h2', null, 'Meet Our Doctors'),
        React.createElement(
            'div', { className: 'doctor-list' },
            doctorsData.map((doctor, index) =>
                React.createElement(DoctorCard, { key: index, doctor })
            )
        )
    );
};

export default MeetourDoctors;