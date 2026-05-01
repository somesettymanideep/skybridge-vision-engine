import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { StatsSection } from "@/components/StatsSection";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { Eye, Rocket, Linkedin } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import founder from "@/assets/founder.jpg";
import bgAbout from "@/assets/bg-about.jpg";

const timeline = [
  ["2012", "Founded"],
  ["2015", "First 100 Clients"],
  ["2018", "International Expansion"],
  ["2022", "Award-Winning Agency"],
  ["2025", "500+ Projects"],
];

const steps = [
  ["Discovery Call", "Understand your goals, industry, and target audience."],
  ["Strategy Blueprint", "Custom roadmap tailored to your business objectives."],
  ["Creative Execution", "Build, design, and launch with precision."],
  ["Launch & Optimize", "Go live and continuously improve performance."],
  ["Report & Scale", "Transparent reporting + strategies to amplify results."],
];

const About = () => (
  <Layout>
    <PageHero
      breadcrumb="About Us"
      title="The Team That Bridges Vision to Reality"
      subtitle="We're a global collective of strategists, designers, and engineers united by one mission — your growth."
      image={bgAbout}
    />

    {/* Story */}
    <section className="py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={team1} alt="SkyBridge team" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[560px] object-cover" />
            <div className="absolute -inset-4 -z-10 gradient-primary rounded-2xl opacity-20 blur-2xl" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
            More Than an Agency — We're Your <span className="gradient-text">Growth Partner</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Founded in 2012 with a simple belief: that every great brand deserves a seat at the digital table.
            From a small studio of three, we've grown into an internationally recognized consultancy serving
            ambitious clients across 15 countries.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our values haven't changed: relentless craft, transparent partnership, and an obsession with
            measurable outcomes. Whether you're a startup or an enterprise, we treat your business like our own.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {timeline.map(([year, label]) => (
              <div key={year} className="flex items-center gap-3 bg-secondary rounded-full pl-3 pr-5 py-2">
                <span className="font-display font-extrabold text-primary">{year}</span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="gradient-primary text-white rounded-3xl p-10 h-full shadow-glow">
            <Eye className="w-12 h-12 mb-6" />
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Our Vision</p>
            <h3 className="font-display font-extrabold text-3xl mb-5">Bridging brands to limitless reach.</h3>
            <p className="text-white/90 leading-relaxed">
              To be the most trusted digital growth partner for businesses across the globe, delivering
              innovation, impact, and measurable results.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="gradient-dark text-white rounded-3xl p-10 h-full shadow-elegant">
            <Rocket className="w-12 h-12 mb-6 text-primary-glow" />
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary-glow mb-3">Our Mission</p>
            <h3 className="font-display font-extrabold text-3xl mb-5">Engineering ROI you can actually see.</h3>
            <p className="text-white/85 leading-relaxed">
              To empower businesses of all sizes with cutting-edge digital strategies, transparent execution,
              and a relentless focus on ROI.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Founder's message */}
    <section className="py-24 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-4">
          <div className="relative">
            <img src={founder} alt="Mohammed Al-Farsi, Founder & CEO" loading="lazy" className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]" />
            <div className="mt-5">
              <p className="font-display font-extrabold text-xl">Mohammed Al-Farsi</p>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
              <a href="#" className="mt-2 inline-flex items-center gap-2 text-primary text-sm font-accent font-semibold">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={150}>
          <span className="block font-display text-7xl gradient-text leading-none">"</span>
          <p className="italic text-xl md:text-2xl text-foreground/85 leading-relaxed mt-4">
            We started SkyBridge because the digital world too often feels like a black box. Our promise is
            simple: relentless craft, full transparency, and a relentless focus on the only metric that matters —
            your growth. When you win, we win.
          </p>
          <p className="mt-6 font-display italic text-primary">— Mohammed Al-Farsi, Founder, SkyBridge International</p>
        </Reveal>
      </div>
    </section>

    <StatsSection
      stats={[
        { value: 500, suffix: "+", label: "Projects" },
        { value: 15, label: "Countries Served" },
        { value: 50, suffix: "+", label: "Team Members" },
        { value: 10, suffix: "M+", label: "Ad Spend Managed ($)" },
      ]}
    />

    {/* Process */}
    <section className="py-24 bg-secondary">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">How We Work</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">A Proven 5-Step Process for Digital Success</h2>
          </div>
        </Reveal>

        <div className="relative grid md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 gradient-primary opacity-30" />
          {steps.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-display font-extrabold text-xl shadow-glow relative z-10">
                  {i + 1}
                </div>
                <h4 className="mt-5 font-display font-bold text-lg">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default About;
