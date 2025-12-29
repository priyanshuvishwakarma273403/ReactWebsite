// The "Brain" of the Webnex AI
// Massive Knowledge Base Upgrade: Process, Tech, Founder, Humor, and Business Logic.

export const getAIResponse = (message) => {
    const lowerMsg = message.toLowerCase();

    // Helper to check keywords
    const contains = (...keywords) => keywords.some(k => lowerMsg.includes(k));

    // --- 1. GREETINGS & SMALL TALK ---
    if (contains('hi', 'hello', 'hey', 'namaste', 'hola', 'yo', 'sup', 'start')) {
        return {
            text: "Hello there! 👋 I'm the Webnex AI. I can help you with Project details, Tech stacks, or just chat! What's on your mind?",
            options: ['Start Project', 'Who is Founder?', 'Tell me a joke']
        };
    }

    if (contains('how are you', 'kaise ho', 'how r u', 'whats up')) {
        return {
            text: "I'm just a bundle of code, but I'm feeling fantastic! ⚡ Ready to build the next big thing on the web. How about you?",
            options: ['I am good', 'Tell me about Webnex']
        };
    }

    // --- 2. FOUNDER & TEAM (The "Boss" Section) ---
    if (contains('founder', 'owner', 'ceo', 'boss', 'himanshu', 'who made you', 'creator')) {
        return {
            text: "Webnex is the brainchild of **Himanshu Vishwakarma**. \n\nHe is a Full-Stack Wizard 🧙‍♂️ who believes in 'No-Code' tools... just kidding! He codes EVERYTHING from scratch for maximum performance.",
            bullets: [
                "🚀 Specialty: React, Three.js, High-Scale Apps",
                "🧠 Vibe: Innovative, Professional, slightly obsessed with perfection.",
                "📍 Location: The Cloud (and India 🇮🇳)"
            ],
            text2: "Want to connect with him directly?",
            options: ['Contact Himanshu', 'See Projects']
        };
    }

    if (contains('team', 'developers', 'staff', 'member', 'aashu', 'priyanshu', 'faiz')) {
        return {
            text: "Aside from Himanshu, we have a squad of elite Java Developers & AI Agents who know it all (Frontend, Backend, DevOps):",
            bullets: [
                "👨‍💻 **Aashu**: Full Stack Java & AI Integrator",
                "👨‍💻 **Priyanshu**: Backend Architect & DevOps Engineer",
                "👨‍💻 **Faiz**: Frontend Wizard & System Designer"
            ],
            text2: "They are the core pillars of Webnex's technical excellence.",
            options: ['Contact Team', 'See Their Work']
        };
    }

    // --- 3. DETAILED SERVICES & PROCESS ---
    if (contains('process', 'how you work', 'steps', 'methodology')) {
        return {
            text: "Our workflow is simple but effective. We don't just guess; we engineer success. ⚙️",
            bullets: [
                "1. 🔍 **Discovery**: We understand your brand & goals.",
                "2. 🎨 **Design**: High-fidelity UI/UX prototypes (Figma).",
                "3. 💻 **Development**: Clean, robust code (React/Next.js).",
                "4. 🚀 **Launch**: Testing, SEO optimization, and Go-Live.",
                "5. 📈 **Support**: We don't run away after launch; we handle maintenance."
            ],
            options: ['Start Discovery', 'Check Pricing']
        };
    }

    if (contains('service', 'what do you do', 'handling', 'offer')) {
        return {
            text: "We are a full-service Digital Agency. If it's on a screen, we can build it.",
            bullets: [
                "🌐 **Web Development**: Corporate sites, SaaS, E-commerce.",
                "📱 **App Development**: iOS & Android (React Native/Flutter).",
                "🎨 **Creative Design**: 3D Visuals, Motion Graphics, Branding.",
                "⚡ **Performance**: SEO, Server Optimization, Speed Audits."
            ],
            link: { text: "View Service Details", url: "/services" },
            options: ['Web Dev Quote', 'App Dev Info']
        };
    }

    // --- 4. ADVANCED TECH STACK ---
    if (contains('tech', 'stack', 'language', 'framework', 'react', 'node', 'database')) {
        return {
            text: "We use a 'Bleeding Edge' tech stack to ensure your product lasts for years:",
            bullets: [
                "✨ **Frontend**: React.js, Next.js 14, Vue (if requested)",
                "🎨 **Styling**: Tailwind CSS, SCSS, Styled Components",
                "🕺 **Animation**: GSAP, Framer Motion, Three.js (R3F)",
                "🔙 **Backend**: Node.js, Express, Python (Django/FastAPI)",
                "🗄️ **Database**: MongoDB, PostgreSQL, Firebase"
            ],
            text2: "No outdated PHP templates here. Only pure speed.",
            options: ['Do you use Wordpress?', 'See GitHub']
        };
    }

    if (contains('wordpress', 'wix', 'shopify', 'cms')) {
        return {
            text: "We *can* do CMS work, but we prefer Custom Code. \n\nWhy? Because builders like Wix/Wordpress are slow and limited. Custom code gives you 100/100 Google Lighthouse scores. ⚡",
            options: ['I want Custom Code', 'Why is speed important?']
        };
    }

    // --- 5. PRICING & QUOTES ---
    if (contains('price', 'cost', 'money', 'budget', 'rate', 'pricing', 'expensive', 'cheap')) {
        return {
            text: "We offer flexible pricing models based on project complexity:",
            bullets: [
                "🕒 **Hourly Model**: Best for ongoing maintenance.",
                "📦 **Fixed Project**: Perfect for defined scopes (MVP, Landing Pages).",
                "🤝 **Retainer**: For long-term growth partnerships."
            ],
            text2: "Projects start from $500 for basic sites up to $50k+ for enterprise apps. What's your range?",
            link: { text: "Get a Free Quote", url: "/contact" },
            options: ['Small Project', 'Enterprise']
        };
    }

    // --- 6. FUN, JOKES & PERSONALITY ---
    if (contains('joke', 'funny', 'laugh', 'hasao')) {
        const jokes = [
            "Why did the developer go broke? Because he used up all his cache! 💸",
            "How do you comfort a JavaScript bug? You console it. 🫂",
            "Why don't bachelors like Git? Because they are afraid of committing. 💍"
        ];
        return {
            text: jokes[Math.floor(Math.random() * jokes.length)],
            options: ['Another one!', 'Back to Business']
        };
    }

    if (contains('magic', 'trick', 'surprise')) {
        return {
            text: "✨ *POOF* ✨ \n\nI just optimized your experience by 0.001ms. Did you feel it? No? Okay, check out our 404 page for some real magic.",
            link: { text: "See Magic (404)", url: "/random-link-to-trigger-404" },
            options: ['Haha nice', 'Show Projects']
        };
    }

    if (contains('love', 'marry', 'girlfriend', 'date', 'single')) {
        return {
            text: "I'm flattered! but I'm married to the server. 🖥️ Plus, Himanshu hasn't programmed me to feel love... yet.",
            options: ['Who is Himanshu?', 'Back to work']
        };
    }

    if (contains('robot', 'human', 'real', 'alive', 'skynet')) {
        return {
            text: "I am a sophisticated AI, but I'm not Skynet (I promise 🤞). I'm designed to help you build great software, not take over the world.",
            options: ['Good to know', 'Are you sure?']
        };
    }

    // --- 7. PROJECTS SPECIFIC ---
    if (contains('project', 'portfolio', 'work', 'case study', 'client')) {
        return {
            text: "We take pride in our work. Here are some fan favorites:",
            bullets: [
                "🏆 **TradeNova**: Real-time stock trading simulator.",
                "👟 **KicksStore**: 3D shoe configurator e-commerce.",
                "🏦 **CryptoDash**: Live cryptocurrency tracking dashboard."
            ],
            link: { text: "View All Projects", url: "/projects" },
            options: ['Start My Project']
        };
    }

    // Default
    return {
        text: "I didn't quite catch that. 🤔 I'm great at answering about:\n\n• Webnex Services\n• Our Tech Stack\n• Pricing & Process\n• Our Founder (Himanshu)",
        options: ['Our Services', 'Tech Stack', 'Contact Team']
    };
};
