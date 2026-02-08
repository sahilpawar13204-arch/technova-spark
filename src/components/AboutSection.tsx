import AnimatedSection from "./AnimatedSection";
import { Users, Lightbulb, Trophy, Globe } from "lucide-react";

const highlights = [
  { icon: Users, label: "Team Size", value: "2–4 Members", color: "text-primary" },
  { icon: Globe, label: "Scope", value: "Pan-India", color: "text-neon-green" },
  { icon: Trophy, label: "Prize Pool", value: "₹60,000", color: "text-accent" },
  { icon: Lightbulb, label: "Format", value: "Hybrid", color: "text-secondary" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary text-glow-cyan">HACKNOVA</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          HACKNOVA 2026 is a 12-hour hybrid hackathon organized by the Technova Club at SSJCOE, Dombivli. 
          Teams identify real-world problems and build original solutions across five cutting-edge technology tracks. 
          No predefined problem statements — pure innovation.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <div className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/30 transition-colors duration-300 group">
              <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-space font-bold text-lg text-foreground">{item.value}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
