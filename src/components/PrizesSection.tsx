import AnimatedSection from "./AnimatedSection";
import { Trophy, Medal, Award } from "lucide-react";
import { motion } from "framer-motion";

const PrizesSection = () => (
  <section id="prizes" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Prize <span className="text-accent text-glow-gold">Pool</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Rewarding innovation across all tracks</p>
      </AnimatedSection>

      {/* Main prizes */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {/* Track Winners */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-card border border-accent/30 p-8 text-center box-glow-gold relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
            <Trophy className="w-10 h-10 text-accent mx-auto mb-4 relative z-10" />
            <p className="text-xs text-accent/80 uppercase tracking-widest mb-2 relative z-10">Track Winners (×5)</p>
            <p className="font-space text-3xl font-bold text-accent text-glow-gold relative z-10">₹10,000</p>
            <p className="text-xs text-muted-foreground mt-2 relative z-10">Each track</p>
          </div>
        </AnimatedSection>

        {/* Runner Up */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-card border border-border p-8 text-center hover:border-muted-foreground/30 transition-all duration-300 group hover:scale-105">
            <Medal className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Runner-Up</p>
            <p className="font-space text-2xl font-bold text-foreground">Trophy</p>
            <p className="text-xs text-muted-foreground mt-2">+ Certificate</p>
          </div>
        </AnimatedSection>

        {/* Jury Prize */}
        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl bg-card border border-secondary/30 p-8 text-center hover:scale-105 transition-transform duration-300 box-glow-magenta">
            <Award className="w-10 h-10 text-secondary mx-auto mb-4" />
            <p className="text-xs text-secondary/80 uppercase tracking-widest mb-2">Jury Prizes (×2)</p>
            <p className="font-space text-3xl font-bold text-secondary text-glow-magenta">₹5,000</p>
            <p className="text-xs text-muted-foreground mt-2">Cross-track</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.4}>
        <p className="text-center text-sm text-muted-foreground">
          All participants receive certificates of participation
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PrizesSection;
