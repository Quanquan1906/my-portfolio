import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ResearchSection from "@/components/home/ResearchSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePageContainer() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}