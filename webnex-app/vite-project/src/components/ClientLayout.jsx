"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import AIChatbot from '@/components/AIChatbot/AIChatbot';

const ScrollToTop = () => {
    const pathname = usePathname();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
};

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            lenis.destroy();
            clearTimeout(timer);
        };
    }, []);

    return (
        <SessionProvider>
            {loading ? (
                <Loader />
            ) : (
                <div className="animate-fade-in flex flex-col min-h-screen">
                    <Navbar />
                    <ScrollToTop />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                    <AIChatbot />
                </div>
            )}
        </SessionProvider>
    );
}
