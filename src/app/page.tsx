import { FixedCta } from "@/components/layout/FixedCta";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Access } from "@/components/sections/Access";
import { Concept } from "@/components/sections/Concept";
import { Contact } from "@/components/sections/Contact";
import { EventInfo } from "@/components/sections/EventInfo";
import { Hero } from "@/components/sections/Hero";
import { Perform } from "@/components/sections/Perform";
import { Watch } from "@/components/sections/Watch";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <EventInfo />
        <Concept />
        <Perform />
        <Watch />
        <Access />
        <Contact />
      </main>
      <Footer />
      <FixedCta />
    </>
  );
}
