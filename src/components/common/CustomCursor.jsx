import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringContainerRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Solo activar si el dispositivo usa cursor/ratón
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // El punto dorado sigue de inmediato la posición del cursor
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Detectar elementos interactivos para expandir el anillo
      const target = e.target.closest(
        "a, button, [role='button'], [role='tab'], .sede-btn, .g",
      );
      if (ringRef.current) {
        ringRef.current.classList.toggle("big", Boolean(target));
      }

      // Efecto magnético suave en elementos con la clase .magnetic
      const magnetics = document.querySelectorAll(".magnetic");
      magnetics.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const dist = Math.hypot(dx, dy);

        if (dist < 150) {
          el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
        } else {
          el.style.transform = "";
        }
      });
    };

    // Bucle para movimiento fluido con inercia en el anillo exterior
    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringContainerRef.current) {
        ringContainerRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Contenedor del anillo neón exterior */}
      <div
        ref={ringContainerRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div ref={ringRef} className="cur-ring" />
      </div>

      {/* Contenedor del punto dorado interior */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div className="cur-dot" />
      </div>
    </>
  );
}
