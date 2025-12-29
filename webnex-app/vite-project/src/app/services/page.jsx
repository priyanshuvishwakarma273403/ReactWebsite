'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check, ArrowRight, Zap, Shield, TrendingUp, Clock, Users, Award, Rocket } from 'lucide-react';
// import javaLogo from '../assets/java.png'; // Replaced with static path

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const serviceCardsRef = useRef([]);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title Entrance
            const tl = gsap.timeline();
            tl.from(".hero-word", {
                y: 100,
                opacity: 0,
                rotateX: -45,
                duration: 1.2,
                stagger: 0.1,
                ease: "expo.out"
            })
                .from(".hero-subtitle", {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, "-=0.8");

            // Card Entrance Stagger
            gsap.set(".service-card", { y: 100, opacity: 0, scale: 0.8 });

            gsap.to(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "expo.out"
            });

            // Magnetic / Tilt effect for cards
            const handleMouseMove = (e) => {
                serviceCardsRef.current.forEach((card) => {
                    if (!card) return;
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;

                    gsap.to(card, {
                        rotateY: x * 15,
                        rotateX: -y * 15,
                        transformPerspective: 1000,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
            };

            const handleMouseLeave = () => {
                serviceCardsRef.current.forEach((card) => {
                    if (!card) return;
                    gsap.to(card, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            };

            const grid = document.querySelector('.services-grid');
            if (grid) {
                grid.addEventListener('mousemove', handleMouseMove);
                grid.addEventListener('mouseleave', handleMouseLeave);
            }

            return () => {
                if (grid) {
                    grid.removeEventListener('mousemove', handleMouseMove);
                    grid.removeEventListener('mouseleave', handleMouseLeave);
                }
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            id: "01",
            title: "Java Backend Mastery",
            desc: "Enterprise-grade scalable architectures using Spring Boot & Microservices.",
            skills: ["Spring Boot", "Microservices", "Kafka", "PostgreSQL"],
            icon: <Zap className="w-12 h-12 text-orange-500" />,
            color: "from-orange-500/20 to-red-500/20",
            border: "group-hover:border-orange-500/50"
        },
        {
            id: "02",
            title: "Next.js Frontend",
            desc: "Blazing fast, SEO-optimized web experiences with React & Next.js.",
            skills: ["React 18", "Next.js 14", "TailwindCSS", "GSAP"],
            icon: <Rocket className="w-12 h-12 text-cyan-400" />,
            color: "from-cyan-500/20 to-blue-500/20",
            border: "group-hover:border-cyan-500/50"
        },
        {
            id: "03",
            title: "3D & Immersive Web",
            desc: "Interactive 3D environments using Three.js and WebGL technology.",
            skills: ["Three.js", "WebGL", "R3F", "GLSL"],
            icon: <Award className="w-12 h-12 text-purple-500" />,
            color: "from-purple-500/20 to-pink-500/20",
            border: "group-hover:border-purple-500/50"
        },
        {
            id: "04",
            title: "Cyber Security",
            desc: "Bank-grade protection and security auditing for your digital assets.",
            skills: ["Penetration Testing", "OAuth 2.0", "SSL", "Encryption"],
            icon: <Shield className="w-12 h-12 text-green-500" />,
            color: "from-green-500/20 to-emerald-500/20",
            border: "group-hover:border-green-500/50"
        },
        {
            id: "05",
            title: "Cloud Infrastructure",
            desc: "Serverless and highly available cloud deployments on AWS & GCP.",
            skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
            icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
            color: "from-blue-500/20 to-indigo-500/20",
            border: "group-hover:border-blue-500/50"
        },
        {
            id: "06",
            title: "Creative UI/UX",
            desc: "Human-centered design systems and high-fidelity prototypes.",
            skills: ["Figma", "Adobe Suite", "User Research", "Prototyping"],
            icon: <Clock className="w-12 h-12 text-pink-500" />,
            color: "from-pink-500/20 to-purple-500/20",
            border: "group-hover:border-pink-500/50"
        }
    ];

    return (
        <div ref={containerRef} className="pt-32 pb-40 min-h-screen bg-[#050511] text-white overflow-hidden selection:bg-[#39ff14] selection:text-black">

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-24 overflow-hidden">
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-tight flex flex-wrap gap-x-6">
                        <span className="hero-word text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Forge</span>
                        <span className="hero-word text-white">The</span>
                        <span className="hero-word text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#39ff14]">Future</span>
                    </h1>
                    <p className="hero-subtitle mt-8 text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                        We don't follow trends. We create digital ecosystems that define industries.
                        Explore our core modules of innovation.
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            ref={el => serviceCardsRef.current[i] = el}
                            className={`service-card group relative h-[450px] p-10 rounded-[2.5rem] bg-gradient-to-br ${s.color} border border-white/10 backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden ${s.border}`}
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 origin-left">
                                    {s.icon}
                                </div>

                                <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-[0.3em] font-bold">Module {s.id}</span>
                                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter group-hover:text-[#39ff14] transition-colors">{s.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-auto group-hover:text-white transition-colors">{s.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {s.skills.map((skill, idx) => (
                                        <span key={idx} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full font-bold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-[#39ff14]/20 transition-colors duration-700"></div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* CTA Link Appearance */}
                            <div className="absolute bottom-10 right-10 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center p-20 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 relative z-10">Have a vision?</h2>
                    <p className="text-xl text-gray-400 mb-12 relative z-10">Let's build it together in our digital labs.</p>
                    <button className="relative z-10 px-12 py-5 bg-[#39ff14] text-black font-black uppercase tracking-[0.3em] rounded-full hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)]">
                        Initialize Mission
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
