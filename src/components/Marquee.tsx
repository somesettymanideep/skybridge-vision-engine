export const Marquee = () => {
  const items = [
    "Digital Marketing",
    "SEO Optimization",
    "Web Development",
    "Logo & Branding",
    "Paid Advertising",
    "Social Media Marketing",
    "Conversion Rate Optimization",
  ];
  const loop = [...items, ...items];
  return (
    <div className="bg-primary-deep py-4 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {loop.map((it, i) => (
          <span key={i} className="font-accent font-semibold text-sm uppercase tracking-widest text-white/90 flex items-center gap-12">
            <span className="text-primary-glow">✦</span> {it}
          </span>
        ))}
      </div>
    </div>
  );
};
