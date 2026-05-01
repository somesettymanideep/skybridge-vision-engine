import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setLaunching(false), 900);
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Glow halo */}
      <span className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

      {/* Glass background */}
      <span className="absolute inset-1 rounded-full bg-card/90 backdrop-blur-xl border border-primary/20 shadow-glow" />

      {/* Progress ring */}
      <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="scrollProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#scrollProgressGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
      </svg>

      {/* Rocket */}
      <Rocket
        className={`relative w-6 h-6 text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-12deg] ${
          launching ? "animate-launch" : ""
        }`}
        strokeWidth={2.2}
      />

      {/* Trail flame on launch */}
      {launching && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gradient-to-t from-transparent via-accent to-primary rounded-full blur-sm animate-pulse" />
      )}
    </button>
  );
};
