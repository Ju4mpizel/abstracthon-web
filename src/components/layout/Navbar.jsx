import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a1e3e]/60 backdrop-blur-md border-b border-white/10">
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
            src="/img/comunidad.png"
            alt="Comunidad"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="hidden xl:block text-[11px] leading-tight text-slate-400 max-w-[170px]">
            {EVENT_CONFIG.organizer}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
          <li>
            <a className="nav-link" href="#sobre">
              Sobre el evento
            </a>
          </li>
          <li>
            <a className="nav-link" href="#galeria">
              Galería
            </a>
          </li>
          <li>
            <a className="nav-link" href="#sedes">
              Sedes
            </a>
          </li>
          <li>
            <a className="nav-link" href="#countdown">
              Countdown
            </a>
          </li>
          <li>
            <a className="nav-link" href="#comunidad">
              Comunidad
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#sedes"
            className="cta-border scale-90 sm:scale-100"
          >
            <span>Inscribirse</span>
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 grid place-items-center text-neon rounded-lg border border-white/15 bg-white/[0.02]"
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
            className="lg:hidden px-6 py-5 border-t border-white/10 bg-[#060E26]/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-slate-200">
              {["sobre", "galeria", "sedes", "countdown", "comunidad"].map(
                (id) => (
                  <li key={id}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block py-1 hover:text-neon transition capitalize"
                      href={`#${id}`}
                    >
                      {id === "sobre" ? "Sobre el evento" : id}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
