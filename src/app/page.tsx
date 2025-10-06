import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Description from "@/components/sections/Description";
import Jasa from "@/components/sections/Jasa";
import FAQ from "@/components/sections/FAQ";
import ContactUs from "@/components/sections/ContactUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Description />
      <Jasa />
      <FAQ />
      <ContactUs />
    </>
  );
}
