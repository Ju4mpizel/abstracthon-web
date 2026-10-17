import { motion } from "motion/react";
import { SPONSORS } from "../../config/sponsorsData";

export default function Marquee() {
  // Duplicamos el conjunto para asegurar un bucle visual continuo sin cortes
  const repeatedSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="comunidad"
      className="py-14 sm:py-18 overflow-hidden select-none"
    >
      <h2 className="text-center text-xs sm:text-sm tracking-[0.28em] text-slate-400 px-5 font-semibold">
        ORGANIZACIONES Y COMUNIDADES ALIADAS
      </h2>
      <div
        className="mt-8 sm:mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
        aria-label="Aliados"
      >
        <div className="animate-marquee items-center">
          <div className="flex items-center shrink-0">
            {repeatedSponsors.map((s, idx) => (
              <img
                key={`s1-${idx}`}
                src={s.src}
                alt={s.name}
                className="logo-item"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ))}
          </div>
          <div className="flex items-center shrink-0" aria-hidden="true">
            {repeatedSponsors.map((s, idx) => (
              <img
                key={`s2-${idx}`}
                src={s.src}
                alt={s.name}
                className="logo-item"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
