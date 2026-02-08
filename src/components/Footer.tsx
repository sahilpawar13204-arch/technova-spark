import { MapPin, Mail, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-card border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-space text-xl font-bold text-primary mb-3">HACKNOVA 2026</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A 12-hour hybrid hackathon by Technova Club at Shivajirao S. Jondhale College of Engineering, Dombivli (E).
          </p>
        </div>

        {/* Venue */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <MapPin size={16} className="text-primary" /> Venue
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Shivajirao S. Jondhale College of Engineering<br />
            Dombivli (E), Maharashtra, India
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <ExternalLink size={12} /> Register on Unstop
            </a>
            <a href="mailto:technova@ssjcoe.in" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <Mail size={12} /> technova@ssjcoe.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Technova Club, SSJCOE. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
