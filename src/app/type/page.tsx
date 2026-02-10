import VideoFishSection from "@/src/components/type/VideoFishSection";
import HeroSectionType from "@/src/components/type/HeroSectionType";
export const metadata = {
  title: "Fish Species | OneFish",
  description:
    "Explore our premium collection of freshwater fish species with detailed care information and characteristics.",
};

export default function TypePage() {
  return (
    <main className="bg-black">
      <HeroSectionType />
      <VideoFishSection />
    </main>
  );
}
