import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import footerBg from "@/assets/footer-bg.jpg";

export const Footer = () => {
  return (
    <footer className="relative bg-dark text-dark-foreground overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/90 to-dark" aria-hidden />
      <div className="container relative z-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo className="h-14" inverted />
          <p className="mt-4 font-accent text-sm text-primary-glow">Bridging Your Business to the Digital Sky</p>
          <p className="mt-3 text-sm text-dark-foreground/70 leading-relaxed">
            A global digital growth agency engineering measurable results for ambitious brands.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:gradient-primary hover:border-transparent hover:shadow-glow transition-smooth"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-dark-foreground/75">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Portfolio", "#"],
              ["Blog", "#"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-primary-glow transition-smooth">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Our Services</h4>
          <ul className="space-y-3 text-sm text-dark-foreground/75">
            {["SEO Optimization", "Web Development", "Social Media", "Paid Advertising", "Logo & Branding", "Digital Marketing"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-primary-glow transition-smooth">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm text-dark-foreground/75">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> Sheikh Zayed Road, Dubai, UAE</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> +971 4 123 4567</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> hello@skybridge.com</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 font-accent font-semibold text-sm gradient-text"
          >
            Send Message <ArrowRight className="w-4 h-4 text-primary-glow" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-dark-foreground/60">
          <p>© 2025 SkyBridge International Consultancy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-glow transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary-glow transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
