"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const comments = [
    {
        name: "Alex Morgan",
        role: "CEO, FinTech Sol",
        text: "WebNex transformed our legacy Java backend into a state-of-the-art cloud architecture. Simply outstanding work.",
        rating: 5
    },
    {
        name: "Sarah Jenkins",
        role: "Founder, Artistry",
        text: "The visual design they delivered is mind-blowing. Our conversion rates doubled within a month of launch.",
        rating: 5
    },
    {
        name: "David Chen",
        role: "CTO, NextLevel",
        text: "Technical expertise is unmatched. They know how to optimize for performance while keeping the design heavy.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Director, EcoGlobal",
        text: "Professional, timely, and incredibly creative. WebNex is the partner you want for major digital overhauls.",
        rating: 5
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        // Infinite Scroll Animation
        const ctx = gsap.context(() => {
            gsap.to(scrollRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 25,
                repeat: -1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 bg-[#050511] overflow-hidden border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase mb-4">
                    Client <span className="text-purple-500">Love</span>
                </h2>
                <p className="text-gray-400">Trusted by market leaders globally.</p>
            </div>

            {/* Marquee */}
            <div className="flex w-[200%] gap-8" ref={scrollRef}>
                {[...comments, ...comments].map((comment, i) => (
                    <div key={i} className="w-[400px] shrink-0 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-colors duration-300 relative group">
                        <div className="absolute -top-4 -right-4 text-8xl text-purple-600/10 font-serif font-black leading-none group-hover:scale-110 transition-transform">"</div>
                        <div className="flex gap-1 mb-6 text-yellow-500">
                            {[...Array(comment.rating)].map((_, r) => <span key={r}>★</span>)}
                        </div>
                        <p className="text-xl text-gray-300 mb-8 italic relative z-10 font-light">"{comment.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg">
                                {comment.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{comment.name}</h4>
                                <span className="text-xs text-purple-400 uppercase tracking-wider">{comment.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
