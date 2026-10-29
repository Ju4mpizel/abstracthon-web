export const REGISTER_URL = "https://forms.gle/wzTHJKXZKx62z87m8";

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
      short: "Santa Cruz",
      city: "Santa Cruz de la Sierra",
      venue: "Universidad Católica Boliviana (UCB)",
      addr: "Campus UCB, Carretera al Norte, Santa Cruz de la Sierra",
      query:
        "Universidad Católica Boliviana UCB Santa Cruz Campus Carretera al Norte",
      link: "https://maps.app.goo.gl/cGq8RF7bHTFowkxE6?g_st=ac",
      photo: "/img/sedes/ucb-santa-cruz.webp",
      tone: "neon",
      placeKnown: true,
    },
    cbb: {
      name: "Sede Cochabamba",
      short: "Cochabamba",
      city: "Cochabamba",
      venue: "Universidad Privada del Valle (Univalle)",
      addr: "Campus Tiquipaya, Calle Guillermina Martínez s/n, Tiquipaya",
      query:
        "Universidad Privada del Valle Univalle Campus Tiquipaya Calle Guillermina Martínez",
      link: "https://www.google.com/maps/search/?api=1&query=Universidad%20Privada%20del%20Valle%20Campus%20Tiquipaya",
      photo: "/img/sedes/univalle-tiquipaya.jpg",
      tone: "blue",
      placeKnown: true,
    },
    oru: {
      name: "Sede Oruro",
      short: "Oruro",
      city: "Departamento de Oruro",
      venue: "Carrera de Ingeniería de Sistemas e Informática",
      addr: "Oruro, Bolivia · Plus Code 2V66+8V4",
      query: "2V66+8V4 Oruro, Bolivia",
      link: "https://maps.app.goo.gl/qkPSB4hS5sUnXZza7",
      photo: "/img/sedes/oruro-sistemas.jpg",
      tone: "gold",
      placeKnown: true,
    },
  },
};
