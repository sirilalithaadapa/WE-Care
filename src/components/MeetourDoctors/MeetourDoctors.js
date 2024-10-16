import React, { useState } from 'react';
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

const DoctorCard = ({ doctor, isFlipped, onClick }) => {
    return ( <
        div className = { `doctor-card ${isFlipped ? 'flipped' : ''}` }
        onClick = { onClick } >
        <
        div className = "front" >
        <
        img src = { doctor.image }
        alt = { doctor.name }
        className = "doctor-image" / >
        <
        h3 > { doctor.name } < /h3> <
        p > { doctor.specialty } < /p> <
        p > { doctor.qualification } < /p> <
        /div> <
        div className = "back" >
        <
        h3 > { doctor.name } < /h3> <
        p > Treats: { doctor.diseases } < /p> <
        /div> <
        /div>
    );
};

const MeetourDoctors = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index); // Toggle flip state
    };

    return ( <
        section className = "meet-our-doctors" >
        <
        h2 > Meet Our Doctors < /h2> <
        div className = "doctor-list" > {
            doctorsData.map((doctor, index) => ( <
                DoctorCard key = { index }
                doctor = { doctor }
                isFlipped = { flippedIndex === index }
                onClick = {
                    () => handleCardClick(index) }
                />
            ))
        } <
        /div> <
        /section>
    );
};

export default MeetourDoctors;