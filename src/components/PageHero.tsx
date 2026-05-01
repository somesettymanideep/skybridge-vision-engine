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
  <section className="relative pt-32 pb-16 text-dark-foreground overflow-hidden isolate">
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
    {/* Gradient overlay (brand) */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary-deep) / 0.92) 0%, hsl(var(--primary) / 0.82) 55%, hsl(var(--dark) / 0.92) 100%)",
      }}
    />
    {/* Soft glow accents */}
    <div
      className="absolute inset-0 opacity-40 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.45), transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.35), transparent 45%)",
      }}
    />
    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 opacity-[0.12] -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    />

    <div className="container relative z-10 text-center">
      <Reveal>
        <p className="font-accent text-sm uppercase tracking-widest text-primary-glow mb-4">
          <Link to="/" className="hover:underline">Home</Link>{" "}
          <span className="mx-2">›</span> {breadcrumb}
        </p>
      </Reveal>
      {title && (
        <Reveal delay={120}>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            {title}
          </h1>
        </Reveal>
      )}
    </div>
  </section>
);
