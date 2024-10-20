import React from 'react';
import { FaAmbulance, FaClock } from 'react-icons/fa';
import { Box, Typography, Button, Link } from '@mui/material';
import './EmergencyInfo.css';

const EmergencyInfo = () => {
    return React.createElement(
        Box, {
            display: "flex",
            justifyContent: "space-around",
            p: 3,
            sx: {
                backgroundColor: '#f0f8ff',
                flexWrap: 'wrap',
                gap: 2,
            }
        },

        // Emergency Cases
        React.createElement(
            Box, {
                className: "emergency-box",
                sx: {
                    background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                    width: { xs: '100%', sm: '170px' }, // Responsive width
                    height: 200, // Increased height for better icon visibility
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                    color: '#fff',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
                    },
                }
            },
            React.createElement(FaAmbulance, { size: 40 }), // Increased icon size
            React.createElement(Typography, { variant: "h5", mt: 1, mb: 1 }, 'Emergency Cases'),
            React.createElement(
                Link, { href: "tel:7288944972", color: "inherit", underline: "none", sx: { fontSize: '1.2rem', fontWeight: 'bold' } },
                '7288944972'
            )
        ),

        // Doctors Timetable
        React.createElement(
            Box, {
                className: "emergency-box",
                sx: {
                    background: 'linear-gradient(135deg, #1e88e5, #1565c0)',
                    width: { xs: '100%', sm: '170px' }, // Responsive width
                    height: 200, // Increased height for better icon visibility
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                    color: '#fff',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
                    },
                }
            },
            React.createElement(FaClock, { size: 40 }), // Increased icon size
            React.createElement(Typography, { variant: "h5", mt: 1, mb: 1 }, 'Doctors Timetable'),
            React.createElement(
                Button, {
                    variant: "contained",
                    sx: {
                        backgroundColor: '#fff',
                        color: '#1565c0',
                        fontSize: '0.75rem', // Decreased font size for the button
                        padding: '4px 8px', // Decreased padding for smaller button size
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: '#f0f8ff' },
                    }
                },
                'View Timetable'
            )
        ),
    );
};

export default EmergencyInfo;