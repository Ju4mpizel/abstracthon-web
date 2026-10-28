import { useState } from "react";
import { Building2, CircleCheck, MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

const TONE = {
  neon: "text-neon",
  gold: "text-gold",
  blue: "text-[#4aa8ff]",
};

export default function Sedes() {
  const sedesKeys = Object.keys(EVENT_CONFIG.sedes);
  const [activeKey, setActiveKey] = useState(sedesKeys[0] || "scz");
  const currentSede = EVENT_CONFIG.sedes[activeKey];

  return (
    <section
      id="sedes"
      className="relative px-4 sm:px-6 py-16 sm:py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(18, 70, 115, 0.22), transparent)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            Sedes confirmadas
          </h2>
          <div className="mt-2.5 sm:mt-3 h-1 w-14 sm:w-16 rounded bg-gold shadow-[0_0_12px_rgba(242,200,75,0.7)]" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-400 max-w-xl">
            Elige tu ciudad para ver la sede.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Selector y Ficha */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {sedesKeys.map((key) => {
                const s = EVENT_CONFIG.sedes[key];
                const isActive = activeKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveKey(key)}
                    className={`w-full text-left flex items-center gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "border-neon bg-neon/10 shadow-[inset_3px_0_0_var(--neon)]"
                        : "border-white/10 bg-white/[0.02] hover:border-neon/40 hover:bg-white/[0.04]"
                    }`}
                  >
                    <Building2
                      className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${TONE[s.tone] || "text-neon"}`}
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-base sm:text-lg text-white font-semibold truncate">
                        {s.name}
                      </span>
                      <span className="block text-xs sm:text-sm text-slate-400 truncate">
                        {s.city}
                      </span>
                    </span>
                    <CircleCheck
                      className={`ml-auto w-4 h-4 sm:w-5 sm:h-5 text-neon shrink-0 ${isActive ? "opacity-100" : "opacity-0"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Ficha con animación de cambio */}
            <AnimatePresence mode="wait">
              {currentSede && (
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="border border-white/15 bg-[#0a1e3e]/55 backdrop-blur-md rounded-xl p-5 sm:p-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-neon font-medium">
                      <span className="w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />{" "}
                      {currentSede.placeKnown
                        ? "Sede confirmada"
                        : "Ciudad confirmada"}
                    </span>
                    <h3 className="mt-2.5 sm:mt-3 font-display text-xl sm:text-2xl font-semibold text-white">
                      {currentSede.name}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-300">
                      {currentSede.venue}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                      <MapPin className="shrink-0 w-4 h-4 mt-0.5 text-slate-400" />
                      <span>{currentSede.addr}</span>
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={currentSede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neon text-deep px-5 py-3 font-medium text-sm sm:text-base shadow-[0_0_20px_rgba(82,242,242,0.4)]"
                  >
                    {currentSede.placeKnown
                      ? "Ver ubicación en Maps"
                      : "Ver la ciudad en Maps"}{" "}
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-7">
            <div className="relative border border-neon/35 rounded-xl overflow-hidden bg-[#0a1a38] shadow-[0_0_60px_-20px_rgba(82,242,242,0.4)] h-[320px] sm:h-[400px] lg:h-full min-h-[300px]">
              <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-gold pointer-events-none z-10" />
              <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-gold pointer-events-none z-10" />
              <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-gold pointer-events-none z-10" />
              <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-gold pointer-events-none z-10" />
              {currentSede && (
                <iframe
                  title={currentSede.name}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(currentSede.query)}&z=16&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 [filter:invert(92%)_hue-rotate(180deg)_saturate(0.75)_contrast(0.92)]"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
