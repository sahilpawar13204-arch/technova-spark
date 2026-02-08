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
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Who Can <span className="text-primary text-glow-cyan">Participate?</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="font-space text-xl font-bold text-foreground mb-3">Open to ALL INDIA Students</h3>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're from engineering, science, design, or any stream — if you have a passion for technology and innovation, you're welcome to participate!
          </p>
        </div>
      </AnimatedSection>

      {/* Eligibility criteria */}
      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
        {criteria.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/30 transition-all duration-300 h-full">
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
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
                <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                {rule}
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(190_100%_50%/0.5)] transition-all duration-300"
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
