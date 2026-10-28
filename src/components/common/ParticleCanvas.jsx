import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const colors = [
      "255,255,255",
      "255,255,255",
      "255,255,255",
      "255,255,255",
      "242,80,34",
    ];
    let W,
      H,
      pts = [],
      mouse = { x: -999, y: -999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const r = cv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = Array.from(
        { length: Math.min(100, Math.floor((W * H) / 16000)) },
        () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.6 + 0.7,
          c: colors[(Math.random() * colors.length) | 0],
          s: Math.random() < 0.14 ? 3 + ((Math.random() * 2) | 0) : 0,
        }),
      );
      // Con movimiento reducido no hay bucle: redibuja un cuadro estático
      if (reduceMotion && frame) frame();
    };

    const poly = (p, n, size) => {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        ctx[i ? "lineTo" : "moveTo"](
          p.x + Math.cos(a) * size,
          p.y + Math.sin(a) * size,
        );
      }
      ctx.closePath();
    };

    let animId;
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) {
          p.x += (dx / d) * 1.5;
          p.y += (dy / d) * 1.5;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 125) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 125) * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 190) {
          ctx.strokeStyle = `rgba(242,80,34,${(1 - md / 190) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // shadowBlur es costoso: se desactiva en pantallas pequeñas
      const glow = W >= 768 ? 12 : 0;
      for (const p of pts) {
        ctx.shadowBlur = glow;
        ctx.shadowColor = `rgb(${p.c})`;
        ctx.fillStyle = ctx.strokeStyle = `rgba(${p.c},.85)`;
        ctx.lineWidth = 1.1;
        if (p.s) {
          poly(p, p.s, 6);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;
      if (!reduceMotion) animId = requestAnimationFrame(frame);
    }

    const handleMouseMove = (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resize();
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
