import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, Trophy, Globe, CalendarDays, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TARGET_DATE = new Date("2026-03-17T23:59:59");

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
      {/* Cosmic radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(270_80%_40%/0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* College name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2"
        >
          <p className="text-xs md:text-sm text-muted-foreground tracking-wider uppercase">Samarth Samaj's</p>
          <p className="text-sm md:text-base font-semibold text-foreground tracking-wide">
            Shivajirao S. Jondhale College of Engineering, Dombivli (E)
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground italic">(Affiliated to University of Mumbai)</p>
        </motion.div>

        {/* Technova Club */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium">
            <Sparkles size={14} />
            Technova Club Presents
          </div>
        </motion.div>

        {/* HACKNOVA title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-1"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
            HACKNOVA
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-space text-xl md:text-3xl font-semibold text-foreground/90 mb-8 tracking-wider"
        >
          National Level Hackathon
        </motion.h2>

        {/* Prize badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.45 }}
          className="inline-block mb-8"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent/10 border-2 border-accent/40 box-glow-gold">
            <Trophy className="w-8 h-8 text-accent" />
            <div className="text-left">
              <p className="text-[10px] text-accent/70 font-medium uppercase tracking-widest">Prize Pool</p>
              <p className="font-space text-3xl md:text-4xl font-bold text-accent text-glow-gold">₹50K+</p>
            </div>
          </div>
          <p className="text-[10px] text-accent/60 mt-2 uppercase tracking-wider">Includes prizes across tracks</p>
        </motion.div>

        {/* Key info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
        >
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/80 border border-border">
            <CalendarDays className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase">Date</p>
              <p className="font-space font-bold text-sm text-foreground">17 March 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/80 border border-border">
            <Users className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase">Team Size</p>
              <p className="font-space font-bold text-sm text-foreground">2–4 Members</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/80 border border-border">
            <Globe className="w-5 h-5 text-accent" />
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase">Scope</p>
              <p className="font-space font-bold text-sm text-foreground">Pan-India</p>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-10"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Hackathon Begins In</p>
          <div className="flex justify-center gap-3 md:gap-5">
            {countdownBlocks.map((block) => (
              <div key={block.label} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card/80 border border-secondary/20 flex items-center justify-center mb-1.5 box-glow-purple">
                  <span className="font-space text-2xl md:text-3xl font-bold text-foreground">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{block.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base hover:shadow-[0_0_30px_hsl(270_80%_55%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Register on Unstop <ArrowRight size={18} />
          </Link>
          <Link
            to="/tracks"
            className="px-8 py-3.5 rounded-xl border border-secondary/30 text-foreground font-medium text-base hover:border-secondary/60 hover:text-secondary transition-all duration-300"
          >
            Explore Tracks
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14"
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
