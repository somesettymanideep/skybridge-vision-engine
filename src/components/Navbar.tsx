import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-smooth bg-white/95 backdrop-blur-xl shadow-card"
    >
      <nav className="container flex items-center justify-between h-24">
        <Logo className="h-14 md:h-16" />
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-accent text-sm uppercase tracking-wider transition-smooth hover:text-primary ${
                    isActive ? "text-primary" : scrolled ? "text-foreground" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
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
        <div className="lg:hidden absolute inset-x-0 top-24 bg-background/95 backdrop-blur-xl border-t border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l, i) => (
              <li key={l.to} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <NavLink
                  to={l.to}
                  className="block py-2 font-accent uppercase tracking-wider text-foreground"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
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
