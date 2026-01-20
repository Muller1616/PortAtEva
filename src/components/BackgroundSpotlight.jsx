import { useState, useEffect } from 'react';

const BackgroundSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `
  radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(12, 119, 232, 0.05), transparent 40%),
  radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(244, 186, 10, 0.06), transparent 45%),
  radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(6, 241, 61, 0.14), transparent 50%),
  radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(250, 10, 34, 0.07), transparent 55%)
`,
            }}
        />
    );
};

export default BackgroundSpotlight;
