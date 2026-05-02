import { ArrowRight, LucideIcon, Building2, Users, Repeat, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import team1 from "@/assets/team-1.jpg";

type Stat = { value: number; suffix?: string; label: string; icon?: LucideIcon };

type Props = {
  stats: Stat[];
  eyebrow?: string;
  heading?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
  quote?: string;
};

const defaultIcons = [Building2, Users, Repeat, MonitorSmartphone];

export const StatsSection = ({
  stats,
  eyebrow = "Fun Facts",
  heading = "Earning the trust of hundreds of customers.",
  ctaText = "View All Projects",
  ctaHref = "/services",
  bgImage = team1,
  quote,
}: Props) => (
  <section className="relative pt-24 pb-32 overflow-hidden text-white">
    {/* Background image + dark overlay */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden />
    <div className="absolute inset-0 bg-[hsl(var(--dark)/0.85)]" aria-hidden />
    <div
      className="absolute inset-0 opacity-40"
      style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.5), transparent 55%)" }}
      aria-hidden
    />

    <div className="container relative z-10">
      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <Reveal className="max-w-3xl">
          <p className="font-accent text-xs uppercase tracking-[0.35em] text-white/80 mb-5 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-white/60" />
            {eyebrow}
          </p>
          <h2 className="font-biennale font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
            {heading}
          </h2>
        </Reveal>
        {ctaText && (
          <Reveal delay={150}>
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 gradient-primary text-white font-accent font-semibold rounded-full px-8 py-4 shadow-glow hover:-translate-y-0.5 transition-smooth whitespace-nowrap"
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        )}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon ?? defaultIcons[i % defaultIcons.length];
          return (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative bg-card text-foreground rounded-2xl pt-14 pb-8 px-5 text-center shadow-card transition-smooth hover:-translate-y-2 hover:shadow-glow">
                {/* Floating icon badge */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full gradient-primary flex items-center justify-center shadow-glow ring-8 ring-[hsl(var(--dark)/0.0)] transition-smooth group-hover:-translate-y-1 group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.6} />
                </div>

                <p className="font-biennale font-extrabold text-4xl md:text-5xl text-foreground leading-none">
                  <Counter end={s.value} suffix={s.suffix} />
                </p>

                <p className="mt-6 mx-auto inline-block bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-accent text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold">
                  {s.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {quote && (
        <Reveal delay={400}>
          <p className="mt-14 text-center italic text-lg text-white/90">"{quote}"</p>
        </Reveal>
      )}
    </div>
  </section>
);
