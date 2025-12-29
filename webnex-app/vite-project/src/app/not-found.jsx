'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import './not-found.css';

const NotFound = () => {
    const router = useRouter();
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    size: Math.random() * 3 + 'px',
                    duration: Math.random() * 3 + 2 + 's'
                });
            }
            setStars(newStars);
        };
        generateStars();
    }, []);

    return (
        <div className="space-404-container">
            <div className="stars">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            '--duration': star.duration
                        }}
                    />
                ))}
            </div>

            <motion.div className="planet" style={{ width: '200px', height: '200px', top: '10%', right: '10%', background: 'radial-gradient(circle at 30% 30%, #ff4b1f, #1f0f00)', boxShadow: '0 0 60px rgba(255, 75, 31, 0.4)' }} animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="planet" style={{ width: '100px', height: '100px', bottom: '20%', left: '15%', background: 'radial-gradient(circle at 30% 30%, #4b6cb7, #182848)', boxShadow: '0 0 40px rgba(75, 108, 183, 0.4)', opacity: 0.8 }} animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

            <motion.div className="astronaut-container" initial={{ x: -100, y: 100, rotate: -45 }} animate={{ x: [null, 50, -50, 0], y: [null, -50, 50, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ right: '20%', top: '20%' }}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <g id="astronaut">
                        <path fill="#999" d="M140 150 h 220 v 250 h -220 z" rx="30" ry="30" />
                        <path fill="#fff" d="M180 120 h 140 v 280 h -140 z" rx="40" ry="40" />
                        <circle cx="250" cy="120" r="90" fill="#fff" stroke="#ccc" strokeWidth="5" />
                        <circle cx="250" cy="120" r="75" fill="#1a1a2e" />
                        <ellipse cx="230" cy="100" rx="20" ry="10" fill="rgba(255,255,255,0.3)" transform="rotate(-45 230 100)" />
                        <path stroke="#fff" strokeWidth="30" strokeLinecap="round" fill="none" d="M180 180 c -50 20 -80 80 -60 120" />
                        <path stroke="#fff" strokeWidth="30" strokeLinecap="round" fill="none" d="M320 180 c 50 20 80 80 60 120" />
                        <path stroke="#fff" strokeWidth="35" strokeLinecap="round" fill="none" d="M210 380 c -10 40 -10 100 -30 120" />
                        <path stroke="#fff" strokeWidth="35" strokeLinecap="round" fill="none" d="M290 380 c 10 40 10 100 30 120" />
                        <rect x="220" y="220" width="60" height="40" rx="5" fill="#ddd" />
                        <circle cx="235" cy="235" r="5" fill="red" />
                        <circle cx="250" cy="235" r="5" fill="green" />
                        <circle cx="265" cy="235" r="5" fill="blue" />
                    </g>
                </svg>
            </motion.div>

            <motion.div className="content-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <h1 className="title-404">404</h1>
                <h2 className="subtitle">LOST IN SPACE</h2>
                <p className="description">Houston, we have a problem. The page you are looking for has drifted into a black hole or never existed.</p>
                <motion.button className="home-btn-space" onClick={() => router.push('/')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Return to Earth</motion.button>
            </motion.div>
        </div>
    );
};

export default NotFound;
