import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export const PageHero = ({
  title,
  subtitle,
  breadcrumb,
  image,
}: {
  title?: string;
  subtitle?: string;
  breadcrumb: string;
  image?: string;
}) => (
  <section className="relative min-h-[350px] flex items-center pt-28 pb-10 text-dark-foreground overflow-hidden isolate">
    {/* Background image */}
    {image && (
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
    )}
    {/* Gradient overlay (brand) — lighter for image visibility */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary-deep) / 0.55) 0%, hsl(var(--primary) / 0.4) 55%, hsl(var(--dark) / 0.55) 100%)",
      }}
    />
    {/* Soft glow accents */}
    <div
      className="absolute inset-0 opacity-25 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.35), transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.25), transparent 45%)",
      }}
    />
    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 opacity-[0.08] -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    />

    <div className="container relative z-10 text-center">
      <Reveal>
        <p className="font-accent text-sm md:text-base uppercase tracking-[0.25em] text-white">
          <Link to="/" className="text-primary-glow hover:underline">Home</Link>
          <span className="mx-3 text-white/50">›</span>
          <span className="text-white">{breadcrumb}</span>
        </p>
      </Reveal>
    </div>
  </section>
);
