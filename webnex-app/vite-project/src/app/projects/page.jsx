'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink, Github } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const projectRefs = useRef([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Revolution',
            category: 'Full-Stack Development',
            video: 'https://cdn.coverr.co/videos/coverr-online-shopping-on-a-laptop-4518/1080p.mp4',
            poster: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop',
            description: 'A cutting-edge e-commerce platform built with Next.js, Node.js, and MongoDB.',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
            impact: ['10M+ transactions', '99.9% uptime'],
            year: '2024'
        },
        // ... (Keep other projects or reduce for brevity in migration, keeping it functional)
        {
            id: 2,
            title: 'AI Analytics Dashboard',
            category: 'Data Visualization',
            video: 'https://cdn.coverr.co/videos/coverr-abstract-blue-and-purple-futuristic-background-9895/1080p.mp4',
            poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
            description: 'Real-time analytics platform with AI-powered insights.',
            tech: ['React', 'D3.js', 'Python'],
            impact: ['500K data points/sec'],
            year: '2024'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
            titleTimeline.from(".hero-title-line", { y: 100, opacity: 0, duration: 1.2, stagger: 0.2 })
                .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

            projectRefs.current.forEach((project, index) => {
                if (!project) return;
                gsap.from(project, { scrollTrigger: { trigger: project, start: "top 90%" }, y: 100, opacity: 0, duration: 1 });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a] text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <div className="absolute w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] top-[-20%] left-[-10%] animate-pulse"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24">
                        <div ref={titleRef} className="overflow-hidden">
                            <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none mb-6">
                                <div className="hero-title-line"><span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent inline-block">Selected</span></div>
                                <div className="hero-title-line"><span className="text-white inline-block">Works</span></div>
                            </h1>
                        </div>
                        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 max-w-2xl">Crafting digital experiences that push boundaries.</p>
                    </div>

                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <div key={project.id} ref={el => projectRefs.current[index] = el} onClick={() => setSelectedProject(project)} className="group relative cursor-pointer">
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                                    <div className="aspect-video relative overflow-hidden">
                                        <video src={project.video} poster={project.poster} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" muted loop playsInline autoPlay></video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">{project.title}</h2>
                                            <p className="text-lg text-gray-300 max-w-3xl mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn overflow-y-auto" onClick={() => setSelectedProject(null)}>
                    <button className="absolute top-4 right-4 p-3 bg-white/10 rounded-full" onClick={() => setSelectedProject(null)}><X className="text-white" /></button>
                    <div className="relative max-w-5xl w-full my-8" onClick={(e) => e.stopPropagation()}>
                        <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-2xl">
                            <video src={selectedProject.video} className="w-full h-full object-cover" controls autoPlay loop></video>
                        </div>
                        <h2 className="text-3xl font-black text-white">{selectedProject.title}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
