import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, ArrowRight, ArrowDown, Trophy, Globe, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const TARGET_DATE = new Date("2026-02-21T23:59:59");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const countdownBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_100%_50%/0.06)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
            <Zap size={14} />
            Pan-India Hackathon • Hybrid Format
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-space text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
        >
          <span className="text-foreground">HACK</span>
          <span className="text-accent text-glow-gold">NOVA</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-space text-2xl md:text-4xl font-bold text-primary text-glow-cyan mb-6"
        >
          HACKATHON 2026
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-2"
        >
          Shivajirao S. Jondhale College of Engineering, Dombivli (E)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-sm text-muted-foreground mb-10"
        >
          Organized by <span className="text-primary font-medium">Hacknova Club</span> • 5 Technology Tracks • 30 Shortlisted Teams
        </motion.p>

        {/* Prize badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="inline-block mb-10"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent/10 border border-accent/30 box-glow-gold">
            <Trophy className="w-7 h-7 text-accent" />
            <div className="text-left">
              <p className="text-[10px] text-accent/70 font-medium uppercase tracking-widest">Total Prize Pool</p>
              <p className="font-space text-3xl md:text-4xl font-bold text-accent text-glow-gold">₹60,000</p>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Registration Closes In</p>
          <div className="flex justify-center gap-3 md:gap-5 mb-3">
            {countdownBlocks.map((block, i) => (
              <div key={block.label} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-1.5">
                  <span className="font-space text-2xl md:text-3xl font-bold text-foreground">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{block.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Registration closes Feb 21, 2026</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:shadow-[0_0_30px_hsl(190_100%_50%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Register Now <ArrowRight size={18} />
          </Link>
          <Link
            to="/tracks"
            className="px-8 py-3.5 rounded-xl border border-border text-foreground font-medium text-base hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            View Tracks
          </Link>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 md:gap-10 mt-16"
        >
          {[
            { icon: Trophy, value: "₹60,000", label: "Prize Pool" },
            { icon: Globe, value: "Pan-India", label: "Participation" },
            { icon: CalendarDays, value: "12hrs", label: "Final Hackathon" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="font-space font-bold text-lg text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={20} className="text-muted-foreground mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
