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
                src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30383.432089218237!2d76.2721944!3d10.0186576!3m2!1i1024!2i768!4f13.1!4m4!1e1!3m2!1sD5VCJpncBWbjKSwUA!5e0!4m1!5sD5VCJpncBWbjKSwUA",
                width: "100%",
                height: "250",
                allowFullScreen: "",
                loading: "lazy"
            })
        )
    );
};

export default Contact;