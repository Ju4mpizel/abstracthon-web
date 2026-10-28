import { useState } from "react";
import { Building2, CircleCheck, MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

export default function Sedes() {
  const sedesKeys = Object.keys(EVENT_CONFIG.sedes);
  const [activeKey, setActiveKey] = useState(sedesKeys[0] || "scz");
  const currentSede = EVENT_CONFIG.sedes[activeKey];

  return (
    <section id="sedes" className="relative px-4 sm:px-6 py-16 sm:py-24">
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
          <div className="mt-2.5 sm:mt-3 h-1 w-14 sm:w-16 rounded bg-action" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-xl">
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
                    className={`w-full text-left flex items-center gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-200 min-h-12 ${
                      isActive
                        ? "border-line border-l-[3px] border-l-action bg-surface"
                        : "border-line bg-ink hover:bg-surface"
                    }`}
                  >
                    <Building2
                      className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${isActive ? "text-action" : "text-white/45"}`}
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-base sm:text-lg text-white font-semibold truncate">
                        {s.name}
                      </span>
                      <span className="block text-xs sm:text-sm text-muted truncate">
                        {s.city}
                      </span>
                    </span>
                    <CircleCheck
                      className={`ml-auto w-4 h-4 sm:w-5 sm:h-5 text-action shrink-0 ${isActive ? "opacity-100" : "opacity-0"}`}
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
                  className="border border-line bg-surface rounded-xl p-5 sm:p-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-confirm font-medium">
                      <span className="w-2 h-2 rounded-full bg-confirm" />{" "}
                      {currentSede.placeKnown
                        ? "Sede confirmada"
                        : "Ciudad confirmada"}
                    </span>
                    <h3 className="mt-2.5 sm:mt-3 font-display text-xl sm:text-2xl font-semibold text-white">
                      {currentSede.name}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-copy">
                      {currentSede.venue}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-muted flex items-start gap-2">
                      <MapPin className="shrink-0 w-4 h-4 mt-0.5 text-muted" />
                      <span>{currentSede.addr}</span>
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={currentSede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-action text-ink px-5 py-3 min-h-12 font-medium text-sm sm:text-base"
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
            <div className="relative border border-line rounded-xl overflow-hidden bg-surface h-[240px] sm:h-[400px] lg:h-full min-h-[240px]">
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
