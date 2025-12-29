'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Gallery = () => {
    const galleryRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);
    const [lightboxImage, setLightboxImage] = useState(null);

    // Gallery Items Data - using public assets
    const galleryItems = [
        { type: 'image', src: "/assets/img1.png", title: 'Neural Network Interface', category: 'Backend Systems', aspect: 'landscape' },
        { type: 'image', src: "/assets/img2.png", title: 'Cyberpunk Metropolis', category: 'Design Concept', aspect: 'portrait' },
        { type: 'image', src: "/assets/img3.png", title: 'Liquid Motion Design', category: 'Animation', aspect: 'square' },
        { type: 'image', src: "/assets/img4.png", title: 'Next-Gen Dashboard', category: 'UI/UX Design', aspect: 'landscape' },
        { type: 'image', src: "/assets/img5.png", title: 'Organic Code Flow', category: 'Web App', aspect: 'portrait' },
        { type: 'image', src: "/assets/img6.png", title: 'Holographic Data', category: 'Visualization', aspect: 'square' },
        { type: 'image', src: "/assets/img7.png", title: 'Monolithic Structure', category: 'Architecture', aspect: 'landscape' },
        { type: 'image', src: "/assets/img8.png", title: 'Infinite Loop UI', category: 'Experience', aspect: 'portrait' },
        { type: 'image', src: "/assets/img9.png", title: 'Digital Splicing', category: 'Editing', aspect: 'square' },
        { type: 'image', src: "/assets/img11.png", title: 'Quantum Encryption', category: 'Security', aspect: 'landscape' },
        { type: 'image', src: "/assets/img12.png", title: 'Void Interface', category: 'Minimalism', aspect: 'portrait' },
        { type: 'image', src: "/assets/img13.png", title: 'Synthetic Reality', category: 'VR/AR', aspect: 'square' },
        { type: 'image', src: "/assets/img14.png", title: 'Neural Pathway', category: 'Bio-Tech', aspect: 'landscape' },
        { type: 'image', src: "/assets/img15.png", title: 'Silicon Pulse', category: 'Hardware', aspect: 'portrait' },
        { type: 'image', src: "/assets/img16.png", title: 'Core Processor', category: 'Architecture', aspect: 'square' },
        { type: 'image', src: "/assets/img17.png", title: 'Data Stream', category: 'Cloud', aspect: 'landscape' },
        { type: 'image', src: "/assets/img18.png", title: 'Ghost in Machine', category: 'AI', aspect: 'portrait' },
        { type: 'image', src: "/assets/img19.png", title: 'Vector Space', category: 'Geometry', aspect: 'square' },
        { type: 'image', src: "/assets/img20.png", title: 'Plasma Grid', category: 'Energy', aspect: 'landscape' },
        { type: 'image', src: "/assets/img21.png", title: 'Binary Sunset', category: 'Concept', aspect: 'portrait' },
        { type: 'image', src: "/assets/img22.png", title: 'Echo UI', category: 'Interface', aspect: 'square' },
        { type: 'image', src: "/assets/img23.png", title: 'Signal Noise', category: 'Signal', aspect: 'landscape' },
        { type: 'image', src: "/assets/img24.png", title: 'Infinity Arch', category: 'Logic', aspect: 'portrait' },
        { type: 'image', src: "/assets/img25.png", title: 'Terminal Flow', category: 'System', aspect: 'square' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current.children, { y: 100, opacity: 0, rotateX: -90, duration: 1, stagger: 0.2, ease: "power3.out" });

            itemsRef.current.forEach((item, index) => {
                if (!item) return;
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: "top 85%", end: "top 20%", toggleActions: "play none none reverse" },
                    y: 60, opacity: 0, scale: 0.9, rotateY: -15, duration: 0.8
                });
                gsap.to(item, {
                    scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1 },
                    y: -30, ease: "none"
                });
            });
        }, galleryRef);
        return () => ctx.revert();
    }, []);

    const getAspectClass = (aspect) => {
        switch (aspect) {
            case 'portrait': return 'aspect-[3/4]';
            case 'landscape': return 'aspect-[16/9]';
            case 'square': return 'aspect-square';
            default: return 'aspect-[3/4]';
        }
    };

    return (
        <div ref={galleryRef} className="pt-32 pb-20 min-h-screen bg-black text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <div className="aurora-blob w-[600px] h-[600px] bg-purple-700/30 top-[-20%] right-[-10%] rounded-full blur-[150px] animate-blob"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div ref={titleRef} className="mb-16 md:mb-24 text-center">
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase mb-4 tracking-tighter">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">Visual</span>
                    </h1>
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-[#39ff14] to-cyan-400 italic">Playground</span>
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-6 md:space-y-6">
                    {galleryItems.map((item, i) => (
                        <div key={i} ref={el => itemsRef.current[i] = el} className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => item.type === 'image' && setLightboxImage(item)}>
                            <div className={`w-full ${getAspectClass(item.aspect)} relative overflow-hidden bg-gray-900`}>
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-xs md:text-sm font-mono text-[#39ff14] mb-2 uppercase tracking-widest">{item.category}</span>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-3">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn" onClick={() => setLightboxImage(null)}>
                    <button className="absolute top-4 right-4 p-3 bg-white/10 rounded-full" onClick={() => setLightboxImage(null)}><X className="text-white" /></button>
                    <div className="relative max-w-6xl w-full animate-slideUp" onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImage.src} alt={lightboxImage.title} className="w-full h-auto rounded-lg shadow-2xl" />
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold mt-2">{lightboxImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
