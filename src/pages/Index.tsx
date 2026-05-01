import { ArrowRight, Search, Code2, Share2, Megaphone, Palette, BarChart3, Check, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { HeroSlider } from "@/components/HeroSlider";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StatsSection } from "@/components/StatsSection";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, get found faster, grow organically." },
  { icon: Code2, title: "Web Development", desc: "Custom, fast, mobile-first websites that convert." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build community and engagement across all platforms." },
  { icon: Megaphone, title: "Paid Advertising", desc: "Google & Meta Ads with maximum ROI targeting." },
  { icon: Palette, title: "Logo & Branding", desc: "Identity design that makes your brand unforgettable." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Full-funnel strategy from awareness to conversion." },
];

const testimonials = [
  { text: "SkyBridge transformed our online presence completely. Our leads tripled within 90 days.", name: "Arjun Mehta", role: "CEO, NovaTech Solutions", initials: "AM" },
  { text: "The team at SkyBridge built us a website that actually converts visitors into paying customers.", name: "Sarah Al-Rashidi", role: "Founder, Luxe Interiors", initials: "SR" },
  { text: "Their SEO strategy pushed us to page 1 of Google in under 3 months. Absolutely incredible.", name: "James Okonkwo", role: "Director, PrimeShip Logistics", initials: "JO" },
];

const Index = () => {
  const [t, setT] = useState(0);
  const nextT = () => setT((x) => (x + 1) % testimonials.length);
  const prevT = () => setT((x) => (x - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      <HeroSlider />
      <Marquee />

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative h-[520px]">
              <img src={team1} alt="SkyBridge team collaborating" loading="lazy" className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-2xl shadow-elegant" />
              <img src={team2} alt="SkyBridge office" loading="lazy" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-elegant border-8 border-background" />
              <div className="absolute -bottom-4 left-4 z-10 glass-light rounded-2xl px-5 py-4 shadow-glow">
                <p className="font-display font-extrabold text-2xl gradient-text">10+ Years</p>
                <p className="font-accent text-xs uppercase tracking-wider text-foreground/70">of Excellence</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">Who We Are</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
              We Are the Bridge Between Your <span className="gradient-text">Brand</span> and Digital Success
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              SkyBridge International Consultancy is a full-service digital growth agency built on data,
              creativity, and relentless execution. We partner with ambitious brands across the globe to
              engineer measurable, lasting results in the digital landscape.
            </p>
            <ul className="mt-8 space-y-3">
              {["Tailored Strategies", "Transparent Reporting", "Measurable Results"].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="font-accent font-semibold">{b}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/about">Discover Our Story <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Do</p>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl">Comprehensive Digital Solutions</h2>
              <p className="mt-4 text-muted-foreground">Everything you need to launch, grow, and scale — built under one roof.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative bg-card border border-border rounded-2xl p-8 h-full transition-smooth hover:-translate-y-2 hover:shadow-glow hover:border-primary/30">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-6">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-accent font-semibold gradient-text opacity-0 group-hover:opacity-100 transition-smooth">
                    Learn More <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection
        stats={[
          { value: 500, suffix: "+", label: "Projects Completed" },
          { value: 320, suffix: "+", label: "Happy Clients Worldwide" },
          { value: 98, suffix: "%", label: "Client Retention Rate" },
          { value: 12, suffix: "+", label: "Years of Industry Expertise" },
        ]}
        quote="Results aren't promised — they're engineered."
      />

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">Client Love</p>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl">What Our Clients Say About Us</h2>
            </div>
          </Reveal>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const idx = (t + offset) % testimonials.length;
                const tt = testimonials[idx];
                return (
                  <div key={offset} className={`bg-card rounded-2xl p-8 shadow-card border border-border relative ${offset !== 0 ? "hidden md:block" : ""}`}>
                    <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                    <p className="relative italic text-foreground/90 leading-relaxed mb-6 mt-6">"{tt.text}"</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-display font-bold">
                        {tt.initials}
                      </div>
                      <div className="flex-1">
                        <p className="font-display font-bold">{tt.name}</p>
                        <p className="text-xs text-muted-foreground">{tt.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mt-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button onClick={prevT} aria-label="Previous testimonial" className="w-11 h-11 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-smooth flex items-center justify-center">
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setT(i)} aria-label={`Go to testimonial ${i+1}`} className={`h-1.5 rounded-full transition-smooth ${i === t ? "w-8 gradient-primary" : "w-2 bg-border"}`} />
                ))}
              </div>
              <button onClick={nextT} aria-label="Next testimonial" className="w-11 h-11 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-smooth flex items-center justify-center">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Index;
