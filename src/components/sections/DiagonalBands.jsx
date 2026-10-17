export default function DiagonalBands() {
  const words1 = ["Abstráete", "Crea", "Conecta", "Construye"];
  const words2 = [
    "Abstracthon 2026",
    "Bolivia",
    "21 de noviembre",
    "Santa Cruz",
    "Oruro",
  ];

  // Renderiza una palabra con el separador geométrico estilo rombo
  const renderItem = (word, isEven, isBand1, key) => (
    <span
      key={key}
      className={`inline-flex items-center mr-6 font-display font-bold uppercase text-[clamp(1.8rem,5vw,4.2rem)] tracking-wider ${
        isEven
          ? isBand1
            ? "text-transparent [-webkit-text-stroke:1.8px_var(--deep)]"
            : "text-transparent [-webkit-text-stroke:1.8px_var(--neon)]"
          : isBand1
            ? "text-deep"
            : "text-white"
      }`}
    >
      {word}
      <span
        className="inline-block w-[0.35em] h-[0.35em] ml-6 bg-current"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
    </span>
  );

  const buildTrack = (words, isBand1) => {
    // Generamos una secuencia suficiente para el desplazamiento continuo
    const repeated = Array.from({ length: 8 }).flatMap((_, loopIdx) =>
      words.map((w, wIdx) =>
        renderItem(
          w,
          (loopIdx * words.length + wIdx) % 2 === 1,
          isBand1,
          `${loopIdx}-${wIdx}`,
        ),
      ),
    );
    return repeated;
  };

  return (
    <div
      className="relative w-full h-[clamp(180px,24vw,300px)] overflow-hidden my-10 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Banda 1: Fondo Neón Turquesa, inclinación negativa */}
      <div className="absolute -left-[10%] w-[120%] py-2 sm:py-2.5 top-[20%] -rotate-[2.5deg] bg-neon z-20 shadow-[0_0_60px_-10px_rgba(82,242,242,0.65)] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {buildTrack(words1, true)}
        </div>
      </div>

      {/* Banda 2: Fondo Azul Surf, inclinación positiva con movimiento invertido */}
      <div className="absolute -left-[10%] w-[120%] py-2 sm:py-2.5 top-[48%] rotate-[2deg] bg-surf z-10 border-y border-neon/40 shadow-[0_0_40px_rgba(18,70,115,0.7)] overflow-hidden">
        <div className="animate-marquee-reverse whitespace-nowrap">
          {buildTrack(words2, false)}
        </div>
      </div>
    </div>
  );
}
