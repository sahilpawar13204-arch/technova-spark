import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can participate?", a: "HACKNOVA is open to all students across India. You need a valid college ID to participate." },
  { q: "What is the team size?", a: "Teams must have 2 to 4 members. Solo participation is not allowed." },
  { q: "Is there a registration fee?", a: "Registration details and fees are available on the Unstop platform." },
  { q: "Are there predefined problem statements?", a: "No. Teams identify their own real-world problems and build original solutions within the chosen track." },
  { q: "What is the hackathon format?", a: "It's a hybrid event: online submissions first, then the top 30 shortlisted teams compete in a 12-hour on-campus hackathon at SSJCOE." },
  { q: "What should I submit in the online round?", a: "An idea abstract, PPT presentation, and optionally a prototype/demo link before the deadline (28 Feb)." },
  { q: "How are winners selected?", a: "Judging is based on Innovation, Feasibility, Relevance, and Execution. Winners are selected per track with optional cross-track jury prizes." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-primary text-glow-cyan">Questions</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Everything you need to know</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
