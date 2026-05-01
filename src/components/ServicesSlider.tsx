import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
};

interface ServicesSliderProps {
  services: ServiceItem[];
}

export const ServicesSlider = ({ services }: ServicesSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden -mx-4 px-4 pb-4" ref={emblaRef}>
        <div className="flex gap-6">
          {services.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={s.slug}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0"
              >
                <article className="group relative bg-card rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Floating gradient icon badge */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <s.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 pb-10">
                    {/* Faded watermark number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute right-4 bottom-2 font-display font-extrabold text-7xl md:text-8xl text-transparent leading-none"
                      style={{
                        WebkitTextStroke: "1px hsl(var(--border))",
                      }}
                    >
                      {num}
                    </span>

                    <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase tracking-wide mb-4 transition-colors duration-300 group-hover:text-primary relative">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative">
                      {s.desc}
                    </p>

                    <Link
                      to={`/services/${s.slug}`}
                      className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground font-accent font-semibold text-sm transition-all duration-300 hover:gradient-primary hover:text-white hover:shadow-glow hover:gap-3"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          aria-label="Previous service"
          className="w-12 h-12 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center hover:-translate-x-1"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === i
                  ? "w-8 gradient-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next service"
          className="w-12 h-12 rounded-full border border-border bg-card hover:gradient-primary hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center hover:translate-x-1"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
