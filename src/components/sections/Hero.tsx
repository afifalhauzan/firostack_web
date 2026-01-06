"use client";

import { useState, useEffect } from "react";
import TextType from '@/components/TextType';
import Img from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-us');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close mobile menu if open
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroHeight = window.innerHeight; // Approximate hero section height

            setIsScrolled(scrollPosition > heroHeight * 0.3); // Show background after scrolling 30% of viewport
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="flex min-h-150 md:min-h-screen  flex-col items-center justify-center bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
                <div className="hidden md:block md:absolute top-30 -left-10 z-0">
                    <Img
                        src="/hero_line.svg"
                        alt="Jasa pembuatan website murah di Malang - FIROSTACK"
                        width={400}
                        height={300}
                        className="h-30 md:h-35 mt-2"
                        priority
                    />
                </div>
                <div className="hidden md:block absolute bottom-40 -right-0 z-0 opacity-30">
                    <Img
                        src="/hero_line_2.svg"
                        alt="Landing page mahasiswa - Teknologi di bawah satu juta"
                        width={400}
                        height={300}
                        className="h-30 md:h-35 mt-2"
                        priority
                    />
                </div>
                <div className="absolute bottom-30 left-5 md:bottom-20 md:left-20 z-0">
                    <m.div
                        animate={{
                            rotate: [-15, 15, -15, 15, -15],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 12,
                            ease: "easeInOut",
                            repeatType: "loop",
                        }}
                    >
                        <Img
                            src="hero_code.svg"
                            alt="Jasa pembuatan website murah di Malang - FIROSTACK"
                            width={200}
                            height={200}
                            className="w-40 h-40 object-contain opacity-40"
                            draggable={false}
                            loading="lazy"
                        />
                    </m.div>
                </div>
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">

                    <div className="max-w-lg text-left px-4 md:px-0 md:text-center items-center justify-center space-y-2 md:space-y-6 mb-2 z-10">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Solusi{" "}
                            <TextType
                                text={["Murah", "Andal"]}
                                typingSpeed={150}
                                pauseDuration={3800}
                                showCursor={true}
                                cursorCharacter="|"
                                textColors={["#7FAEF5", "#9386F7"]}
                                className=""
                            />
                            Teknologimu.
                        </h1>
                        <div className="flex flex-row items-left justify-start md:justify-center md:items-center bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200 ">
                            <h2 className="mt-2 text-lg md:text-2xl">
                                #BuatTeknologi
                            </h2>
                            <h2 className="mt-2 text-lg md:text-2xl font-bold">
                                DiBawahSatuJuta
                            </h2>
                        </div>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center gap-3 w-80 lg:w-100 mt-8 bg-[#43359c] hover:bg-[#9386F7]/90 border border-purple-900/20 hover:border-slate-500
                        text-white px-6 py-2 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105
                        shadow-[0_0px_35px_rgba(0,0,0,0.25)] hover:shadow-xl inset-shadow-lg inset-shadow-blue-500 shadow-purple-400/20 cursor-pointer"
                        >
                            <IoChatbubbleEllipsesSharp className="w-6 h-6" />
                            <h1 className="bg-gradient-to-r from-[#F9F9FF] to-[#d4b2fb] bg-clip-text text-transparent transition-colors duration-200">Mulai Konsultasi Gratis</h1>
                        </button>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}