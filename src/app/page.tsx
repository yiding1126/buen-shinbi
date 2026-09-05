import { Header } from "@/components/layout/Header";
import { Concept } from "@/components/sections/Concept";
import { EventInfo } from "@/components/sections/EventInfo";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Concept />
        <EventInfo />
      </main>
    </>
  );
}
