import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Code2, Share2, Megaphone, Palette, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import bgServices from "@/assets/bg-services.jpg";
import svcSeo from "@/assets/svc-seo.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcSocial from "@/assets/svc-social.jpg";
import svcAds from "@/assets/svc-ads.jpg";
import svcBrand from "@/assets/svc-brand.jpg";
import svcDigital from "@/assets/svc-digital.jpg";

const services = [
  {
    slug: "seo-optimization",
    icon: Search,
    label: "SEO Optimization",
    title: "SEO Optimization",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcSeo,
    paragraphs: [
      "Our SEO team blends technical excellence with content strategy to push your brand to the top of search results — and keep it there.",
      "We focus on what truly moves the needle: high-intent keywords, fast site experiences, and authoritative content that earns links naturally.",
    ],
    bullets: ["Technical site audits & fixes", "Keyword research & content roadmap", "Authority link building & monthly reporting"],
    metric: "↑ 312% Organic Traffic",
  },
  {
    slug: "web-development",
    icon: Code2,
    label: "Web Development",
    title: "Web Development",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcWeb,
    paragraphs: [
      "We design and build custom, lightning-fast websites that look beautiful on every device and turn visitors into customers.",
      "From boutique sites to enterprise platforms, every line of code is crafted with performance, SEO, and accessibility in mind.",
    ],
    bullets: ["Custom design & development", "Mobile-first, blazing-fast", "CMS, e-commerce & integrations"],
    metric: "98 PageSpeed Score",
  },
  {
    slug: "social-media-marketing",
    icon: Share2,
    label: "Social Media",
    title: "Social Media",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcSocial,
    paragraphs: [
      "We craft social strategies that grow real audiences and drive real revenue — across Instagram, LinkedIn, TikTok, and more.",
      "Content, scheduling, community management, and creative production handled end-to-end.",
    ],
    bullets: ["Content production & calendars", "Community management", "Influencer & creator partnerships"],
    metric: "+5x Engagement",
  },
  {
    slug: "paid-advertising",
    icon: Megaphone,
    label: "Paid Advertising",
    title: "Paid Advertising",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcAds,
    paragraphs: [
      "Our paid media specialists manage millions in ad spend, focused on one thing — return on every dollar invested.",
      "We pair sharp targeting with conversion-optimized creative to scale your acquisition profitably.",
    ],
    bullets: ["Google, Meta, LinkedIn & TikTok Ads", "Conversion tracking & attribution", "Creative testing at scale"],
    metric: "8.4x Average ROAS",
  },
  {
    slug: "logo-branding",
    icon: Palette,
    label: "Logo & Branding",
    title: "Logo & Branding",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcBrand,
    paragraphs: [
      "Your brand is more than a logo — it's the feeling people get when they think of you. We build identities that feel inevitable.",
      "From naming and logo design to full brand systems and guidelines, we craft brands that scale with you.",
    ],
    bullets: ["Logo, type & color systems", "Brand strategy & messaging", "Guidelines & asset libraries"],
    metric: "100% Custom",
  },
  {
    slug: "digital-marketing",
    icon: BarChart3,
    label: "Digital Marketing",
    title: "Digital Marketing",
    short: "We honestly want our clients to succeed online in their fields.",
    image: svcDigital,
    paragraphs: [
      "We orchestrate your entire digital presence — from awareness to conversion to retention — into one cohesive growth engine.",
      "One partner, one strategy, one number that matters: predictable, profitable growth.",
    ],
    bullets: ["Funnel architecture & CRO", "Email & marketing automation", "Cross-channel reporting"],
    metric: "All-in-One Partner",
  },
];

const ServiceCard = ({ s, index }: { s: typeof services[number]; index: number }) => {
  const Icon = s.icon;
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="group relative bg-card rounded-2xl shadow-card overflow-hidden border border-border transition-smooth hover:-translate-y-2 hover:shadow-elegant h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden p-3 pb-0">
        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          {/* Floating gradient icon badge */}
          <div className="absolute -bottom-6 right-6 w-16 h-16 rounded-2xl gradient-primary shadow-glow flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6">
            <Icon className="w-8 h-8 text-white" strokeWidth={1.6} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-7 pt-10 flex-1 flex flex-col">
        {/* Watermark number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-5 bottom-3 font-display font-extrabold text-[5.5rem] leading-none text-transparent select-none"
          style={{ WebkitTextStroke: "1.5px hsl(var(--border))" }}
        >
          {num}
        </span>

        <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase tracking-tight text-foreground group-hover:text-primary transition-smooth">
          {s.title}
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
          {s.short}
        </p>

        <div className="mt-6 relative z-10">
          <Link
            to={`/services/${s.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground font-accent font-semibold text-sm transition-smooth group-hover:gradient-primary group-hover:text-white group-hover:shadow-glow"
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSlider = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, services.length - perPage + 1);
  const safePage = Math.min(page, totalPages - 1);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  // auto-advance
  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [totalPages]);

  const slideWidth = 100 / perPage;
  const offset = safePage * slideWidth;

  return (
    <div className="relative">
      {/* Decorative background flourishes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 w-72 h-72 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.35) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle at top left, black 30%, transparent 70%)",
        }}
      />

      <div className="overflow-hidden -mx-3">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="shrink-0 px-3"
              style={{ width: `${slideWidth}%` }}
            >
              <ServiceCard s={s} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={prev}
          aria-label="Previous services"
          className="w-12 h-12 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-smooth flex items-center justify-center shadow-card"
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-smooth ${
                i === safePage ? "w-10 gradient-primary" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next services"
          className="w-12 h-12 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-smooth flex items-center justify-center shadow-card"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const Services = () => (
  <Layout>
    <PageHero
      breadcrumb="Services"
      title="Digital Services Engineered for Growth"
      subtitle="Everything your business needs to dominate the digital landscape — under one roof."
      image={bgServices}
    />

    {/* Slider section (image-card style) */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Offer</p>
            <h2 className="h-section">Services Built Around Your Growth</h2>
            <p className="mt-4 text-muted-foreground">
              Swipe through our core services — every card is a complete capability your business can plug into.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ServicesSlider />
        </Reveal>
      </div>
    </section>

    {/* Detailed sections */}
    <section className="py-20 bg-secondary">
      <div className="container space-y-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          const Icon = s.icon;
          return (
            <div key={s.label} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant group">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-5 -right-5 glass-light rounded-2xl px-5 py-3 shadow-glow">
                    <p className="font-display font-extrabold text-lg gradient-text">{s.metric}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                  <span className="font-accent text-xs uppercase tracking-[0.3em] text-primary">{s.label}</span>
                </div>
                <h3 className="h-section">{s.title}</h3>
                {s.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-4 text-muted-foreground leading-relaxed">{p}</p>
                ))}
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </span>
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" className="mt-8" asChild>
                  <Link to={`/services/${s.slug}`}>Learn More <ArrowRight /></Link>
                </Button>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>

    {/* Pricing teaser */}
    <section className="py-20 bg-background">
      <div className="container text-center">
        <h3 className="h-section">Not sure which package is right for you?</h3>
        <p className="mt-4 text-muted-foreground">We'll build a custom plan around your goals — no pressure, no jargon.</p>
        <Button variant="hero" size="xl" className="mt-8" asChild>
          <Link to="/contact">Book a Free Consultation</Link>
        </Button>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Services;
