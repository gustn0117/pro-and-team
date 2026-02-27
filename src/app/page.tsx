import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PracticeAreasSection from "./components/sections/PracticeAreasSection";
import ProfessionalsSection from "./components/sections/ProfessionalsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <ProfessionalsSection />
      <ContactSection />
    </>
  );
}
