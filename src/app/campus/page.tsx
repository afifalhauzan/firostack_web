import Link from "next/link";
import Hero from "@/components/campus/hero";
import Comingsoon from "@/components/campus/comingsoon";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Comingsoon />
    </section>
  );
}
