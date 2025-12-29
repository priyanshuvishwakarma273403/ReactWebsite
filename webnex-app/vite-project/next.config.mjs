/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'], // Allow Google Auth images
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3000'],
        },
    },
    transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
