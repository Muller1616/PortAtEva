import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import evangadiForum from "../assets/EvangadiForum.jpg";
import netflix from "../assets/Netflix.png";
import amazon from "../assets/Amazon.png";

// Placeholder project data
const projects = [

    {
        name: "Evangadi Forum",
        description:
            "A Q&A forum where users can ask questions, share knowledge, and build a community. Features include user authentication, question posting, and answering.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "ExpressJS", color: "text-green-500" },
            { name: "modularCSS", color: "text-pink-500" },
            { name: "MySQL", color: "text-blue-500" },
            { name: "JWT", color: "text-yellow-500" },
            { name: "OpenAI", color: "text-yellow-500" },
        ],
        image: evangadiForum,
        source_code_link: "https://github.com/DesalegnTamirat/evangadi-forum",
        live_link: "https://evangadiforum.birhann.com/"
    },
    {
        name: "Netflix Clone",
        description:
            "A responsive replica of the Netflix website, featuring a dynamic movie catalogue, trailer playback (if applicable), and a sleek user interface mimicking the original platform.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "CustomAPI", color: "text-green-500" },
            { name: "CSS", color: "text-yellow-500" },
            { name: "movieDB", color: "text-blue-500" },
        ],
        image: netflix,
        source_code_link: "https://github.com/Muller1616/Netflix-Clone-AtEva",
        live_link: "https://google.com"
    },

    {
        name: "Amazon Clone",
        description:
            "An e-commerce platform clone mimicking Amazon's functionality, including product listings, shopping cart management, and a streamlined checkout process.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "CSS", color: "text-green-500" },
            { name: "ExpressJS", color: "text-pink-500" },
            { name: "NodeJS", color: "text-yellow-500" },
            { name: "MySQL", color: "text-blue-500" },
            { name: "Stripe", color: "text-yellow-500" },
        ],
        image: amazon,
        source_code_link: "https://github.com/Muller1616/AmazonClone-atEva",
        live_link: "https://google.com"
    },
    {
        name: "Evangadi Forum",
        description:
            "A Q&A forum where users can ask questions, share knowledge, and build a community. Features include user authentication, question posting, and answering.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "ExpressJS", color: "text-green-500" },
            { name: "modularCSS", color: "text-pink-500" },
            { name: "MySQL", color: "text-blue-500" },
            { name: "JWT", color: "text-yellow-500" },
            { name: "OpenAI", color: "text-yellow-500" },
        ],
        image: evangadiForum,
        source_code_link: "https://github.com/DesalegnTamirat/evangadi-forum",
        live_link: "https://evangadiforum.birhann.com/"
    },
    {
        name: "Netflix Clone",
        description:
            "A responsive replica of the Netflix website, featuring a dynamic movie catalogue, trailer playback (if applicable), and a sleek user interface mimicking the original platform.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "CustomAPI", color: "text-green-500" },
            { name: "CSS", color: "text-yellow-500" },
            { name: "movieDB", color: "text-blue-500" },
        ],
        image: netflix,
        source_code_link: "https://github.com/Muller1616/Netflix-Clone-AtEva",
        live_link: "https://google.com"
    },
    {
        name: "Amazon Clone",
        description:
            "An e-commerce platform clone mimicking Amazon's functionality, including product listings, shopping cart management, and a streamlined checkout process.",
        tags: [
            { name: "ReactJS", color: "text-blue-500" },
            { name: "CSS", color: "text-green-500" },
            { name: "ExpressJS", color: "text-pink-500" },
            { name: "NodeJS", color: "text-yellow-500" },
            { name: "MySQL", color: "text-blue-500" },
            { name: "Stripe", color: "text-yellow-500" },
        ],
        image: amazon,
        source_code_link: "https://github.com/Muller1616/AmazonClone-atEva",
        live_link: "https://google.com"
    },
];

const ProjectCard = ({ name, description, tags, image, source_code_link, live_link }) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full bg-[#151030] border border-secondary/20'
        >
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
                    {/* Github Link */}
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 hover:bg-black transition-colors group'
                        title="View Source Code"
                    >
                        <FaGithub className='w-1/2 h-1/2 text-white group-hover:text-accent transition-colors' />
                    </div>
                    {/* Live Demo Link */}
                    <div
                        onClick={() => window.open(live_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 hover:bg-black transition-colors group'
                        title="View Live Demo"
                    >
                        <FaExternalLinkAlt className='w-1/2 h-1/2 text-white group-hover:text-accent transition-colors' />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    );
};

const Projects = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 relative z-0">
            <motion.div>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>

            <div className="mt-20 w-full">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper w-full py-10"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="!w-[360px] !bg-transparent">
                            <ProjectCard {...project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects;
