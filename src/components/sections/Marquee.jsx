import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SPONSORS } from "../../config/sponsorsData";

const SPEED = 22;

function LogoRow({ copyKey, hidden }) {
  return (
    <div className="flex items-center gap-4 sm:gap-8 shrink-0" aria-hidden={hidden || undefined}>
      {SPONSORS.map((sponsor) => {
        const bloom = sponsor.name === "Bloomnovatech";
        const img = (
          <img
            key={`${copyKey}-${sponsor.name}`}
            src={sponsor.src}
            alt={hidden ? "" : sponsor.name}
            draggable={false}
            className={bloom ? "pointer-events-none" : "logo-item pointer-events-none"}
          />
        );
        if (!bloom) return img;
        return (
          <span key={`${copyKey}-${sponsor.name}`} className="logo-item logo-item-bloom">
            {img}
          </span>
        );
      })}
    </div>
  );
}

export default function Marquee() {
  const scrollerRef = useRef(null);
  const playingRef = useRef(true);
  const readyRef = useRef(false);
  const wrappingRef = useRef(false);
  const gestureRef = useRef({ wasPlaying: true, x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) playingRef.current = false;

    const half = () => el.scrollWidth / 2;

    const wrap = () => {
      const span = half();
      if (span < 1) return;
      if (el.scrollLeft >= span) {
        wrappingRef.current = true;
        el.scrollLeft -= span;
        wrappingRef.current = false;
      } else if (el.scrollLeft <= 0) {
        wrappingRef.current = true;
        el.scrollLeft += span;
        wrappingRef.current = false;
      }
    };

    const place = () => {
      const span = half();
      if (span < 1) return;
      wrappingRef.current = true;
      el.scrollLeft = span / 2;
      wrappingRef.current = false;
      readyRef.current = true;
    };

    place();
    const onResize = () => place();
    window.addEventListener("resize", onResize);

    let raf = 0;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (playingRef.current && readyRef.current) {
        el.scrollLeft += SPEED * dt;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onScroll = () => {
      if (!wrappingRef.current && readyRef.current) wrap();
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onPointerDown = (event) => {
    const el = scrollerRef.current;
    gestureRef.current = {
      wasPlaying: playingRef.current,
      x: event.clientX,
      y: event.clientY,
      scroll: el ? el.scrollLeft : 0,
    };
    playingRef.current = false;
  };

  const onPointerUp = (event) => {
    const el = scrollerRef.current;
    const gesture = gestureRef.current;
    const movedPointer =
      Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 8;
    const movedScroll = el ? Math.abs(el.scrollLeft - gesture.scroll) > 4 : false;
    if (!gesture.wasPlaying && !movedPointer && !movedScroll) {
      playingRef.current = true;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="comunidad"
      className="py-14 sm:py-18 overflow-hidden select-none"
    >
      <h2
        id="comunidad-titulo"
        className="text-center text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.28em] text-copy px-5 font-semibold"
      >
        ORGANIZACIONES Y COMUNIDADES ALIADAS
      </h2>
      <div
        ref={scrollerRef}
        role="region"
        tabIndex={0}
        aria-labelledby="comunidad-titulo"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={() => {
          playingRef.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            playingRef.current = !playingRef.current;
          }
        }}
        className="logo-scroller mt-6 sm:mt-10 cursor-grab overflow-x-auto overscroll-x-contain px-4 active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action"
      >
        <div className="flex w-max items-center gap-4 sm:gap-8">
          {[0, 1, 2, 3].map((copy) => (
            <LogoRow key={`a-${copy}`} copyKey={`a-${copy}`} />
          ))}
          {[0, 1, 2, 3].map((copy) => (
            <LogoRow key={`b-${copy}`} copyKey={`b-${copy}`} hidden />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
