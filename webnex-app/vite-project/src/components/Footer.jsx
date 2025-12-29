'use client';
import React, { useEffect, useRef } from 'react';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
    const footerRef = useRef(null);
    const bigTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([".footer-col", bigTextRef.current], { clearProps: "all" });

            gsap.fromTo(".footer-col",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out"
                }
            );

            if (bigTextRef.current) {
                gsap.fromTo(bigTextRef.current,
                    { y: 50, opacity: 0, scale: 0.9 },
                    {
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top bottom",
                            toggleActions: "play none none none"
                        },
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out"
                    }
                );
            }
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const sitemap = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    const handleIconHover = (e, isHover) => {
        gsap.to(e.currentTarget, {
            scale: isHover ? 1.2 : 1,
            rotate: isHover ? 15 : 0,
            backgroundColor: isHover ? "#ffffff" : "transparent",
            color: isHover ? "#000000" : "#ffffff",
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    };

    const handleBigTextHover = (isHover) => {
        if (!bigTextRef.current) return;
        gsap.to(bigTextRef.current, {
            color: isHover ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)",
            textShadow: isHover ? "0 0 20px rgba(168, 85, 247, 0.3)" : "none",
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <footer ref={footerRef} className="relative z-50 bg-[#02020a] text-white pt-20 overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-12">
                    <div className="footer-col md:col-span-5">
                        <Link href="/" className="text-4xl font-black italic tracking-tighter mb-8 block">
                            WEB<span className="text-purple-500">NEX</span>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
                            Crafting digital experiences that merge <span className="text-white font-bold">art</span> with <span className="text-white font-bold">technology</span>. We help bold brands speak louder.
                        </p>
                        <div className="flex gap-4">
                            {[FiGithub, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    onMouseEnter={(e) => handleIconHover(e, true)}
                                    onMouseLeave={(e) => handleIconHover(e, false)}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col md:col-span-2">
                        <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Sitemap</h4>
                        <ul className="space-y-4">
                            {sitemap.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path} className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                                        {item.name}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col md:col-span-2">
                        <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Services</h4>
                        <ul className="space-y-4">
                            {['Java Dev', 'React / Next.js', 'UI/UX Design', 'SEO Growth', 'Consulting'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col md:col-span-3">
                        <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-6">Latest trends in tech & design delivered to your inbox.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors hover:scale-105 active:scale-95">
                                <FiArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 pb-8 flex justify-center items-center overflow-hidden">
                    <h2
                        ref={bigTextRef}
                        onMouseEnter={() => handleBigTextHover(true)}
                        onMouseLeave={() => handleBigTextHover(false)}
                        className="text-[13vw] leading-none font-black text-white/10 uppercase select-none transition-all duration-500 whitespace-nowrap cursor-default"
                    >
                        WebNex.co
                    </h2>
                </div>

                <div className="footer-col flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-xs text-gray-500">
                    <p>&copy; 2025 WebNex Digital Agency. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
