import React, { useState } from 'react';
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
        designation: "Periodontal",
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
    const [showAll, setShowAll] = useState(false);

    // Handle view more button click
    const toggleTestimonials = () => {
        setShowAll(!showAll);
    };

    return React.createElement(
        'section', { className: 'testimonials' },
        React.createElement('h2', null, 'Patient Testimonials'),
        React.createElement(
            'div', { className: 'testimonial-grid' },
            testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) =>
                React.createElement(
                    'div', { key: index, className: 'testimonial-item' },
                    React.createElement('img', {
                        src: testimonial.img,
                        alt: testimonial.name,
                        className: 'testimonial-photo'
                    }),
                    React.createElement(
                        'div', { className: 'testimonial-details' },
                        React.createElement('h4', { className: 'testimonial-name' }, testimonial.name),
                        React.createElement('p', { className: 'testimonial-designation' }, testimonial.designation),
                        React.createElement('div', { className: 'testimonial-rating' },
                            '★'.repeat(Math.floor(testimonial.rating)) +
                            '☆'.repeat(5 - Math.floor(testimonial.rating))
                        ),
                        React.createElement('p', { className: 'testimonial-text' }, testimonial.text)
                    )
                )
            )
        ),
        React.createElement(
            'button', { className: 'view-more', onClick: toggleTestimonials },
            showAll ? 'View Less' : 'View More'
        )
    );
};

export default Testimonials;