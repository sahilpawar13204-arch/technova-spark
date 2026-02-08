import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import TracksSection from "@/components/TracksSection";
import PrizesSection from "@/components/PrizesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-grid-pattern">
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <TracksSection />
        <PrizesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
