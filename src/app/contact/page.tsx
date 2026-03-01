import HeroSectionContact from "@/src/components/contact/HeroSectionContact";
import FeatureContactSection from "@/src/components/contact/FeatureContactSection";
import SocialMediaSection from "@/src/components/contact/SocialMediaSection";

const page = () => {
  return (
    <>
      <HeroSectionContact />
      <div className="flex flex-col lg:flex-row mx-auto max-w-7xl mb-24 gap-8 md:px-8 xl:px-0">
        <FeatureContactSection />
        <SocialMediaSection />
      </div>
    </>
  );
};

export default page;
