"use client";
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
const javaLogo = '/assets/java.png';

const SkillDetailModal = ({ skill, onClose }) => {

    // Disable background scrolling completely
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

    if (!skill) return null;

    const skillDetails = {
        "Full Stack Java": {
            icon: javaLogo,
            isImage: true,
            title: "Full Stack Java Development",
            tagline: "Enterprise-Grade Power Systems",
            description: "We architect bulletproof backend systems using cutting-edge Java technologies that scale to millions of users.",
            technologies: [
                "Spring Boot & Spring Cloud",
                "Microservices Architecture",
                "Hibernate & JPA",
                "RESTful APIs & GraphQL",
                "PostgreSQL, MySQL, MongoDB",
                "Redis & Caching Strategies",
                "Apache Kafka & RabbitMQ",
                "Docker & Kubernetes"
            ],
            features: [
                "🚀 High-performance, scalable systems",
                "🔒 Bank-grade security implementations",
                "⚡ Real-time data processing",
                "📊 Advanced analytics & reporting",
                "🔄 CI/CD pipeline automation",
                "☁️ Cloud-native deployments (AWS, Azure)"
            ],
            useCases: [
                "E-commerce platforms handling 1M+ transactions/day",
                "Financial systems with real-time processing",
                "Enterprise resource planning (ERP) solutions",
                "Healthcare management systems"
            ],
            gradient: "from-blue-600 via-blue-500 to-cyan-400"
        },
        "Java Backend Mastery": {
            icon: javaLogo,
            isImage: true,
            title: "Java Backend Mastery",
            tagline: "Enterprise-Grade Power Systems",
            description: "We architect bulletproof backend systems using cutting-edge Java technologies that scale to millions of users.",
            technologies: [
                "Spring Boot & Spring Cloud",
                "Microservices Architecture",
                "Hibernate & JPA",
                "RESTful APIs & GraphQL",
                "PostgreSQL, MySQL, MongoDB",
                "Redis & Caching Strategies",
                "Apache Kafka & RabbitMQ",
                "Docker & Kubernetes"
            ],
            features: [
                "🚀 High-performance, scalable systems",
                "🔒 Bank-grade security implementations",
                "⚡ Real-time data processing",
                "📊 Advanced analytics & reporting",
                "🔄 CI/CD pipeline automation",
                "☁️ Cloud-native deployments (AWS, Azure)"
            ],
            useCases: [
                "E-commerce platforms handling 1M+ transactions/day",
                "Financial systems with real-time processing",
                "Enterprise resource planning (ERP) solutions",
                "Healthcare management systems"
            ],
            gradient: "from-orange-500 via-red-500 to-yellow-500"
        },
        "React & Next.js": {
            icon: "⚛️",
            title: "React & Next.js Development",
            tagline: "Lightning-Fast Modern Web",
            description: "Building blazing-fast, SEO-optimized web applications with the latest React ecosystem and server-side rendering.",
            technologies: [
                "React 18+ with Hooks",
                "Next.js 14 (App Router)",
                "TypeScript",
                "Tailwind CSS & Styled Components",
                "Redux Toolkit & Zustand",
                "React Query & SWR",
                "Framer Motion & GSAP",
                "Vercel & Netlify Deployment"
            ],
            features: [
                "⚡ Ultra-fast page loads (<1s)",
                "🎨 Pixel-perfect responsive design",
                "📱 Progressive Web Apps (PWA)",
                "🔍 SEO optimized architecture",
                "♿ WCAG accessibility compliance",
                "🎭 Smooth animations & interactions"
            ],
            useCases: [
                "SaaS dashboards with real-time data",
                "E-commerce storefronts with high conversion",
                "Marketing websites with perfect SEO",
                "Social media platforms & communities"
            ],
            gradient: "from-purple-600 via-pink-500 to-rose-400"
        },
        "Next.js Frontend": {
            icon: "🚀",
            title: "Next.js Frontend Architecture",
            tagline: "Blazing Fast Web Experiences",
            description: "Building blazing-fast, SEO-optimized web applications with the latest React ecosystem and server-side rendering.",
            technologies: [
                "React 18+ with Hooks",
                "Next.js 14 (App Router)",
                "TypeScript",
                "Tailwind CSS & Styled Components",
                "Redux Toolkit & Zustand",
                "React Query & SWR",
                "Framer Motion & GSAP",
                "Vercel & Netlify Deployment"
            ],
            features: [
                "⚡ Ultra-fast page loads (<1s)",
                "🎨 Pixel-perfect responsive design",
                "📱 Progressive Web Apps (PWA)",
                "🔍 SEO optimized architecture",
                "♿ WCAG accessibility compliance",
                "🎭 Smooth animations & interactions"
            ],
            useCases: [
                "SaaS dashboards with real-time data",
                "E-commerce storefronts with high conversion",
                "Marketing websites with perfect SEO",
                "Social media platforms & communities"
            ],
            gradient: "from-cyan-500 via-blue-500 to-indigo-500"
        },
        "WebGL & 3D": {
            icon: "🎮",
            title: "WebGL & 3D Experiences",
            tagline: "Immersive Digital Worlds",
            description: "Creating jaw-dropping 3D experiences and interactive visualizations that push the boundaries of web technology.",
            technologies: [
                "Three.js & React Three Fiber",
                "WebGL & WebGPU",
                "GLSL Shaders",
                "Blender & 3D Modeling",
                "Physics Engines (Cannon.js, Rapier)",
                "Post-processing Effects",
                "AR/VR Integration (WebXR)",
                "Optimized 3D Asset Loading"
            ],
            features: [
                "🎨 Photorealistic 3D rendering",
                "🎮 Interactive 3D environments",
                "🌈 Custom shader effects",
                "📦 Optimized 3D model loading",
                "🎯 High-performance animations",
                "🥽 AR/VR ready experiences"
            ],
            useCases: [
                "Product configurators & visualizers",
                "Virtual showrooms & galleries",
                "Interactive data visualizations",
                "Gaming experiences in browser"
            ],
            gradient: "from-green-600 via-emerald-500 to-teal-400"
        },
        "3D & Immersive Web": {
            icon: "🧊",
            title: "3D & Immersive Web",
            tagline: "Interactive Digital Dimensions",
            description: "Creating jaw-dropping 3D experiences and interactive visualizations that push the boundaries of web technology.",
            technologies: [
                "Three.js & React Three Fiber",
                "WebGL & WebGPU",
                "GLSL Shaders",
                "Blender & 3D Modeling",
                "Physics Engines (Cannon.js, Rapier)",
                "Post-processing Effects",
                "AR/VR Integration (WebXR)",
                "Optimized 3D Asset Loading"
            ],
            features: [
                "🎨 Photorealistic 3D rendering",
                "🎮 Interactive 3D environments",
                "🌈 Custom shader effects",
                "📦 Optimized 3D model loading",
                "🎯 High-performance animations",
                "🥽 AR/VR ready experiences"
            ],
            useCases: [
                "Product configurators & visualizers",
                "Virtual showrooms & galleries",
                "Interactive data visualizations",
                "Gaming experiences in browser"
            ],
            gradient: "from-purple-600 via-pink-500 to-rose-400"
        },
        "Cyber Security": {
            icon: "🛡️",
            title: "Cyber Security & Auditing",
            tagline: "Bank-Grade Digital Protection",
            description: "Comprehensive security solutions protecting your digital assets with enterprise-grade encryption and penetration testing.",
            technologies: [
                "Penetration Testing Tools",
                "OAuth 2.0 & OIDC",
                "SSL/TLS Encryption",
                "WAF Implementation",
                "Security Auditing",
                "Identity Management",
                "GDPR & HIPAA Compliance",
                "Zero Trust Architecture"
            ],
            features: [
                "🔒 End-to-end encryption",
                "🕵️ Real-time threat monitoring",
                "🛡️ DDoS protection",
                "🔑 Secure authentication flows",
                "📝 Automated security audits",
                "🚫 Vulnerability scanning"
            ],
            useCases: [
                "FinTech application security",
                "Healthcare data protection",
                "Enterprise identity management",
                "Secure payment processing"
            ],
            gradient: "from-green-500 via-emerald-600 to-teal-500"
        },
        "Cloud Infrastructure": {
            icon: "☁️",
            title: "Cloud Infrastructure & DevOps",
            tagline: "Scalable Serverless Architecture",
            description: "Designing and managing robust cloud infrastructures that ensure high availability, scalability, and cost-efficiency.",
            technologies: [
                "AWS (EC2, Lambda, S3)",
                "Google Cloud Platform",
                "Docker & Kubernetes",
                "Terraform (IaC)",
                "CI/CD (GitHub Actions, Jenkins)",
                "Prometheus & Grafana",
                "Serverless Framework",
                "Nginx & Load Balancing"
            ],
            features: [
                "📈 Auto-scaling capabilities",
                "🌍 Global content delivery (CDN)",
                "🔄 Automated deployment pipelines",
                "💰 Cost optimization strategies",
                "🛡️ Cloud security best practices",
                "⏱️ 99.99% Uptime SLAs"
            ],
            useCases: [
                "High-traffic web applications",
                "Microservices orchestration",
                "Big data processing pipelines",
                "Global enterprise networks"
            ],
            gradient: "from-blue-500 via-indigo-600 to-violet-500"
        },
        "Cloud Ops": {
            icon: "☁️",
            title: "Cloud Operations",
            tagline: "Scalable Serverless Architecture",
            description: "Designing and managing robust cloud infrastructures that ensure high availability, scalability, and cost-efficiency.",
            technologies: [
                "AWS (EC2, Lambda, S3)",
                "Google Cloud Platform",
                "Docker & Kubernetes",
                "Terraform (IaC)",
                "CI/CD (GitHub Actions, Jenkins)",
                "Prometheus & Grafana",
                "Serverless Framework",
                "Nginx & Load Balancing"
            ],
            features: [
                "📈 Auto-scaling capabilities",
                "🌍 Global content delivery (CDN)",
                "🔄 Automated deployment pipelines",
                "💰 Cost optimization strategies",
                "🛡️ Cloud security best practices",
                "⏱️ 99.99% Uptime SLAs"
            ],
            useCases: [
                "High-traffic web applications",
                "Microservices orchestration",
                "Big data processing pipelines",
                "Global enterprise networks"
            ],
            gradient: "from-orange-500 via-amber-600 to-yellow-500"
        },
        "Creative UI/UX": {
            icon: "🎨",
            title: "Creative UI/UX Design",
            tagline: "Human-Centered Digital Art",
            description: "Crafting intuitive and visually stunning user interfaces that drive engagement and deliver exceptional user experiences.",
            technologies: [
                "Figma & Adobe XD",
                "Adobe Creative Suite",
                "Prototyping & Wireframing",
                "User Research & Personas",
                "Interaction Design",
                "Design Systems",
                "Accessibility Standards",
                "Usability Testing"
            ],
            features: [
                "✨ Pixel-perfect visual design",
                "🧠 Intuitive information architecture",
                "📱 Mobile-first approach",
                "♿ Inclusive design practices",
                "🔄 Iterative design process",
                "📊 Data-driven design decisions"
            ],
            useCases: [
                "Mobile app interfaces",
                "Complex web dashboards",
                "E-commerce user journeys",
                "Brand identity systems"
            ],
            gradient: "from-pink-500 via-rose-500 to-purple-500"
        },
        "Motion Design": {
            icon: "🎬",
            title: "Motion Design & Animation",
            tagline: "Bringing Interfaces to Life",
            description: "Adding fluid motion and captivating animations to web experiences to guide users and create moments of delight.",
            technologies: [
                "Framer Motion",
                "GSAP (GreenSock)",
                "Lottie Animations",
                "CSS Animations & Transitions",
                "SVG Animation",
                "Canvas API",
                "After Effects",
                "Rive"
            ],
            features: [
                "🌊 Fluid page transitions",
                "👆 Micro-interactions",
                "🎭 Complex scroll animations",
                "✨ Particle effects",
                "📦 SVG morphing",
                "🚀 Performance-optimized motion"
            ],
            useCases: [
                "Interactive storytelling",
                "Loading sequences",
                "Data visualization animations",
                "Brand motion languages"
            ],
            gradient: "from-pink-500 via-purple-500 to-indigo-500"
        }
    };

    const details = skillDetails[skill];
    if (!details) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={onClose}
            />

            {/* MODAL */}
            <div
                onWheelCapture={(e) => e.stopPropagation()}
                className="relative 
                bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95
                backdrop-blur-2xl 
                border-2 border-[#39ff14]/30
                max-w-5xl w-full
                max-h-[90vh]
                overflow-y-auto
                overscroll-contain
                pointer-events-auto
                rounded-[2.5rem]
                shadow-[0_0_80px_rgba(57,255,20,0.3),0_0_120px_rgba(147,51,234,0.2)]
                animate-slideUp"
            >

                {/* HEADER */}
                <div className={`bg-gradient-to-r ${details.gradient} p-8 relative rounded-t-[2.5rem]`}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="absolute top-6 right-6 z-50 p-3 bg-black/60 hover:bg-[#39ff14] rounded-full border border-white/20 hover:border-[#39ff14] transition-all"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-2">
                        {details.title}
                    </h2>
                    <p className="text-xl text-white/95 italic">
                        {details.tagline}
                    </p>
                </div>

                {/* CONTENT */}
                <div className="p-8 space-y-8">

                    {/* DESCRIPTION */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-xl text-gray-300 leading-relaxed">{details.description}</p>
                    </div>

                    {/* TECH */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#39ff14] mb-4 uppercase">
                            💻 Technology Stack
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {details.technologies.map((t, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-gray-300">
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-4 uppercase">
                            ⚡ Key Features
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {details.features.map((f, i) => (
                                <div key={i} className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-2xl text-gray-300">
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* USE CASES */}
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 uppercase">
                            🎯 Real-World Applications
                        </h3>

                        {details.useCases.map((u, i) => (
                            <div key={i} className="text-gray-300 bg-cyan-900/20 border-l-4 border-cyan-400 rounded-2xl p-4 mb-2">
                                {u}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-white/10">
                        <button className={`w-full py-5 bg-gradient-to-r ${details.gradient} text-white font-black text-xl uppercase rounded-full`}>
                            Start Your {skill} Project →
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillDetailModal;
