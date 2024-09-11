import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import Awesome Slider CSS
import './AwardsAndTestimonials.css';
import award1 from './award1.jpg';
import award2 from './award2.jpg';
import award3 from './award3.jpg';
import patient1 from './patient1.jpg';
import patient2 from './patient2.jpg';
import patient3 from './patient3.jpg';

const testimonials = [
    {
        img: patient1,
        text: "The care I received at WECare was exceptional! The doctors and staff are friendly, and they helped me recover quickly.",
        name: "John Doe"
    },
    {
        img: patient2,
        text: "WECare Multispeciality Clinic has the best facilities and services. My experience has been wonderful from start to finish.",
        name: "Jane Smith"
    },
    {
        img: patient3,
        text: "I highly recommend WECare Clinic. Their state-of-the-art equipment and excellent team helped me regain my health quickly.",
        name: "Lexi Johnson"
    }
];

const AwardsAndTestimonials = () => {
    return (
        <section className="awards-testimonials">
            {/* Awards Section */}
            <div className="awards">
                <h2>Awards & Achievements</h2>
                <div className="awards-list">
                    <div className="award-item">
                        <img src={award1} alt="Best Multispeciality Clinic" />
                        <h3>Best Multispeciality Clinic 2023</h3>
                        <p>Awarded for outstanding medical services and healthcare excellence.</p>
                    </div>
                    <div className="award-item">
                        <img src={award2} alt="Healthcare Innovation Award" />
                        <h3>Healthcare Innovation Award</h3>
                        <p>Recognized for innovations in patient care and advanced medical treatments.</p>
                    </div>
                    <div className="award-item">
                        <img src={award3} alt="Best Patient Satisfaction" />
                        <h3>Best Patient Satisfaction</h3>
                        <p>Awarded for maintaining high patient satisfaction and quality care.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials">
                <h2>Patient Testimonials</h2>
                <AwesomeSlider>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <img src={testimonial.img} alt={testimonial.name} className="testimonial-photo" />
                            <p>"{testimonial.text}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </AwesomeSlider>
            </div>
        </section>
    );
};

export default AwardsAndTestimonials;
