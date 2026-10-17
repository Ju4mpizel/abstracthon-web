import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-neon via-gold to-neon origin-left z-[70] pointer-events-none shadow-[0_0_12px_rgba(82,242,242,0.8)]"
      style={{ scaleX }}
    />
  );
}
