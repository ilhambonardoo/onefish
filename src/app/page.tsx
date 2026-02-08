"use client";

import HeroSection from "@/src/components/home/HeroSection";
import FeaturedFish from "@/src/components/home/FeaturedFish";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturedFish />
      <WhyChooseUs />
    </main>
  );
}
