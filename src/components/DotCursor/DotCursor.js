import React, { useEffect, useState } from 'react';
import './DotCursor.css'; // Import CSS for styling

const DotCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return React.createElement(
        'div', {
            className: 'dot-cursor',
            style: { left: `${position.x}px`, top: `${position.y}px` },
        }
    );
};

export default DotCursor;