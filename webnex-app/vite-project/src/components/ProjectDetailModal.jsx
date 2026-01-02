"use client";
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Tag, Layers } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Disable background scrolling
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        const prevHtml = html.style.overflow;
        const prevBody = body.style.overflow;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        return () => {
            html.style.overflow = prevHtml;
            body.style.overflow = prevBody;
        };
    }, []);

    if (!project) return null;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* MODAL CONTAINER */}
            <div
                className="relative w-full max-w-7xl h-[90vh] bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex flex-col md:flex-row border border-white/10 shadow-[0_0_100px_rgba(57,255,20,0.1)] animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-[#39ff14] text-white hover:text-black rounded-full border border-white/10 transition-all duration-300"
                >
                    <X size={24} />
                </button>

                {/* LEFT: CAROUSEL (60%) */}
                <div className="w-full md:w-[60%] h-[40vh] md:h-full relative bg-gray-900 group">
                    <img
                        src={project.gallery[currentImageIndex]}
                        alt={`Project view ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/80 pointer-events-none" />

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={prevImage}
                            className="p-3 rounded-full bg-black/50 hover:bg-[#39ff14] text-white hover:text-black backdrop-blur-md border border-white/10 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="p-3 rounded-full bg-black/50 hover:bg-[#39ff14] text-white hover:text-black backdrop-blur-md border border-white/10 transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.gallery.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#39ff14]' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT: CONTENT (40%) */}
                <div className="w-full md:w-[40%] h-full overflow-y-auto p-8 md:p-12 bg-black/40 backdrop-blur-md border-l border-white/5">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-[#39ff14]/10 text-[#39ff14] text-xs font-mono font-bold uppercase tracking-widest border border-[#39ff14]/20">
                                {project.category}
                            </span>
                            <span className="text-gray-500 text-xs font-mono">2024</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
                            {project.title}
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Stats/Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Impact</div>
                            <div className="text-xl font-bold text-white">{project.impact}</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Timeline</div>
                            <div className="text-xl font-bold text-white">8 Weeks</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-10">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Layers size={16} className="text-[#39ff14]" />
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="space-y-6 text-gray-400 leading-relaxed border-t border-white/10 pt-8">
                        <p>
                            This project represents a breakthrough in {project.category.toLowerCase()}.
                            We utilized advanced algorithms and state-of-the-art architecture to deliver
                            unparalleled performance and user experience.
                        </p>
                        <p>
                            The system handles massive concurrency while maintaining sub-millisecond latency,
                            proving that Java based microservices can compete with low-level languages in
                            high-frequency scenarios.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col gap-4">
                        <button className="w-full py-4 bg-[#39ff14] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                            <ExternalLink size={20} />
                            Launch Live Demo
                        </button>
                        <button className="w-full py-4 bg-white/5 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10">
                            <Github size={20} />
                            View Source Code
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
