                                                                                                                                                                                                                                                                           'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { FaJava, FaReact, FaCube, FaAws, FaShieldAlt } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';
import Testimonials from '@/components/Testimonials';
import SkillsMarquee from '@/components/SkillsMarquee';
import SkillDetailModal from '@/components/SkillDetailModal';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
    const heroRef = useRef(null);
    const [counts, setCounts] = useState({ clients: 0, projects: 0, caffeine: 0 });
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animations
            const tl = gsap.timeline();
            tl.from(".hero-line", { scaleX: 0, duration: 1.5, ease: "expo.out" })
                .from(".hero-tech-tag", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1")
                .from(".hero-main-text span", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "expo.out"
                }, "-=0.8")
                .from(".floating-code", {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out"
                }, "-=1")
                .from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");

            // Mouse Parallax & Magnetic Effect
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5);
                const yPos = (clientY / window.innerHeight - 0.5);

                // Subtle Tilt for the whole section
                gsap.to(".hero-content-wrapper", {
                    rotationY: xPos * 10,
                    rotationX: -yPos * 10,
                    duration: 1,
                    ease: "power2.out"
                });

                // Parallax for blobs
                gsap.to(".aurora-blob", {
                    x: xPos * -100,
                    y: yPos * -100,
                    duration: 2,
                    ease: "power2.out"
                });

                // Subtle movement for floating code
                gsap.to(".floating-code", {
                    x: (i) => (i % 2 === 0 ? xPos * 50 : xPos * -50),
                    y: (i) => (i % 2 === 0 ? yPos * 50 : yPos * -50),
                    duration: 1.5,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Stats Counter
            ScrollTrigger.create({
                trigger: "#stats-section",
                start: "top 80%",
                onEnter: () => {
                    const obj = { c: 0, p: 0, k: 0 };
                    gsap.to(obj, {
                        c: 50, p: 120, k: 5000,
                        duration: 3,
                        ease: "expo.out",
                        onUpdate: () => setCounts({
                            clients: Math.round(obj.c),
                            projects: Math.round(obj.p),
                            caffeine: Math.round(obj.k)
                        })
                    });
                }
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-[#02020a] text-white overflow-hidden font-outfit" ref={heroRef}>

            {/* BACKGROUND LAYER: Cinematic Static & Grid */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-white/[0.02] opacity-[0.15] brightness-50"></div>
                <div className="absolute inset-0 hidden md:block bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02020a]/50 to-[#02020a]"></div>
            </div>

            {/* Aurora Glows */}
            <div className="fixed inset-0 z-0 opacity-30">
                <div className="aurora-blob w-[800px] h-[800px] bg-purple-600/40 top-[-20%] left-[-20%] rounded-full blur-[180px]"></div>
                <div className="aurora-blob w-[600px] h-[600px] bg-[#39ff14]/20 bottom-[-20%] right-[-20%] rounded-full blur-[180px]"></div>
            </div>

            {/* SUBTLE FLOATING CODE - Refined as Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
                <div className="floating-code absolute top-[15%] left-[8%] hidden md:block font-mono text-[10px] text-[#39ff14]/10 border-l border-[#39ff14]/20 pl-4 py-2">
                    package com.webnex.core;<br />
                    public class Architecture {'{'} ... {'}'}
                </div>
                <div className="floating-code absolute top-[45%] right-[10%] hidden md:block font-mono text-[10px] text-purple-500/10 border-r border-purple-500/20 pr-4 py-2">
                    import {'{'} motion {'}'} from "framer-motion";<br />
                    const Hero = () =&gt; {'{'} ... {'}'}
                </div>
                <div className="floating-code absolute bottom-[15%] left-[15%] font-mono text-[10px] text-blue-500/10 opacity-40">
                    &lt;Canvas camera={'{'}{'{'} fov: 75 {'}'}{'}'} /&gt;
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="min-h-screen relative flex flex-col justify-center items-center px-4 pt-20 z-10 [perspective:1000px]">

                <div className="hero-content-wrapper text-center max-w-[90rem] mx-auto relative transition-transform duration-200">

                    {/* Decorative Top Label */}
                    <div className="hero-tech-tag inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
                        <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-400">System Status: Optimal</span>
                    </div>

                    <h1 className="hero-main-text flex flex-col text-7xl sm:text-8xl md:text-[14vw] leading-[0.85] md:leading-[0.8] font-black uppercase tracking-tighter filter drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <span className="text-white">WebNex</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-[#39ff14] animate-gradient-x py-2 md:py-4">Agency</span>
                    </h1>

                    <div className="hero-cta mt-12 flex flex-col items-center">
                        <p className="text-lg md:text-xl text-gray-400 max-w-xl text-center font-light mb-8 leading-relaxed">
                            We fuse <span className="text-white font-medium border-b border-[#39ff14]/50">Java Power</span> with
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 px-1">Design Chaos</span>
                            to build iconic digital architecture.
                        </p>

                        <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600/20 via-[#39ff14]/10 to-cyan-500/20 text-white border-2 border-[#39ff14] font-black text-sm uppercase tracking-[0.25em] overflow-hidden transition-all duration-500 rounded-full hover:bg-gradient-to-r hover:from-[#39ff14] hover:via-[#39ff14] hover:to-[#39ff14] hover:text-black hover:tracking-[0.35em] hover:scale-105 hover:border-white shadow-[0_0_40px_rgba(57,255,20,0.4),0_0_80px_rgba(147,51,234,0.2)] hover:shadow-[0_0_60px_rgba(57,255,20,0.8),0_0_120px_rgba(147,51,234,0.4)] backdrop-blur-md">
                            <span className="relative z-10 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-[#39ff14] via-white to-cyan-400 group-hover:from-black group-hover:via-black group-hover:to-black">Start Project</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                        </button>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] [writing-mode:vertical-lr] mb-8">Scroll</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#39ff14] to-transparent animate-bounce"></div>
                </div>
            </section>

            <SkillsMarquee />

            <section id="stats-section" className="py-40 px-6 relative z-10 border-t border-white/5 bg-[#02020a]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {[
                        { label: "Active Users", value: counts.clients + "K+" },
                        { label: "Commits", value: counts.projects + "K" },
                        { label: "Uptime", value: "99.9%" }
                    ].map((stat, i) => (
                        <div key={i} className="py-10 md:py-0 md:px-10 text-center group hover:bg-white/5 transition-colors duration-500">
                            <div className="text-6xl md:text-8xl font-tech font-bold text-white mb-4 group-hover:text-[#39ff14] transition-colors">{stat.value}</div>
                            <div className="text-gray-500 text-sm tracking-[0.3em] uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES - "BAWAAL" Grid */}
            <section className="py-32 px-4 md:px-12 relative z-10">
                <div className="max-w-[90rem] mx-auto">

                    {/* Services Intro Section */}
                    <div className="mb-24 border-l-4 border-[#39ff14] pl-8 md:pl-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                            <div className="max-w-3xl">
                                <span className="text-[#39ff14] font-mono text-sm tracking-[0.3em] uppercase block mb-4">// What We Do</span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                                    Building The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#39ff14]">Future</span> of Digital
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    From enterprise-grade backends to stunning user experiences, we craft solutions
                                    that don't just work—they <span className="text-white font-bold">dominate</span>.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-6 min-w-[280px]">
                                <div className="bg-gradient-to-br from-[#39ff14]/10 to-transparent border border-white/10 rounded-2xl p-4 hover:border-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm group cursor-pointer">
                                    <div className="text-4xl font-black text-[#39ff14] mb-1 group-hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all">6</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">Core Services</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-white/10 rounded-2xl p-4 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm group cursor-pointer">
                                    <div className="text-4xl font-black text-purple-500 mb-1 group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] transition-all">50+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Service Categories Preview */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {['Backend Development', 'Frontend Engineering', '3D & WebGL', 'UI/UX Design', 'Cloud Infrastructure', 'Security'].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-gradient-to-r from-white/5 to-transparent border border-white/20 rounded-full text-sm font-mono hover:border-[#39ff14] hover:text-[#39ff14] hover:bg-gradient-to-r hover:from-[#39ff14]/10 hover:to-purple-600/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#39ff14] animate-pulse"></span>
                                Click any service below to explore in detail
                            </div>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black uppercase mb-20 text-stroke-1 hover:text-stroke-2 transition-all duration-500 cursor-default">
                        Our Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: "Full Stack Java", d: "Enterprise Grade Systems", c: "bg-blue-900/20", i: FaJava },
                            { t: "React & Next.js", d: "High Performance Web", c: "bg-purple-900/20", i: FaReact },
                            { t: "WebGL & 3D", d: "Immersive Experiences", c: "bg-green-900/20", i: FaCube },
                            { t: "Motion Design", d: "Visual Storytelling", c: "bg-pink-900/20", i: SiFramer },
                            { t: "Cloud Ops", d: "AWS / Azure Scaling", c: "bg-orange-900/20", i: FaAws },
                            { t: "Cyber Security", d: "Bank Grade Protection", c: "bg-red-900/20", i: FaShieldAlt }
                        ].map((s, i) => (
                            <div
                                key={i}
                                className={`h-80 relative group overflow-hidden border-2 border-white/10 ${s.c} backdrop-blur-md cursor-pointer transition-all duration-500 rounded-[2rem] hover:border-[#39ff14] hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(57,255,20,0.3),0_0_80px_rgba(147,51,234,0.2)] hover:bg-gradient-to-br hover:from-[#39ff14]/10 hover:via-transparent hover:to-purple-600/10`}
                                onClick={() => setSelectedSkill(s.t)}
                            >
                                <div className="absolute inset-0 bg-black opacity-85 group-hover:opacity-30 transition-opacity duration-500"></div>

                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/0 via-purple-500/0 to-cyan-500/0 group-hover:from-[#39ff14]/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                                <div className="absolute top-8 left-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                    <s.i className="w-16 h-16 text-white/30 group-hover:text-[#39ff14] transition-all duration-500 drop-shadow-[0_0_0px_rgba(57,255,20,0)] group-hover:drop-shadow-[0_0_20px_rgba(57,255,20,0.8)]" strokeWidth={1.5} />
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full group-hover:-translate-y-4 transition-transform duration-500">
                                    <div className="text-xs font-mono text-[#39ff14] mb-2 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">{(i + 1).toString().padStart(2, '0')} / SERVICE</div>
                                    <h3 className="text-3xl font-bold uppercase text-white mb-2 group-hover:text-[#39ff14] transition-colors duration-300">{s.t}</h3>
                                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 transform translate-y-4 group-hover:translate-y-0 duration-300 group-hover:text-gray-200">{s.d}</p>
                                </div>

                                <div className="absolute top-4 right-4 text-4xl opacity-50 group-hover:opacity-100 group-hover:text-[#39ff14] transition-all duration-300 group-hover:rotate-45 group-hover:scale-125 drop-shadow-[0_0_0px_rgba(57,255,20,0)] group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
                                    <ArrowUpRight className="w-8 h-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA section preserved ... */}
            <section className="py-40 text-center px-6 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#39ff14]/10"></div>
                <h2 className="text-5xl md:text-9xl font-black uppercase mb-10 relative z-10 font-tech mix-blend-overlay">
                    Ready Now?
                </h2>
                <button className="relative z-10 px-12 py-6 bg-[#39ff14] text-black font-black text-xl uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_50px_rgba(57,255,20,0.4)] clip-path-slant">
                    Init_Project.exe
                </button>
            </section>

            {/* Skill Detail Modal */}
            {selectedSkill && (
                <SkillDetailModal
                    skill={selectedSkill}
                    onClose={() => setSelectedSkill(null)}
                />
            )}

        </div>
    );
};

export default Home;
