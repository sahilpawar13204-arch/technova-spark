import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  CalendarDays,
  FileText,
  CheckCircle,
  Flame,
  Users,
  ArrowRight,
  Clock,
  MapPin,
  Upload,
  Star,
} from "lucide-react";

const events = [
  {
    date: "7 Feb 2026",
    title: "Registration Opens",
    desc: "Team registration goes live on Unstop. Form your squad of 2–4 and pick your technology track.",
    icon: CalendarDays,
    status: "active" as const,
    details: [
      { icon: Users, text: "Teams of 2–4 members" },
      { icon: ArrowRight, text: "Register via Unstop platform" },
      { icon: Star, text: "5 tracks to choose from" },
    ],
    color: "primary",
  },
  {
    date: "21 Feb 2026",
    title: "Registration Closes",
    desc: "Last chance to register your team. Make sure all member details and track selection are finalized.",
    icon: Users,
    status: "upcoming" as const,
    details: [
      { icon: CheckCircle, text: "Verify all team member info" },
      { icon: FileText, text: "Confirm track selection" },
    ],
    color: "secondary",
  },
  {
    date: "28 Feb 2026",
    title: "Submission Deadline",
    desc: "Upload your idea abstract, PPT presentation, and optional prototype link before midnight.",
    icon: Upload,
    status: "upcoming" as const,
    details: [
      { icon: FileText, text: "PPT / PDF (max 10 MB)" },
      { icon: Upload, text: "Idea abstract required" },
      { icon: ArrowRight, text: "Optional demo/prototype link" },
    ],
    color: "neon-purple",
  },
  {
    date: "1–7 Mar 2026",
    title: "Shortlisting Phase",
    desc: "Expert jury reviews all submissions. Top 30 teams across tracks are shortlisted for the final round.",
    icon: CheckCircle,
    status: "upcoming" as const,
    details: [
      { icon: Star, text: "Judged on Innovation & Feasibility" },
      { icon: Users, text: "30 teams shortlisted" },
      { icon: FileText, text: "Results announced via email" },
    ],
    color: "neon-green",
  },
  {
    date: "14 Mar 2026",
    title: "Final Hackathon Day",
    desc: "The ultimate 12-hour on-campus hackathon at SSJCOE, Dombivli. Build, present, and win!",
    icon: Flame,
    status: "upcoming" as const,
    details: [
      { icon: Clock, text: "12-hour non-stop coding" },
      { icon: MapPin, text: "SSJCOE Campus, Dombivli (E)" },
      { icon: Star, text: "₹60,000 total prize pool" },
    ],
    color: "accent",
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; glow: string; line: string }> = {
  primary: {
    border: "border-primary/50",
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "box-glow-cyan",
    line: "bg-primary",
  },
  secondary: {
    border: "border-secondary/50",
    bg: "bg-secondary/10",
    text: "text-secondary",
    glow: "box-glow-magenta",
    line: "bg-secondary",
  },
  "neon-purple": {
    border: "border-neon-purple/50",
    bg: "bg-neon-purple/10",
    text: "text-neon-purple",
    glow: "",
    line: "bg-neon-purple",
  },
  "neon-green": {
    border: "border-neon-green/50",
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    glow: "",
    line: "bg-neon-green",
  },
  accent: {
    border: "border-accent/50",
    bg: "bg-accent/10",
    text: "text-accent",
    glow: "box-glow-gold",
    line: "bg-accent",
  },
};

const TimelineCard = ({ ev, index }: { ev: (typeof events)[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const c = colorClasses[ev.color];
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start">
      {/* Left content or spacer */}
      <div className={`${isLeft ? "block" : "hidden md:block"} ${!isLeft ? "md:block" : ""}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setExpanded(!expanded)}
            className={`rounded-2xl bg-card border ${
              ev.status === "active" ? c.border : "border-border"
            } p-5 md:p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              ev.status === "active" ? c.glow : "hover:border-muted-foreground/30"
            } ${expanded ? c.border : ""} ml-auto max-w-sm w-full`}
          >
            <CardContent ev={ev} c={c} expanded={expanded} />
          </motion.div>
        ) : (
          <div className="hidden md:flex items-center justify-end h-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className={`text-sm font-space font-semibold ${c.text}`}
            >
              {ev.date}
            </motion.p>
          </div>
        )}
      </div>

      {/* Center dot + line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", delay: 0.1 }}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 ${
            ev.status === "active"
              ? `${c.border} ${c.bg} ${c.glow}`
              : "border-border bg-muted"
          } z-10 relative`}
        >
          <ev.icon size={20} className={ev.status === "active" ? c.text : "text-muted-foreground"} />
          {ev.status === "active" && (
            <span className={`absolute inset-0 rounded-full ${c.bg} animate-ping opacity-30`} />
          )}
        </motion.div>
      </div>

      {/* Right content or spacer */}
      <div className={`${!isLeft ? "block" : "hidden md:block"} ${isLeft ? "md:block" : ""}`}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setExpanded(!expanded)}
            className={`rounded-2xl bg-card border ${
              ev.status === "active" ? c.border : "border-border"
            } p-5 md:p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              ev.status === "active" ? c.glow : "hover:border-muted-foreground/30"
            } ${expanded ? c.border : ""} max-w-sm w-full`}
          >
            <CardContent ev={ev} c={c} expanded={expanded} />
          </motion.div>
        ) : (
          <div className="hidden md:flex items-center h-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className={`text-sm font-space font-semibold ${c.text}`}
            >
              {ev.date}
            </motion.p>
          </div>
        )}
      </div>

      {/* Mobile fallback: show card on right if hidden */}
      {isLeft ? null : (
        <div className="md:hidden col-span-3 -mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setExpanded(!expanded)}
            className={`rounded-2xl bg-card border ${
              ev.status === "active" ? c.border : "border-border"
            } p-5 cursor-pointer transition-all duration-300 ${
              ev.status === "active" ? c.glow : ""
            } ${expanded ? c.border : ""}`}
          >
            <CardContent ev={ev} c={c} expanded={expanded} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

const CardContent = ({
  ev,
  c,
  expanded,
}: {
  ev: (typeof events)[0];
  c: (typeof colorClasses)[string];
  expanded: boolean;
}) => (
  <>
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          ev.status === "active" ? c.line : "bg-muted-foreground/40"
        }`}
      />
      <span className={`text-xs font-medium uppercase tracking-wider md:hidden ${c.text}`}>
        {ev.date}
      </span>
      {ev.status === "active" && (
        <span className={`text-[10px] uppercase tracking-widest font-bold ${c.text} ml-auto`}>
          Live Now
        </span>
      )}
    </div>
    <h3 className="font-space font-bold text-base md:text-lg text-foreground mb-1.5">{ev.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{ev.desc}</p>

    <motion.div
      initial={false}
      animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="mt-4 pt-4 border-t border-border space-y-2.5">
        {ev.details.map((d, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <d.icon size={14} className={c.text} />
            <span className="text-xs text-muted-foreground">{d.text}</span>
          </div>
        ))}
      </div>
    </motion.div>

    <p className={`text-[10px] mt-3 ${c.text} opacity-60`}>
      {expanded ? "Click to collapse" : "Click for details →"}
    </p>
  </>
);

const TimelineSection = () => (
  <section id="timeline" className="py-24 relative overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          Event <span className="text-secondary text-glow-magenta">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          Key dates for HACKNOVA 2026 — click any event for details
        </p>

        {/* Stage indicators */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {["Online Phase", "Review Phase", "On-Campus Final"].map((stage, i) => (
            <span
              key={stage}
              className={`text-xs px-3 py-1 rounded-full border ${
                i === 0
                  ? "border-primary/30 text-primary bg-primary/5"
                  : "border-border text-muted-foreground"
              }`}
            >
              Stage {i + 1}: {stage}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/30 to-accent/50" />

        <div className="space-y-12 md:space-y-16">
          {events.map((ev, i) => (
            <TimelineCard key={ev.title} ev={ev} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
