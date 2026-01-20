import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
    SiReact, SiNodedotjs, SiExpress, SiFlutter, SiPython, SiOpenai,
    SiFirebase, SiNextdotjs, SiTailwindcss, SiPandas, SiTensorflow,
    SiMongodb, SiMysql, SiPostgresql, SiN8N
} from "react-icons/si";

const techIcons = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express", Icon: SiExpress, color: "#000000" }, // White in dark mode handled by conditional or class
    { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "n8n", Icon: SiN8N, color: "#FF6584" },
    { name: "Pandas", Icon: SiPandas, color: "#150458" },
    { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
];

const Tech = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2; // Assuming duplicated content

        gsap.to(marquee, {
            x: -totalWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, []);

    return (
        <section className="py-20 bg-primary overflow-hidden relative z-0">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">Software Skills</p>
                <h2 className="text-textPrimary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Tech Stack.</h2>
            </div>

            <div className="w-full relative flex overflow-hidden group">
                <div ref={marqueeRef} className="flex gap-16 items-center whitespace-nowrap min-w-max">
                    {/* First set of icons */}
                    {[...techIcons, ...techIcons].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 group/icon cursor-pointer">
                            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover/icon:bg-white/10 transition-colors duration-300">
                                <tech.Icon
                                    className="w-10 h-10 transition-colors duration-300"
                                    style={{ color: tech.color === '#000000' ? '#ffffff' : tech.color }} // Invert black to white for dark mode
                                />
                            </div>
                            <span className="text-secondary text-sm font-medium group-hover/icon:text-textPrimary transition-colors duration-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default Tech;
