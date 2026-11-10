import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Lock, AlertTriangle } from "lucide-react";

// El código real NO va en el código fuente: se revela el día de la hackathon.
const CODE_PLACEHOLDER = "XXXXXXXXX";

const BENEFITS = [
  { value: "$5", label: "por registrarte con el código" },
  { value: "+$5", label: "bono hackathon al gastar ≥ $20 en IA" },
  { value: "25%", label: "descuento en IAs (hasta el 17/12)" },
  { value: "3%", label: "cashback permanente" },
];

const STEPS = [
  "Descarga Bitget Wallet y crea tu cuenta (recomendado: con Google).",
  "Ingresa el código de referido antes de cualquier pago.",
  "Completa el KYC y solicita tu tarjeta virtual gratuita.",
  "Paga $20+ en una IA elegible (ChatGPT, Claude, Cursor, Lovable, Midjourney…) durante el evento.",
];

export default function BitgetPromo() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <div className="mt-5 rounded-3xl border border-cyan-400/25 bg-[#0f1c20] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-cyan-400/[0.04] transition-colors"
      >
        <img
          src="/img/bitget-wallet.webp"
          alt=""
          className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wide text-cyan-300">
            Bitget Wallet · Beneficio para participantes
          </p>
          <p className="mt-1 font-display text-lg sm:text-xl font-semibold text-white text-balance">
            Gana <span className="text-cyan-300">$5 USD</span> en tu billetera
            con un código exclusivo
          </p>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={`w-5 h-5 shrink-0 text-cyan-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 sm:px-6 pb-6 border-t border-cyan-400/15 pt-5 grid gap-6 lg:grid-cols-2">
              {/* Código + beneficios */}
              <div className="space-y-5">
                <div className="rounded-2xl border border-cyan-400/25 bg-ink/60 p-4">
                  <p className="text-xs text-muted">Código de referido</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xl sm:text-2xl font-bold tracking-[0.2em] text-cyan-200 blur-[6px] select-none"
                    >
                      {CODE_PLACEHOLDER}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 px-2.5 py-1 text-[11px] font-medium text-cyan-300 whitespace-nowrap">
                      <Lock className="w-3 h-3" aria-hidden="true" />
                      Se revela el día del evento
                    </span>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {BENEFITS.map((b) => (
                    <li
                      key={b.label}
                      className="rounded-2xl bg-cyan-400/[0.07] p-3"
                    >
                      <p className="font-display text-2xl font-bold text-cyan-300">
                        {b.value}
                      </p>
                      <p className="mt-0.5 text-xs text-copy leading-snug">
                        {b.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pasos + requisitos */}
              <div className="space-y-4">
                <ol className="space-y-2.5">
                  {STEPS.map((s, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-copy leading-relaxed"
                    >
                      <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-cyan-400/15 text-cyan-300 text-[11px] font-bold grid place-items-center">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-muted leading-relaxed">
                  Requisitos: +18 años, CI o pasaporte, comprobante de domicilio
                  (≤ 3 meses) y un depósito de $10 USD que sigue siendo tuyo. La
                  tarjeta es gratis.
                </p>
                <p className="flex gap-2 text-xs text-mark leading-relaxed">
                  <AlertTriangle
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />
                  Si pagas antes de ingresar el código pierdes los $5 fijos.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
