import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
        name: "Mhiretab Samson",
        designation: "Software Engineer | Full Stack Developer",
        company: "Freelancer",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like you do.",
        name: "Natinael Nigussie",
        designation: "Mobile App Developer",
        company: "ArifPay",
    },
    {
        testimonial:
            "After you optimized our website, our traffic increased by 50%. We can't thank you enough!",
        name: "Bemnet Mussa",
        designation: "Project Manager",
        company: "A2SV",
    },
    {
        testimonial:
            "The best developer needed for your project.",
        name: "Ezra Leye",
        designation: "Full Stack Developer",
        company: "A2SV",
    },
];

const FeedbackCard = ({
    testimonial,
    name,
    designation,
    company,
}) => (
    <div
        className='bg-black-200 p-10 rounded-3xl w-[320px] flex-shrink-0 border border-secondary/30'
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px] line-clamp-4'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </div>
);

const Feedbacks = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        // Duplicate content logic is handled partly in render, verify width
        const totalWidth = marquee.scrollWidth / 2;

        const tween = gsap.to(marquee, {
            x: -totalWidth,
            duration: 30, // Slower for reading
            ease: "none",
            repeat: -1,
        });

        // Pause on hover
        const enter = () => tween.pause();
        const leave = () => tween.play();

        marquee.addEventListener("mouseenter", enter);
        marquee.addEventListener("mouseleave", leave);

        return () => {
            if (marquee) {
                marquee.removeEventListener("mouseenter", enter);
                marquee.removeEventListener("mouseleave", leave);
            }
            tween.kill();
        }
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 py-10 relative z-0">
            <div className='mt-12 bg-black-100 rounded-[20px] pb-10 overflow-hidden'>
                <div
                    className='bg-tertiary rounded-2xl min-h-[300px] p-10'
                >
                    <motion.div>
                        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What others say</p>
                        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Testimonials.</h2>
                    </motion.div>
                </div>

                <div className='-mt-20 w-full relative flex overflow-hidden'>
                    <div ref={marqueeRef} className="flex gap-7 px-6 whitespace-nowrap min-w-max">
                        {/* Triple duplication to ensure smooth infinite loop for wider screens */}
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <FeedbackCard key={`${testimonial.name}-${index}`} {...testimonial} />
                        ))}
                    </div>
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
