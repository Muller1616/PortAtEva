import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsChatDotsFill, BsX } from 'react-icons/bs';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi! I'm the AI Assistant. Ask me anything about the developer's skills, projects, or experience!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const models = [
            "google/gemini-2.0-flash-lite-preview-02-05:free",
            "google/gemini-2.0-flash-exp:free",
            "google/gemini-2.0-pro-exp-02-05:free"
        ];

        let success = false;

        for (const model of models) {
            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                        "Content-Type": "application/json",
                        "HTTP-Referer": window.location.origin,
                        "X-Title": "Portfolio Chatbot",
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [
                            {
                                role: "system",
                                content: "You are a helpful portfolio assistant for a software developer. Answer questions about their skills, projects, and experience based on the context of a portfolio website. Be concise and professional."
                            },
                            ...messages.map(m => ({ role: m.role, content: m.content })),
                            userMessage
                        ]
                    })
                });

                if (response.status === 429 || response.status >= 500) {
                    // Try next model
                    console.warn(`Model ${model} failed with status ${response.status}`);
                    continue;
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error.message || 'API Error');
                }

                const text = data.choices[0].message.content;
                setMessages(prev => [...prev, { role: 'assistant', content: text }]);
                success = true;
                break; // Exit loop on success
            } catch (error) {
                console.error(`Error with model ${model}:`, error);
                // Continue to next model on network error
            }
        }

        if (!success) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Traffic is high on all available models. Please try again in a moment." }]);
        }

        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-primary border border-secondary rounded-2xl w-[350px] h-[450px] shadow-2xl flex flex-col mb-4 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-accent p-4 flex justify-between items-center">
                            <h3 className="text-primary font-bold">AI Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className="text-primary hover:bg-white/20 rounded-full p-1 transition-colors">
                                <BsX size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#0f1016]">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`p-3 rounded-lg max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-secondary text-white self-end rounded-br-none' : 'bg-[#1c1c2e] text-gray-200 self-start rounded-bl-none'}`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="self-start bg-[#1c1c2e] p-3 rounded-lg rounded-bl-none">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-[#0f1016] border-t border-secondary">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-[#1c1c2e] text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-accent"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-accent text-primary p-2 rounded-lg font-bold hover:bg-white transition-colors"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-accent w-14 h-14 rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            >
                {isOpen ? <BsX size={32} /> : <BsChatDotsFill size={28} />}
            </button>
        </div>
    );
};

export default Chatbot;
