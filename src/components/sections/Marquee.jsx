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
      <h2 className="text-center text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.28em] text-copy px-5 font-semibold">
        ORGANIZACIONES Y COMUNIDADES ALIADAS
      </h2>
      <ul className="mt-6 grid grid-cols-1 gap-3 px-4 sm:hidden">
        {SPONSORS.map((s) => (
          <li
            key={s.name}
            className="h-20 rounded-xl bg-white grid place-items-center px-4"
          >
            <img
              src={s.src}
              alt={s.name}
              className="max-h-14 w-auto max-w-full object-contain"
            />
          </li>
        ))}
      </ul>
      <div
        className="mt-8 sm:mt-10 hidden sm:block overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
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
