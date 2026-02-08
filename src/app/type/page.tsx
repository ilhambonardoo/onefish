import VideoFishSection from "@/src/components/type/VideoFishSection";

export const metadata = {
  title: "Fish Species | OneFish",
  description:
    "Explore our premium collection of freshwater fish species with detailed care information and characteristics.",
};

export default function TypePage() {
  return (
    <main className="bg-black">
      <VideoFishSection />
    </main>
  );
}
