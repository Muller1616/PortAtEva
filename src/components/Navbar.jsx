import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../utils';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* Placeholder Logo */}
                    <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center font-bold text-primary"><img src="/favicon.ico" alt="" /></div>
                    <p className='text-textPrimary text-[18px] font-bold cursor-pointer flex '>
                        MULLER &nbsp;
                        <span className='sm:block hidden'> | SWE</span>
                    </p>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden sm:flex flex-row gap-10 items-center'>
                    <ul className='list-none flex flex-row gap-10'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-textPrimary" : "text-secondary"
                                    } hover:text-textPrimary text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center items-center gap-1"
                        onClick={() => setToggle(!toggle)}
                    >
                        {/* Hamburger Icon */}
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary border border-secondary`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
