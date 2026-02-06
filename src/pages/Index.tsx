import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SizesSection } from "@/components/SizesSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SizesSection />
      <HighlightsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
