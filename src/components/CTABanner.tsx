import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

export const CTABanner = () => (
  <section className="relative py-24 overflow-hidden">
    {/* background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
      aria-hidden
    />
    <div className="absolute inset-0 gradient-deep opacity-85" aria-hidden />
    {/* particle dots */}
    <div className="absolute inset-0 opacity-40">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `float ${4 + Math.random() * 5}s ease-in-out ${Math.random() * 3}s infinite`,
          }}
        />
      ))}
    </div>
    <div className="container relative z-10 text-center text-white">
      <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
        Ready to Skyrocket Your Business?
      </h2>
      <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto">
        Join 300+ businesses already growing with SkyBridge International.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button variant="heroSolid" size="xl" asChild>
          <Link to="/contact">Get Free Strategy Call</Link>
        </Button>
        <Button variant="heroGhost" size="xl" asChild>
          <Link to="/services">View Our Services</Link>
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-accent text-white/85">
        <span>🔒 No Long-Term Contracts</span>
        <span>⚡ Fast Turnaround</span>
        <span>💯 Results Guaranteed</span>
      </div>
    </div>
  </section>
);
