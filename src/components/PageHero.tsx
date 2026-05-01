import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export const PageHero = ({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) => (
  <section className="relative pt-32 pb-24 gradient-dark text-dark-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.4), transparent 40%)"
    }} />
    <div className="container relative z-10 text-center">
      <Reveal>
        <p className="font-accent text-sm uppercase tracking-widest text-primary-glow mb-4">
          <Link to="/" className="hover:underline">Home</Link> <span className="mx-2">›</span> {breadcrumb}
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-6 text-lg text-dark-foreground/75 max-w-2xl mx-auto">{subtitle}</p>
      </Reveal>
    </div>
  </section>
);
