import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Code2, Share2, Megaphone, Palette, BarChart3 } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const services = [
  { slug: "seo-optimization", label: "SEO Optimization", icon: Search },
  { slug: "web-development", label: "Web Development", icon: Code2 },
  { slug: "social-media-marketing", label: "Social Media Marketing", icon: Share2 },
  { slug: "paid-advertising", label: "Paid Advertising", icon: Megaphone },
  { slug: "logo-branding", label: "Logo & Branding", icon: Palette },
  { slug: "digital-marketing", label: "Digital Marketing", icon: BarChart3 },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-smooth bg-white/95 backdrop-blur-xl shadow-card">
      <nav className="container flex items-center justify-between h-24">
        <Logo className="h-14 md:h-16" />

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) =>
            l.hasDropdown ? (
              <li
                key={l.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `font-accent text-sm uppercase tracking-wider transition-smooth hover:text-primary inline-flex items-center gap-1 ${
                      isActive ? "text-primary" : "text-foreground"
                    }`
                  }
                >
                  {l.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </NavLink>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="w-[420px] rounded-2xl bg-white border border-border shadow-elegant overflow-hidden">
                    <div className="px-5 py-3 gradient-primary">
                      <p className="font-accent text-[11px] uppercase tracking-[0.25em] text-white/85">
                        Our Services
                      </p>
                      <p className="font-display font-extrabold text-white text-base mt-0.5">
                        Explore What We Offer
                      </p>
                    </div>
                    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {services.map((s) => {
                        const Icon = s.icon;
                        const isActive = location.pathname === `/services/${s.slug}`;
                        return (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                              isActive
                                ? "gradient-primary text-white"
                                : "hover:bg-secondary text-foreground/85"
                            }`}
                          >
                            <span
                              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                isActive ? "bg-white/15" : "bg-secondary group-hover:bg-background"
                              }`}
                            >
                              <Icon
                                className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`}
                              />
                            </span>
                            <span className="font-accent font-semibold text-sm leading-tight">
                              {s.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      to="/services"
                      className="block px-5 py-3 border-t border-border bg-secondary/50 font-accent text-xs uppercase tracking-[0.25em] text-primary hover:bg-secondary transition-smooth text-center"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `font-accent text-sm uppercase tracking-wider transition-smooth hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="hidden lg:block">
          <Button variant="hero" size="default" asChild>
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-24 bg-background/95 backdrop-blur-xl border-t border-border max-h-[calc(100vh-6rem)] overflow-y-auto">
          <ul className="container py-6 flex flex-col gap-2">
            {links.map((l, i) =>
              l.hasDropdown ? (
                <li key={l.to} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-2 font-accent uppercase tracking-wider text-foreground"
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="mt-2 ml-2 pl-4 border-l border-border space-y-1">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="flex items-center gap-3 py-2 text-sm text-foreground/85 hover:text-primary transition-smooth"
                            >
                              <Icon className="w-4 h-4 text-primary" />
                              {s.label}
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link
                          to="/services"
                          className="block py-2 text-sm font-accent uppercase tracking-wider gradient-text"
                        >
                          View All →
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.to} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <NavLink
                    to={l.to}
                    className="block py-2 font-accent uppercase tracking-wider text-foreground"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ),
            )}
            <li>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
