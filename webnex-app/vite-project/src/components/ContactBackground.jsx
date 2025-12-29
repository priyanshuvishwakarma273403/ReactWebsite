import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const FloatingShapes = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.cos(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 4) / 2;
            meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
            meshRef.current.position.y = Math.sin(t / 1.5) / 10;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[1, 1, 0]}>
                    <torusKnotGeometry args={[0.8, 0.2, 100, 16]} />
                    <meshStandardMaterial color="#8b5cf6" wireframe />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[-2, -1, -2]}>
                    <octahedronGeometry args={[1]} />
                    <meshStandardMaterial color="#06b6d4" wireframe />
                </mesh>
            </Float>
        </group>
    );
};

const ContactBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default ContactBackground;
