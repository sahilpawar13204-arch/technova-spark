import AnimatedSection from "./AnimatedSection";
import { CalendarDays, FileText, CheckCircle, Flame } from "lucide-react";

const events = [
  { date: "7 Feb 2026", title: "Registration Opens", desc: "Sign up on Unstop", icon: CalendarDays, active: true },
  { date: "21 Feb 2026", title: "Registration Closes", desc: "Last date to register", icon: CalendarDays, active: false },
  { date: "28 Feb 2026", title: "Submission Deadline", desc: "PPT & abstract upload", icon: FileText, active: false },
  { date: "1–7 Mar 2026", title: "Shortlisting", desc: "Top 30 teams selected", icon: CheckCircle, active: false },
  { date: "14 Mar 2026", title: "Final Hackathon Day", desc: "12-hour on-campus event", icon: Flame, active: false },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Event <span className="text-secondary text-glow-magenta">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Key dates for HACKNOVA 2026</p>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {events.map((ev, i) => (
            <AnimatedSection key={ev.title} delay={i * 0.1}>
              <div className="flex gap-6 items-start relative">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 border ${
                  ev.active 
                    ? "bg-primary/10 border-primary/50 box-glow-cyan" 
                    : "bg-muted border-border"
                }`}>
                  <ev.icon size={20} className={ev.active ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div className="pt-1">
                  <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${ev.active ? "text-primary" : "text-muted-foreground"}`}>
                    {ev.date}
                  </p>
                  <h3 className="font-space font-bold text-lg text-foreground">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground">{ev.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
