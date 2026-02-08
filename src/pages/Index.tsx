import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PrizesSection from "@/components/PrizesSection";
import TimelineSection from "@/components/TimelineSection";
import EligibilitySection from "@/components/EligibilitySection";
import CTASection from "@/components/CTASection";
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
        <TracksSection />
        <HowItWorksSection />
        <PrizesSection />
        <TimelineSection />
        <EligibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
