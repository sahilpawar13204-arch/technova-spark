import AnimatedSection from "./AnimatedSection";
import { CalendarDays, FileText, CheckCircle, Flame, Users, Search } from "lucide-react";

const events = [
  { date: "February 7, 2026", title: "Registration Opens", desc: "Team registration and track selection begins on Unstop", icon: CalendarDays, active: true },
  { date: "February 21, 2026", title: "Registration Closes", desc: "Last date to register your team", icon: Users, active: false },
  { date: "February 28, 2026", title: "Submission Deadline", desc: "Submit your idea abstract, PPT, and demo link", icon: FileText, active: false },
  { date: "March 1, 2026", title: "Shortlisting Begins", desc: "Panel reviews all submissions", icon: Search, active: false },
  { date: "March 7, 2026", title: "Shortlist Announced", desc: "Top 30 teams announced", icon: CheckCircle, active: false },
  { date: "March 17, 2026", title: "Offline Final Round", desc: "12-hour hackathon at SSJCOE campus", icon: Flame, active: false },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="text-sm text-secondary font-medium text-center mb-2 tracking-widest uppercase">Mark Your Calendar</p>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Event <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Timeline</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Key dates for HACKNOVA 2026</p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/50 via-primary/30 to-accent/50" />

        <div className="space-y-8">
          {events.map((ev, i) => (
            <AnimatedSection key={ev.title} delay={i * 0.1}>
              <div className="flex gap-5 md:gap-8 items-start relative group">
                {/* Dot */}
                <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                  ev.active
                    ? "bg-secondary/10 border-secondary/50 box-glow-purple group-hover:scale-110"
                    : "bg-muted border-border group-hover:border-muted-foreground/40 group-hover:scale-105"
                }`}>
                  <ev.icon size={20} className={ev.active ? "text-secondary" : "text-muted-foreground"} />
                  {ev.active && (
                    <span className="absolute inset-0 rounded-xl bg-secondary/10 animate-ping opacity-30" />
                  )}
                </div>

                {/* Content */}
                <div className={`rounded-2xl bg-card/80 border p-5 md:p-6 flex-1 transition-all duration-300 ${
                  ev.active
                    ? "border-secondary/30 box-glow-purple"
                    : "border-border group-hover:border-muted-foreground/20"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-space font-bold text-base md:text-lg text-foreground">{ev.title}</h3>
                    <span className={`text-xs font-medium ${ev.active ? "text-secondary" : "text-muted-foreground"}`}>
                      {ev.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ev.desc}</p>
                  {ev.active && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded">
                      Active
                    </span>
                  )}
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
