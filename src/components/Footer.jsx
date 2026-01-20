import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-primary/80 backdrop-blur-md py-8 border-t border-secondary relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div className="md:col-span-2">
                    <p className="text-white font-black text-[24px] cursor-pointer flex items-center gap-2">
                        MULLER &nbsp; <span className="text-secondary text-[16px] font-normal">| SWE</span>
                    </p>
                    <p className="mt-4 text-secondary text-[14px] leading-[24px] max-w-sm">
                        Building digital experiences with passion and precision. Let's create something specific and amazing together.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-[18px] mb-4">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        {['About', 'Work', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-secondary hover:text-accent transition-colors text-[14px]">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-white font-bold text-[18px] mb-4">Connect</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com/Muller1616" target="_blank" rel="noreferrer" className="bg-[#1c1c2e] p-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mulugetaabeje16/" target="_blank" rel="noreferrer" className="bg-[#1c1c2e] p-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                            <FaLinkedin size={20} />
                        </a>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 border-t border-[#1c1c2e] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-secondary text-[13px] text-center md:text-left">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
