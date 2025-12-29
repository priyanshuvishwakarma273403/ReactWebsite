"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram, FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
import { gsap } from 'gsap';

const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navRef = useRef(null);
    const btnRef = useRef(null);
    const pathname = usePathname();

    const isAdmin = session?.user?.role === 'admin';

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([navRef.current, ".nav-link-item", btnRef.current], { clearProps: "all" });

            gsap.fromTo(navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
            );

            gsap.fromTo(".nav-link-item",
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "back.out(1.7)" }
            );

            if (btnRef.current) {
                gsap.fromTo(btnRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: "elastic.out(1, 0.5)" }
                );
            }
        }, navRef);

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            ctx.revert();
        };
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav ref={navRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'py-4 bg-black/90 backdrop-blur-xl border-white/10 shadow-lg' : 'py-6 bg-transparent border-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <span className="text-3xl font-black italic tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                            WEB<span className="text-purple-500 group-hover:text-blue-400">NEX</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                            {links.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`nav-link-item px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${isActive ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Auth Button / User Profile */}
                        <div className="relative">
                            {session ? (
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 pr-4 rounded-full hover:bg-white/10 transition-all"
                                    >
                                        <img src={session.user.image} alt="User" className="w-8 h-8 rounded-full border border-purple-500" />
                                        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-300">{session.user.name.split(' ')[0]}</span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {userMenuOpen && (
                                        <div className="absolute top-full right-0 mt-4 w-48 bg-[#0a0a1a] border border-white/10 rounded-2xl p-2 shadow-2xl animate-fadeIn backdrop-blur-xl">
                                            {isAdmin && (
                                                <Link href="/admin" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 w-full px-4 py-3 text-xs font-bold text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all uppercase tracking-widest">
                                                    <FiSettings /> Admin Panel
                                                </Link>
                                            )}
                                            <button onClick={() => signOut()} className="flex items-center gap-3 w-full px-4 py-3 text-xs font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition-all uppercase tracking-widest">
                                                <FiLogOut /> Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => signIn('google')}
                                    className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Full Screen Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-[#050511] flex flex-col justify-center items-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.2),_rgba(5,5,17,1))]"></div>
                {links.map((link, index) => {
                    const isActive = pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={`relative text-4xl font-black uppercase tracking-tighter transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600' : 'text-gray-500 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                {session && isAdmin && (
                    <Link href="/admin" onClick={() => setIsOpen(false)} className="text-purple-400 text-2xl font-bold uppercase tracking-widest">Admin Dashboard</Link>
                )}

                {session ? (
                    <button onClick={() => signOut()} className="text-red-500 font-bold uppercase tracking-widest mt-4">Sign Out</button>
                ) : (
                    <button onClick={() => signIn('google')} className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full">Sign In</button>
                )}
            </div>
        </>
    );
};

export default Navbar;
