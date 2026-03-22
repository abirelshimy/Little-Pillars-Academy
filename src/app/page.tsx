import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import CalendarSection from "@/components/sections/CalendarSection";
import ContactSection from "@/components/sections/ContactSection";
import IslamicDivider from "@/components/ui/IslamicDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IslamicDivider />
      <AboutSection />
      <IslamicDivider />
      <CurriculumSection />
      <IslamicDivider />
      <CalendarSection />
      <IslamicDivider />
      <ContactSection />
    </>
  );
}
