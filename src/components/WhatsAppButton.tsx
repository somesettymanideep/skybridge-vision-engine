import { useEffect, useState } from "react";

const PHONE = "971501234567"; // international format, no '+' or spaces
const MESSAGE = "Hi SkyBridge! I'd like to learn more about your services.";

export const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-28 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-glow transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden
      />
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 text-white transition-transform group-hover:scale-110"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.673.244-1.044 0-.5-1.366-1.04-1.706-1.04-.13 0-.4-.02-.6-.02zM15.99 4.215c-6.515 0-11.78 5.265-11.78 11.78 0 2.063.534 4.03 1.59 5.768L4.5 27.498l5.91-1.276a11.71 11.71 0 0 0 5.58 1.418c6.515 0 11.78-5.265 11.78-11.78 0-3.155-1.232-6.13-3.466-8.36a11.694 11.694 0 0 0-8.314-3.286zm0 21.564c-1.748 0-3.467-.474-4.97-1.36l-.358-.214-3.696.802.788-3.61-.23-.358a9.72 9.72 0 0 1-1.49-5.18c0-5.395 4.39-9.785 9.784-9.785 5.395 0 9.785 4.39 9.785 9.785s-4.39 9.92-9.613 9.92z"/>
      </svg>
    </a>
  );
};
