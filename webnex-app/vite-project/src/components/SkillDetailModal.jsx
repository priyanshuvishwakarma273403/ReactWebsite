"use client";
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
const javaLogo = '/assets/java.png';

const SkillDetailModal = ({ skill, onClose }) => {
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
        "Motion Design": {
            icon: "🎬",
            title: "Motion Design & Animation",
            tagline: "Visual Storytelling Excellence",
            description: "Crafting stunning animations and motion graphics that captivate users and bring brands to life.",
            technologies: [
                "GSAP (GreenSock)",
                "Framer Motion",
                "Lottie Animations",
                "CSS Animations & Keyframes",
                "After Effects Integration",
                "SVG Animations (Anime.js)",
                "Scroll-triggered Animations",
                "Micro-interactions"
            ],
            features: [
                "🎭 Smooth 60fps animations",
                "📜 Scroll-based storytelling",
                "🎨 Brand motion systems",
                "✨ Micro-interaction design",
                "📱 Mobile-optimized performance",
                "🎪 Interactive narratives"
            ],
            useCases: [
                "Hero sections with parallax effects",
                "Product launch pages",
                "Animated brand identities",
                "Storytelling landing pages"
            ],
            gradient: "from-pink-600 via-purple-500 to-indigo-400"
        },
        "Cloud Ops": {
            icon: "☁️",
            title: "Cloud Operations & DevOps",
            tagline: "AWS / Azure Scaling Mastery",
            description: "Architecting and managing cloud infrastructure that auto-scales, self-heals, and delivers 99.99% uptime.",
            technologies: [
                "AWS (EC2, S3, Lambda, RDS)",
                "Azure Cloud Services",
                "Docker & Kubernetes",
                "Terraform & Infrastructure as Code",
                "CI/CD (GitHub Actions, Jenkins)",
                "Monitoring (Prometheus, Grafana)",
                "Load Balancing & Auto-scaling",
                "CloudFormation & ARM Templates"
            ],
            features: [
                "☁️ Multi-cloud deployments",
                "🔄 Zero-downtime deployments",
                "📊 Real-time monitoring & alerts",
                "🔧 Auto-scaling & load balancing",
                "💾 Automated backups & disaster recovery",
                "🔒 Security best practices"
            ],
            useCases: [
                "High-traffic applications (1M+ users)",
                "Global content delivery networks",
                "Serverless microservices architecture",
                "Big data processing pipelines"
            ],
            gradient: "from-orange-600 via-amber-500 to-yellow-400"
        },
        "Cyber Security": {
            icon: "🔒",
            title: "Cyber Security Solutions",
            tagline: "Bank-Grade Protection",
            description: "Implementing military-grade security measures to protect your digital assets from modern cyber threats.",
            technologies: [
                "OAuth 2.0 & JWT",
                "SSL/TLS Encryption",
                "Web Application Firewalls (WAF)",
                "Penetration Testing Tools",
                "OWASP Security Standards",
                "DDoS Protection",
                "Security Auditing & Compliance",
                "Blockchain Security"
            ],
            features: [
                "🛡️ Multi-layer security architecture",
                "🔐 End-to-end encryption",
                "🚨 Real-time threat detection",
                "📋 Compliance (GDPR, HIPAA, PCI-DSS)",
                "🔍 Regular security audits",
                "🔑 Advanced authentication systems"
            ],
            useCases: [
                "Financial & banking applications",
                "Healthcare data management",
                "E-commerce payment gateways",
                "Enterprise security infrastructure"
            ],
            gradient: "from-red-600 via-rose-500 to-pink-400"
        }
    };

    const details = skillDetails[skill];
    if (!details) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-white/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl animate-slideUp">

                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${details.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all hover:rotate-90 duration-300"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <div className="relative z-10">
                        <div className="mb-4">
                            {details.isImage ? (
                                <img src={details.icon} alt={details.title} className="w-24 h-24 object-contain filter drop-shadow-lg" />
                            ) : (
                                <div className="text-6xl">{details.icon}</div>
                            )}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-2 font-tech">
                            {details.title}
                        </h2>
                        <p className="text-xl text-white/90 font-light italic">
                            {details.tagline}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">

                    {/* Description */}
                    <div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {details.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#39ff14] mb-4 uppercase tracking-wider font-tech">
                            💻 Technology Stack
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {details.technologies.map((tech, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-[#39ff14]/50 transition-all group"
                                >
                                    <span className="text-gray-300 group-hover:text-white transition-colors font-mono">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-4 uppercase tracking-wider font-tech">
                            ⚡ Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {details.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 text-gray-300 bg-purple-900/10 border border-purple-500/20 p-3 hover:bg-purple-900/20 transition-all"
                                >
                                    <span className="text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 uppercase tracking-wider font-tech">
                            🎯 Real-World Applications
                        </h3>
                        <div className="space-y-3">
                            {details.useCases.map((useCase, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 bg-cyan-900/10 border-l-4 border-cyan-400 p-4 hover:bg-cyan-900/20 transition-all group"
                                >
                                    <span className="text-cyan-400 font-bold text-lg">→</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {useCase}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-white/10">
                        <button className={`w-full py-5 bg-gradient-to-r ${details.gradient} text-white font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-2xl`}>
                            Start Your {skill} Project →
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillDetailModal;
