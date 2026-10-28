const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require("C:/Users/julio/.claude/skills/synced/d12ae8d2-26b2-4ffe-8ff5-df0d3759365e_30c25430-71e8-497f-98d4-3d015401796b/pptx/scripts/apply_theme.js");

const ROOT = path.resolve(__dirname, "../..");
const LOGO = path.join(ROOT, "public/img/abstracthon-logo.png");
const MLSA = path.join(__dirname, "mlsa-imagotipo.png");

const THEME = {
  name: "Abstracthon 2026",
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  colors: {
    dk1: "111111",
    lt1: "FFFFFF",
    dk2: "1C1C1C",
    lt2: "E8E8E8",
    accent1: "FFB900",
    accent2: "F25022",
    accent3: "7FBA00",
    accent4: "00A4EF",
    accent5: "A3A3A3",
    accent6: "1C1C1C",
    hlink: "00A4EF",
    folHlink: "FFB900",
  },
};

const NAVY = "111111";
const CARD = "1C1C1C";
const ORANGE = "F25022";
const GREEN = "7FBA00";
const YELLOW = "FFB900";
const MSBLUE = "00A4EF";
const WHITE = "FFFFFF";
const MUTED = "A3A3A3";
const BODY = "E8E8E8";
const MS = [ORANGE, GREEN, YELLOW, MSBLUE];
const ICONS = {
  globe: path.join(__dirname, "icons/globe.png"),
  instagram: path.join(__dirname, "icons/instagram.png"),
  calendar: path.join(__dirname, "icons/calendar.png"),
  users: path.join(__dirname, "icons/users.png"),
  layers: path.join(__dirname, "icons/layers.png"),
  spark: path.join(__dirname, "icons/spark.png"),
  wallet: path.join(__dirname, "icons/wallet.png"),
  book: path.join(__dirname, "icons/book.png"),
  chat: path.join(__dirname, "icons/chat.png"),
  heart: path.join(__dirname, "icons/heart.png"),
  check: path.join(__dirname, "icons/check.png"),
  flag: path.join(__dirname, "icons/flag.png"),
  mail: path.join(__dirname, "icons/mail.png"),
};

function addIconChip(s, shapes, x, y, fill, icon, name, size = 0.44) {
  const pad = size * 0.23;
  s.addShape(shapes.OVAL, {
    x,
    y,
    w: size,
    h: size,
    fill: { color: fill },
    objectName: `${name}-bg`,
  });
  s.addImage({
    path: icon,
    x: x + pad,
    y: y + pad,
    w: size - pad * 2,
    h: size - pad * 2,
    objectName: name,
  });
}

