import logo from "@/assets/skybridge-logo.png";
import { Link } from "react-router-dom";

export const Logo = ({ className = "h-10", inverted = false }: { className?: string; inverted?: boolean }) => (
  <Link to="/" className="flex items-center" aria-label="SkyBridge International Consultancy">
    <img
      src={logo}
      alt="SkyBridge International Consultancy"
      className={`${className} w-auto object-contain ${inverted ? "brightness-0 invert" : ""}`}
    />
  </Link>
);
