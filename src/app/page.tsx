import { Header } from "@/components/layout/Header";
import { Concept } from "@/components/sections/Concept";
import { Enjoy } from "@/components/sections/Enjoy";
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
        <Concept />
        <EventInfo />
        <Enjoy />
        <Perform />
        <Watch />
      </main>
    </>
  );
}
