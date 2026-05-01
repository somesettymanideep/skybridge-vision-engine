import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Code2, Share2, Megaphone, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    label: "SEO Optimization",
    title: "Get Found by the Right Customers",
    paragraphs: [
      "Our SEO team blends technical excellence with content strategy to push your brand to the top of search results — and keep it there.",
      "We focus on what truly moves the needle: high-intent keywords, fast site experiences, and authoritative content that earns links naturally.",
    ],
    bullets: ["Technical site audits & fixes", "Keyword research & content roadmap", "Authority link building & monthly reporting"],
    metric: "↑ 312% Organic Traffic",
  },
  {
    icon: Code2,
    label: "Web Development",
    title: "Websites Engineered to Convert",
    paragraphs: [
      "We design and build custom, lightning-fast websites that look beautiful on every device and turn visitors into customers.",
      "From boutique sites to enterprise platforms, every line of code is crafted with performance, SEO, and accessibility in mind.",
    ],
    bullets: ["Custom design & development", "Mobile-first, blazing-fast", "CMS, e-commerce & integrations"],
    metric: "98 PageSpeed Score",
  },
  {
    icon: Share2,
    label: "Social Media Marketing",
    title: "Build Communities That Buy",
    paragraphs: [
      "We craft social strategies that grow real audiences and drive real revenue — across Instagram, LinkedIn, TikTok, and more.",
      "Content, scheduling, community management, and creative production handled end-to-end.",
    ],
    bullets: ["Content production & calendars", "Community management", "Influencer & creator partnerships"],
    metric: "+5x Engagement",
  },
  {
    icon: Megaphone,
    label: "Paid Advertising",
    title: "Google & Meta Ads with Maximum ROI",
    paragraphs: [
      "Our paid media specialists manage millions in ad spend, focused on one thing — return on every dollar invested.",
      "We pair sharp targeting with conversion-optimized creative to scale your acquisition profitably.",
    ],
    bullets: ["Google, Meta, LinkedIn & TikTok Ads", "Conversion tracking & attribution", "Creative testing at scale"],
    metric: "8.4x Average ROAS",
  },
  {
    icon: Palette,
    label: "Logo & Branding",
    title: "Identities That Make You Unforgettable",
    paragraphs: [
      "Your brand is more than a logo — it's the feeling people get when they think of you. We build identities that feel inevitable.",
      "From naming and logo design to full brand systems and guidelines, we craft brands that scale with you.",
    ],
    bullets: ["Logo, type & color systems", "Brand strategy & messaging", "Guidelines & asset libraries"],
    metric: "100% Custom",
  },
  {
    icon: BarChart3,
    label: "Digital Marketing",
    title: "Full-Funnel Strategy, Built for Growth",
    paragraphs: [
      "We orchestrate your entire digital presence — from awareness to conversion to retention — into one cohesive growth engine.",
      "One partner, one strategy, one number that matters: predictable, profitable growth.",
    ],
    bullets: ["Funnel architecture & CRO", "Email & marketing automation", "Cross-channel reporting"],
    metric: "All-in-One Partner",
  },
];

const ServiceVisual = ({ Icon, metric }: { Icon: any; metric: string }) => (
  <div className="relative aspect-[4/3] w-full">
    <div className="absolute inset-0 gradient-primary rounded-3xl shadow-glow" />
    <div className="absolute inset-2 bg-card rounded-[20px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      <Icon className="w-32 h-32 text-primary opacity-30" strokeWidth={1.2} />
    </div>
    <div className="absolute -bottom-5 -right-5 glass-light rounded-2xl px-5 py-3 shadow-glow">
      <p className="font-display font-extrabold text-lg gradient-text">{metric}</p>
    </div>
  </div>
);

const Services = () => (
  <Layout>
    <PageHero
      breadcrumb="Services"
      title="Digital Services Engineered for Growth"
      subtitle="Everything your business needs to dominate the digital landscape — under one roof."
    />

    <section className="py-24 bg-background">
      <div className="container space-y-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={s.label} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <ServiceVisual Icon={s.icon} metric={s.metric} />
              </Reveal>
              <Reveal delay={120}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <s.icon className="w-6 h-6 text-white" />
                  </span>
                  <span className="font-accent text-xs uppercase tracking-[0.3em] text-primary">{s.label}</span>
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">{s.title}</h3>
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
                  <Link to="/contact">Get Started <ArrowRight /></Link>
                </Button>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>

    {/* Pricing teaser */}
    <section className="py-20 bg-secondary">
      <div className="container text-center">
        <h3 className="font-display font-extrabold text-2xl md:text-4xl">
          Not sure which package is right for you?
        </h3>
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
