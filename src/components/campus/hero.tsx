"use client";

import Img from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-130 md:min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <div className="max-w-lg text-center items-center justify-center space-y-2 md:space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-10 space-x-12">
                        <Img src="/campus_logo.svg" alt="Idealabs Logo" width={400} height={300} className="h-30 md:h-35 mt-2" />
                        <Img src="/campus_text.svg" alt="Idealabs Logo" width={500} height={400} className="h-25 md:h-35" />
                    </div>
                </div>
            </div>
        </section>
    );
}