import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, ArrowDown } from "lucide-react";

const TARGET_DATE = new Date("2026-03-14T09:00:00");

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
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_100%_50%/0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

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
          className="font-space text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-glow-cyan text-primary">HACK</span>
          <span className="text-glow-magenta text-secondary">NOVA</span>
          <span className="text-foreground"> 2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          Shivajirao S. Jondhale College of Engineering, Dombivli (E)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground mb-10"
        >
          Organized by <span className="text-primary font-medium">Technova Club</span> • 12-Hour On-Campus Hackathon
        </motion.p>

        {/* Prize badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="inline-block mb-12"
        >
          <div className="px-8 py-4 rounded-2xl bg-accent/10 border border-accent/30 box-glow-gold">
            <p className="text-xs text-accent/80 font-medium uppercase tracking-widest mb-1">Total Prize Pool</p>
            <p className="font-space text-4xl md:text-5xl font-bold text-accent text-glow-gold">₹60,000</p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex justify-center gap-4 md:gap-6 mb-12"
        >
          {countdownBlocks.map((block) => (
            <div key={block.label} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-2">
                <span className="font-space text-2xl md:text-3xl font-bold text-primary">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{block.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:shadow-[0_0_30px_hsl(190_100%_50%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Register on Unstop
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-xl border border-border text-foreground font-medium text-base hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
