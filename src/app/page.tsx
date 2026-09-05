import { FixedCta } from "@/components/layout/FixedCta";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Access } from "@/components/sections/Access";
import { Concept } from "@/components/sections/Concept";
import { Contact } from "@/components/sections/Contact";
import { Enjoy } from "@/components/sections/Enjoy";
import { EventInfo } from "@/components/sections/EventInfo";
import { FinalAction } from "@/components/sections/FinalAction";
import { Hero } from "@/components/sections/Hero";
import { Message } from "@/components/sections/Message";
import { Perform } from "@/components/sections/Perform";
import { Program } from "@/components/sections/Program";
import { Watch } from "@/components/sections/Watch";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Concept />
        <EventInfo />
        <Enjoy />
        <Perform />
        <Watch />
        <Program />
        <Access />
        <Message />
        <FinalAction />
        <Contact />
      </main>
      <Footer />
      <FixedCta />
    </>
  );
}
