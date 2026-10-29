import { motion } from "motion/react";
import { SPONSORS } from "../../config/sponsorsData";

function SponsorItem({ sponsor, copyKey }) {
  const isBloom = sponsor.name === "Bloomnovatech";
  const imgElement = (
    <img
      src={sponsor.src}
      alt={sponsor.name}
      draggable={false}
      className={`logo-item pointer-events-none select-none max-h-12 sm:max-h-16 w-auto object-contain ${
        isBloom ? "logo-item-bloom scale-110" : ""
      }`}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );

  return (
    <div
      key={`${copyKey}-${sponsor.name}`}
      className="shrink-0 flex items-center justify-center px-8 sm:px-12"
    >
      {imgElement}
    </div>
  );
}

export default function Marquee() {
  const trackSponsors = [...SPONSORS, ...SPONSORS];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="comunidad"
      className="py-14 sm:py-20 overflow-hidden select-none"
    >
      <h2
        id="comunidad-titulo"
        className="text-center text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.28em] text-slate-400 px-5 font-semibold"
      >
        ORGANIZACIONES Y COMUNIDADES ALIADAS
      </h2>

      {/* Difuminado sutil en los bordes para una transición limpia */}
      <div
        className="mt-8 sm:mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        aria-labelledby="comunidad-titulo"
      >
        <div className="animate-marquee items-center py-4">
          {/* Bloque 1 */}
          <div className="flex items-center shrink-0">
            {trackSponsors.map((sponsor, idx) => (
              <SponsorItem
                key={`row1-${idx}`}
                sponsor={sponsor}
                copyKey={`row1-${idx}`}
              />
            ))}
          </div>

          {/* Bloque 2 (Espejo infinito) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {trackSponsors.map((sponsor, idx) => (
              <SponsorItem
                key={`row2-${idx}`}
                sponsor={sponsor}
                copyKey={`row2-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
