import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-accent" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className="font-black text-textPrimary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hi, I'm <span className="text-accent">Mulugeta</span>
                    </h1>
                    <div className="text-textSecondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                        I'M{' '}
                        <span className="text-accent">
                            <Typewriter
                                words={['Full-stack developer', 'Backend developer', 'Frontend developer', 'Mobile app developer', 'AI automation Developer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                </div>
            </div>

            {/* Tech-themed background image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <motion.img
                    src="/dark-tech-hero.png"
                    alt="Technology background"
                    className="w-full h-full object-cover opacity-60"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary"></div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
