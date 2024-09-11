import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
