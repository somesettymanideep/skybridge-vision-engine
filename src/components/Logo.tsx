import logo from "@/assets/skybridge-logo.png";
import { Link } from "react-router-dom";

export const Logo = ({
  className = "h-12",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) => (
  <Link to="/" className="inline-flex items-center" aria-label="SkyBridge International Consultancy">
    {inverted ? (
      <span className="inline-flex items-center rounded-xl bg-white/95 px-3 py-1.5 shadow-card">
        <img
          src={logo}
          alt="SkyBridge International Consultancy"
          className={`${className} w-auto object-contain`}
        />
      </span>
    ) : (
      <img
        src={logo}
        alt="SkyBridge International Consultancy"
        className={`${className} w-auto object-contain`}
      />
    )}
  </Link>
);
