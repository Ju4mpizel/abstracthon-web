import {
  Gift,
  Briefcase,
  GraduationCap,
  DollarSign,
  Sparkles,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

const ICON_MAP = {
  Bloomtech: Sparkles,
  "Comunidad Abstracthon": DollarSign,
  Joddy: Briefcase,
  "Majup Learn Academy": GraduationCap,
};

// Clases completas para que Tailwind v4 las detecte
const TONE_STYLES = {
  action: {
    text: "text-action",
    soft: "bg-action/10",
    badge: "border-action/30 text-action",
  },
  confirm: {
    text: "text-confirm",
    soft: "bg-confirm/10",
    badge: "border-confirm/30 text-confirm",
  },
  link: {
    text: "text-link",
    soft: "bg-link/10",
    badge: "border-link/30 text-link",
  },
  mark: {
    text: "text-mark",
    soft: "bg-mark/10",
    badge: "border-mark/30 text-mark",
  },
};

// Ritmo en zigzag: ancha, angosta, angosta, ancha...
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];
const WIDE = "lg:col-span-7";

export default function PrizesSection() {
  const prizes = EVENT_CONFIG.prizes || [];
  const reduce = useReducedMotion();

  // Una sola entrada orquestrada para toda la grilla
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="premios"
      aria-labelledby="premios-titulo"
      className="relative px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabecera alineada a la izquierda */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
          <h2
            id="premios-titulo"
            className="max-w-xl font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance"
          >
            Premios y oportunidades para seguir construyendo
          </h2>
          <p className="max-w-sm text-sm sm:text-base text-copy leading-relaxed">
            Tu proyecto no termina con el evento: capital semilla, mentorías,
            pasantías y formación técnica de la mano de nuestros aliados.
          </p>
        </div>

        {/* Tarjetas */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {prizes.map((prize, idx) => {
            const Icon = ICON_MAP[prize.sponsor] || Gift;
            const tone = TONE_STYLES[prize.tone] || TONE_STYLES.action;
            const span = SPANS[idx % SPANS.length];
            const isWide = span === WIDE;

            return (
              <motion.li key={prize.sponsor} variants={item} className={span}>
                <article className="relative h-full flex flex-col rounded-3xl border border-line bg-surface">
                  {/* Parte superior: quién da el premio y qué es */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center ${tone.soft} ${tone.text}`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-medium text-copy truncate">
                          {prize.sponsor}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${tone.badge}`}
                      >
                        {prize.badge}
                      </span>
                    </div>

                    <p
                      className={`mt-10 sm:mt-12 font-display font-bold text-4xl sm:text-5xl leading-[1.05] tracking-tight text-balance ${tone.text}`}
                    >
                      {prize.highlight}
                    </p>
                    <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-white">
                      {prize.title}
                    </h3>
                  </div>

                  {/* Perforación tipo ticket (asume que el fondo de la página es "ink") */}
                  <div
                    aria-hidden="true"
                    className="relative border-t border-dashed border-line"
                  >
                    <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-ink" />
                    <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-ink" />
                  </div>

                  {/* Qué incluye */}
                  <ul
                    className={`p-6 sm:p-8 grid gap-x-8 gap-y-3 ${
                      isWide ? "sm:grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {prize.items.map((text, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-sm text-copy leading-relaxed"
                      >
                        <span
                          className={`mt-0.5 w-5 h-5 shrink-0 rounded-full grid place-items-center ${tone.soft} ${tone.text}`}
                        >
                          <Check
                            className="w-3 h-3"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Nota aclaratoria */}
        <p className="mt-8 max-w-xl text-xs sm:text-sm text-muted leading-relaxed">
          * Los certificados de ganador son avalados oficialmente por la
          comunidad y Bloomtech.
        </p>
      </div>
    </section>
  );
}
