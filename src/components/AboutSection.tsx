import AnimatedSection from "./AnimatedSection";
import { Users, Lightbulb, Layers, Globe, GitBranch } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Hacknova Club",
    desc: "A student-driven tech community at SSJCOE, fostering innovation, learning, and collaboration among aspiring developers and tech enthusiasts.",
  },
  {
    icon: Lightbulb,
    title: "Real-World Problems",
    desc: "Teams identify and solve genuine challenges — no predefined problem statements.",
  },
  {
    icon: Layers,
    title: "5 Technology Tracks",
    desc: "EdTech, AI/ML, CyberTech, Web/App Dev, and Open Innovation.",
  },
  {
    icon: Globe,
    title: "Pan-India Scope",
    desc: "Open to students from across India — build your dream team.",
  },
  {
    icon: GitBranch,
    title: "Hybrid Format",
    desc: "Online submissions followed by a 12-hour on-campus final at SSJCOE.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-primary font-medium text-center mb-2">About The Event</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-6">
          Welcome to <span className="text-primary text-glow-cyan">HACKNOVA 2026</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Shivajirao S. Jondhale College of Engineering (SSJCOE), Dombivli (E)</span> proudly presents HACKNOVA Hackathon 2026 — a hybrid innovation marathon where creativity meets technology across 5 cutting-edge tracks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Organized by the Hacknova Club, this hackathon brings together the brightest minds from across India to identify real-world problems, build original solutions, and compete for ₹60,000 in prizes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            No predefined problem statements — teams choose their own challenges. Submit your ideas online, get shortlisted among the top 30 teams, and compete in the 12-hour on-campus final round.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/30 transition-all duration-300 group h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-space font-bold text-sm text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
