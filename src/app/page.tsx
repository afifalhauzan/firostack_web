import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamic imports for below-the-fold components to improve initial load
const Description = dynamic(() => import("@/components/sections/Description"), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-[#2E1266] to-[#080D1C]" />,
});

const Jasa = dynamic(() => import("@/components/sections/Jasa"), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-[#1F2B4B] to-[#080D1C]" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="min-h-[50vh] bg-gradient-to-b from-[#080D1C] to-[#1F2B4B]" />,
});

const ContactUs = dynamic(() => import("@/components/sections/ContactUs"), {
  loading: () => <div className="min-h-[50vh] bg-gradient-to-b from-[#1F2B4B] to-[#080D1C]" />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-[#2E1266] to-[#080D1C]" />}>
        <Description />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-[#1F2B4B] to-[#080D1C]" />}>
        <Jasa />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] bg-gradient-to-b from-[#080D1C] to-[#1F2B4B]" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="min-h-[50vh] bg-gradient-to-b from-[#1F2B4B] to-[#080D1C]" />}>
        <ContactUs />
      </Suspense>
    </>
  );
}
