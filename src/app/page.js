import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContributionsSection from "./components/ContributionsSection";

import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ConnectSection from "./components/ConnectSection";
import GallerySection from "./components/GallerySection";
import AchievementsSection from "./components/AchievementsSection";
import YouTubeSection from "./components/YouTubeSection";

export default function Home() {
  return (
    <div className="font-sans bg-white text-[#171717] min-h-screen flex flex-col items-center w-full">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ContributionsSection />

      <AchievementsSection />
      <GallerySection />
      <YouTubeSection />
      <SkillsSection />
      <ConnectSection />
    </div>
  );
}
