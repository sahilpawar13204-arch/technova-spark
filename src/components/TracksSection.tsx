import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Brain, Shield, Globe, Sparkles } from "lucide-react";

const tracks = [
  { icon: GraduationCap, title: "EdTech", desc: "Revolutionize learning experiences with technology", color: "primary" },
  { icon: Brain, title: "AI / ML", desc: "Build intelligent systems that learn and adapt", color: "secondary" },
  { icon: Shield, title: "CyberTech", desc: "Secure the digital world with innovative solutions", color: "neon-green" },
  { icon: Globe, title: "Web / App Dev", desc: "Create impactful digital products and platforms", color: "neon-purple" },
  { icon: Sparkles, title: "Open Innovation", desc: "Any real-world problem — your creativity, your rules", color: "accent" },
];

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  primary: { border: "hover:border-primary/50", text: "text-primary", bg: "bg-primary/10" },
  secondary: { border: "hover:border-secondary/50", text: "text-secondary", bg: "bg-secondary/10" },
  "neon-green": { border: "hover:border-neon-green/50", text: "text-neon-green", bg: "bg-neon-green/10" },
  "neon-purple": { border: "hover:border-neon-purple/50", text: "text-neon-purple", bg: "bg-neon-purple/10" },
  accent: { border: "hover:border-accent/50", text: "text-accent", bg: "bg-accent/10" },
};

const TracksSection = () => (
  <section id="tracks" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Technology <span className="text-primary text-glow-cyan">Tracks</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Choose your track and solve real-world problems. No predefined statements — pure innovation.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {tracks.map((track, i) => {
          const c = colorMap[track.color];
          return (
            <AnimatedSection key={track.title} delay={i * 0.08}>
              <div className={`rounded-2xl bg-card border border-border p-6 text-center transition-all duration-300 ${c.border} hover:scale-105 group cursor-default h-full`}>
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <track.icon size={24} className={c.text} />
                </div>
                <h3 className="font-space font-bold text-base text-foreground mb-2">{track.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{track.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default TracksSection;
