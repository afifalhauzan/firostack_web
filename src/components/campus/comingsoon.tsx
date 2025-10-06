"use client";

import { motion } from "motion/react";
import { slideUpVariants, cardVariants } from "@/lib/motionVariants";

export default function Comingsoon() {
    const services = [
        {
            title: "Business Plan",
        },
        {
            title: "Hackathon",
        },
        {
            title: "UI/UX",
        },
        {
            title: "Essay",
        }
    ];

    return (
        <section className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-4">
                <motion.div
                    className="text-center space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideUpVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Temukan Ide Produk
                    </h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl justify-center items-center w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Card with rounded corners and gradient background */}
                            <div className="bg-gradient-to-br from-[#080D1C] to-[#18043F] rounded-3xl p-6 text-center space-y-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-103">

                                {/* Service Title */}
                                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                                    {service.title}
                                </h3>

                            </div>
                        </motion.div>
                    ))}

                </motion.div>
                <motion.div
                    className="text-center space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideUpVariants}
                >
                    <h2 className="text-lg md:text-xl">
                        dan lainnya!
                    </h2>
                </motion.div>
                <motion.div
                    className="text-center space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideUpVariants}
                >
                    <h2 className="text-2xl md:text-5xl font-bold">
                        COMING SOON!
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}