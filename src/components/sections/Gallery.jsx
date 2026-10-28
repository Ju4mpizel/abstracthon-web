import { useState, useEffect } from "react";
import {
  Camera,
  Users,
  Handshake,
  GraduationCap,
  CodeXml,
  Presentation,
  Network,
  Trophy,
  Heart,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ITEMS = [
  {
    id: 1,
    cap: "Equipos construyendo en vivo",
    icon: Users,
    spanClass: "col-span-2 row-span-2",
    img: "/img/galeria/hackathon-1.jpg",
    alt: "Equipos trabajando en una hackathon",
  },
  {
    id: 2,
    cap: "Trabajo en equipo",
    icon: Handshake,
    spanClass: "col-span-1 row-span-1",
    img: "/img/galeria/hackathon-2.jpg",
    alt: "Participantes colaborando",
  },
  {
    id: 3,
    cap: "Mentoría en la mesa",
    icon: GraduationCap,
    spanClass: "col-span-1 sm:row-span-2",
    img: "/img/galeria/hackathon-3.jpg",
    alt: "Mentoría durante el evento",
  },
  {
    id: 4,
    cap: "Código y café",
    icon: CodeXml,
    spanClass: "col-span-1 row-span-1",
    img: "/img/galeria/hackathon-4.jpg",
    alt: "Programando durante la noche",
  },
  {
    id: 5,
    cap: "Demo day",
    icon: Presentation,
    spanClass: "col-span-2 row-span-2",
    img: "/img/galeria/hackathon-5.jpg",
    alt: "Presentación de proyectos",
  },
  {
    id: 6,
    cap: "Networking",
    icon: Network,
    spanClass: "col-span-1 row-span-1",
    img: "/img/galeria/hackathon-6.jpg",
    alt: "Networking entre participantes",
  },
  {
    id: 7,
    cap: "Premiación",
    icon: Trophy,
    spanClass: "col-span-1 sm:row-span-2",
    img: "/img/galeria/hackathon-7.jpg",
    alt: "Ceremonia de premiación",
  },
  {
    id: 8,
    cap: "Comunidad",
    icon: Heart,
    spanClass: "col-span-1 row-span-1",
    img: "/img/galeria/hackathon-8.jpg",
    alt: "Foto grupal de la comunidad",
  },
];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImg(null);
    };

    if (activeImg) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImg]);

  return (
    <section id="galeria" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
              Así se vive una hackathon
            </h2>
            <div className="mt-2.5 sm:mt-3 h-1 w-14 sm:w-16 rounded bg-action" />
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Equipos, mentores y comunidad construyendo juntos. Imágenes de
            ediciones anteriores y de eventos similares.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px] md:auto-rows-[200px] gap-2.5 sm:gap-3">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                onClick={() => setActiveImg(item.img)}
                className={`relative overflow-hidden rounded-xl border border-line cursor-zoom-in group bg-surface transition-colors duration-300 hover:border-white/40 ${item.spanClass}`}
              >
                <div className="absolute inset-0 grid place-items-center text-white/30 bg-surface">
                  <Camera className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>

                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <figcaption className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 pt-6 sm:pt-8 bg-gradient-to-t from-ink via-ink/80 to-transparent text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="truncate">{item.cap}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox con AnimatePresence */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)}
            className="fixed inset-0 z-[120] grid place-items-center bg-ink/95 p-4 sm:p-6"
          >
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 grid place-items-center rounded-full border border-line text-white bg-surface"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={activeImg}
              alt="Detalle"
              className="max-w-full sm:max-w-[1100px] max-h-[75vh] sm:max-h-[85vh] rounded-xl border border-line object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
