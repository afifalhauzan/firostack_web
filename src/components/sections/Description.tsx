"use client";

import Img from "next/image";
import { motion } from "motion/react";
import { slideUpVariants } from "@/lib/motionVariants";

export default function Description() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-linear-290 from-[#2E1266] to-[#080D1C] text-white">
            <div className="container flex flex-col md:flex-row items-center justify-around gap-12 px-4 py-16">
                <motion.div 
                    className="max-w-4xl text-left w-full md:w-1/2 space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideUpVariants}
                >
                    <motion.div 
                        className="space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={slideUpVariants}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Punya Ide Brilian?
                        </h2>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Jangan Biarkan Biaya Menghalangimu
                        </h2>
                    </motion.div>
                    <motion.div 
                        className="space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={slideUpVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            Firostack ngerti banget bahwa banyak gagasan hebat yang lahir dari <strong>bangku kuliah dan para perintis</strong> , tapi seringkali harus terkubur karena biaya pengembangan teknologi yang selangit. Kami hadir buat mendobrak batasan itu. Firostack adalah partner strategis kamu untuk mengubah ide jadi kenyataan. Mulai dari aplikasi mobile, personal website, hingga software berbasis AI, kami siap buat bantu wujudin.
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            Dengan tagline <strong>#BuatTeknologiDiBawahSatuJuta</strong>, kami bukan hanya menawarkan jasa, kami juga menawarkan kesempatan. Kesempatan buat setiap mahasiswa dan perintis untuk bersaing dan menang. Gasss wujudkan ide kamu bareng kami!
                        </p>
                    </motion.div>
                </motion.div>
                <div className="w-full md:w-1/2 relative flex items-center justify-center h-96">
                    {/* Background floating squares */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Img 
                            src="/square_1.svg" 
                            alt="Floating square" 
                            width={80} 
                            height={80} 
                            className="absolute top-10 left-10 animate-float-slow" 
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.5, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Img 
                            src="/square_1.svg" 
                            alt="Floating square" 
                            width={60} 
                            height={60} 
                            className="absolute bottom-16 left-16 animate-float-delay" 
                        />
                    </motion.div>
                    
                    {/* Main laptop - centered */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Img 
                            src="/laptop.svg" 
                            alt="Hero Illustration" 
                            width={400} 
                            height={300} 
                            className="relative z-10 w-80 h-80 md:w-96 md:h-96" 
                        />
                    </motion.div>
                    
                    {/* Foreground floating squares */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.7, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Img 
                            src="/square_1.svg" 
                            alt="Floating square" 
                            width={70} 
                            height={70} 
                            className="absolute top-20 right-8 animate-float z-20" 
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <Img 
                            src="/square_1.svg" 
                            alt="Floating square" 
                            width={50} 
                            height={50} 
                            className="absolute bottom-12 right-20 animate-float-reverse z-20" 
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}