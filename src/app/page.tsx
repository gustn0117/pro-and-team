import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PracticeAreasSection from "./components/sections/PracticeAreasSection";
import ProfessionalsSection from "./components/sections/ProfessionalsSection";
import ContactSection from "./components/sections/ContactSection";
import SideNav from "./components/SideNav";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <SideNav />
      <HeroSection />
      <SectionDivider variant="navy-to-cream" />
      <AboutSection />
      <SectionDivider variant="cream-to-white" />
      <PracticeAreasSection />
      <SectionDivider variant="white-to-cream" />
      <ProfessionalsSection />
      <SectionDivider variant="cream-to-navy" />
      <ContactSection />
    </>
  );
}
