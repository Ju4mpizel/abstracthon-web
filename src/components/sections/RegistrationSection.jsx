import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles,
  Users,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { REGISTER_URL, linkProps } from "../../config/eventData";

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "Llenar formulario",
    desc: "Ingresa tus datos personales, carrera y selecciona tu sede (Santa Cruz, Cochabamba u Oruro).",
  },
  {
    icon: Users,
    step: "02",
    title: "Equipos de hasta 5",
    desc: "Inscríbete de forma individual o con tu equipo de hasta 5 personas (aplica descuento especial).",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Acceso y confirmación",
    desc: "Recibirás la confirmación oficial, acceso a los talleres virtuales del viernes y acreditación presencial.",
  },
];

// Beneficios e información relevante estrictamente sobre la inscripción
const REGISTRATION_DETAILS = [
  "Inscripción presencial: Bs 30 (incluye refrigerio)",
  "Inscripción virtual: Bs 15",
  "Descuento de Bs 5 para equipos de 5 integrantes",
  "Descuento especial para miembros de comunidades aliadas",
];

export default function RegistrationSection() {
  return (
    <section
      id="registro"
      className="relative px-4 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Glow de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--action) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 border border-line bg-surface rounded-full px-4 py-1.5 text-xs sm:text-sm text-copy mb-4">
            <span className="live-dot" /> Convocatoria Abierta · Santa Cruz,
            Cochabamba y Oruro
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            Asegura tu lugar en <span className="text-action">Abstracthon</span>
          </h2>
          <div className="mt-3 h-1 w-16 rounded bg-action mx-auto" />
          <p className="mt-5 text-sm sm:text-base text-copy leading-relaxed">
            Participa en formato híbrido (talleres virtuales el viernes, hacking
            presencial el sábado y pitches el domingo). Plazas limitadas por
            aforo en cada sede universitaria.
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8 flex flex-col justify-between group hover:border-action/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ink border border-line grid place-items-center text-action group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-3xl font-bold text-muted/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tarjeta de llamado a la acción y detalles de inscripción */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-line bg-surface/90 backdrop-blur-md p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              ¿Listo para participar?
            </h3>
            <p className="mt-2 text-sm text-copy">
              Aceptamos inscripciones individuales o grupales de hasta 5
              integrantes.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REGISTRATION_DETAILS.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-copy"
                >
                  <CheckCircle2 className="w-4 h-4 text-confirm shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              {...linkProps(REGISTER_URL)}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-action text-ink font-semibold px-8 py-4 min-h-12 w-full sm:w-auto text-base transition hover:bg-[#ff6a3d] shadow-[0_0_25px_rgba(242,80,34,0.35)]"
            >
              Completar Inscripción{" "}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <span className="text-center text-xs text-muted flex items-center justify-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-action" /> Formulario oficial de
              Google Forms
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
