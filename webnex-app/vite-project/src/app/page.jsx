'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
            tl.from(".hero-line", { scaleX: 0, duration: 1, ease: "power4.out" })
                .from(".hero-tech-text", { y: 100, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" })
                .from(".hero-main-text", { scale: 0.8, opacity: 0, duration: 1.2, ease: "expo.out" }, "-=0.5")
                .from(".floating-code", { y: 20, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out" }, "-=1");

            // Mouse Move Parallax
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 40;
                const yPos = (clientY / window.innerHeight - 0.5) * 40;

                gsap.to(".hero-main-text", {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.to(".aurora-blob", {
                    x: xPos * -1.5,
                    y: yPos * -1.5,
                    duration: 2,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Stats
            ScrollTrigger.create({
                trigger: "#stats-section",
                start: "top 80%",
                onEnter: () => {
                    const obj = { c: 0, p: 0, k: 0 };
                    gsap.to(obj, {
                        c: 50, p: 120, k: 5000,
                        duration: 2,
                        ease: "power2.out",
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
        <div className="w-full bg-black text-white overflow-hidden font-outfit" ref={heroRef}>

            {/* Background Noise & Grain */}
            <div className="fixed inset-0 bg-grain opacity-20 pointer-events-none z-[1]"></div>

            {/* Dynamic Aurora BG */}
            <div className="fixed inset-0 aurora-bg z-0 opacity-40">
                <div className="aurora-blob w-[800px] h-[800px] bg-purple-600 top-[-20%] left-[-20%] rounded-full blur-[150px] animate-blob"></div>
                <div className="aurora-blob w-[600px] h-[600px] bg-[#39ff14] bottom-[-20%] right-[-20%] rounded-full blur-[150px] animate-blob opacity-20" style={{ animationDelay: '-5s' }}></div>
            </div>

            {/* Floating Code Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <div className="floating-code absolute top-[15%] left-[10%] font-mono text-xs text-[#39ff14]">public class WebNex {'{'}</div>
                <div className="floating-code absolute top-[40%] right-[15%] font-mono text-xs text-purple-500">import {'{'} gsap {'}'} from 'gsap';</div>
                <div className="floating-code absolute bottom-[20%] left-[20%] font-mono text-xs text-blue-400">await dbConnect();</div>
                <div className="floating-code absolute top-[60%] left-[5%] font-mono text-xs text-orange-400">const [data, setData] = useState();</div>
            </div>

            {/* HERO SECTION ULTRA */}
            <section className="min-h-screen relative flex flex-col justify-center items-center px-4 pt-20 z-10 overflow-hidden">

                {/* Decorative Lines */}
                <div className="hero-line absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent opacity-50"></div>
                <div className="hero-line absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" style={{ animationDelay: '0.2s' }}></div>

                <div className="text-center max-w-[90rem] mx-auto relative">
                    <div className="flex justify-between items-center w-full absolute top-0 left-0 -translate-y-24 hidden md:flex opacity-50 font-mono text-xs">
                        <span>SYSTEM: ONLINE</span>
                        <span>LOC: 12.9716° N, 77.5946° E</span>
                        <span>STATUS: READY</span>
                    </div>

                    <h2 className="hero-tech-text text-[#39ff14] font-mono tracking-[0.5em] text-sm md:text-lg mb-8 uppercase animate-pulse">
                        Next Gen Digital Architecture
                    </h2>

                    <h1 className="hero-main-text text-white text-[12vw] leading-[0.85] font-black uppercase font-tech tracking-tighter relative z-20 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        WebNex <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b21b6] via-white to-[#39ff14] animate-gradient-x">Agency</span>
                    </h1>

                    <div className="mt-12 flex flex-col items-center">
                        <p className="hero-tech-text text-xl md:text-2xl text-gray-300 max-w-2xl text-center font-light mb-12">
                            We fuse <span className="font-bold text-white bg-purple-600 px-2 italic">Java Power</span> with <span className="font-bold text-black bg-[#39ff14] px-2 italic">Design Chaos</span>.
                        </p>

                        <button className="group relative px-10 py-5 bg-white text-black font-black text-xl uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 group-hover:text-white transition-colors">Start Project</span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                        </button>
                    </div>
                </div>
            </section>

            {/* SKILLS MARQUEE - Neon Style */}
            <SkillsMarquee />

            {/* STATS SECTION - Redesigned */}
            <section id="stats-section" className="py-32 px-6 relative z-10 border-t border-white/10">
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
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-[#39ff14]/50 transition-colors">
                                    <div className="text-4xl font-black text-[#39ff14] mb-1">6</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Core Services</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                                    <div className="text-4xl font-black text-purple-500 mb-1">50+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Service Categories Preview */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {['Backend Development', 'Frontend Engineering', '3D & WebGL', 'UI/UX Design', 'Cloud Infrastructure', 'Security'].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-black border border-white/20 rounded-full text-sm font-mono hover:border-[#39ff14] hover:text-[#39ff14] transition-all cursor-pointer"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {[
                            { t: "Full Stack Java", d: "Enterprise Grade Systems", c: "bg-blue-900/20" },
                            { t: "React & Next.js", d: "High Performance Web", c: "bg-purple-900/20" },
                            { t: "WebGL & 3D", d: "Immersive Experiences", c: "bg-green-900/20" },
                            { t: "Motion Design", d: "Visual Storytelling", c: "bg-pink-900/20" },
                            { t: "Cloud Ops", d: "AWS / Azure Scaling", c: "bg-orange-900/20" },
                            { t: "Cyber Security", d: "Bank Grade Protection", c: "bg-red-900/20" }
                        ].map((s, i) => (
                            <div
                                key={i}
                                className={`h-80 relative group overflow-hidden border border-white/10 ${s.c} backdrop-blur-sm cursor-pointer transition-all hover:border-[#39ff14]/50 hover:scale-[1.02]`}
                                onClick={() => setSelectedSkill(s.t)}
                            >
                                <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full group-hover:-translate-y-4 transition-transform duration-500">
                                    <div className="text-xs font-mono text-[#39ff14] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{(i + 1).toString().padStart(2, '0')} / SERVICE</div>
                                    <h3 className="text-3xl font-bold uppercase text-white mb-2">{s.t}</h3>
                                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 transform translate-y-4 group-hover:translate-y-0 duration-300">{s.d}</p>
                                </div>

                                <div className="absolute top-4 right-4 text-4xl opacity-50 group-hover:opacity-100 group-hover:text-[#39ff14] transition-all duration-300 group-hover:rotate-45 group-hover:scale-125">↗</div>
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
