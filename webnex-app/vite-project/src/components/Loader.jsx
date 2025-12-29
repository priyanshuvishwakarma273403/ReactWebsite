"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Center, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const ParticleWaves = () => {
    const ref = useRef();

    const particles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const r = 2.5 + Math.random() * 0.5;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            color.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5); // Purplish/Blueish
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        const s = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
        ref.current.scale.set(s, s, s);
    });

    return (
        <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3}>
            <PointMaterial
                transparent
                vertexColors
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
            />
        </Points>
    );
};

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-[#02020a] flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <ParticleWaves />
                </Canvas>
            </div>

            {/* Glowing Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#02020a]/50 to-[#02020a] z-1 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center gap-12">
                <div className="relative group">
                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>

                    <div className="relative flex items-center justify-center">
                        <h1 className="text-8xl md:text-9xl font-black tracking-tighter italic">
                            <span className="text-white">WEB</span>
                            <span className="text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">NEX</span>
                        </h1>

                        {/* Orbiting Ring */}
                        <div className="absolute -inset-10 border-2 border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#39ff14] rounded-full shadow-[0_0_15px_#39ff14]"></div>
                        </div>
                        <div className="absolute -inset-14 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-mono text-purple-400 tracking-[0.8em] uppercase mb-4 animate-pulse">
                            Establishing Neural Link
                        </span>
                        <div className="w-64 h-1 bg-white/5 rounded-full relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute h-full w-full bg-gradient-to-r from-blue-500 via-[#39ff14] to-purple-500 animate-[loading_2s_cubic-bezier(0.85,0,0.15,1)_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
                }
            `}</style>
        </div>
    );
};

export default Loader;
