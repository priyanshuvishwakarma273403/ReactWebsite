'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiCpu, FiGlobe, FiAward, FiArrowUpRight, FiZap } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
    const containerRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title Animation
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".about-hero",
                    start: "top center",
                }
            });

            // Timeline Items Interaction
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                const direction = i % 2 === 0 ? -100 : 100;
                gsap.from(item, {
                    x: direction,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: 1
                    }
                });
            });

            // Founder Image Parallax
            gsap.to(".founder-img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".founder-section",
                    start: "top bottom",
                    scrub: true
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const stats = [
        { label: "Projects Shipped", value: "50+", icon: FiGlobe },
        { label: "Happy Clients", value: "100%", icon: FiAward },
        { label: "Lines of Code", value: "1M+", icon: FiCode },
        { label: "Coffee Consumed", value: "∞", icon: FiZap },
    ];

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-[#050511] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero Section */}
                <div className="about-hero text-center mb-40 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full pointing-events-none"></div>
                    <h4 className="reveal-text text-purple-400 font-bold tracking-[0.3em] uppercase mb-6">Our Legacy</h4>
                    <h1 className="reveal-text text-5xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-tight">
                        Built For <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Greatness.</span>
                    </h1>
                    <p className="reveal-text text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        We don't just write code; we engineer <span className="text-white font-bold">digital dominance</span>.
                        Webnex is a collective of visionary developers tailored for ambitious brands who refuse to settle for "average".
                    </p>
                </div>

                {/* Stats Section with Glassmorphism */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors group">
                            <stat.icon className="mx-auto text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</h3>
                            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Founder / Visionary Section - Highlighted Request */}
                <div className="founder-section grid md:grid-cols-2 gap-16 items-center mb-40 bg-gradient-to-r from-[#0a0a20] to-[#050511] p-10 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                    {/* Content */}
                    <div className="relative z-10 order-2 md:order-1">
                        <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 font-bold text-sm mb-6">
                            THE MIND BEHIND WEBNEX
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">
                            Himanshu <br />
                            <span className="text-gray-500">Vishwakarma</span>
                        </h2>
                        <h3 className="text-2xl text-white font-bold mb-6">Founder & Lead Architect</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            "I started Webnex with a simple mission: to kill boring websites. In a world full of templates,
                            I wanted to bring back the art of <strong className="text-white">Custom Engineering</strong>.
                            My philosophy is simple – if it doesn't wow the user in 3 seconds, it's failed."
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300">Java Expert</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300">React Core</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300">System Design</span>
                        </div>
                    </div>

                    {/* Visual / Image Placeholder */}
                    <div className="relative order-1 md:order-2 h-full min-h-[400px]">
                        <div className="founder-img absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl rotate-3 opacity-80 blur-sm"></div>
                        <div className="founder-img absolute inset-0 bg-[#1a1a2e] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Placeholder for Founder Image - You can add a real img tag here later */}
                            <FiCpu size={150} className="text-white/10" />
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-xl">Himanshu.V</p>
                                <p className="text-gray-500 text-sm">@webnex_founder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Timeline (Enhanced) */}
                <div className="mb-40 relative">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-20">Our Evolution</h2>
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 hidden md:block"></div>

                    <div className="space-y-24">
                        {[
                            { year: "2023", title: "The Spark", desc: "Started as a solo mission in a small room. Just Himanshu, a laptop, and a lot of coffee. The goal was to master Java & Backend systems.", align: "left" },
                            { year: "2024", title: "The Pivot", desc: "Realized that backend power needs frontend beauty. Integrated React & Three.js to create full-stack masterpieces.", align: "right" },
                            { year: "2025", title: "Webnex Empire", desc: "Rebranded to Webnex. Now a full-fledged agency delivering high-performance digital products globally. We are just getting started.", align: "left" }
                        ].map((item, i) => (
                            <div key={i} className={`timeline-item flex flex-col md:flex-row ${item.align === 'right' ? 'md:flex-row-reverse' : ''} items-center justify-between relative`}>
                                <div className="w-full md:w-5/12"></div>
                                <div className="z-10 bg-[#050511] border-4 border-[#050511] outline outline-1 outline-purple-500 p-3 rounded-full mb-6 md:mb-0 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <div className="w-full md:w-5/12 bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                                    <span className="text-6xl font-black text-white/5 absolute -top-6 right-6 select-none group-hover:text-purple-500/20 transition-colors duration-500">{item.year}</span>
                                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center pb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Enough Talk.</h2>
                    <p className="text-xl text-gray-400 mb-10">Let's build something that makes your competitors jealous.</p>
                    <button
                        onClick={() => router.push('/contact')}
                        className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Project <FiArrowUpRight />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
