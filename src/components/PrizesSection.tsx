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
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">Win Big</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Exciting <span className="text-accent text-glow-gold">Prizes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Compete for a total prize pool of ₹50,000+ across 5 technology tracks
        </p>
      </AnimatedSection>

      {/* Total pool */}
      <AnimatedSection delay={0.1}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-10 py-6 rounded-2xl bg-accent/10 border-2 border-accent/30 box-glow-gold">
            <Trophy className="w-10 h-10 text-accent" />
            <div className="text-left">
              <p className="text-xs text-accent/70 uppercase tracking-widest font-medium">Total Prize Pool</p>
              <p className="font-space text-4xl md:text-5xl font-bold text-accent text-glow-gold">₹50K+</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Track prizes grid */}
      <AnimatedSection delay={0.15}>
        <h3 className="font-space text-lg font-bold text-center text-foreground mb-8">
          Track Winners — <span className="text-accent">₹10,000</span> Each
        </h3>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-10">
        {trackPrizes.map((track, i) => (
          <AnimatedSection key={track.title} delay={i * 0.08}>
            <div className="rounded-2xl bg-card/80 border border-accent/20 p-5 text-center hover:border-accent/40 transition-all duration-300 group hover:scale-105">
              <track.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-foreground mb-1">{track.title}</p>
              <p className="font-space text-lg font-bold text-accent">{track.amount}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Additional prizes */}
      <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
        <AnimatedSection delay={0.5}>
          <div className="rounded-2xl bg-card/80 border border-border p-6 text-center hover:border-muted-foreground/30 transition-all duration-300">
            <Medal className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            <h4 className="font-space font-bold text-foreground mb-1">Runner-Up Recognition</h4>
            <p className="text-sm text-muted-foreground">Trophy + Certificate per track</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <div className="rounded-2xl bg-card/80 border border-secondary/30 p-6 text-center hover:scale-105 transition-transform duration-300 box-glow-purple">
            <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h4 className="font-space font-bold text-foreground mb-1">Jury Special Prizes</h4>
            <p className="text-sm text-muted-foreground">₹5,000 × 2 (cross-track, discretionary)</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrizesSection;
