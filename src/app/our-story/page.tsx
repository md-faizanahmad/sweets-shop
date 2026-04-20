// app/our-story/page.tsx
import Hero from "@/components/our-story/Hero";
import Timeline from "@/components/our-story/Timeline";
import Values from "@/components/our-story/Values";
import Craft from "@/components/our-story/Craft";
import Closing from "@/components/our-story/Closing";

export const metadata = {
  title: "Our Story | Premium Indian Mithai & Patisserie",
  description:
    "A journey of flavor, tradition, and craftsmanship spanning three generations.",
};

export default function OurStoryPage() {
  return (
    <main className="bg-[#FCF9F5] text-[#2D2926] overflow-x-hidden">
      <Hero />
      <Timeline />
      <Values />
      <Craft />
      <Closing />
    </main>
  );
}
