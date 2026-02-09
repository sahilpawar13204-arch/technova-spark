import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Brain, Shield, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  { icon: GraduationCap, title: "EdTech", desc: "Tools for enhanced learning experiences, accessibility, skill development, and educational innovation", color: "primary" },
  { icon: Brain, title: "AI / ML", desc: "Intelligent systems, machine learning models, natural language processing, and predictive analytics", color: "secondary" },
  { icon: Shield, title: "CyberTech", desc: "Cybersecurity solutions, privacy tools, threat detection, and digital safety innovations", color: "neon-green" },
  { icon: Globe, title: "Web / App Dev", desc: "Full-stack applications, progressive web apps, mobile solutions, and developer tools", color: "neon-purple" },
  { icon: Sparkles, title: "Open Innovation", desc: "Any technology, any domain — if it solves a real-world problem with originality, it belongs here", color: "accent" },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  primary: { border: "hover:border-primary/50", text: "text-primary", bg: "bg-primary/10", glow: "hover:shadow-[0_0_20px_hsl(200_100%_55%/0.2)]" },
  secondary: { border: "hover:border-secondary/50", text: "text-secondary", bg: "bg-secondary/10", glow: "hover:shadow-[0_0_20px_hsl(280_80%_55%/0.2)]" },
  "neon-green": { border: "hover:border-green-400/50", text: "text-green-400", bg: "bg-green-400/10", glow: "hover:shadow-[0_0_20px_hsl(150_100%_50%/0.2)]" },
  "neon-purple": { border: "hover:border-purple-400/50", text: "text-purple-400", bg: "bg-purple-400/10", glow: "hover:shadow-[0_0_20px_hsl(270_80%_65%/0.2)]" },
  accent: { border: "hover:border-accent/50", text: "text-accent", bg: "bg-accent/10", glow: "hover:shadow-[0_0_20px_hsl(42_100%_55%/0.2)]" },
};

const TracksSection = () => (
  <section id="tracks" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">Compete In</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Technology <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Tracks</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Choose your track and build an original solution — no predefined problem statements
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-10">
        {tracks.map((track, i) => {
          const c = colorMap[track.color];
          return (
            <AnimatedSection key={track.title} delay={i * 0.08}>
              <div className={`rounded-2xl bg-card/80 border border-border p-6 text-center transition-all duration-300 ${c.border} ${c.glow} hover:scale-105 group cursor-default h-full`}>
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <track.icon size={24} className={c.text} />
                </div>
                <h3 className="font-space font-bold text-sm text-foreground mb-2">{track.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{track.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="text-center mt-4">
          <Link to="/tracks" className="text-sm text-secondary hover:underline">
            View detailed track information →
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TracksSection;
