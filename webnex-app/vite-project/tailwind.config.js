/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#000000',
                'brand-primary': '#5b21b6',
                'neon-green': '#39ff14',
                'neon-purple': '#d946ef',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                tech: ['Syncopate', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            }
        },
    },
    plugins: [],
}
