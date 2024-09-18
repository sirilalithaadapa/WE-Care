import React from 'react';
import './Testimonials.css';
import patient1 from './patient1.jpg';
import patient2 from './patient2.jpg';
import patient3 from './patient3.jpg';
import patient4 from './patient4.jpg';

const testimonials = [{
        img: patient1,
        name: "John Doe",
        designation: "Brain Tumor",
        rating: 5,
        text: "The care I received at WECare was exceptional! The doctors and staff are friendly, and they helped me recover quickly."
    },
    {
        img: patient2,
        name: "Jane Smith",
        designation: "periodontal",
        rating: 5,
        text: "WECare Multispeciality Clinic has the best facilities and services. My experience has been wonderful from start to finish."
    },
    {
        img: patient3,
        name: "Lexi Johnson",
        designation: "Knee arthritis",
        rating: 4.5,
        text: "I highly recommend WECare Clinic. Their state-of-the-art equipment and excellent team helped me regain my health quickly."
    },
    {
        img: patient4,
        name: "Michael Lee",
        designation: "Alzheimer",
        rating: 5,
        text: "The services were excellent, and the staff was attentive. It was a pleasant experience at WECare."
    }
];

const Testimonials = () => {
    return ( <
        section className = "testimonials" >
        <
        h2 > Patient Testimonials < /h2> <
        div className = "testimonial-grid" > {
            testimonials.map((testimonial, index) => ( <
                div key = { index }
                className = "testimonial-item" >
                <
                img src = { testimonial.img }
                alt = { testimonial.name }
                className = "testimonial-photo" /
                >
                <
                div className = "testimonial-details" >
                <
                h4 className = "testimonial-name" > { testimonial.name } < /h4> <
                p className = "testimonial-designation" > { testimonial.designation } < /p> <
                div className = "testimonial-rating" > { "★".repeat(testimonial.rating) } { "☆".repeat(5 - testimonial.rating) } <
                /div> <
                p className = "testimonial-text" > { testimonial.text } < /p> < /
                div > <
                /div>
            ))
        } <
        /div> < /
        section >
    );
};

export default Testimonials;