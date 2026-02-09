import { motion } from "framer-motion";
import { Trophy, CalendarDays, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_80%_40%/0.1)_0%,_transparent_60%)]" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Amazing?</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Join innovators from across India at HACKNOVA 2026. Register now and compete for ₹50,000+ in prizes!
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-12 mb-10">
          {[
            { icon: Trophy, value: "₹50K+", label: "Prize Pool" },
            { icon: CalendarDays, value: "12hrs", label: "Final Round" },
            { icon: Layers, value: "5", label: "Tech Tracks" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-5 h-5 text-secondary mx-auto mb-2" />
              <p className="font-space font-bold text-xl text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(270_80%_55%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Register Now <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact#faq"
            className="px-8 py-3.5 rounded-xl border border-secondary/30 text-foreground font-medium hover:border-secondary/50 hover:text-secondary transition-all duration-300"
          >
            Have Questions?
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
