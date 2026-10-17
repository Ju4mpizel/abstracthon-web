// Enlace de inscripción. Mientras no exista el formulario, apunta a la sección de sedes.
// Cuando lo tengas, reemplázalo por la URL completa (ej: "https://forms.office.com/...").
export const REGISTER_URL = "#sedes";

// Props para <a>: abre en pestaña nueva solo si el enlace es externo.
export const linkProps = (url) =>
  /^https?:\/\//.test(url)
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : { href: url };

export const EVENT_CONFIG = {
  name: "ABSTRACTHON",
  targetDate: "2026-11-21T07:30:00-04:00", // Hora Bolivia (UTC-4)
  organizer: "Microsoft Learn Student Ambassadors - University Community",
  badgeText: "Hackathon 2026 // Bolivia",
  heroSubtitle:
    "Desafía la lógica convencional y construye soluciones de alto impacto junto a la comunidad de tecnología más apasionada.",
  aboutText:
    "Abstracthon es más que una hackathon: es un espacio para imaginar, crear y construir soluciones frente a desafíos reales. Reúne a personas con ideas, talento y ganas de generar un cambio, impulsándolas a colaborar, compartir conocimientos y convertir sus propuestas en soluciones innovadoras mediante la tecnología. Aquí, cada idea es el comienzo de algo más grande. ¿Te atreves a convertir la tuya en realidad?",

  sedes: {
    scz: {
      name: "Sede Santa Cruz",
      city: "Santa Cruz de la Sierra",
      venue: "Universidad Católica Boliviana (UCB)",
      addr: "Campus UCB, Carretera al Norte, Santa Cruz de la Sierra",
      query:
        "Universidad Católica Boliviana UCB Santa Cruz Campus Carretera al Norte",
      link: "https://maps.app.goo.gl/cGq8RF7bHTFowkxE6?g_st=ac",
    },
    oru: {
      name: "Sede Oruro",
      city: "Departamento de Oruro",
      venue: "Carrera de Ingeniería de Sistemas e Informática",
      addr: "Oruro, Bolivia · Plus Code 2V66+8V4",
      query: "2V66+8V4 Oruro, Bolivia",
      link: "https://maps.app.goo.gl/qkPSB4hS5sUnXZza7",
    },
  },
};
