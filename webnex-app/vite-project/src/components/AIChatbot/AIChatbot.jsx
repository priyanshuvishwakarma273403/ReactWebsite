"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, Sparkles, Bot } from 'lucide-react';
import { getAIResponse } from './aiLogic';
import { useRouter } from 'next/navigation';
import './AIChatbot.css';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm the Webnex AI. Ask me about our services, projects, or just say hello! 👋",
            sender: 'bot',
            options: ['Our Services', 'Recent Projects']
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const router = useRouter();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('open-ai-chat', handleOpenChat);
        return () => window.removeEventListener('open-ai-chat', handleOpenChat);
    }, []);

    const handleSend = async (text = inputText) => {
        if (!text.trim()) return;

        // Add User Message
        const userMsg = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI Thinking
        setTimeout(() => {
            const response = getAIResponse(text);

            const botMsg = {
                id: Date.now() + 1,
                text: response.text,
                sender: 'bot',
                bullets: response.bullets,
                link: response.link,
                text2: response.text2,
                options: response.options
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200); // 1.2s delay for realism
    };

    const handleOptionClick = (option) => {
        handleSend(option);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const handleNavigate = (url) => {
        setIsOpen(false);
        router.push(url);
    }

    return (
        <div className="ai-chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="ai-chat-window"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="ai-header">
                            <div className="ai-title">
                                <h3>
                                    <Bot size={20} color="#00ff88" />
                                    Webnex AI
                                    <span className="online-dot"></span>
                                </h3>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="ai-messages">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`message ${msg.sender}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="message-content">
                                        {msg.text}
                                        {msg.bullets && (
                                            <ul>
                                                {msg.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                            </ul>
                                        )}
                                        {msg.text2 && <p style={{ marginTop: '8px' }}>{msg.text2}</p>}
                                        {msg.link && (
                                            <button
                                                className="message-link"
                                                onClick={() => handleNavigate(msg.link.url)}
                                            >
                                                {msg.link.text} →
                                            </button>
                                        )}
                                    </div>

                                    {/* Chips for Bot only */}
                                    {msg.sender === 'bot' && msg.options && (
                                        <div className="options-container">
                                            {msg.options.map((opt, idx) => (
                                                <button
                                                    key={idx}
                                                    className="option-chip"
                                                    onClick={() => handleOptionClick(opt)}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="typing-indicator">
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="ai-input-area">
                            <input
                                type="text"
                                className="ai-input"
                                placeholder="Ask me anything..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                className="send-btn"
                                onClick={() => handleSend()}
                                disabled={!inputText.trim()}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                className="ai-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={28} color="#fff" /> : <Sparkles size={28} color="#fff" />}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
