import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-space text-xl font-bold mb-3">
            <span className="text-primary">HACK</span><span className="text-accent">NOVA</span>{" "}
            <span className="text-foreground text-sm font-normal">2026</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SSJCOE's premier hackathon, organized by Hacknova Club. Pan-India participation across 5 technology tracks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-primary transition-colors">Register</Link>
            <Link to="/tracks" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology Tracks</Link>
            <Link to="/shortlisted" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shortlisted Teams</Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/contact#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Rules & Guidelines</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Code of Conduct</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Shivajirao S. Jondhale College of Engineering, Dombivli (E)</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={14} className="text-primary shrink-0" />
              <a href="mailto:hacknova@ssjcoe.edu.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">hacknova@ssjcoe.edu.in</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={14} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 Hacknova Club, SSJCOE. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Made with ❤️ by Hacknova Club
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
