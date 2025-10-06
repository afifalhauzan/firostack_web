"use client";

import { useState, useEffect } from "react";
import TextType from '@/components/TextType';

export default function Hero() {
    return (
        <section className="flex min-h-130 md:min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <div className="max-w-lg text-left md:text-center items-center justify-center space-y-2 md:space-y-6 mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Solusi{" "}
                        <TextType
                            text={["Murah", "Andal"]}
                            typingSpeed={150}
                            pauseDuration={3800}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["#7FAEF5", "#9386F7"]}
                        />
                        Teknologimu.
                    </h1>
                    <div className="flex flex-row items-left justify-start md:justify-center md:items-center">
                        <h2 className="mt-4 text-lg md:text-2xl">
                            #BuatTeknologi
                        </h2>
                        <h2 className="mt-4 text-lg md:text-2xl font-bold">
                            DiBawahSatuJuta
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}