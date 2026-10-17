import { Shapes, Network, Blocks } from "lucide-react";
import { motion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

const PILLARS = [
  {
    icon: Shapes,
    title: "Innovación Abstracta",
    desc: "Sal de los marcos habituales para resolver problemas reales.",
    color: "#52F2F2",
  },
  {
    icon: Network,
    title: "Networking & Talento",
    desc: "Conecta con desarrolladores y creadores de todo el país.",
    color: "#F2C84B",
  },
  {
    icon: Blocks,
    title: "Ecosistema Microsoft",
    desc: `Impulsado por ${EVENT_CONFIG.organizer}.`,
    color: "#4aa8ff",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            ¿Qué es Abstracthon?
          </h2>
          <div className="mt-2.5 sm:mt-3 h-1 w-14 sm:w-16 rounded bg-neon shadow-[0_0_12px_rgba(82,242,242,0.8)]" />
          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-xl font-normal">
            {EVENT_CONFIG.aboutText}
          </p>
        </motion.div>

        {/* Pilares con Stagger */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ x: 6 }}
                className="group py-5 sm:py-6 flex gap-4 sm:gap-5 items-start cursor-default transition-all"
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/15 grid place-items-center bg-white/[0.02] shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: p.color }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-display transition-colors group-hover:text-neon">
                    {p.title}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
