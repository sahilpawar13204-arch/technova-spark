import AnimatedSection from "./AnimatedSection";
import { FileText, Users, Flame } from "lucide-react";

const phases = [
  {
    num: 1,
    title: "Online Registration & Submission",
    desc: "Register your team (2–4 members), select a track, submit your idea abstract, PPT, and optional prototype/demo link.",
    date: "Feb 7 – Feb 28, 2026",
    icon: FileText,
    active: true,
  },
  {
    num: 2,
    title: "Shortlisting (30 Teams)",
    desc: "Our panel reviews all submissions based on innovation, feasibility, relevance, and execution. Top 30 teams are selected.",
    date: "Mar 1 – Mar 7, 2026",
    icon: Users,
    active: false,
  },
  {
    num: 3,
    title: "Offline Final Round",
    desc: "Shortlisted teams compete on-campus at SSJCOE in a 12-hour hackathon. Present to judges, win track-wise prizes!",
    date: "March 17, 2026",
    icon: Flame,
    active: false,
  },
];

const HowItWorksSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">The Process</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Works</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          A streamlined hybrid process — submit online, compete on-campus
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {phases.map((phase, i) => (
          <AnimatedSection key={phase.num} delay={i * 0.15}>
            <div className={`rounded-2xl bg-card/80 border p-8 h-full transition-all duration-300 hover:scale-105 ${
              phase.active
                ? "border-secondary/40 box-glow-purple"
                : "border-border hover:border-muted-foreground/30"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-space text-3xl font-bold text-secondary/30">0{phase.num}</span>
                {phase.active && (
                  <span className="text-[10px] uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                    Active
                  </span>
                )}
              </div>
              <div className={`w-12 h-12 rounded-xl ${phase.active ? "bg-secondary/10" : "bg-muted"} flex items-center justify-center mb-4`}>
                <phase.icon size={22} className={phase.active ? "text-secondary" : "text-muted-foreground"} />
              </div>
              <h3 className="font-space font-bold text-lg text-foreground mb-3">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{phase.desc}</p>
              <p className={`text-xs font-medium ${phase.active ? "text-secondary" : "text-muted-foreground"}`}>
                {phase.date}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
