import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Code2, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import heroCity from "@/assets/hero-city.jpg";
import heroWork from "@/assets/hero-workspace.jpg";
import heroData from "@/assets/hero-data.jpg";

type Slide = {
  bg: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  visual: "growth" | "web" | "ads";
};

const slides: Slide[] = [
  {
    bg: heroCity,
    badge: "🚀 #1 Digital Growth Agency",
    title: "We Elevate Brands in the Digital Universe",
    subtitle: "Data-driven strategies that turn clicks into customers and ideas into empires.",
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "View Our Work",
    visual: "growth",
  },
  {
    bg: heroWork,
    badge: "💻 Award-Winning Web Design",
    title: "Websites That Work While You Sleep",
    subtitle: "Custom-built, lightning-fast, conversion-optimized websites for every business size.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Portfolio",
    visual: "web",
  },
  {
    bg: heroData,
    badge: "📈 ROI-Focused Marketing",
    title: "Dominate Search. Dominate Sales.",
    subtitle: "From Google Ads to organic SEO — we put your brand exactly where your customers are looking.",
    ctaPrimary: "Boost My Rankings",
    ctaSecondary: "Learn More",
    visual: "ads",
  },
];

const VisualCard = ({ kind }: { kind: Slide["visual"] }) => {
  if (kind === "growth") {
    return (
      <div className="glass rounded-2xl p-6 w-full max-w-sm shadow-glow animate-float">
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/70 text-xs font-accent uppercase tracking-wider">Monthly Traffic</p>
          <TrendingUp className="text-primary-glow w-5 h-5" />
        </div>
        <p className="text-white text-3xl font-display font-extrabold">+248%</p>
        <svg viewBox="0 0 200 80" className="mt-4 w-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(195 100% 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(195 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 L30,60 L60,55 L90,40 L120,30 L150,18 L180,10 L200,5 L200,80 L0,80 Z" fill="url(#g1)" />
          <path d="M0,70 L30,60 L60,55 L90,40 L120,30 L150,18 L180,10 L200,5" stroke="hsl(195 100% 60%)" strokeWidth="2" fill="none" />
        </svg>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {["Clicks", "Leads", "Sales"].map((l, i) => (
            <div key={l} className="bg-white/10 rounded-lg py-2">
              <p className="text-primary-glow text-sm font-bold">{["12K", "3.2K", "847"][i]}</p>
              <p className="text-white/60 text-[10px] uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "web") {
    return (
      <div className="glass rounded-2xl overflow-hidden w-full max-w-sm shadow-glow animate-float">
        <div className="bg-white/10 px-4 py-2 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-3 text-[10px] text-white/60">skybridge.com</div>
        </div>
        <div className="p-5 space-y-3">
          <div className="h-3 w-1/2 bg-primary-glow/60 rounded" />
          <div className="h-2 w-full bg-white/15 rounded" />
          <div className="h-2 w-4/5 bg-white/15 rounded" />
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[0,1,2].map(i => <div key={i} className="aspect-square gradient-primary rounded-lg opacity-80" />)}
          </div>
          <div className="h-9 gradient-primary rounded-full mt-4" />
        </div>
      </div>
    );
  }
  return (
    <div className="glass rounded-2xl p-6 w-full max-w-sm shadow-glow animate-float">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="text-primary-glow w-5 h-5" />
        <p className="text-white/70 text-xs font-accent uppercase tracking-wider">Google Ads · ROAS</p>
      </div>
      <p className="text-white text-4xl font-display font-extrabold">8.4x</p>
      <p className="text-primary-glow text-xs mt-1">+312% vs last quarter</p>
      <div className="mt-5 space-y-3">
        {[
          ["Impressions", "1.2M", "92%"],
          ["Clicks", "84K", "76%"],
          ["Conversions", "6.4K", "58%"],
        ].map(([l, v, w]) => (
          <div key={l}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/70">{l}</span>
              <span className="text-white font-semibold">{v}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full" style={{ width: w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HeroSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((n) => (n + 1) % slides.length);
  const prev = () => setI((n) => (n - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img src={s.bg} alt="" className="absolute inset-0 w-full h-full object-cover scale-110" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, hsl(240 60% 8% / 0.92) 0%, hsl(230 83% 18% / 0.7) 60%, hsl(220 100% 25% / 0.4) 100%)" }} />
        </div>
      ))}

      <div className="relative z-20 h-full container flex items-center pt-20">
        <div className="grid lg:grid-cols-5 gap-10 w-full items-center">
          <div className="lg:col-span-3 text-white">
            {slides.map((s, idx) => idx === i && (
              <div key={idx} className="space-y-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-accent text-white animate-fade-up">
                  {s.badge}
                </span>
                <h1 className="font-biennale font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] animate-fade-up" style={{ animationDelay: "120ms" }}>
                  {s.title}
                </h1>
                <p className="font-biennale text-base md:text-lg text-white/80 max-w-xl animate-fade-up" style={{ animationDelay: "240ms" }}>
                  {s.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
                  <Button variant="hero" size="xl">{s.ctaPrimary}</Button>
                  <Button variant="heroOutline" size="xl">
                    {s.ctaSecondary} <ArrowRight />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 hidden md:flex justify-center lg:justify-end">
            {slides.map((s, idx) => idx === i && <VisualCard key={idx} kind={s.visual} />)}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous slide" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:gradient-primary transition-smooth">
        <ChevronLeft />
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:gradient-primary transition-smooth">
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-smooth ${idx === i ? "w-10 gradient-primary" : "w-4 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
};
