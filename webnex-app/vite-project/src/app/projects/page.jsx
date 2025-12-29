'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink, Github } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const containerRef = useRef(null);
    const projectsListRef = useRef([]);

    const projects = [
        {
            id: 1,
            title: 'TradeNova HFT',
            category: 'High-Frequency Trading',
            video: 'https://cdn.coverr.co/videos/coverr-digital-code-background-3467/1080p.mp4',
            poster: '/assets/img4.png',
            description: 'Ultra-low latency Java trading engine. Optimized for 1M+ transactions/sec using LMAX Disruptor and Zero-GC techniques.',
            tech: ['Java 21', 'Spring Boot', 'Kafka', 'Redis', 'Aeron'],
            impact: 'Sub-10ms Latency',
            color: 'from-orange-600 to-red-500'
        },
        {
            id: 2,
            title: 'Spring Cloud Mesh',
            category: 'Distributed Systems',
            video: 'https://cdn.coverr.co/videos/coverr-online-shopping-on-a-laptop-4518/1080p.mp4',
            poster: '/assets/img11.png',
            description: 'Enterprise Microservices Mesh. Automated scaling, self-healing, and dynamic routing for 500+ service nodes.',
            tech: ['Spring Cloud', 'Kubernetes', 'Docker', 'PostgreSQL'],
            impact: '99.999% Service Avail.',
            color: 'from-blue-600 to-cyan-500'
        },
        {
            id: 3,
            title: 'AI Pulse Insight',
            category: 'Predictive Analytics',
            video: 'https://cdn.coverr.co/videos/coverr-abstract-blue-and-purple-futuristic-background-9895/1080p.mp4',
            poster: '/assets/img1.png',
            description: 'Real-time AI monitoring for Java architectures. Detects anomalies and performance bottlenecks before they occur.',
            tech: ['React', 'TensorFlow', 'Java', 'Prometheus'],
            impact: '40% Cost Optimized',
            color: 'from-purple-600 to-pink-500'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance
            gsap.from(".hero-line", {
                y: 150,
                opacity: 0,
                rotateX: -90,
                duration: 1.5,
                stagger: 0.2,
                ease: "expo.out"
            });

            // Cinematic Card Scroll
            projectsListRef.current.forEach((project, i) => {
                if (!project) return;

                // Entrance
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom",
                        end: "top center",
                        scrub: 1
                    },
                    scale: 0.8,
                    opacity: 0,
                    y: 100
                });

                // Parallax for the video/image inside
                const media = project.querySelector('.project-media');
                gsap.to(media, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    },
                    y: -50,
                    ease: "none"
                });
            });

            // Magnetic Mouse Interaction
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                gsap.to(".project-cursor-follower", {
                    x: clientX,
                    y: clientY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#02020a] text-white pt-32 pb-40 overflow-hidden">

            {/* Custom Follower Decor */}
            <div className="project-cursor-follower fixed top-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-[90rem] mx-auto px-6 relative z-10">
                <div className="mb-32">
                    <h1 className="text-7xl md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] outline-text">
                        <div className="hero-line block text-transparent border-text relative">Selected</div>
                        <div className="hero-line block text-white ml-[10vw]">Works</div>
                    </h1>
                </div>

                <div className="space-y-[20vh]">
                    {projects.map((p, i) => (
                        <div
                            key={p.id}
                            ref={el => projectsListRef.current[i] = el}
                            className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
                        >
                            {/* Ghost Number */}
                            <div className="absolute -left-20 top-0 text-[20rem] font-black text-white/[0.03] select-none pointer-events-none hidden lg:block">
                                0{p.id}
                            </div>

                            {/* Project Media */}
                            <div className="w-full lg:w-3/5 aspect-[16/10] bg-gray-900 rounded-[3rem] overflow-hidden relative border border-white/5 group-hover:border-[#39ff14]/30 transition-colors duration-500 shadow-2xl">
                                <div className="project-media w-full h-[120%] absolute -top-[10%] left-0">
                                    <video
                                        src={p.video}
                                        poster={p.poster}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                        autoPlay loop muted playsInline
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                                    <div className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 transition-transform">
                                        View Case Study
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5 space-y-8">
                                <div className="space-y-2">
                                    <span className="text-[#39ff14] font-mono tracking-[0.4em] uppercase text-sm block">// {p.category}</span>
                                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">{p.title}</h2>
                                </div>

                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {p.tech.map((t, idx) => (
                                        <span key={idx} className="px-4 py-2 border border-white/10 bg-white/5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Success Metric</div>
                                        <div className="text-2xl font-black text-white">{p.impact}</div>
                                    </div>
                                    <div className="text-xs font-mono text-gray-500">2024 REV. 04</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
