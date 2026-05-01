import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

type Stat = { value: number; suffix?: string; label: string };

export const StatsSection = ({ stats, quote }: { stats: Stat[]; quote?: string }) => (
  <section className="relative py-20 overflow-hidden gradient-deep text-white">
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: "radial-gradient(circle at 30% 50%, hsl(var(--primary-glow) / 0.4), transparent 50%)"
    }} />
    <div className="container relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="py-8 lg:py-0 px-4 lg:px-8 text-center">
              <p className="font-display font-extrabold text-5xl md:text-6xl gradient-text">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-accent text-sm uppercase tracking-wider text-white/80">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {quote && (
        <Reveal delay={400}>
          <p className="mt-12 text-center italic text-lg text-white/90">"{quote}"</p>
        </Reveal>
      )}
    </div>
  </section>
);
