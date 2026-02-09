import AnimatedSection from "./AnimatedSection";
import { Users, Lightbulb, Layers, Globe, GitBranch, Award, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Cash Prize",
    desc: "Win from a total prize pool of ₹50,000+ distributed across technology tracks.",
  },
  {
    icon: GraduationCap,
    title: "Certificates",
    desc: "All participants receive certificates of participation. Winners get special recognition.",
  },
  {
    icon: Lightbulb,
    title: "Internship Opportunity",
    desc: "Top performers get exclusive internship opportunities with partner companies.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with industry mentors, fellow innovators, and tech professionals across India.",
  },
  {
    icon: Layers,
    title: "Swags & Goodies",
    desc: "Exciting merchandise, T-shirts, stickers, and more for all participants.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">About The Event</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-6">
          Welcome to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>HACKNOVA 2026</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Shivajirao S. Jondhale College of Engineering (SSJCOE), Dombivli (E)</span> proudly presents HACKNOVA — a national level hackathon organized by the <span className="text-secondary font-medium">Technova Club</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This hybrid innovation marathon brings together the brightest minds from across India to identify real-world problems, build original solutions, and compete across 5 cutting-edge technology tracks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            No predefined problem statements — teams choose their own challenges. Submit your ideas online, get shortlisted among the top 30 teams, and compete in the 12-hour on-campus final round.
          </p>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection delay={0.15}>
        <h3 className="font-space text-xl md:text-2xl font-bold text-center mb-10">
          <span className="text-accent text-glow-gold">Benefits</span> of Participating
        </h3>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="rounded-2xl bg-card/80 border border-border p-6 text-center hover:border-secondary/30 transition-all duration-300 group h-full hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-secondary" />
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
