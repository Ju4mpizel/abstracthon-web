import {
  Wallet,
  GraduationCap,
  MessagesSquare,
  HeartHandshake,
  Check,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

const ICONS = {
  finanzas: Wallet,
  educacion: GraduationCap,
  comunicacion: MessagesSquare,
  "ayuda-tecnologica": HeartHandshake,
};

// Clases completas para que Tailwind v4 las detecte. Cada track tiene su color.
const TONES = {
  green: {
    text: "text-confirm",
    soft: "bg-confirm/10",
    border: "border-confirm/30 hover:border-confirm/60",
    glow: "from-confirm/15",
    chip: "border-confirm/25 text-confirm",
  },
  blue: {
    text: "text-link",
    soft: "bg-link/10",
    border: "border-link/30 hover:border-link/60",
    glow: "from-link/15",
    chip: "border-link/25 text-link",
  },
  yellow: {
    text: "text-mark",
    soft: "bg-mark/10",
    border: "border-mark/30 hover:border-mark/60",
    glow: "from-mark/15",
    chip: "border-mark/25 text-mark",
  },
  violet: {
    text: "text-violet-400",
    soft: "bg-violet-400/10",
    border: "border-violet-400/30 hover:border-violet-400/60",
    glow: "from-violet-400/15",
    chip: "border-violet-400/25 text-violet-400",
  },
};

export default function TracksSection() {
  const tracks = EVENT_CONFIG.tracks || [];
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="tracks"
      aria-labelledby="tracks-titulo"
      className="relative px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
          <h2
            id="tracks-titulo"
            className="max-w-xl font-display font-bold text-white text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance"
          >
            Elige tu track
          </h2>
          <p className="max-w-sm text-sm sm:text-base text-copy leading-relaxed">
            Cada proyecto compite en uno de estos cuatro ejes. Lo importante:
            resolver un problema real del track que elijas.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {tracks.map((track, idx) => {
            const Icon = ICONS[track.id] || HeartHandshake;
            const tone = TONES[track.tone] || TONES.blue;

            return (
              <motion.li key={track.id} variants={item}>
                <article
                  className={`relative h-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border bg-surface p-3.5 sm:p-6 transition-colors duration-300 ${tone.border}`}
                >
                  {/* Brillo superior con el color del track */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${tone.glow} to-transparent`}
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl grid place-items-center ${tone.soft} ${tone.text}`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    </span>
                    <span
                      className={`font-display font-bold text-xs sm:text-sm ${tone.text} opacity-70`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`relative mt-3 sm:mt-5 font-display font-bold text-lg sm:text-2xl leading-tight ${tone.text}`}
                  >
                    {track.name}
                  </h3>
                  <p className="relative mt-1.5 text-xs sm:text-sm text-copy leading-snug">
                    {track.must}
                  </p>

                  {/* Ejemplos de contexto */}
                  <ul className="relative mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                    {track.examples.map((ex) => (
                      <li
                        key={ex}
                        className={`rounded-full border px-2 py-0.5 text-[10px] sm:text-xs whitespace-nowrap ${tone.chip}`}
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>

                  {/* Sí / no entra: solo desde tablet para mantener 2x2 compacto */}
                  <div className="relative mt-auto pt-4 sm:pt-5">
                    <div className="hidden sm:flex items-start gap-2 text-xs text-copy leading-snug">
                      <Check
                        className={`mt-0.5 w-3.5 h-3.5 shrink-0 ${tone.text}`}
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      <span>{track.focus}</span>
                    </div>
                    <div className="mt-0 sm:mt-2.5 pt-3 sm:pt-2.5 border-t border-dashed border-line flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted leading-snug">
                      <X
                        className="mt-px w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-action"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="sr-only">No entra: </span>
                        {track.exclude}
                      </span>
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
