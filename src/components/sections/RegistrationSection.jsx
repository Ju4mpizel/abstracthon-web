import { ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { REGISTER_URL, linkProps } from "../../config/eventData";

// Es una secuencia real, así que la numeración sí aporta información
const STEPS = [
  {
    title: "Llena el formulario",
    desc: "Ingresa tus datos personales, tu carrera y elige tu sede: Santa Cruz, Cochabamba u Oruro.",
  },
  {
    title: "Elige si vas solo o en equipo",
    desc: "Puedes inscribirte de forma individual o con un equipo de hasta 5 personas, con descuento especial.",
  },
  {
    title: "Recibe tu confirmación",
    desc: "Te enviamos la confirmación oficial, el acceso a los talleres virtuales del viernes y tu acreditación presencial.",
  },
];

const PRICES = [
  { mode: "Presencial", amount: "30", note: "Incluye refrigerio" },
  { mode: "Virtual", amount: "15", note: "En línea" },
];

const DISCOUNTS = [
  "Bs 10 de descuento para equipos de 5 integrantes",
  "Descuento especial para miembros de comunidades aliadas",
];

export default function RegistrationSection() {
  const reduce = useReducedMotion();

  // Una sola entrada orquestrada: pasos y ticket aparecen en secuencia
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="registro"
      aria-labelledby="registro-titulo"
      className="relative px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Columna izquierda: contexto y pasos */}
        <div className="lg:col-span-7">
          <h2
            id="registro-titulo"
            className="max-w-xl font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance"
          >
            Asegura tu lugar en Abstracthon
          </h2>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-copy leading-relaxed">
            Participa en formato híbrido: talleres virtuales el viernes, hacking
            presencial el sábado y pitches el domingo. Las plazas son limitadas
            por aforo en cada sede universitaria.
          </p>

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            {STEPS.map((step, idx) => (
              <motion.li
                key={step.title}
                variants={item}
                className="relative pl-16 pb-10 last:pb-0"
              >
                {idx < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-12 bottom-1 w-px bg-line"
                  />
                )}
                <span className="absolute left-0 top-0 w-10 h-10 rounded-full border border-action/40 bg-action/10 text-action font-display font-bold grid place-items-center">
                  {idx + 1}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-10">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-md text-sm text-copy leading-relaxed">
                  {step.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Columna derecha: ticket con precios y CTA */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: reduce ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:col-span-5 lg:sticky lg:top-24 self-start"
        >
          <article className="relative rounded-3xl border border-line bg-surface">
            {/* Precios: lo primero que quiere saber quien llega aquí */}
            <div className="p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm text-copy">
                <span className="live-dot" aria-hidden="true" />
                Convocatoria abierta en Santa Cruz, Cochabamba y Oruro
              </p>

              <h3 className="mt-8 font-display text-xl sm:text-2xl font-bold text-white">
                Elige cómo participar
              </h3>

              <dl className="mt-6 grid grid-cols-2 gap-6">
                {PRICES.map((price, i) => (
                  <div
                    key={price.mode}
                    className={i > 0 ? "border-l border-line pl-6" : ""}
                  >
                    <dt className="text-sm text-copy">{price.mode}</dt>
                    <dd className="mt-1 font-display font-bold text-action leading-none tracking-tight">
                      <span className="text-lg mr-1">Bs</span>
                      <span className="text-5xl sm:text-6xl">
                        {price.amount}
                      </span>
                    </dd>
                    <dd className="mt-2 text-xs text-muted">{price.note}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Perforación tipo ticket (asume que el fondo de la página es "ink") */}
            <div
              aria-hidden="true"
              className="relative border-t border-dashed border-line"
            >
              <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-ink" />
              <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-ink" />
            </div>

            {/* Descuentos y acción */}
            <div className="p-6 sm:p-8">
              <ul className="space-y-3">
                {DISCOUNTS.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm text-copy leading-relaxed"
                  >
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-confirm/10 text-confirm grid place-items-center">
                      <Check
                        className="w-3 h-3"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <a
                {...linkProps(REGISTER_URL)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-action text-ink font-semibold text-base px-6 py-4 min-h-12 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
              >
                Completar inscripción
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Se abre el formulario oficial de Google Forms.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
