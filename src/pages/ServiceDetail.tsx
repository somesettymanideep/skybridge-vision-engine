import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Search,
  Code2,
  Share2,
  Megaphone,
  Palette,
  BarChart3,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import svcSeo from "@/assets/svc-seo.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcSocial from "@/assets/svc-social.jpg";
import svcAds from "@/assets/svc-ads.jpg";
import svcBrand from "@/assets/svc-brand.jpg";
import svcDigital from "@/assets/svc-digital.jpg";

type ServiceContent = {
  slug: string;
  icon: any;
  label: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  overview: string[];
  whatWeDo: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
  metric: string;
  faqs: { q: string; a: string }[];
};

const services: ServiceContent[] = [
  {
    slug: "seo-optimization",
    icon: Search,
    label: "SEO Optimization",
    title: "Get Found by the Right Customers",
    tagline: "Rank higher. Convert smarter. Grow organically.",
    image: svcSeo,
    intro:
      "Search Engine Optimization is the long-term growth engine your brand deserves — driving qualified traffic that compounds month after month, year after year.",
    overview: [
      "At SkyBridge, our SEO discipline blends technical engineering, editorial craft, and authority building into a single growth system. We don't chase algorithms — we build websites and content that genuinely deserve to rank.",
      "From granular technical audits to scalable content production, every action we take is measured against one metric: profitable organic revenue.",
    ],
    whatWeDo: [
      { title: "Technical SEO Audits", desc: "Crawl, indexation, Core Web Vitals, schema, and site architecture diagnosed and fixed." },
      { title: "Keyword & Intent Research", desc: "Topic clusters mapped to buyer intent — built around how your customers actually search." },
      { title: "On-Page Optimization", desc: "Titles, meta, internal linking, and content structure tuned for both humans and search engines." },
      { title: "Authority Link Building", desc: "Editorial outreach and digital PR that earns links from publications that move the needle." },
    ],
    process: [
      { step: "01", title: "Discovery & Audit", desc: "Deep technical and competitive audit of your current visibility." },
      { step: "02", title: "Strategy & Roadmap", desc: "12-month roadmap built around revenue-driving keywords." },
      { step: "03", title: "Execution", desc: "Content, technical fixes, and link acquisition shipped weekly." },
      { step: "04", title: "Measure & Scale", desc: "Transparent monthly reporting and continuous optimization." },
    ],
    benefits: [
      "Compounding traffic that grows month over month",
      "Lower customer acquisition cost than paid channels",
      "Authority and trust that converts at higher rates",
      "Future-proof visibility across AI search and Google",
    ],
    metric: "↑ 312% Organic Traffic",
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most clients see meaningful keyword movement within 60–90 days. Compounding revenue impact typically begins between months 4 and 6, depending on your starting authority and competition." },
      { q: "Do you guarantee #1 rankings?", a: "No reputable agency guarantees specific rankings — and you should be cautious of any that do. We guarantee process, transparency, and measurable progress against agreed KPIs." },
      { q: "Will you write the content for us?", a: "Yes. Our in-house editorial team produces SEO-optimized, expert-reviewed content designed to rank and convert — not generic AI filler." },
      { q: "What reporting do we get?", a: "A live dashboard, plus a detailed monthly report covering rankings, traffic, conversions, and the next month's roadmap." },
    ],
  },
  {
    slug: "web-development",
    icon: Code2,
    label: "Web Development",
    title: "Websites Engineered to Convert",
    tagline: "Beautifully crafted. Brutally fast. Built to convert.",
    image: svcWeb,
    intro:
      "Your website is your hardest-working salesperson. We design and engineer custom digital experiences that load instantly, look stunning on every device, and turn visitors into customers.",
    overview: [
      "We build websites the way modern software should be built — component-driven, performance-first, accessible by default, and obsessively measured.",
      "Whether you need a high-converting marketing site, a content-rich platform, or a complex e-commerce experience, every pixel and millisecond is intentional.",
    ],
    whatWeDo: [
      { title: "Custom Web Design", desc: "Bespoke interfaces designed around your brand and your customers — never templates." },
      { title: "Frontend Engineering", desc: "Modern stack (React, Next.js, Vite) for blazing-fast, SEO-friendly experiences." },
      { title: "E-commerce & CMS", desc: "Shopify, headless commerce, Sanity, Contentful — integrated cleanly with your stack." },
      { title: "Performance & Accessibility", desc: "Core Web Vitals in the green, WCAG AA compliant, indexable from day one." },
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", desc: "Goals, audiences, and conversion paths mapped first." },
      { step: "02", title: "Design & Prototype", desc: "Wireframes, design system, and interactive prototypes." },
      { step: "03", title: "Build & Integrate", desc: "Production-grade code, integrations, and CMS setup." },
      { step: "04", title: "Launch & Optimize", desc: "QA, launch, then continuous CRO and iteration." },
    ],
    benefits: [
      "Sub-second load times that protect conversions",
      "Mobile-first experiences that delight every visitor",
      "Built-in SEO foundations from line one",
      "Scalable architecture that grows with your business",
    ],
    metric: "98 PageSpeed Score",
    faqs: [
      { q: "How long does a website project take?", a: "A focused marketing website typically takes 6–10 weeks. Larger platforms or e-commerce builds run 10–16 weeks depending on scope." },
      { q: "Can you redesign our existing site without losing SEO?", a: "Absolutely. SEO migration planning is a core part of every redesign — we preserve and improve rankings rather than reset them." },
      { q: "What CMS do you recommend?", a: "It depends on your team. We work with Sanity, Contentful, Webflow, WordPress, and Shopify — and recommend based on editorial workflow, not preference." },
      { q: "Do you handle hosting and maintenance?", a: "Yes. We offer managed hosting, monitoring, and ongoing care plans so your site stays fast, secure, and current." },
    ],
  },
  {
    slug: "social-media-marketing",
    icon: Share2,
    label: "Social Media Marketing",
    title: "Build Communities That Buy",
    tagline: "Content that stops scrolls. Communities that drive revenue.",
    image: svcSocial,
    intro:
      "Social media is no longer a megaphone — it's a relationship. We build social-first brands that earn attention, trust, and ultimately, revenue.",
    overview: [
      "From content strategy and production to community management and creator partnerships, our social team operates as an extension of your brand across Instagram, TikTok, LinkedIn, YouTube, and beyond.",
      "Every post is anchored to a strategy. Every strategy is anchored to a business outcome.",
    ],
    whatWeDo: [
      { title: "Strategy & Planning", desc: "Channel strategy, content pillars, and monthly editorial calendars." },
      { title: "Creative Production", desc: "Photography, video, motion, and copy — produced in-house at scale." },
      { title: "Community Management", desc: "Daily engagement, DMs, comments, and crisis response handled with brand voice." },
      { title: "Creator Partnerships", desc: "Vetted creator and influencer collaborations with measurable ROI." },
    ],
    process: [
      { step: "01", title: "Audit & Positioning", desc: "Where you stand vs. where your audience lives." },
      { step: "02", title: "Content System", desc: "Pillars, formats, and a repeatable production pipeline." },
      { step: "03", title: "Publish & Engage", desc: "Daily publishing, community care, and creator activations." },
      { step: "04", title: "Measure & Iterate", desc: "Weekly insights, monthly reviews, quarterly strategy resets." },
    ],
    benefits: [
      "A real audience — not vanity follower counts",
      "Consistent, on-brand content production at scale",
      "Stronger conversion from organic and paid social",
      "A brand that customers actually want to follow",
    ],
    metric: "+5x Engagement",
    faqs: [
      { q: "Which platforms should we be on?", a: "Whichever platforms your customers actually use. We start with audience research, not assumptions, and recommend a focused 2–3 channel strategy." },
      { q: "Do you produce the content too?", a: "Yes. We handle creative production end-to-end — including photo, video, motion, and copy — or collaborate with your in-house team." },
      { q: "How do you measure success?", a: "We track the metrics that matter: qualified followers, engagement rate, profile reach, click-through, and attributed revenue." },
      { q: "Can you handle paid social as well?", a: "Yes — most clients combine organic social with our paid advertising service for a unified, full-funnel approach." },
    ],
  },
  {
    slug: "paid-advertising",
    icon: Megaphone,
    label: "Paid Advertising",
    title: "Google & Meta Ads with Maximum ROI",
    tagline: "Every dollar accountable. Every campaign optimized.",
    image: svcAds,
    intro:
      "We manage paid media the way a CFO would — with discipline, transparency, and an obsession for return on every dollar invested.",
    overview: [
      "Our paid team has managed millions in spend across Google, Meta, LinkedIn, TikTok, and programmatic — for DTC, B2B, SaaS, and local businesses alike.",
      "Sharp targeting + conversion-engineered creative + relentless testing = profitable, predictable scale.",
    ],
    whatWeDo: [
      { title: "Search & Shopping Ads", desc: "Google Search, Performance Max, and Shopping campaigns built for ROAS." },
      { title: "Paid Social", desc: "Meta, TikTok, LinkedIn, and Pinkterest campaigns with creative testing at scale." },
      { title: "Conversion Tracking", desc: "Server-side tracking, attribution, and clean data — so you trust your numbers." },
      { title: "Creative Strategy", desc: "Ad concepts, scripts, and production designed specifically to convert." },
    ],
    process: [
      { step: "01", title: "Account Audit", desc: "Find leaks, wins, and opportunities in your current spend." },
      { step: "02", title: "Strategy & Setup", desc: "Tracking, structure, audiences, and creative briefs." },
      { step: "03", title: "Launch & Test", desc: "Disciplined testing across audiences, offers, and creative." },
      { step: "04", title: "Scale & Optimize", desc: "Double down on winners, kill losers, scale profitably." },
    ],
    benefits: [
      "Predictable, scalable customer acquisition",
      "Full transparency on spend and performance",
      "Creative that's built for conversion, not awards",
      "A team that thinks like an owner, not a vendor",
    ],
    metric: "8.4x Average ROAS",
    faqs: [
      { q: "What's the minimum ad spend you work with?", a: "We typically partner with brands spending $5K/month or more on paid media, where our work delivers the strongest ROI." },
      { q: "Do you produce the ad creative?", a: "Yes. Strong creative is the #1 lever in paid media today, and we treat it as a first-class part of our service." },
      { q: "How quickly will we see results?", a: "Initial performance data within 7–14 days. Optimized, scaled performance typically within 30–60 days." },
      { q: "Will we own the ad accounts?", a: "Always. We work in your accounts, with your data — you keep everything if we ever part ways." },
    ],
  },
  {
    slug: "logo-branding",
    icon: Palette,
    label: "Logo & Branding",
    title: "Identities That Make You Unforgettable",
    tagline: "Brands that feel inevitable.",
    image: svcBrand,
    intro:
      "Your brand is the feeling people get when they think of you. We design identity systems that earn trust, command premium pricing, and scale with your ambition.",
    overview: [
      "From naming and logo design to full brand systems, voice, and guidelines — we build brands that work as hard in the boardroom as they do on a billboard.",
      "Every brand we create is rooted in strategy, expressed through craft, and engineered for consistency across every touchpoint.",
    ],
    whatWeDo: [
      { title: "Brand Strategy", desc: "Positioning, audience, narrative, and messaging frameworks." },
      { title: "Visual Identity", desc: "Logo systems, type, color, motion, and iconography." },
      { title: "Verbal Identity", desc: "Naming, tone of voice, taglines, and core messaging." },
      { title: "Brand Guidelines", desc: "Living guidelines and asset libraries your team can actually use." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Workshops to uncover purpose, audience, and ambition." },
      { step: "02", title: "Strategy", desc: "Positioning, narrative, and creative direction agreed." },
      { step: "03", title: "Design", desc: "Identity systems crafted, refined, and stress-tested." },
      { step: "04", title: "Rollout", desc: "Guidelines, templates, and asset libraries delivered." },
    ],
    benefits: [
      "A brand that justifies premium pricing",
      "Consistency across every customer touchpoint",
      "A foundation that scales as you grow",
      "Internal pride and external recognition",
    ],
    metric: "100% Custom",
    faqs: [
      { q: "How long does a branding project take?", a: "A focused identity project runs 6–8 weeks. A full brand strategy and identity system typically takes 10–14 weeks." },
      { q: "Do you offer naming services?", a: "Yes. We run a structured naming process including legal and domain availability checks." },
      { q: "Will we own everything?", a: "Yes — full IP ownership of all final assets transfers to you on project completion." },
      { q: "Can you also build our website with the new brand?", a: "Absolutely. Our web team can extend your new identity into a launch-ready website seamlessly." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: BarChart3,
    label: "Digital Marketing",
    title: "Full-Funnel Strategy, Built for Growth",
    tagline: "One partner. One strategy. One number that matters.",
    image: svcDigital,
    intro:
      "Most agencies sell channels. We sell outcomes. SkyBridge orchestrates your entire digital presence — from awareness to conversion to retention — into a single, accountable growth engine.",
    overview: [
      "Our integrated approach connects SEO, paid media, content, social, email, and CRO into a unified funnel — so you stop optimizing in silos and start growing as a system.",
      "You get one strategist, one roadmap, and one report — covering every dollar and every customer.",
    ],
    whatWeDo: [
      { title: "Full-Funnel Strategy", desc: "Awareness, acquisition, conversion, and retention mapped end-to-end." },
      { title: "Marketing Automation", desc: "Email, lifecycle, and CRM automations that nurture without nagging." },
      { title: "Conversion Rate Optimization", desc: "Continuous experimentation across landing pages and checkout." },
      { title: "Analytics & Reporting", desc: "Unified dashboards, attribution, and quarterly business reviews." },
    ],
    process: [
      { step: "01", title: "Growth Audit", desc: "Where revenue is leaking and where it's hiding." },
      { step: "02", title: "Roadmap", desc: "12-month integrated growth roadmap with clear KPIs." },
      { step: "03", title: "Execute", desc: "Cross-channel execution by a single integrated team." },
      { step: "04", title: "Review & Compound", desc: "Quarterly reviews, continuous learning, compounding gains." },
    ],
    benefits: [
      "One accountable partner across every channel",
      "Strategy and execution under one roof",
      "Clear attribution and honest reporting",
      "Growth that compounds quarter over quarter",
    ],
    metric: "All-in-One Partner",
    faqs: [
      { q: "How is this different from hiring multiple specialist agencies?", a: "You get one strategy, one team, and one accountable partner — no finger-pointing between vendors, no wasted spend in the gaps." },
      { q: "Do you replace our in-house team?", a: "We can either operate as your full marketing function or extend an in-house team — whichever fits your stage." },
      { q: "What size businesses do you work with?", a: "We partner best with growth-stage and established brands ready to invest in a long-term, integrated growth program." },
      { q: "What does engagement look like?", a: "Most engagements are 12-month retainers, structured around quarterly objectives and monthly sprints." },
    ],
  },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const active = services.find((s) => s.slug === slug);

  if (!active) return <Navigate to="/services" replace />;

  const Icon = active.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="container relative">
          <div className="flex items-center gap-2 text-sm text-white/70 font-accent">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{active.label}</span>
          </div>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <Icon className="w-6 h-6 text-white" />
            </span>
            <span className="font-accent text-xs uppercase tracking-[0.3em] text-accent">{active.label}</span>
          </div>
          <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl text-white leading-tight max-w-4xl">
            {active.title}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{active.tagline}</p>
        </div>
      </section>

      {/* Sidebar + Content */}
      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
              <div className="px-5 py-4 gradient-primary">
                <p className="font-accent text-xs uppercase tracking-[0.25em] text-white/80">Our Services</p>
                <p className="font-display font-extrabold text-white text-lg mt-0.5">All Solutions</p>
              </div>
              <nav className="p-2">
                {services.map((s) => {
                  const isActive = s.slug === active.slug;
                  const SIcon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                        isActive
                          ? "gradient-primary text-white shadow-glow"
                          : "text-foreground/80 hover:bg-secondary"
                      }`}
                    >
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? "bg-white/15" : "bg-secondary group-hover:bg-background"
                      }`}>
                        <SIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`} />
                      </span>
                      <span className="font-accent font-semibold text-sm flex-1">{s.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isActive ? "text-white translate-x-0.5" : "text-muted-foreground group-hover:translate-x-0.5"
                      }`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* CTA Card */}
            <div className="mt-6 rounded-2xl p-6 gradient-primary text-white shadow-glow relative overflow-hidden">
              <Sparkles className="absolute -top-2 -right-2 w-24 h-24 text-white/10" />
              <p className="font-accent text-xs uppercase tracking-[0.25em] text-white/80">Need Help?</p>
              <h3 className="font-display font-extrabold text-xl mt-2 leading-snug">
                Let's discuss your project
              </h3>
              <p className="text-sm text-white/85 mt-2">
                Free 30-minute strategy call with a senior consultant.
              </p>
              <Button variant="glass" size="sm" className="mt-4 w-full" asChild>
                <Link to="/contact">Book a Call <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </aside>

          {/* Right Content */}
          <div className="min-w-0 space-y-14">
            {/* Hero Image */}
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[16/9]">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/30" />
                <div className="absolute bottom-5 right-5 glass-light rounded-2xl px-5 py-3 shadow-glow">
                  <p className="font-display font-extrabold text-lg gradient-text">{active.metric}</p>
                </div>
              </div>
            </Reveal>

            {/* Intro */}
            <Reveal>
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-3">Overview</p>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
                  {active.intro}
                </h2>
                <div className="mt-6 space-y-4">
                  {active.overview.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-lg">{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* What we do */}
            <Reveal>
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-3">What We Do</p>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl">A complete capability set</h3>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {active.whatWeDo.map((w) => (
                    <div key={w.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-glow mb-4">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-extrabold text-lg">{w.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Process */}
            <Reveal>
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Process</p>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl">How we work with you</h3>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {active.process.map((p) => (
                    <div key={p.step} className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden">
                      <span className="absolute -top-2 -right-2 font-display font-extrabold text-6xl text-primary/10">
                        {p.step}
                      </span>
                      <p className="font-accent text-xs uppercase tracking-[0.25em] text-primary">Step {p.step}</p>
                      <h4 className="font-display font-extrabold text-lg mt-2">{p.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal>
              <div className="rounded-3xl gradient-primary p-8 md:p-10 text-white shadow-glow relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
                <div className="relative">
                  <p className="font-accent text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Why It Matters</p>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl">What you get with SkyBridge</h3>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                    {active.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </span>
                        <span className="text-white/95">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            <Reveal>
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-3">FAQs</p>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl">
                  {active.label} — Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="mt-6 space-y-3">
                  {active.faqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-border rounded-2xl px-5 bg-card data-[state=open]:shadow-card"
                    >
                      <AccordionTrigger className="font-display font-bold text-left text-base md:text-lg hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServiceDetail;
