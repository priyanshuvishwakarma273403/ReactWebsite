"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillsMarquee = () => {
    const scrollRef = useRef(null);

    const skills = [
        "JAVA", "SPRING BOOT", "MICROSERVICES", "REACT.JS", "NEXT.JS", "THREE.JS",
        "GSAP", "TAILWINDCSS", "NODE.JS", "DOCKER", "KUBERNETES", "AWS",
        "FIGMA", "AFTER EFFECTS", "BLENDER", "TYPESCRIPT"
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(scrollRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });
        }, scrollRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 border-y border-white/5 bg-[#0a0a16] overflow-hidden whitespace-nowrap relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050511] via-transparent to-[#050511] z-10 pointer-events-none"></div>
            <div className="flex gap-16 item-center w-max" ref={scrollRef}>
                {[...skills, ...skills, ...skills].map((skill, i) => (
                    <span key={i} className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter hover:from-blue-400 hover:to-purple-500 transition-colors duration-300 cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SkillsMarquee;
