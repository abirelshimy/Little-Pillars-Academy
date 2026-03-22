import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import DailyScheduleSection from "@/components/sections/DailyScheduleSection";
import HealthSafetySection from "@/components/sections/HealthSafetySection";
import NutritionSection from "@/components/sections/NutritionSection";
import ParentCommSection from "@/components/sections/ParentCommSection";
import SupplyListSection from "@/components/sections/SupplyListSection";
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
      <DailyScheduleSection />
      <IslamicDivider />
      <HealthSafetySection />
      <IslamicDivider />
      <NutritionSection />
      <IslamicDivider />
      <ParentCommSection />
      <IslamicDivider />
      <SupplyListSection />
      <IslamicDivider />
      <CalendarSection />
      <IslamicDivider />
      <ContactSection />
    </>
  );
}
