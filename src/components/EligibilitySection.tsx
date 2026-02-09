import AnimatedSection from "./AnimatedSection";
import { Globe, CreditCard, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const rules = [
  "All team members must be currently enrolled students",
  "Cross-college teams are allowed and encouraged",
  "Each participant can only be part of one team",
  "Teams must select one of the 5 technology tracks",
  "Original ideas and code required — no predefined problem statements",
  "Teams must designate a team lead as primary contact",
];

const criteria = [
  { icon: Globe, title: "Pan-India Participation", desc: "Open to students from any college or university across India" },
  { icon: CreditCard, title: "Valid Student ID", desc: "Must be currently enrolled with a valid college/university ID" },
  { icon: Users, title: "Team of 2–4 Members", desc: "Form a team with 2 to 4 members to participate" },
];

const EligibilitySection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">Eligibility</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Who Can <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Participate?</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="font-space text-xl font-bold text-foreground mb-3">Open to ALL INDIA Students</h3>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're from engineering, science, design, or any stream — if you have a passion for technology and innovation, you're welcome!
          </p>
        </div>
      </AnimatedSection>

      {/* Eligibility criteria */}
      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
        {criteria.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-card/80 border border-border p-6 text-center hover:border-secondary/30 transition-all duration-300 h-full hover:scale-105">
              <c.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-space font-bold text-sm text-foreground mb-2">{c.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Rules */}
      <AnimatedSection delay={0.4}>
        <div className="max-w-2xl mx-auto">
          <h3 className="font-space font-bold text-lg text-foreground mb-4 text-center">Participation Rules</h3>
          <ul className="space-y-3">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                {rule}
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(270_80%_55%/0.5)] transition-all duration-300"
            >
              Register Your Team Now
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EligibilitySection;
