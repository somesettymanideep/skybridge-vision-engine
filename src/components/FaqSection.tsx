import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
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
          {/* Left image */}
          <Reveal>
            <div className="relative w-full flex justify-center lg:justify-start overflow-hidden">
              <img
                src={founder}
                alt="Consultant pointing at FAQs"
                loading="lazy"
                className="w-full max-w-md h-auto object-contain animate-slide-in-left"
              />
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
