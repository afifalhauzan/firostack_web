"use client";

import { motion } from "motion/react";
import { slideUpVariants, cardVariants } from "@/lib/motionVariants";

export default function Comingsoon() {

    return (
        <section className="flex min-h-80 flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-4">
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