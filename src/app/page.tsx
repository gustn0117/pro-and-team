import ProfessionalsSection from "./components/sections/ProfessionalsSection";
import PracticeAreasSection from "./components/sections/PracticeAreasSection";
import ContactSection from "./components/sections/ContactSection";
import SideNav from "./components/SideNav";

export default function Home() {
  return (
    <>
      <SideNav />
      <ProfessionalsSection />
      <PracticeAreasSection />
      <ContactSection />
    </>
  );
}
