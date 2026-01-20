import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SiReact, SiFlutter } from "react-icons/si";
import { FaLaptopCode, FaServer, FaLayerGroup, FaRobot } from "react-icons/fa";

const services = [
    {
        title: "Web Developer",
        icon: <SiReact className="w-16 h-16 text-accent" />,
    },
    {
        title: "Frontend Developer",
        icon: <FaLaptopCode className="w-16 h-16 text-accent" />,
    },
    {
        title: "Backend Developer",
        icon: <FaServer className="w-16 h-16 text-accent" />,
    },
    {
        title: "Fullstack Developer",
        icon: <FaLayerGroup className="w-16 h-16 text-accent" />,
    },
    {
        title: "Flutter Developer",
        icon: <SiFlutter className="w-16 h-16 text-accent" />,
    },
    {
        title: "AI Automation",
        icon: <FaRobot className="w-16 h-16 text-accent" />,
    },
];

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="w-full sm:w-[300px]">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
        >
            <div
                className="bg-primary rounded-[20px] py-6 px-4 min-h-[250px] flex flex-col justify-center items-center gap-6 group hover:bg-tertiary transition-colors duration-300"
            >
                {icon}
                <h3 className="text-textPrimary text-[20px] font-bold text-center group-hover:text-accent transition-colors">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const handleDownloadCV = async () => {
        try {
            // Fetch the PDF file
            const response = await fetch('/Mulugeta_CV.pdf');
            if (!response.ok) {
                throw new Error('Failed to fetch CV');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Mulugeta_CV.pdf';
            link.style.display = 'none';
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up the object URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading CV:', error);
            // Fallback: open in new tab if download fails
            window.open('/Mulugeta_CV.pdf', '_blank');
        }
    };

    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-20 relative z-0">
            <motion.div>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
                <h2 className="text-textPrimary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            </motion.div>

            <motion.p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Hi, I'm Mulugeta, a passionate software developer with expertise in Next.js, React.js, Node.js, Express.js, Tailwind CSS, MongoDB, MySQL, PostgreSQL, Firebase, and other modern technologies. I specialize in designing and building efficient, scalable, and user-friendly applications that solve real-world problems.

                I take pride in delivering high-quality solutions by understanding client needs, collaborating closely with stakeholders, and applying best practices in software development. From web applications to full-stack solutions, I focus on creating products that are not only functional but also intuitive and engaging for users.

                I am always exploring new technologies and approaches to enhance performance, usability, and innovation in every project I undertake. Let's collaborate to bring your ideas to life and turn challenges into impactful solutions.
            </motion.p>

            <div className="mt-8 flex justify-center sm:justify-start">
                <button
                    onClick={handleDownloadCV}
                    type="button"
                    className="bg-accent text-primary font-bold py-3 px-8 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                >
                    Download CV
                </button>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default About;
