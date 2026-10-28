import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { motion } from "motion/react";
import { EVENT_CONFIG } from "../../config/eventData";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    done: false,
  });

  useEffect(() => {
    const EVENT_DATE = new Date(EVENT_CONFIG.targetDate).getTime();
    const pad = (n) => String(n).padStart(2, "0");

    const tick = () => {
      const diff = Math.max(0, EVENT_DATE - Date.now());
      setTimeLeft({
        done: diff === 0,
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff / 3600000) % 24)),
        minutes: pad(Math.floor((diff / 60000) % 60)),
        seconds: pad(Math.floor((diff / 1000) % 60)),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="relative px-4 sm:px-6 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto border border-line bg-surface rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 sm:px-6 py-3.5 sm:py-4 border-b border-line">
          <div className="flex items-center gap-2.5 text-mark font-display text-xs sm:text-base">
            <Timer className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Cuenta regresiva · 21 de noviembre, 7:30 a. m.</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted">
            <span className="live-dot" /> Hora de Bolivia (UTC-4)
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="py-5 sm:py-6 text-center">
            <div className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-white">
              {timeLeft.days}
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
              Días
            </div>
          </div>

          <div className="py-5 sm:py-6 text-center border-l border-line">
            <div className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-white">
              {timeLeft.hours}
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
              Horas
            </div>
          </div>

          <div className="py-5 sm:py-6 text-center border-t md:border-t-0 md:border-l border-line">
            <div className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-white">
              {timeLeft.minutes}
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
              Minutos
            </div>
          </div>

          <div className="py-5 sm:py-6 text-center border-t md:border-t-0 border-l border-line">
            <div className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-white">
              {timeLeft.seconds}
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
              Segundos
            </div>
          </div>
        </div>

        {timeLeft.done && (
          <p className="text-center text-mark font-medium pb-4 text-sm">
            ¡El evento ya comenzó!
          </p>
        )}
      </motion.div>
    </section>
  );
}
