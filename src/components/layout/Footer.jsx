import { motion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

export default function Footer() {
  const SOCIAL_LINKS = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100069529353738&locale=es_LA",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/microsoft_university/?hl=es",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "Discord",
      href: "#", // Reemplazar cuando se tenga el enlace de invitación
      path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
    },
  ];

  // Oculta redes que aún no tienen enlace real (href="#")
  const activeSocials = SOCIAL_LINKS.filter((s) => s.href !== "#");

  return (
    <footer className="border-t border-white/10 bg-[#0a1e3e]/40 backdrop-blur-md overflow-hidden w-full">
      {/* Texto Gigante Centrado */}
      <div className="w-full overflow-hidden flex justify-center items-center pt-10 sm:pt-14 pb-2 sm:pb-4 px-3">
        <div
          className="mega select-none w-full text-center tracking-tight"
          aria-hidden="true"
        >
          ABSTRACTHON
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
        {/* Logos y Organización */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/img/abstracthon-logo.png"
              alt="Abstracthon"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <img
              src="/img/mlsa-university-community.png"
              alt="MLSA University Community"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
            Organizado por{" "}
            <strong className="text-white font-medium">
              {EVENT_CONFIG.organizer}
            </strong>
          </p>
        </div>

        {/* Enlaces de navegación rápida */}
        <nav
          aria-label="Pie de página"
          className="w-full text-center md:text-left"
        >
          <ul className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            <li>
              <a className="hover:text-neon transition" href="#sobre">
                Sobre el evento
              </a>
            </li>
            <li>
              <a className="hover:text-neon transition" href="#galeria">
                Galería
              </a>
            </li>
            <li>
              <a className="hover:text-neon transition" href="#sedes">
                Sedes
              </a>
            </li>
            <li>
              <a className="hover:text-neon transition" href="#countdown">
                Cuenta regresiva
              </a>
            </li>
            <li className="col-span-2 sm:col-span-1">
              <a className="hover:text-neon transition" href="#comunidad">
                Comunidad
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-end w-full">
          <p className="text-sm text-slate-400">Síguenos</p>
          <div className="mt-3 flex gap-3 text-base">
            {activeSocials.map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.94 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 grid place-items-center rounded-lg border border-white/10 hover:border-neon hover:text-neon transition bg-white/[0.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <p className="border-t border-white/10 text-center text-xs text-slate-500 py-6 px-4">
        © 2026 Abstracthon · Bolivia. Todos los derechos reservados.
      </p>
    </footer>
  );
}
