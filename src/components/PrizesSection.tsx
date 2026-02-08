import AnimatedSection from "./AnimatedSection";
import { Trophy, Medal, Award, GraduationCap, Brain, Shield, Globe, Sparkles } from "lucide-react";

const trackPrizes = [
  { icon: GraduationCap, title: "EdTech", amount: "₹10,000" },
  { icon: Brain, title: "AI / ML", amount: "₹10,000" },
  { icon: Shield, title: "CyberTech", amount: "₹10,000" },
  { icon: Globe, title: "Web / App Dev", amount: "₹10,000" },
  { icon: Sparkles, title: "Open Innovation", amount: "₹10,000" },
];

const PrizesSection = () => (
  <section id="prizes" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Win Exciting <span className="text-accent text-glow-gold">Prizes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Compete for a total prize pool of ₹60,000 across 5 technology tracks
        </p>
      </AnimatedSection>

      {/* Track Winners Header */}
      <AnimatedSection delay={0.1}>
        <h3 className="font-space text-xl font-bold text-center text-foreground mb-8">
          Track Winners — <span className="text-accent">₹10,000</span> Each
        </h3>
      </AnimatedSection>

      {/* Track prizes grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-10">
        {trackPrizes.map((track, i) => (
          <AnimatedSection key={track.title} delay={i * 0.08}>
            <div className="rounded-2xl bg-card border border-accent/20 p-5 text-center hover:border-accent/40 transition-all duration-300 group hover:scale-105">
              <track.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-foreground mb-1">{track.title}</p>
              <p className="font-space text-lg font-bold text-accent">{track.amount}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Additional prizes */}
      <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
        <AnimatedSection delay={0.5}>
          <div className="rounded-2xl bg-card border border-border p-6 text-center hover:border-muted-foreground/30 transition-all duration-300">
            <Medal className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            <h4 className="font-space font-bold text-foreground mb-1">Runner-Up Recognition</h4>
            <p className="text-sm text-muted-foreground">Trophy + Certificate per track</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <div className="rounded-2xl bg-card border border-secondary/30 p-6 text-center hover:scale-105 transition-transform duration-300 box-glow-magenta">
            <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h4 className="font-space font-bold text-foreground mb-1">Jury Special Prizes</h4>
            <p className="text-sm text-muted-foreground">₹5,000 × 2 (cross-track, discretionary)</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.7}>
        <div className="text-center rounded-2xl bg-accent/5 border border-accent/20 py-4 px-6 max-w-sm mx-auto">
          <p className="text-sm font-medium text-accent">Total Prize Pool: <span className="font-space font-bold text-lg">₹60,000</span></p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PrizesSection;
