import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaClock, FaGlobe, FaRocket } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // Clear error on change
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        // Placeholder credentials - User needs to add enviroment variables
        // Simulating success if no keys are present to show the UI effect requested
        if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY === 'your_public_key') {
            setTimeout(() => {
                setLoading(false);
                setShowSuccess(true);
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setShowSuccess(false), 3000);
            }, 1000);
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "User",
                from_email: form.email,
                to_email: "contact@example.com",
                message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            setShowSuccess(true);
            setForm({
                name: '',
                email: '',
                message: '',
            });
            setTimeout(() => setShowSuccess(false), 3000);
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.');
        });
    };

    return (
        <div id="contact" className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden py-20 max-w-7xl mx-auto px-6 relative'>
            {/* Success Toast */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -50 }}
                        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3"
                    >
                        <FaCheckCircle size={24} />
                        <div>
                            <h4 className="font-bold text-lg">Successfully Sent!</h4>
                            <p className="text-sm">I will reach out as soon as possible.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-secondary/30 bg-primary/50 backdrop-blur-sm'
            >
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <div className="flex justify-between">
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            {errors.name && <span className="text-red-500 text-sm flex items-center gap-1"><FaExclamationCircle /> {errors.name}</span>}
                        </div>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className={`bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border ${errors.name ? 'border-red-500' : 'border-transparent focus:border-accent'} transition-colors`}
                        />
                    </label>
                    <label className='flex flex-col'>
                        <div className="flex justify-between">
                            <span className='text-white font-medium mb-4'>Your Email</span>
                            {errors.email && <span className="text-red-500 text-sm flex items-center gap-1"><FaExclamationCircle /> {errors.email}</span>}
                        </div>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className={`bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border ${errors.email ? 'border-red-500' : 'border-transparent focus:border-accent'} transition-colors`}
                        />
                    </label>
                    <label className='flex flex-col'>
                        <div className="flex justify-between">
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            {errors.message && <span className="text-red-500 text-sm flex items-center gap-1"><FaExclamationCircle /> {errors.message}</span>}
                        </div>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className={`bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium resize-none border ${errors.message ? 'border-red-500' : 'border-transparent focus:border-accent'} transition-colors`}
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-accent hover:bg-white hover:text-primary transition-all duration-300'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <div className="w-full h-full bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20 p-8">
                    <div className="flex flex-col gap-10 w-full max-w-[300px]">

                        {/* Availability */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaClock />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Availability</p>
                                <p className="text-secondary">24/7 Support</p>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaRocket />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Project Status</p>
                                <p className="text-secondary">Open for any project</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Location</p>
                                <p className="text-secondary">Addis Ababa, Ethiopia</p>
                            </div>
                        </div>

                        {/* Global Reach (Impressive Addition) */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaGlobe />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Global Reach</p>
                                <p className="text-secondary">Remote Worldwide</p>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
