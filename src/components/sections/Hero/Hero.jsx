import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";
import {
  EVENT_CONFIG,
  REGISTER_URL,
  linkProps,
} from "../../../config/eventData";

// Three.js se descarga aparte para no bloquear el primer render
const Hero3D = lazy(() => import("./Hero3D"));

const SCRAMBLE_CHARS = "01<>/{}#*+=ABCDEFGHJKLMNPRSTUVXYZ";

function ScrambleWord({ text, isOutline = false }) {
  return (
    <span className="inline-block whitespace-nowrap">
      {text.split("").map((char, idx) => (
        <ScrambleChar key={idx} char={char} isOutline={isOutline} />
      ))}
    </span>
  );
}

function ScrambleChar({ char, isOutline }) {
  const [display, setDisplay] = useState(char);
  const [busy, setBusy] = useState(false);
  const intervalRef = useRef(null);

  // Limpia el intervalo si el componente se desmonta a mitad de la animación
  useEffect(() => () => clearInterval(intervalRef.current), []);

  const handleMouseEnter = () => {
    if (busy || char === " ") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setBusy(true);
    let iterations = 0;
    intervalRef.current = setInterval(() => {
      setDisplay(SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0]);
      iterations++;
      if (iterations > 7) {
        clearInterval(intervalRef.current);
        setDisplay(char);
        setBusy(false);
      }
    }, 35);
  };

  if (char === " ") {
    return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-default transition-all duration-150 select-none ${
        isOutline
          ? "text-transparent [-webkit-text-stroke:2px_var(--neon)] [filter:drop-shadow(0_0_14px_rgba(82,242,242,0.45))]"
          : "text-white drop-shadow-[0_0_40px_rgba(82,242,242,0.35)]"
      }`}
    >
      {display}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-12"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(55% 55% at 20% 40%, rgba(18, 70, 115, 0.55), transparent 70%),
            radial-gradient(40% 40% at 85% 45%, rgba(82, 242, 242, 0.1), transparent 70%),
            radial-gradient(30% 30% at 98% 0%, rgba(217, 48, 48, 0.12), transparent 70%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-3 border border-white/15 bg-[#0a1e3e]/60 backdrop-blur-md rounded-full px-4 py-1.5 text-xs sm:text-sm text-slate-200"
          >
            <span className="live-dot" /> {EVENT_CONFIG.badgeText}
          </motion.span>

          <h1 className="mt-6 font-bold leading-[0.92] tracking-tight text-[clamp(2.5rem,7vw,6rem)] font-display flex flex-col gap-1 items-center lg:items-start">
            <ScrambleWord text="ABSTRÁETE" />
            <ScrambleWord text="Y CREA EL" isOutline={true} />
            <ScrambleWord text="FUTURO" />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed"
          >
            {EVENT_CONFIG.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              {...linkProps(REGISTER_URL)}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-neon text-deep font-semibold px-6 py-3.5 shadow-[0_0_25px_rgba(82,242,242,0.5)] hover:shadow-[0_0_35px_rgba(82,242,242,0.7)] transition"
            >
              ¡Quiero Participar! <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#sedes"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/20 hover:border-neon text-slate-100 hover:text-neon px-6 py-3.5 transition"
            >
              <MapPin className="w-5 h-5" /> Ver Sedes Presenciales
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Columna Derecha con Hero3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[560px] flex items-center justify-center"
        >
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>

          <a
            {...linkProps(REGISTER_URL)}
            className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 lg:-left-6 w-[116px] h-[116px] sm:w-[124px] sm:h-[124px] grid place-items-center rounded-full text-neon bg-deep/85 backdrop-blur-md border border-white/10 hover:border-neon transition duration-300 z-20 group"
            aria-label="Regístrate ahora"
          >
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circ"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                />
              </defs>
              <text
                fontSize="14"
                fontWeight="600"
                fill="currentColor"
                letterSpacing="2.2px"
              >
                <textPath href="#circ" textLength="496" lengthAdjust="spacing">
                  REGÍSTRATE AHORA • REGÍSTRATE AHORA •
                </textPath>
              </text>
            </svg>
            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neon text-deep grid place-items-center group-hover:scale-110 group-hover:rotate-45 transition duration-300 shadow-[0_0_20px_rgba(82,242,242,0.6)]">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Barra de Datos Inferior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 mt-8"
      >
        <dl className="grid sm:grid-cols-3 border border-white/15 bg-[#0a1e3e]/60 backdrop-blur-md rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="flex items-center gap-4 p-4 sm:p-5">
            <CalendarDays className="text-neon shrink-0 w-6 h-6" />
            <div>
              <dt className="text-xs sm:text-sm text-slate-400">Fecha</dt>
              <dd className="font-display text-base sm:text-lg text-white font-medium">
                21 de noviembre · 7:30 a. m.
              </dd>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 sm:p-5">
            <MapPin className="text-gold shrink-0 w-6 h-6" />
            <div>
              <dt className="text-xs sm:text-sm text-slate-400">Sedes</dt>
              <dd className="font-display text-base sm:text-lg text-white font-medium">
                Santa Cruz · Oruro
              </dd>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 sm:p-5">
            <Users className="text-neon shrink-0 w-6 h-6" />
            <div>
              <dt className="text-xs sm:text-sm text-slate-400">Modalidad</dt>
              <dd className="font-display text-base sm:text-lg text-white font-medium">
                Presencial
              </dd>
            </div>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}
