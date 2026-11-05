import { BOLIVIA_DEPARTMENTS } from "./boliviaDepartments";

const LABELS = {
  scz: { x: 1310, y: 1280, name: "Santa Cruz" },
  cbb: { x: 740, y: 1330, name: "Cochabamba" },
  oru: { x: 380, y: 1530, name: "Oruro" },
};

export default function BoliviaMap({ activeKey, onSelect }) {
  const choose = (key) => {
    if (key) onSelect(key);
  };

  return (
    <svg
      viewBox="40 80 1860 2060"
      role="group"
      aria-label="Departamentos de Bolivia"
      className="w-full h-auto select-none"
    >
      {BOLIVIA_DEPARTMENTS.map((department) => {
        const host = Boolean(department.key);
        const active = department.key === activeKey;
        return (
          <path
            key={department.id}
            d={department.d}
            className={
              host
                ? "bolivia-host cursor-pointer transition-colors duration-200"
                : undefined
            }
            data-active={active ? "true" : undefined}
            fill={active ? "#ffb08a" : host ? "#F25022" : "#2A2A2A"}
            stroke={active ? "#ffffff" : "#111111"}
            strokeWidth={active ? 18 : 7}
            strokeLinejoin="round"
            role={host ? "button" : "presentation"}
            tabIndex={host ? 0 : undefined}
            aria-label={host ? `Sede ${department.label}` : undefined}
            aria-pressed={host ? active : undefined}
            onClick={() => choose(department.key)}
            onKeyDown={(event) => {
              if (!host) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose(department.key);
              }
            }}
          />
        );
      })}
      {Object.entries(LABELS).map(([key, label]) => (
        <text
          key={key}
          x={label.x}
          y={label.y}
          textAnchor="middle"
          fill="#111111"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="48"
          fontWeight="700"
          pointerEvents="none"
          className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
        >
          {label.name}
        </text>
      ))}
    </svg>
  );
}
