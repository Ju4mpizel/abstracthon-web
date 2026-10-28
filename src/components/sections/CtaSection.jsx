import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { REGISTER_URL, linkProps } from "../../config/eventData";

export default function CtaSection() {
  return (
    <section
      id="registro"
      className="relative px-4 sm:px-6 py-20 sm:py-28 text-center overflow-hidden w-full flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center"
      >
        <h2 className="font-display font-bold text-white leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          ¿Te atreves a convertir tu idea en realidad?
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            {...linkProps(REGISTER_URL)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-action text-ink font-semibold px-6 py-3.5 min-h-12 w-full sm:w-auto transition hover:bg-[#ff6a3d]"
          >
            ¡Quiero Participar! <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#sedes"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 hover:border-action text-white px-6 py-3.5 min-h-12 w-full sm:w-auto transition"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Ver Sedes Presenciales
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
