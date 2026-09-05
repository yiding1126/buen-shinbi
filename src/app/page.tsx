import { Header } from "@/components/layout/Header";
import { Concept } from "@/components/sections/Concept";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Introduction />
        <Concept />
      </main>
    </>
  );
}
