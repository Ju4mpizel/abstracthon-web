import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { REGISTER_URL, linkProps } from "../../config/eventData";

const NAV_LINKS = [
  { id: "sobre", label: "Sobre el evento" },
  { id: "galeria", label: "Galería" },
  { id: "sedes", label: "Sedes" },
  { id: "countdown", label: "Cuenta regresiva" },
  { id: "comunidad", label: "Comunidad" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink border-b border-line">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 sm:gap-3 shrink-0"
          aria-label="Abstracthon, inicio"
        >
          <img
            src="/img/abstracthon-logo.png"
            alt="Abstracthon"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="hidden sm:block w-px h-7 sm:h-9 bg-white/15" />
          <img
            src="/img/mlsa-university-community.png"
            alt="MLSA University Community"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-copy">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a className="nav-link" href={`#${id}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.a
            whileTap={{ scale: 0.96 }}
            {...linkProps(REGISTER_URL)}
            className="cta-border scale-90 sm:scale-100"
          >
            <span>Inscribirse</span>
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 grid place-items-center text-white rounded-lg border border-line"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden px-6 py-5 border-t border-line bg-ink overflow-hidden"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-copy">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-action transition"
                    href={`#${id}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
