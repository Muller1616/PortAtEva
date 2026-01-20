import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { certificates } from "../utils";

const CertificateCard = ({ certificate, onClick }) => {
    return (
        <motion.div
            className="w-full bg-[#151030] p-5 rounded-2xl border border-secondary/20 cursor-pointer h-full relative group overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onClick(certificate)}
        >
            <div className="relative w-full h-[200px]">
                <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-white font-bold text-[20px]">{certificate.name}</h3>
                <p className="text-secondary text-[14px]">{certificate.issuer}</p>
                <p className="text-secondary text-[12px] mt-1">{certificate.date}</p>
            </div>

            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold">View Details</p>
            </div>
        </motion.div>
    );
};

const CertificateModal = ({ certificate, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-[#1d1836] p-8 rounded-2xl max-w-2xl w-full relative border border-secondary/30"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-secondary hover:text-white text-xl"
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2 h-[250px]">
                        <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-white font-bold text-[30px] mb-2">{certificate.name}</h2>
                        <h4 className="text-accent text-[18px] mb-4">{certificate.issuer} - {certificate.date}</h4>
                        <p className="text-secondary text-[16px] leading-[26px]">
                            {certificate.details}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 relative z-0">
            <motion.div>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Achievements</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certificates & Awards.</h2>
            </motion.div>

            <div className="mt-20">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper !pb-12"
                >
                    {certificates.map((cert, index) => (
                        <SwiperSlide key={index}>
                            <CertificateCard certificate={cert} onClick={setSelectedCertificate} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <AnimatePresence>
                {selectedCertificate && (
                    <CertificateModal
                        certificate={selectedCertificate}
                        onClose={() => setSelectedCertificate(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
