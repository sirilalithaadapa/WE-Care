import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return React.createElement(
        'section', { id: 'contact', className: 'contact' },

        React.createElement(
            'div', { className: 'contact-content' },

            React.createElement(
                'div', { className: 'contact-info' },
                React.createElement('h2', null, 'Contact Information'),
                React.createElement(
                    'p',
                    null,
                    'Please reach out to us for any general or urgent inquiries. We are here to assist you!'
                ),
                React.createElement(
                    'ul',
                    null,
                    React.createElement('li', null, React.createElement('strong', null, 'Location: '), ' 1234 Health St., Care City'),
                    React.createElement('li', null, React.createElement('strong', null, 'Email: '), ' contact@vcarehospital.com'),
                    React.createElement('li', null, React.createElement('strong', null, 'Phone: '), '+123-456-7890'),
                    React.createElement('li', null, React.createElement('strong', null, 'Hours: '), ' Mon-Fri, 9 AM - 6 PM')
                )
            ),

            React.createElement(
                'div', { className: 'contact-form' },
                React.createElement('h2', null, 'Get in Touch'),
                React.createElement(
                    'form', { onSubmit: handleSubmit },
                    React.createElement('input', {
                        type: 'text',
                        name: 'name',
                        placeholder: 'Your Name',
                        value: formData.name,
                        onChange: handleChange
                    }),
                    React.createElement('input', {
                        type: 'email',
                        name: 'email',
                        placeholder: 'Your Email',
                        value: formData.email,
                        onChange: handleChange
                    }),
                    React.createElement('textarea', {
                        name: 'message',
                        placeholder: 'Your Message',
                        value: formData.message,
                        onChange: handleChange
                    }),
                    React.createElement('button', { type: 'submit' }, 'Send Message')
                )
            )
        ),

        React.createElement(
            'div', { className: 'map-container' },
            React.createElement('iframe', {
                title: "Google Map",
                // Use the correct embed link from Google Maps
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099466!2d144.95373511531566!3d-37.81720997975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0b26c3%3A0x5045675218ceed1!2sYour%20Location!5e0!3m2!1sen!2sau!4v1612713487391!5m2!1sen!2sau",
                width: "100%",
                height: "250",
                allowFullScreen: "",
                loading: "lazy"
            })
        )
    );
};

export default Contact;