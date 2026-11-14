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

  pricing: {
    presencial: "Bs 30",
    virtual: "Bs 15",
    discountAmount: "Bs 10",
    discountRule:
      "Descuento de Bs 10 sobre el total para equipos de 3 a 5 integrantes o comunidades aliadas.",
    teamRule: "Equipos de 3 a 5 integrantes (o individual)",
  },

  prizes: [
    {
      sponsor: "Bloomtech",
      highlight: "$200 USD + Pasantía",
      title: "Financiamiento & Crecimiento",
      items: [
        "$200 USD de financiamiento para desarrollar el proyecto",
        "Mentorías personalizadas y guías de desarrollo",
        "Pasantía remota con oportunidad de contratación",
      ],
      badge: "Premio Principal",
      tone: "action", // #f25022
    },
    {
      sponsor: "Comunidad Abstracthon",
      highlight: "Bs 150 – 200",
      title: "Premio Económico en Efectivo",
      items: [
        "Incentivo económico directo en efectivo",
        "Certificados oficiales de ganador (Comunidad + Bloomtech)",
      ],
      badge: "Efectivo",
      tone: "confirm", // #7fba00
    },
    {
      sponsor: "Joddy",
      highlight: "Pasantía Remota",
      title: "Inserción Laboral Tech",
      items: [
        "Pasantía remota en proyectos tecnológicos reales",
        "Networking directo con profesionales de la industria",
      ],
      badge: "Talento",
      tone: "link", // #00a4ef
    },
    {
      sponsor: "Majup Learn Academy",
      highlight: "Educación & Cursos",
      title: "Formación Profesional",
      items: [
        "1 mes gratis de acceso para todos los ganadores",
        "Descuentos exclusivos en cursos para todos los participantes",
      ],
      badge: "Formación",
      tone: "mark", // #ffb900
    },
  ],

  tracks: [
    {
      id: "finanzas",
      name: "Finanzas",
      tone: "green",
      focus: "Soluciones que respondan a retos del ámbito financiero.",
      must: "Resolver un problema de dinero: pagar, ahorrar, cobrar o entender mejor las finanzas.",
      examples: ["Negocios", "Familias", "Comunidades"],
      exclude: "Una app genérica que solo agrega un botón de pago.",
    },
    {
      id: "educacion",
      name: "Educación",
      tone: "blue",
      focus: "Propuestas que mejoren el acceso, el aprendizaje o la gestión educativa.",
      must: "Mejorar cómo se aprende, se enseña o se accede a formación.",
      examples: ["Colegios", "Universidades", "Talleres"],
      exclude: "Una app “para estudiar” sin un problema educativo claro.",
    },
    {
      id: "comunicacion",
      name: "Comunicación",
      tone: "yellow",
      focus: "Soluciones para comunicar mejor y conectar comunidades.",
      must: "Mejorar cómo un grupo se informa, se conecta o se coordina.",
      examples: ["Barrios", "Estudiantes", "Comercios"],
      exclude: "Un chat o una red social genérica.",
    },
    {
      id: "ayuda-tecnologica",
      name: "Ayuda Tecnológica",
      tone: "violet",
      focus: "Tecnología al servicio de quienes más lo necesitan.",
      must: "Ayudar a personas o grupos vulnerables: salud, emergencias, accesibilidad o inclusión.",
      examples: ["Salud", "Emergencias", "Accesibilidad"],
      exclude: "Una idea sin un grupo concreto al que realmente ayude.",
    },
  ],

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
      city: "Oruro",
      venue: "Sociedad de Ingenieros de Bolivia (SIB Oruro)",
      addr: "Calle Belzu e/ La Paz y 6 de Octubre, Oruro",
      query: "Sociedad de Ingenieros de Bolivia Oruro",
      link: "https://maps.app.goo.gl/hbC8eBMwFnfGmo4QA",
      photo: "/img/sedes/oruro-sistemas.jpg",
      tone: "gold",
      placeKnown: true,
    },
  },
};
