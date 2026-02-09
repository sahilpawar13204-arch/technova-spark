import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Register", href: "/register" },
  { label: "Tracks", href: "/tracks" },
  { label: "Shortlisted", href: "/shortlisted" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles size={18} className="text-secondary" />
          <span className="font-space text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>HACK</span>
            <span className="text-accent">NOVA</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-secondary bg-secondary/10 border border-secondary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm hover:shadow-[0_0_20px_hsl(270_80%_55%/0.4)] transition-all duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[72px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
        >
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-secondary bg-secondary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-center mt-2"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