const COPY = {
  es: {
    file: "Abstracthon_2026_Aliados_ES.pptx",
    metaTitle: "Abstracthon 2026 Llamado a aliados",
    subject: "Patrocinio hackathon Bolivia 2026",
    footer: "ABSTRACTHON 2026  ·  Llamado a aliados",
    kicker: "LLAMADO A ALIADOS",
    coverTitle: "Patrocine un fin de semana\nde builders, no un banner",
    coverMeta:
      "Hackathon presencial en Bolivia  ·  21 de noviembre de 2026  ·  Santa Cruz y Oruro\nOrganiza Microsoft Learn Student Ambassadors – University Community",
    lema: "Abstráete y crea el futuro",
    s2title: "El fin de semana",
    s2intro:
      "Primera edición. No inflamos aforo: vendemos acceso, mentoría y un pitch. Su empresa entra en el taller, en el piso o en el jurado de su premio.",
    days: [
      { day: "Viernes", when: "19:00  ·  virtual", title: "Reglas y taller", body: "Introducción. Si elige Activación o Propiedad, acá puede ir su workshop." },
      { day: "Sábado", when: "08:00–18:00  ·  presencial", title: "Hacking y mentoría", body: "Equipos en Santa Cruz (UCB) y Oruro. Mentores en el piso. Acá se usa el reto." },
      { day: "Domingo", when: "virtual  ·  hora a confirmar", title: "Pitch y jurado", body: "Pitch de 5 minutos. Un voto sobre su premio. Abstracthon retiene el ganador general." },
    ],
    why: [
      { k: "TALENTO", t: "Ver cómo construyen, no solo un CV." },
      { k: "PRODUCTO", t: "Un reto con su nombre y un voto el domingo." },
      { k: "MARCA", t: "Junto a builders, con informe después." },
    ],
    s3title: "Cuatro tracks",
    s3intro: "Los tres primeros son excluyentes. Ayuda tecnológica combina dos o más. Ahí propone el problema su empresa.",
    tracks: [
      { name: "Finanzas", rule: "El problema tiene que ser de dinero: pagar, ahorrar o cobrar. No entra una app genérica con un botón de pago." },
      { name: "Educación", rule: "El problema tiene que ser de aprender, enseñar o acceder a formación. No entra una app para estudiar sin un problema educativo claro." },
      { name: "Comunicación", rule: "El problema tiene que ser de informar o conectar a un grupo. Un chat genérico no entra." },
      { name: "Ayuda tecnológica", rule: "Hay que mezclar 2 o más de los tracks de arriba. Un solo track, o un tema nuevo, no cuenta." },
    ],
    s4title: "Tres planes",
    plans: [
      { name: "Visibilidad", price: "Bs 500", tag: "Estar", accent: ORANGE },
      { name: "Activación", price: "Bs 1.500", tag: "Usar la sala", accent: YELLOW },
      { name: "Propiedad", price: "Bs 3.000", tag: "Dueño de un track", accent: GREEN },
    ],
    benefit: "Beneficio",
    planNames: ["Visibilidad", "Activación", "Propiedad"],
    yes: "Sí",
    rows: [
      ["Logo en web y recap", "Sí", "Sí", "Sí"],
      ["Mención en redes", "Grupal", "Grupal", "Dedicada"],
      ["Merch en el kit, si lo envían", "Sí", "Sí", "Sí"],
      ["Mesa en sede", "—", "Sí", "Preferente"],
      ["Workshop o premio nominado", "—", "Uno", "Uno"],
      ["Jurado de ese premio", "—", "1 voto", "1 voto"],
      ["Track presented by + first pick", "—", "—", "Sí"],
      ["Intro a talento con consentimiento", "—", "—", "Sí"],
      ["Informe post-evento", "Recap", "Detallado", "Personalizado"],
    ],
    inkind: "In-kind (comida, salas, merch): pack Visibilidad. Reto y jurado solo si el valor cubre Activación o Propiedad.",
    s5title: "Si le encaja, hablemos esta semana",
    s5intro: "Díganos el plan y qué track le interesa. Reservamos Propiedad por orden de confirmación.",
    next: [
      { n: "01", t: "Elija el plan", d: "Visibilidad, Activación o Propiedad." },
      { n: "02", t: "Diga el track", d: "Finanzas, Educación, Comunicación o un cruce." },
      { n: "03", t: "Mande logo y contacto", d: "Respondemos en 48 horas con el acuerdo." },
    ],
    web: "abstracthon-demoweb.vercel.app",
    ig: "@microsoft_university",
    team: "Equipo Abstracthon",
    notes: "Deck Bolivia, precios en Bs. No citar aforo ni Cochabamba. Poner celular nominado en la carta.",
  },
  en: {
    file: "Abstracthon_2026_Partners_EN.pptx",
    metaTitle: "Abstracthon 2026 Partner call",
    subject: "Hackathon sponsorship Bolivia 2026",
    footer: "ABSTRACTHON 2026  ·  Partner call",
    kicker: "PARTNER CALL",
    coverTitle: "Sponsor a weekend of\nbuilders, not a banner",
    coverMeta:
      "In-person hackathon in Bolivia  ·  21 November 2026  ·  Santa Cruz and Oruro\nOrganized by Microsoft Learn Student Ambassadors – University Community",
    lema: "Abstráete y crea el futuro",
    s2title: "The weekend",
    s2intro:
      "First edition. We do not inflate headcount: we sell access, mentoring and a pitch. Your company shows up in the workshop, on the floor, or on the jury for your prize.",
    days: [
      { day: "Friday", when: "19:00  ·  virtual", title: "Rules and workshop", body: "Kickoff. Activation and Ownership can place a launch workshop here." },
      { day: "Saturday", when: "08:00–18:00  ·  on site", title: "Hacking and mentoring", body: "Teams in Santa Cruz (UCB) and Oruro. Mentors on the floor. This is where the challenge gets used." },
      { day: "Sunday", when: "virtual  ·  time TBD", title: "Pitch and jury", body: "A 5-minute pitch. One vote on your prize. Abstracthon keeps the overall winner." },
    ],
    why: [
      { k: "TALENT", t: "Watch them build, not just a CV." },
      { k: "PRODUCT", t: "A named challenge and a Sunday vote." },
      { k: "BRAND", t: "Next to builders, with a post-event report." },
    ],
    s3title: "Four tracks",
    s3intro: "The first three are exclusive. Tech for good combines two or more. That is where your company sets the problem.",
    tracks: [
      { name: "Finance", rule: "The problem has to be about money: paying, saving or getting paid. A generic app with a pay button does not qualify." },
      { name: "Education", rule: "The problem has to be about learning, teaching or access to training. A study app with no real education problem does not qualify." },
      { name: "Communication", rule: "The problem has to be about informing or connecting a group. A generic chat app does not qualify." },
      { name: "Tech for good", rule: "Combine 2 or more of the tracks above. A single track, or a brand-new theme, does not count." },
    ],
    s4title: "Three plans",
    plans: [
      { name: "Visibility", price: "USD 300", tag: "Be present", accent: ORANGE },
      { name: "Activation", price: "USD 500", tag: "Use the room", accent: YELLOW },
      { name: "Ownership", price: "USD 800", tag: "Own a track", accent: GREEN },
    ],
    benefit: "Benefit",
    planNames: ["Visibility", "Activation", "Ownership"],
    yes: "Yes",
    rows: [
      ["Logo on web and recap", "Yes", "Yes", "Yes"],
      ["Social mention", "Group", "Group", "Dedicated"],
      ["Swag in the kit, if you send it", "Yes", "Yes", "Yes"],
      ["Table on site", "—", "Yes", "Preferred"],
      ["Workshop or named prize", "—", "One", "One"],
      ["Jury seat for that prize", "—", "1 vote", "1 vote"],
      ["Track presented by + first pick", "—", "—", "Yes"],
      ["Opt-in talent intro", "—", "—", "Yes"],
      ["Post-event report", "Recap", "Detailed", "Custom"],
    ],
    inkind: "In-kind (food, rooms, merch): Visibility pack. Challenge and jury only if the value covers Activation or Ownership.",
    s5title: "If this fits, let’s talk this week",
    s5intro: "Tell us the plan and which track you want. Ownership is reserved in order of confirmation.",
    next: [
      { n: "01", t: "Pick a plan", d: "Visibility, Activation or Ownership." },
      { n: "02", t: "Name a track", d: "Finance, Education, Communication or a mix." },
      { n: "03", t: "Send logo and contact", d: "We reply within 48 hours with the agreement." },
    ],
    web: "abstracthon-demoweb.vercel.app",
    ig: "@microsoft_university",
    team: "Abstracthon team",
    notes: "International deck, prices in USD. Do not quote headcount or Cochabamba. Add a named phone on the cover letter.",
  },
};

