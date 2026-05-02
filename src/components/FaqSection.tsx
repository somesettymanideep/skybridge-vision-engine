import { useState } from "react";
import { ChevronRight, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import founder from "@/assets/faq-person.png";

const faqs = [
  {
    q: "What services does your digital agency provide?",
    a: "We offer SEO, web development, social media marketing, paid advertising, branding, and full-funnel digital strategy under one roof.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Most websites launch in 4–6 weeks. Marketing campaigns can go live in days. Timelines are tailored to your scope and goals.",
  },
  {
    q: "Do you provide custom website design?",
    a: "Yes, we craft fully custom, responsive designs tailored to your brand identity, audience, and conversion goals.",
  },
  {
    q: "Can you help improve our website's SEO?",
    a: "Absolutely. We run technical audits, on-page optimization, content strategy, and link building to grow organic traffic.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, all our clients get continuous support, monthly reporting, and a dedicated account manager.",
  },
];

export const FaqSection = () => {
  const [open, setOpen] = useState(1);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left card */}
          <Reveal>
            <div className="relative bg-card border border-dashed border-border rounded-3xl p-8 md:p-12 text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full bg-secondary flex items-center justify-center">
                <img
                  src={founder}
                  alt="Founder portrait"
                  loading="lazy"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <p className="mt-4 font-biennale font-extrabold uppercase tracking-wider">Adam Smith</p>
              <p className="text-sm text-muted-foreground">Founder</p>

              <h3 className="mt-8 font-biennale font-extrabold uppercase text-xl md:text-2xl tracking-tight">
                Do you have more questions?
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto">
                Working with this team was a fantastic experience. Their creativity, professionalism, and
                attention to detail helped our business grow faster than expected.
              </p>

              <div className="mt-7 flex justify-center gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="w-10 h-10 rounded-full bg-secondary text-foreground/70 flex items-center justify-center hover:gradient-primary hover:text-white transition-smooth"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <p className="mt-5 flex items-center justify-center gap-2 font-biennale font-bold text-lg">
                <Phone className="w-4 h-4 text-primary" /> +971 4 123 4567
              </p>

              <a
                href="tel:+97141234567"
                className="mt-6 inline-flex items-center gap-2 gradient-primary text-white font-accent font-semibold rounded-full px-8 py-4 shadow-glow hover:-translate-y-0.5 transition-smooth"
              >
                Shoot A Direct Call
              </a>
            </div>
          </Reveal>

          {/* Right FAQs */}
          <div>
            <Reveal>
              <p className="font-accent text-xs uppercase tracking-[0.35em] text-primary mb-4 flex items-center gap-3">
                <span className="inline-block w-10 h-px bg-primary/60" /> FAQ
              </p>
              <h2 className="font-biennale font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10">
                We have the answers
              </h2>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className="bg-secondary rounded-xl overflow-hidden transition-smooth">
                      <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-biennale font-extrabold uppercase text-sm md:text-base tracking-wide text-foreground">
                          {f.q}
                        </span>
                        <span
                          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-smooth ${
                            isOpen ? "gradient-primary text-white" : "bg-foreground text-background"
                          }`}
                        >
                          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
