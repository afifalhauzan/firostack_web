"use client";

import Img from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-130 md:min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <div className="max-w-lg text-center items-center justify-center space-y-2 md:space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-10 space-x-">
                        <Img src="/idealabs_logo.svg" alt="Idealabs Logo" width={400} height={300} className="h-30 md:h-35 mt-2" />
                        <Img src="/idealabs_text.svg" alt="Idealabs Logo" width={400} height={300} className="h-25 md:h-35" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold text-center">
                        Inspirasi Ide untuk Lombamu
                    </h2>
                </div>
            </div>
        </section>
    );
}