async function buildDeck(locale) {
  const t = COPY[locale];
  const pres = new pptxgen();
  pres.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
  pres.layout = "WIDE";
  pres.title = t.metaTitle;
  pres.author = "Abstracthon";
  pres.company = "Abstracthon";
  pres.subject = t.subject;
  pres.theme = { headFontFace: "Arial", bodyFontFace: "Arial" };

  pres.defineSlideMaster({
    title: "COVER",
    background: { color: NAVY },
    objects: [],
  });

  pres.defineSlideMaster({
    title: "CONTENT",
    background: { color: NAVY },
    objects: [
      {
        placeholder: {
          options: {
            name: "title",
            type: "title",
            x: 0.55,
            y: 0.26,
            w: 12.2,
            h: 0.64,
            fontSize: 36,
            fontFace: "Arial",
            color: WHITE,
            bold: true,
            margin: 0,
            valign: "middle",
          },
          text: "Title",
        },
      },
      {
        text: {
          text: t.footer,
          options: {
            x: 0.55,
            y: 7.12,
            w: 10.4,
            h: 0.22,
            fontSize: 11,
            color: MUTED,
            margin: 0,
            isTextBox: true,
          },
        },
      },
    ],
    slideNumber: {
      x: 12.15,
      y: 7.1,
      w: 0.65,
      h: 0.24,
      fontSize: 11,
      color: MUTED,
      fontFace: "Arial",
    },
  });

  pres.defineSlideMaster({
    title: "CLOSE",
    background: { color: NAVY },
    objects: [],
  });

  pres.addSection({ title: "Open" });
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "Open" });
    s.addImage({ path: LOGO, x: 0.55, y: 0.42, w: 3.5, h: 1.3, objectName: "logo" });
    s.addImage({ path: MLSA, x: 10.55, y: 0.28, w: 2.2, h: 1.83, objectName: "mlsa" });
    s.addText(t.kicker, {
      x: 0.55,
      y: 2.28,
      w: 12.2,
      h: 0.3,
      fontSize: 13,
      color: ORANGE,
      bold: true,
      charSpacing: 3,
      margin: 0,
      isTextBox: true,
    });
    s.addText(t.coverTitle, {
      x: 0.55,
      y: 2.64,
      w: 12.0,
      h: 1.55,
      fontSize: 36,
      color: WHITE,
      bold: true,
      margin: 0,
      isTextBox: true,
      valign: "top",
    });
    s.addText(t.coverMeta, {
      x: 0.55,
      y: 4.4,
      w: 11.5,
      h: 0.7,
      fontSize: 16,
      color: BODY,
      margin: 0,
      isTextBox: true,
    });
    const coverIcons = [ICONS.wallet, ICONS.book, ICONS.chat, ICONS.heart];
    t.tracks.forEach((tr, i) => {
      const x = 0.55 + i * 3.12;
      addIconChip(s, pres.shapes, x, 5.5, MS[i], coverIcons[i], `cover-track-${i}`, 0.42);
      s.addText(tr.name, {
        x: x + 0.52,
        y: 5.54,
        w: 2.5,
        h: 0.34,
        fontSize: 14,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
        valign: "middle",
      });
    });
    s.addText(t.lema, {
      x: 0.55,
      y: 6.55,
      w: 10,
      h: 0.35,
      fontSize: 16,
      color: YELLOW,
      italic: true,
      margin: 0,
      isTextBox: true,
    });
    s.addNotes(t.notes);
  }

  pres.addSection({ title: "Event" });
  {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Event" });
    s.addText(t.s2title, { placeholder: "title" });
    s.addText(t.s2intro, {
      x: 0.55,
      y: 0.98,
      w: 12.2,
      h: 0.5,
      fontSize: 15,
      color: BODY,
      margin: 0,
      isTextBox: true,
    });
    const dayIcons = [ICONS.calendar, ICONS.users, ICONS.spark];
    t.days.forEach((d, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.55,
        w: 3.95,
        h: 3.35,
        fill: { color: CARD },
        rectRadius: 0.1,
        objectName: `day-${i}`,
      });
      addIconChip(s, pres.shapes, x + 0.26, 1.72, MS[i], dayIcons[i], `day-icon-${i}`);
      s.addText(`0${i + 1}`, {
        x: x + 0.82,
        y: 1.78,
        w: 2.8,
        h: 0.34,
        fontSize: 16,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
        valign: "middle",
      });
      s.addText(d.day.toUpperCase(), {
        x: x + 0.26,
        y: 2.3,
        w: 3.4,
        h: 0.24,
        fontSize: 12,
        color: MS[i],
        bold: true,
        charSpacing: 1,
        margin: 0,
        isTextBox: true,
      });
      s.addText(d.when, {
        x: x + 0.26,
        y: 2.54,
        w: 3.4,
        h: 0.26,
        fontSize: 13,
        color: MUTED,
        margin: 0,
        isTextBox: true,
      });
      s.addText(d.title, {
        x: x + 0.26,
        y: 2.86,
        w: 3.4,
        h: 0.36,
        fontSize: 18,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
      });
      s.addText(d.body, {
        x: x + 0.26,
        y: 3.26,
        w: 3.4,
        h: 1.4,
        fontSize: 14,
        color: BODY,
        margin: 0,
        isTextBox: true,
        valign: "top",
      });
    });
    const whyIcons = [ICONS.users, ICONS.layers, ICONS.spark];
    t.why.forEach((w, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 5.05,
        w: 3.95,
        h: 1.85,
        fill: { color: CARD },
        rectRadius: 0.1,
        objectName: `why-${i}`,
      });
      addIconChip(s, pres.shapes, x + 0.22, 5.18, MS[i], whyIcons[i], `why-icon-${i}`);
      s.addText(w.k, {
        x: x + 0.76,
        y: 5.24,
        w: 2.9,
        h: 0.32,
        fontSize: 12,
        color: MS[i],
        bold: true,
        charSpacing: 1,
        margin: 0,
        isTextBox: true,
        valign: "middle",
      });
      s.addText(w.t, {
        x: x + 0.26,
        y: 5.72,
        w: 3.4,
        h: 0.95,
        fontSize: 16,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
        valign: "top",
      });
    });
    s.addNotes(t.notes);
  }

  {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Event" });
    s.addText(t.s3title, { placeholder: "title" });
    s.addText(t.s3intro, {
      x: 0.55,
      y: 0.98,
      w: 12.2,
      h: 0.42,
      fontSize: 15,
      color: BODY,
      margin: 0,
      isTextBox: true,
    });
    const trackIcons = [ICONS.wallet, ICONS.book, ICONS.chat, ICONS.heart];
    t.tracks.forEach((tr, i) => {
      const y = 1.5 + i * 1.32;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.55,
        y,
        w: 12.2,
        h: 1.2,
        fill: { color: CARD },
        rectRadius: 0.08,
        objectName: `track-${i}`,
      });
      addIconChip(s, pres.shapes, 0.78, y + 0.18, MS[i], trackIcons[i], `track-icon-${i}`, 0.48);
      s.addText(tr.name, {
        x: 1.5,
        y: y + 0.14,
        w: 10.9,
        h: 0.34,
        fontSize: 18,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
      });
      s.addText(tr.rule, {
        x: 1.5,
        y: y + 0.52,
        w: 10.9,
        h: 0.52,
        fontSize: 14,
        color: BODY,
        margin: 0,
        isTextBox: true,
      });
    });
    s.addNotes(t.notes);
  }

  pres.addSection({ title: "Plans" });
  {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Plans" });
    s.addText(t.s4title, { placeholder: "title" });
    const planIcons = [ICONS.globe, ICONS.users, ICONS.spark];
    t.plans.forEach((p, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.0,
        w: 3.95,
        h: 1.35,
        fill: { color: CARD },
        rectRadius: 0.1,
        objectName: `price-${i}`,
      });
      addIconChip(s, pres.shapes, x + 0.22, 1.18, p.accent, planIcons[i], `plan-icon-${i}`);
      s.addText(p.name.toUpperCase(), {
        x: x + 0.78,
        y: 1.12,
        w: 2.95,
        h: 0.24,
        fontSize: 12,
        color: p.accent,
        bold: true,
        charSpacing: 1,
        margin: 0,
        isTextBox: true,
      });
      s.addText(p.price, {
        x: x + 0.78,
        y: 1.36,
        w: 2.95,
        h: 0.42,
        fontSize: 26,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
      });
      s.addText(p.tag, {
        x: x + 0.78,
        y: 1.82,
        w: 2.95,
        h: 0.35,
        fontSize: 14,
        color: BODY,
        margin: 0,
        isTextBox: true,
      });
    });

    const yes = (txt) => ({
      text: txt,
      options: { fill: { color: CARD }, color: GREEN, align: "center", valign: "middle", fontSize: 12, fontFace: "Arial", bold: true },
    });
    const no = {
      text: "—",
      options: { fill: { color: CARD }, color: MUTED, align: "center", valign: "middle", fontSize: 12, fontFace: "Arial" },
    };
    const label = (txt) => ({
      text: txt,
      options: { fill: { color: CARD }, color: WHITE, align: "left", valign: "middle", fontSize: 12, fontFace: "Arial", margin: [5, 10, 5, 12] },
    });
    const head = (txt, accent) => ({
      text: txt,
      options: { fill: { color: "141414" }, color: accent, align: "center", valign: "middle", fontSize: 12, fontFace: "Arial", bold: true },
    });
    const cell = (txt) => (txt === "—" ? no : yes(txt));

    const rows = [
      [label(t.benefit), head(t.planNames[0], ORANGE), head(t.planNames[1], YELLOW), head(t.planNames[2], GREEN)],
      ...t.rows.map((r) => [label(r[0]), cell(r[1]), cell(r[2]), cell(r[3])]),
    ];

    s.addTable(rows, {
      x: 0.55,
      y: 2.5,
      w: 12.2,
      colW: [4.9, 2.43, 2.43, 2.44],
      rowH: 0.38,
      border: [
        { pt: 0.4, color: NAVY },
        { pt: 0.4, color: NAVY },
        { pt: 0.4, color: NAVY },
        { pt: 0.4, color: NAVY },
      ],
      valign: "middle",
    });
    s.addText(t.inkind, {
      x: 0.55,
      y: 6.55,
      w: 12.2,
      h: 0.42,
      fontSize: 13,
      color: MUTED,
      margin: 0,
      isTextBox: true,
    });
    s.addNotes(t.notes);
  }

  pres.addSection({ title: "Close" });
  {
    const s = pres.addSlide({ masterName: "CLOSE", sectionTitle: "Close" });
    s.addImage({ path: LOGO, x: 0.55, y: 0.32, w: 3.1, h: 1.15, objectName: "logo-close" });
    s.addImage({ path: MLSA, x: 10.85, y: 0.28, w: 1.9, h: 1.58, objectName: "mlsa-close" });
    s.addText(t.s5title, {
      x: 0.55,
      y: 1.85,
      w: 12.2,
      h: 0.6,
      fontSize: 36,
      color: WHITE,
      bold: true,
      margin: 0,
      isTextBox: true,
    });
    s.addText(t.s5intro, {
      x: 0.55,
      y: 2.52,
      w: 12.0,
      h: 0.55,
      fontSize: 16,
      color: BODY,
      margin: 0,
      isTextBox: true,
    });
    const nextIcons = [ICONS.check, ICONS.flag, ICONS.mail];
    t.next.forEach((item, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 3.25,
        w: 3.95,
        h: 2.35,
        fill: { color: CARD },
        rectRadius: 0.1,
        objectName: `next-${i}`,
      });
      addIconChip(s, pres.shapes, x + 0.24, 3.42, MS[i], nextIcons[i], `next-icon-${i}`);
      s.addText(item.n, {
        x: x + 0.8,
        y: 3.48,
        w: 2.9,
        h: 0.34,
        fontSize: 16,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
        valign: "middle",
      });
      s.addText(item.t, {
        x: x + 0.24,
        y: 4.0,
        w: 3.47,
        h: 0.4,
        fontSize: 18,
        color: WHITE,
        bold: true,
        margin: 0,
        isTextBox: true,
      });
      s.addText(item.d, {
        x: x + 0.24,
        y: 4.44,
        w: 3.47,
        h: 0.85,
        fontSize: 14,
        color: BODY,
        margin: 0,
        isTextBox: true,
        valign: "top",
      });
    });
    addIconChip(s, pres.shapes, 0.55, 6.42, GREEN, ICONS.globe, "web-icon", 0.5);
    s.addText(t.web, {
      x: 1.18,
      y: 6.5,
      w: 4.6,
      h: 0.36,
      fontSize: 15,
      color: WHITE,
      margin: 0,
      isTextBox: true,
      valign: "middle",
    });
    addIconChip(s, pres.shapes, 6.05, 6.42, ORANGE, ICONS.instagram, "ig-icon", 0.5);
    s.addText(t.ig, {
      x: 6.68,
      y: 6.5,
      w: 3.3,
      h: 0.36,
      fontSize: 15,
      color: WHITE,
      margin: 0,
      isTextBox: true,
      valign: "middle",
    });
    s.addText(t.team, {
      x: 10.15,
      y: 6.5,
      w: 2.6,
      h: 0.36,
      fontSize: 14,
      color: MUTED,
      align: "right",
      margin: 0,
      isTextBox: true,
      valign: "middle",
    });
    s.addNotes(t.notes);
  }

  const out = path.join(__dirname, t.file);
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  console.log("Wrote", out);
}

async function main() {
  await buildDeck("es");
  await buildDeck("en");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
