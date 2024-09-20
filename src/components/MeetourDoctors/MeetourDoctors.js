import React from 'react';
import './MeetourDoctors.css'; // Add your CSS for styling or use a CSS framework
import doctor1Image from './Dr. Vijaya Sree.jpeg'; // Ensure the path is correct
import doctor3Image from './dravinash.png'; // Ensure the path is correct
import doctor2Image from './Dr. Mahmood Pasha.jpg'; // Ensure the path is correct

const doctorsData = [{
        name: "Dr. Vijaya Sri",
        specialty: "General Medicine",
        qualification: "M.D (General Medicine)",
        image: doctor1Image,
    },
    {
        name: "Dr. Mahmood Pasha",
        specialty: "ENT",
        qualification: "MBBS, DLO, ENT Surgeon",
        image: doctor2Image,
    },
    {
        name: "Dr. Avinash Chaithanya",
        specialty: "Head & Neck Specialist",
        qualification: "MBBS, Ms. FHNO",
        image: doctor3Image,
    }
];

const DoctorCard = ({ doctor }) => {
    return ( <
        div className = "doctor-card" >
        <
        img src = { doctor.image }
        alt = { doctor.name }
        className = "doctor-image" / >
        <
        h3 > { doctor.name } < /h3> <
        p > { doctor.specialty } < /p> <
        p > { doctor.qualification } < /p> < /
        div >
    );
};

const MeetourDoctors = () => {
    return ( <
        section className = "meet-our-doctors" >
        <
        h2 > Meet Our Doctors < /h2> <
        div className = "doctor-list" > {
            doctorsData.map((doctor, index) => ( <
                DoctorCard key = { index }
                doctor = { doctor }
                />
            ))
        } <
        /div> < /
        section >
    );
};

export default MeetourDoctors; // Ensure consistency with component naming