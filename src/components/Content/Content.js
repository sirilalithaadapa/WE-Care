import React from 'react';
import './Content.css';
import img from './youtube.jpeg';

const HomeSection = () => {
    return React.createElement(
        'div', { className: 'home-section' },

        React.createElement(
            'div', { className: 'home-section-content' },
            React.createElement('h1', null, 'Caring For The Health And Well Being Of You And Your Family.'),
            React.createElement(
                'p',
                null,
                'We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries. We will work with you to develop individualized care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.'
            ),
            React.createElement(
                'div', { className: 'button-group' },
                React.createElement(
                    'a', {
                        href: "https://www.vcaremultispeciality.in/doctors-timetable.html",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    React.createElement(
                        'button', { className: 'btn find-doctor' },
                        'Find A Doctor'
                    )
                )
            )
        ),

        React.createElement(
            'div', { className: 'home-section-image' },
            React.createElement('img', { src: img, alt: 'V-Care Hospital Team' }),
            React.createElement(
                'div', { className: 'video-button' },
                React.createElement(
                    'a', {
                        href: "https://youtu.be/neqSVW284Es?si=oarw2I1FXtF_iuyQ",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    React.createElement('button', null, 'Watch Our Presentation!')
                )
            )
        )
    );
};

export default HomeSection;