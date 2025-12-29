'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { gsap } from 'gsap';
import { Check, X } from 'lucide-react';
import { submitContact } from '@/actions/contact';

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full mt-10 py-6 bg-[#39ff14] text-black font-black text-xl uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all relative overflow-hidden group/btn font-tech shadow-[0_0_40px_rgba(57,255,20,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span className="relative z-10">{pending ? 'Transmitting...' : 'Transmit Signal →'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 z-0"></div>
        </button>
    );
};

const Contact = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const contactCardsRef = useRef([]);
    const formFieldsRef = useRef([]);
    const blobsRef = useRef([]);

    // Server Action State
    const [state, formAction] = useFormState(submitContact, null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            const titleChars = titleRef.current.querySelectorAll('.title-word');
            tl.from(titleChars, { y: 100, rotateX: -90, opacity: 0, duration: 1, stagger: 0.1, transformOrigin: "top center" });

            tl.from(contactCardsRef.current, { y: 50, opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.1, clearProps: "all" }, "-=0.5");
            tl.from(formRef.current, { y: 50, opacity: 0, duration: 1, clearProps: "opacity" }, "-=0.8");
            tl.from(formFieldsRef.current, { x: 100, opacity: 0, duration: 0.8, stagger: 0.15, clearProps: "all" }, "-=0.6");

            gsap.to(contactCardsRef.current, { y: -10, duration: 2, stagger: 0.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const moveX = (clientX - centerX) / 50;
                const moveY = (clientY - centerY) / 50;

                gsap.to(blobsRef.current[0], { x: -moveX, y: -moveY, duration: 1, ease: "power2.out" });
                gsap.to(blobsRef.current[1], { x: moveX * 0.5, y: moveY * 0.5, duration: 1.2, ease: "power2.out" });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen pt-24 px-4 md:px-12 bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <div ref={el => blobsRef.current[0] = el} className="aurora-blob w-[500px] h-[500px] bg-purple-700/40 top-[-10%] left-[-10%] rounded-full mix-blend-screen animate-blob"></div>
                <div ref={el => blobsRef.current[1] = el} className="aurora-blob w-[600px] h-[600px] bg-blue-700/40 bottom-[-10%] right-[-10%] rounded-full mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="aurora-blob w-[400px] h-[400px] bg-[#39ff14] top-[40%] left-[30%] rounded-full mix-blend-overlay blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl w-full flex flex-col lg:flex-row relative z-10 gap-12 lg:gap-24 h-full items-center mb-20">

                <div className="w-full lg:w-1/2">
                    <div className="inline-block px-4 py-1 border border-[#39ff14] rounded-full text-[#39ff14] text-xs font-bold tracking-[0.2em] mb-6 uppercase">● Direct Access</div>
                    <h1 ref={titleRef} className="text-7xl md:text-9xl font-black uppercase mb-6 tracking-tighter leading-[0.85] font-tech text-white">
                        <span className="title-word inline-block">Let's</span> <br />
                        <span className="title-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-cyan-400">Collide</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 border-l-4 border-[#39ff14] pl-6">
                        Stop playing safe. Let's build something that destroys the competition.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { l: "Email", v: "hello@webnex.co.in", c: "hover:text-[#39ff14]" },
                            { l: "Phone", v: "+91 98765 43210", c: "hover:text-cyan-400" },
                            { l: "Studio", v: "Bengaluru, KA", c: "hover:text-purple-400" },
                            { l: "Socials", v: "@webnex_agency", c: "hover:text-pink-400" }
                        ].map((item, i) => (
                            <div key={i} ref={el => contactCardsRef.current[i] = el} className={`p-6 bg-white/5 border border-white/10 backdrop-blur-sm group cursor-pointer transition-all hover:bg-white/10 hover:scale-105 hover:border-[#39ff14]/50`}>
                                <div className="text-xs uppercase text-gray-500 font-bold mb-2 tracking-wider">{item.l}</div>
                                <div className={`text-lg font-bold transition-colors ${item.c}`}>{item.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <form
                        ref={formRef}
                        action={formAction}
                        className="bg-gray-900/90 backdrop-blur-md p-8 md:p-12 border-2 border-[#39ff14]/50 relative overflow-hidden group shadow-[0_0_50px_rgba(57,255,20,0.2)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <h3 ref={el => formFieldsRef.current[0] = el} className="text-3xl font-tech font-bold mb-8 uppercase text-white relative z-10">
                            Initiate Sequence
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div ref={el => formFieldsRef.current[1] = el}>
                                <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">Name Request</label>
                                <input name="name" required type="text" className="w-full bg-black/50 border-2 border-white/30 py-4 px-4 text-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] focus:bg-black/70 transition-all font-mono focus:shadow-[0_0_20px_rgba(57,255,20,0.3)]" placeholder="Enter your name..." style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }} />
                                {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
                            </div>

                            <div ref={el => formFieldsRef.current[2] = el}>
                                <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                                <input name="email" required type="email" className="w-full bg-black/50 border-2 border-white/30 py-4 px-4 text-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] focus:bg-black/70 transition-all font-mono focus:shadow-[0_0_20px_rgba(57,255,20,0.3)]" placeholder="your.email@example.com" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }} />
                                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
                            </div>

                            <div ref={el => formFieldsRef.current[3] = el}>
                                <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">Mission Type</label>
                                <select name="missionType" className="w-full bg-black/50 border-2 border-white/30 py-4 px-4 text-xl text-white focus:outline-none focus:border-[#39ff14] focus:bg-black/70 transition-all font-mono cursor-pointer focus:shadow-[0_0_20px_rgba(57,255,20,0.3)]" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
                                    <option className="bg-gray-900 text-white py-2" value="General">Select Mission Type</option>
                                    <option className="bg-gray-900 text-white py-2" value="Full Scale Development">Full Scale Development</option>
                                    <option className="bg-gray-900 text-white py-2" value="UI/UX Overhaul">UI/UX Overhaul</option>
                                    <option className="bg-gray-900 text-white py-2" value="Brand Identity">Brand Identity</option>
                                    <option className="bg-gray-900 text-white py-2" value="Consulting">Consulting</option>
                                </select>
                            </div>

                            <div ref={el => formFieldsRef.current[4] = el}>
                                <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">Mission Brief</label>
                                <textarea name="message" className="w-full bg-black/50 border-2 border-white/30 py-4 px-4 text-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] focus:bg-black/70 transition-all font-mono h-32 resize-none focus:shadow-[0_0_20px_rgba(57,255,20,0.3)]" placeholder="Tell us about your project..." style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}></textarea>
                                {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
                            </div>
                        </div>

                        <div ref={el => formFieldsRef.current[5] = el}>
                            <SubmitButton />
                        </div>
                        {state?.message && !state?.success && (
                            <div className="mt-4 text-center text-red-500 font-mono text-sm uppercase tracking-widest">{state.message}</div>
                        )}
                    </form>
                </div>
            </div>

            {state?.success && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
                    <div className="bg-gray-900 border-2 border-[#39ff14] p-8 md:p-12 rounded-lg shadow-[0_0_50px_rgba(57,255,20,0.3)] text-center max-w-lg w-full relative animate-slideUp">
                        <button
                            onClick={() => window.location.reload()}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#39ff14]/20 border border-[#39ff14] mb-6 text-[#39ff14]">
                            <Check size={48} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-tech uppercase mb-4 text-white">Transmission Received</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Thank you. Your mission brief has been securely logged. <br />
                            <span className="text-[#39ff14]">WebNex HQ will establish contact shortly.</span>
                        </p>
                        <button onClick={() => window.location.reload()} className="px-8 py-3 bg-[#39ff14] text-black font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)]">Close Comm Check</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
