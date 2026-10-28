import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";
import BoliviaMap from "./BoliviaMap";

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
            Elige un departamento para ver la sede.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="rounded-xl border border-line bg-surface p-3 sm:p-5">
              <BoliviaMap activeKey={activeKey} onSelect={setActiveKey} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sedesKeys.map((key) => {
                const sede = EVENT_CONFIG.sedes[key];
                const active = key === activeKey;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveKey(key)}
                    aria-pressed={active}
                    className={`min-h-11 rounded-full px-4 text-sm font-medium ${
                      active
                        ? "bg-action text-ink"
                        : "border border-line text-copy hover:text-white"
                    }`}
                  >
                    {sede.short}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-muted">
              Mapa de Sageo, licencia CC BY-SA 4.0.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {currentSede && (
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-xl border border-line bg-surface"
              >
                <img
                  src={currentSede.photo}
                  alt={currentSede.venue}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {currentSede.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-copy sm:text-base">{currentSede.venue}</p>
                  <p className="mt-2 flex items-start gap-2 text-xs text-muted sm:text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{currentSede.addr}</span>
                  </p>
                  <a
                    href={currentSede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-action px-5 py-3 text-sm font-medium text-ink sm:text-base"
                  >
                    Ver en Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
