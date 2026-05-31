import HeroSection from "@/components/home/HeroSection";
import ThankYouMarquee from "@/components/home/ThankYouMarquee";
import AboutSection from "@/components/home/AboutSection";
import ResearchSection from "@/components/home/ResearchSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePageContainer() {
  return (
    <>
      <HeroSection />
      <ThankYouMarquee />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}