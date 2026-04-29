import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = ["Skill edzés", "Táborok", "Tornák", "Rólunk", "Kapcsolatok", "Támogatóink"];

const trainingVenue = {
  label: "Edzéseink helyszíne",
  name: "Óbudai Jégcsarnok",
  address: "Budapest, Kubik utca 6., 1037",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%C3%93budai%20J%C3%A9gcsarnok%20Budapest%20Kubik%20utca%206%201037",
  text: "Az Apex Hockey edzései az Óbudai Jégcsarnokban zajlanak, ahol a játékosok megfelelő körülmények között és szakmai irányítás mellett fejlődhetnek.",
};

function InlineIcon({ type, className = "h-7 w-7" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    menu: (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    ),
    arrowRight: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    calendar: (
      <svg {...common}>
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4 8h16" />
        <rect x="4" y="5" width="16" height="16" rx="3" />
        <path d="M8 12h3" />
        <path d="M13 12h3" />
        <path d="M8 16h3" />
      </svg>
    ),
    dumbbell: (
      <svg {...common}>
        <path d="M6 7v10" />
        <path d="M18 7v10" />
        <path d="M3 9v6" />
        <path d="M21 9v6" />
        <path d="M6 12h12" />
      </svg>
    ),
    trophy: (
      <svg {...common}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4v2a4 4 0 0 0 4 4" />
        <path d="M17 6h3v2a4 4 0 0 1-4 4" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    handshake: (
      <svg {...common}>
        <path d="M8 12 5.5 9.5a2.1 2.1 0 0 1 0-3L7 5l5 5" />
        <path d="m16 12 2.5-2.5a2.1 2.1 0 0 0 0-3L17 5l-5 5" />
        <path d="m9 13 2 2" />
        <path d="m12 10 4 4a2 2 0 0 1-3 3l-.5-.5" />
        <path d="m7 14 4 4a2 2 0 0 0 3-3" />
      </svg>
    ),
  };

  return icons[type] || icons.arrowRight;
}

const cards = [
  {
    title: "Skill edzés",
    description: "Korcsolyázás, korongkezelés, lövés, döntéshozatal és játékintelligencia fejlesztése.",
    icon: "dumbbell",
  },
  {
    title: "Táborok",
    description: "Intenzív, élményalapú jégkorong táborok fejlődni vágyó játékosoknak Magyarországon.",
    icon: "calendar",
  },
  {
    title: "Tornák",
    description: "Szervezett mérkőzésnapok és tornák, ahol a játékosok versenyhelyzetben fejlődhetnek.",
    icon: "trophy",
  },
  {
    title: "Rólunk",
    description: "Modern szemléletű jégkorong iskola, ahol a kemény munka találkozik a közösségi élménnyel.",
    icon: "users",
  },
  {
    title: "Kapcsolatok",
    description: "Kérdésed van edzésekről, táborokról vagy jelentkezésről? Vedd fel velünk a kapcsolatot.",
    icon: "mail",
  },
  {
    title: "Támogatóink",
    description: "Partnerek és támogatók, akik hozzájárulnak az Apex Hockey fejlődéséhez.",
    icon: "handshake",
  },
];

const pages = {
  "Táborok": {
    title: "Táborok",
    eyebrow: "Apex Hockey táborok",
    intro:
      "A következő Apex Hockey tábor a 2026 Nyári Tábor, amely június 22–26. között kerül megrendezésre két korcsoporttal: U8-U10 és U12-U14.",
    icon: "calendar",
    cta: "Tábor információk kérése",
    sections: [
      {
        title: "Specifikus edzések",
        text: "A táborban játékosok és kapusok számára is célzott, korosztályhoz igazított jégkorong edzések várhatók.",
      },
      {
        title: "Technikai, taktikai és mentális fejlődés",
        text: "A program nemcsak a jégen végzett technikai munkára épül, hanem taktikai gondolkodást és mentális fejlődést is támogat.",
      },
      {
        title: "Csapatépítő programok",
        text: "Izgalmas közösségi feladatok és élményprogramok segítik, hogy a játékosok jó hangulatban fejlődjenek és erősödjön a csapatszellem.",
      },
      {
        title: "Professzionális szakmai háttér",
        text: "A tábor szakmai programja külföldi és magyar edzők vezetésével valósul meg, modern szemlélettel és magas szintű edzésmunkával.",
      },
    ],
    infoTitle: "Tábor információk",
    infoDescription: "A következő tábor legfontosabb adatai: időpont, korcsoportok, programtípus és szakmai fókusz.",
    infoCards: [
      { label: "Tábor", value: "2026 Nyári Tábor" },
      { label: "Időpont", value: "Június 22–26." },
      { label: "Korcsoportok", value: "U8-U10 és U12-U14" },
      { label: "Szakmai háttér", value: "Külföldi és magyar edzők", highlight: "Külföldi" },
    ],
    scheduleTitle: "",
    schedule: [
      { day: "Játékosok", time: "Játékosfejlesztés" },
      { day: "Kapusok", time: "Speciális kapusképzés" },
      { day: "Fejlődés", time: "Technikai, taktikai, mentális" },
      { day: "Élmény", time: "Csapatépítő programok" },
    ],
    pricingTitle: "Tábor árazás",
    pricing: [
      { label: "A tábor ára", note: "", price: "150 000 Ft/fő" },
      { label: "Testvérkedvezmény", note: "20 000 Ft kedvezmény", price: "130 000 Ft/fő" },
    ],
    venue: {
      ...trainingVenue,
      label: "Táboraink helyszíne",
      text: "Az Apex Hockey táborai az Óbudai Jégcsarnokban zajlanak, ahol a játékosok megfelelő körülmények között és szakmai irányítás mellett fejlődhetnek.",
    },
    developmentEyebrow: "Mit tartalmaz?",
    developmentTitle: "A 2026 Nyári Tábor fő elemei",
    signupEyebrow: "Érdeklődés",
    signupTitle: "Érdekel a 2026 Nyári Tábor?",
    signupText:
      "A következő tábor 2026. június 22–26. között lesz, U8-U10 és U12-U14 korcsoportokkal. A részletes jelentkezési információkról és szabad helyekről a kapcsolat oldalon keresztül lehet érdeklődni.",
  },
  "Skill edzés": {
    title: "Skill edzés",
    eyebrow: "Apex Hockey képzés",
    intro:
      "Korcsolyázás, korongkezelés, lövés, játékhelyzetek és döntéshozatal fejlesztése 11-15 éves játékosoknak az Óbudai Jégcsarnokban, egész szezonban.",
    icon: "dumbbell",
    cta: "Skill edzésre jelentkezem",
    sections: [
      {
        title: "Korcsolyatechnika",
        text: "Robbanékonyság, élhasználat, irányváltások, fékezések és gyors újraindulások fejlesztése játékhelyzetekhez igazítva.",
      },
      {
        title: "Korongkezelés",
        text: "Magabiztos korongvezetés, test melletti kontroll, cselek, védő alatti megoldások és tempóváltások gyakorlása.",
      },
      {
        title: "Lövés és befejezés",
        text: "Gyors lövések, pontos célzás, kapu előtti döntések és különböző befejezési technikák fejlesztése.",
      },
      {
        title: "Játékintelligencia",
        text: "Döntéshozatal nyomás alatt, üres területek felismerése, passzopciók, helyezkedés és mérkőzésszerű szituációk.",
      },
    ],
    infoCards: [
      { label: "Korosztály", value: "11-15 év" },
      { label: "Helyszín", value: "Óbudai Jégcsarnok" },
      { label: "Időszak", value: "Egész szezon" },
      { label: "Fókusz", value: "Egyéni képességfejlesztés" },
    ],
    schedule: [
      { day: "Hétfő", time: "15:00-15:50" },
      { day: "Szerda", time: "15:00-15:50" },
      { day: "Csütörtök", time: "15:00-15:50" },
      { day: "Péntek", time: "15:00-15:50" },
    ],
    venue: trainingVenue,
  },
  "Tornák": {
    title: "Tornák",
    eyebrow: "Hamarosan",
    intro:
      "Szakmai stábunk jelenleg is aktívan dolgozik azon, hogy izgalmas, jól szervezett jégkorong tornákat hozzon létre az Apex Hockey közösség számára. Amint lesznek konkrét időpontok, helyszínek és részvételi információk, azokat ezen az oldalon tesszük közzé.",
    icon: "trophy",
    highlights: ["Részletek hamarosan"],
    cta: "Érdeklődés a tornákról",
  },
  "Rólunk": {
    title: "Rólunk",
    eyebrow: "Apex mentalitás",
    intro:
      "Az Apex Hockey egy modern szemléletű jégkorong iskola, ahol a játékosok fejlődése, önbizalma és sport iránti szeretete áll a középpontban.",
    icon: "users",
    cta: "Ismerj meg minket",
    infoTitle: "Kik vagyunk?",
    infoDescription:
      "Célunk, hogy olyan szakmai közeget teremtsünk, ahol a játékosok biztonságos, motiváló és következetes környezetben tudnak fejlődni.",
    venue: trainingVenue,
    sections: [
      {
        title: "Játékosközpontú fejlesztés",
        text: "Minden edzésünk célja, hogy a játékosok egyéni képességei fejlődjenek, miközben megtanulnak gyorsabban, bátrabban és tudatosabban játszani.",
      },
      {
        title: "Modern szakmai szemlélet",
        text: "A technikai elemek mellett nagy hangsúlyt kap a döntéshozatal, a játékértés, a mozgásminőség és a mérkőzésszerű gondolkodás.",
      },
      {
        title: "Fegyelem és jó hangulat",
        text: "Hiszünk abban, hogy a fejlődéshez egyszerre kell következetesség, koncentrált munka és olyan közeg, ahová a játékosok szívesen térnek vissza.",
      },
      {
        title: "Közösségépítés",
        text: "Az Apex Hockey nem csak edzésekről szól: célunk egy olyan közösség építése, ahol játékosok, szülők és edzők közösen dolgoznak a fejlődésért.",
      },
    ],
    quote:
      "Célunk, hogy a játékosok stabil alapokat kapjanak, magabiztosabban döntsenek a jégen, és közben megszeressék a fejlődés folyamatát.",
  },
  "Kapcsolatok": {
    title: "Kapcsolatok",
    eyebrow: "Vedd fel velünk a kapcsolatot!",
    intro:
      "Kérdésed van a táborokról, skill edzésekről vagy tornákról? Itt később megjelenhet az email, telefonszám és kapcsolatfelvételi űrlap.",
    icon: "mail",
    highlights: ["Email kapcsolat", "Telefonos érdeklődés", "Jelentkezési információk", "Szülői kérdések kezelése"],
    cta: "Kapcsolatfelvétel",
  },
  "Támogatóink": {
    title: "Támogatóink",
    eyebrow: "Partnereink",
    intro: "Azok a támogatók és partnerek, akik segítik az Apex Hockey programjainak megvalósítását és fejlődését.",
    icon: "handshake",
    highlights: ["Partneri megjelenés", "Támogatói logók", "Együttműködési lehetőségek", "Közös értékteremtés"],
    cta: "Támogatói kapcsolat",
  },
};

function Header({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = ["Kezdőlap", ...navItems];

  return (
    <header className="fixed inset-x-4 top-2 z-20 mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/10 bg-black/55 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 sm:inset-x-6 sm:w-[calc(100%-3rem)] lg:px-8">
      <button type="button" onClick={() => goToPage("Kezdőlap")} className="flex items-center gap-3 text-left" aria-label="Apex Hockey kezdőlap">
        <div>
          <p className="text-base font-black uppercase tracking-widest sm:text-lg">Apex Hockey</p>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#cfcaff]/80 sm:text-xs">Ice Hockey School</p>
        </div>
      </button>

      <div className="relative flex items-center gap-3">
        <button
          type="button"
          onClick={() => goToPage("Kapcsolatok")}
          className="hidden rounded-full border border-[#8ff6db]/45 bg-[#8ff6db]/10 px-5 py-3 text-sm font-black uppercase tracking-wider text-[#8ff6db] transition hover:border-[#8ff6db] hover:bg-[#8ff6db] hover:text-black hover:shadow-[0_0_22px_rgba(143,246,219,0.22)] sm:block"
        >
          Jelentkezés
        </button>

        <button
          type="button"
          className={`group inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-black uppercase tracking-wider transition ${
            menuOpen
              ? "border-[#8ff6db] bg-[#8ff6db] text-black shadow-[0_0_28px_rgba(143,246,219,0.28)]"
              : "border-white/10 bg-white/[0.06] text-white hover:border-[#8ff6db]/60 hover:bg-white/[0.10] hover:text-[#8ff6db]"
          }`}
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menü
          <InlineIcon type={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute right-0 top-full mt-3 w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/90 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl"
            aria-label="Lenyíló navigáció"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e64dde]/14 via-transparent to-[#8ff6db]/10" />
            <div className="relative space-y-1">
              {menuItems.map((item) => {
                const isActive = activePage === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    className={`group flex w-full items-center rounded-2xl px-5 py-4 text-left text-sm font-black uppercase tracking-wider transition-colors duration-150 ${
                      isActive
                        ? "bg-[#8ff6db] text-black shadow-[0_0_12px_rgba(143,246,219,0.18)]"
                        : "text-white/80 hover:bg-white/10 hover:text-[#8ff6db]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HomePage({ setActivePage }) {
  const goToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="mb-6 inline-flex rounded-full border border-[#e64dde]/50 bg-[#e64dde]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#8ff6db]">
            Skill fejlesztés Magyarországon
          </div>

          <h1 className="max-w-4xl break-words text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
            Érd el a <span className="text-[#e64dde] drop-shadow-[0_0_10px_rgba(230,77,222,0.35)]">következő</span> szintet a jégen.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            11-15 éves játékosoknak kínálunk külön edzéseket az Óbudai Jégcsarnokban egész szezonban. Tapasztalt edzők, személyre szabott fejlesztés, intenzív képzések.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => goToPage("Kapcsolatok")} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e64dde] px-7 py-4 text-base font-black uppercase tracking-wider text-black shadow-[0_0_22px_rgba(230,77,222,0.24)] transition hover:bg-[#8ff6db]">
              Kapcsolatfelvétel
              <InlineIcon type="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => goToPage("Skill edzés")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-base font-black uppercase tracking-wider text-white transition hover:border-[#8ff6db] hover:text-[#8ff6db]">
              Edzések megtekintése
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.05 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-6 rounded-[3rem] bg-[#e64dde]/25 blur-2xl" />
          <div className="relative rounded-[2rem] border border-[#e64dde]/50 bg-black/70 p-8 shadow-[0_0_28px_rgba(143,246,219,0.14)] backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Fejlesztés alatt</p>
            <h2 className="mt-4 break-words text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">Apex Hockey</h2>
            <p className="mt-5 leading-7 text-white/65">A logó helye ideiglenesen kikapcsolva. A végleges logót később visszatesszük változtatás nélkül.</p>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Menüpontok</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Mit találsz nálunk?</h2>
          </div>
          <p className="max-w-xl text-white/65">Az alábbi módszerekkel segítünk gyermeke fejlődésében.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <button key={card.title} type="button" onClick={() => goToPage(card.title)} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-[#e64dde]/70 hover:bg-[#e64dde]/10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8ff6db] text-black shadow-[0_0_16px_rgba(143,246,219,0.20)]">
                <InlineIcon type={card.icon} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#8ff6db]">{card.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{card.description}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function HighlightedValue({ item }) {
  if (!item.highlight || !item.value.includes(item.highlight)) {
    return item.value;
  }

  const [before, after] = item.value.split(item.highlight);

  return (
    <>
      {before}
      <span className="text-[#8ff6db]">{item.highlight}</span>
      {after}
    </>
  );
}

function VenueBlock({ venue }) {
  return (
    <div className="mt-10 rounded-[2.5rem] border border-[#8ff6db]/20 bg-black/45 p-8 shadow-[0_0_28px_rgba(143,246,219,0.10)]">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#e64dde]">{venue.label}</p>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">{venue.name}</h2>
      <a
        href={venue.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex text-lg font-black text-[#8ff6db] underline decoration-[#8ff6db]/35 underline-offset-4 transition hover:text-[#e64dde] hover:decoration-[#e64dde]"
      >
        {venue.address}
      </a>
      <p className="mt-4 max-w-3xl leading-7 text-white/65">{venue.text}</p>
    </div>
  );
}

function ProgramDetailPage({ data, setActivePage }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10 lg:pb-32 lg:pt-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-[#e64dde]/50 bg-[#e64dde]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#8ff6db]">
            {data.eyebrow}
          </div>
          <h1 className="max-w-5xl break-words text-5xl font-black uppercase leading-[1.06] tracking-tight sm:text-6xl lg:text-8xl">
            {data.title} <span className="text-[#e64dde] drop-shadow-[0_0_10px_rgba(230,77,222,0.35)]">{data.title === "Skill edzés" ? "játékosoknak" : "programok"}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{data.intro}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => setActivePage("Kapcsolatok")} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e64dde] px-7 py-4 text-sm font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(230,77,222,0.20)] transition hover:bg-[#8ff6db]">
              {data.cta}
              <InlineIcon type="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => setActivePage("Kezdőlap")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-[#8ff6db] hover:text-[#8ff6db]">
              Vissza a kezdőlapra
            </button>
          </div>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-[#e64dde]/50 bg-white/[0.04] p-6 shadow-[0_0_28px_rgba(230,77,222,0.10)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8ff6db] text-black shadow-[0_0_16px_rgba(143,246,219,0.20)]">
                <InlineIcon type={data.icon} className="h-7 w-7" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Részletek</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">{data.infoTitle || "Edzés információk"}</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/65">{data.infoDescription || "A legfontosabb tudnivalók egy helyen."}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.infoCards.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/45 p-4">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e64dde]">{item.label}</p>
                <p className="mt-2 text-lg font-black text-white">
                  <HighlightedValue item={item} />
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/45 p-5">
            {data.scheduleTitle && <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e64dde]">{data.scheduleTitle}</p>}
            <div className={`${data.scheduleTitle ? "mt-4" : ""} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
              {data.schedule.map((item) => (
                <div key={item.day} className="rounded-2xl border border-[#8ff6db]/20 bg-[#8ff6db]/10 p-4">
                  <p className="text-lg font-black uppercase tracking-tight text-white">{item.day}</p>
                  <p className="mt-2 break-words text-xl font-black leading-tight text-[#8ff6db] sm:text-2xl">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {data.pricing && (
          <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-[#e64dde]/10 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Árak</p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">{data.pricingTitle}</h2>
              </div>
              <p className="max-w-xl leading-7 text-white/65">A testvéreknek járó kedvezmény a tábor árából 20 000 Ft/fő.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {data.pricing.map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-white/10 bg-black/45 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e64dde]">{item.label}</p>
                  <div className="mt-3 min-h-[1.5rem]">{item.note && <p className="text-sm font-bold leading-6 text-white/60">{item.note}</p>}</div>
                  <p className="mt-3 text-3xl font-black tracking-tight text-[#8ff6db] sm:text-4xl">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.venue && <VenueBlock venue={data.venue} />}

        <div className="mt-16">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">{data.developmentEyebrow || "Mit fejlesztünk?"}</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">{data.developmentTitle || "A skill edzés fő területei"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {data.sections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-white/10 bg-black/45 p-6 transition hover:border-[#8ff6db]/60 hover:bg-[#8ff6db]/10">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{section.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{section.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-white/10 bg-[#e64dde]/10 p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">{data.signupEyebrow || "Jelentkezés"}</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">{data.signupTitle || "Szeretnél fejlődni?"}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                {data.signupText || "Az edzések hétfőn, szerdán, csütörtökön és pénteken 15:00-15:50 között zajlanak. A szabad helyekről és a csoportbeosztásról a kapcsolat oldalon keresztül lehet érdeklődni."}
              </p>
            </div>
            <button type="button" onClick={() => setActivePage("Kapcsolatok")} className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-[#8ff6db]">
              Kapcsolatfelvétel
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutPage({ data, setActivePage }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10 lg:pb-32 lg:pt-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-[#e64dde]/50 bg-[#e64dde]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#8ff6db]">
            {data.eyebrow}
          </div>
          <h1 className="max-w-5xl break-words text-5xl font-black uppercase leading-[1.06] tracking-tight sm:text-6xl lg:text-8xl">
            Apex Hockey <span className="text-[#e64dde] drop-shadow-[0_0_10px_rgba(230,77,222,0.35)]">filozófia</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">{data.intro}</p>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-[#e64dde]/50 bg-white/[0.04] p-6 shadow-[0_0_28px_rgba(230,77,222,0.10)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8ff6db] text-black shadow-[0_0_16px_rgba(143,246,219,0.20)]">
                <InlineIcon type={data.icon} className="h-7 w-7" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Bemutatkozás</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">{data.infoTitle}</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/65">{data.infoDescription}</p>
          </div>
        </div>

        <VenueBlock venue={data.venue} />

        <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Hitvallásunk</p>
          <blockquote className="mt-4 max-w-4xl text-xl font-semibold leading-8 text-white/80 sm:text-2xl sm:leading-10">“{data.quote}”</blockquote>
        </div>

        <div className="mt-16">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Alapelveink</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Amit képviselünk</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {data.sections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-white/10 bg-black/45 p-6 transition hover:border-[#8ff6db]/60 hover:bg-[#8ff6db]/10">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{section.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{section.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">Csatlakozz hozzánk</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Csatlakozz az Apex fejlesztő programjába!</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Nézd meg edzéseinket, táborainkat, vagy vedd fel velünk a kapcsolatot, ha szeretnél többet megtudni a programjainkról.
              </p>
            </div>
            <button type="button" onClick={() => setActivePage("Kapcsolatok")} className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-[#8ff6db]">
              Kapcsolatfelvétel
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContentPage({ page, setActivePage }) {
  const data = pages[page];

  if (!data) {
    return <HomePage setActivePage={setActivePage} />;
  }

  if (page === "Skill edzés" || page === "Táborok") {
    return <ProgramDetailPage data={data} setActivePage={setActivePage} />;
  }

  if (page === "Rólunk") {
    return <AboutPage data={data} setActivePage={setActivePage} />;
  }

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10 lg:pb-32 lg:pt-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2.5rem] border border-[#e64dde]/50 bg-white/[0.04] p-8 shadow-[0_0_28px_rgba(230,77,222,0.10)]">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8ff6db] text-black shadow-[0_0_16px_rgba(143,246,219,0.20)]">
            <InlineIcon type={data.icon} className="h-8 w-8" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#8ff6db]">{data.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-[1.05] tracking-tight sm:text-7xl">{data.title}</h1>
          <p className="mt-7 text-lg leading-8 text-white/75">{data.intro}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => setActivePage("Kapcsolatok")} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e64dde] px-7 py-4 text-sm font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(230,77,222,0.20)] transition hover:bg-[#8ff6db]">
              {data.cta}
              <InlineIcon type="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button type="button" onClick={() => setActivePage("Kezdőlap")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-[#8ff6db] hover:text-[#8ff6db]">
              Vissza a kezdőlapra
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {data.highlights.map((highlight, index) => (
            <div key={highlight} className="rounded-[2rem] border border-white/10 bg-black/45 p-6 transition hover:border-[#8ff6db]/60 hover:bg-[#8ff6db]/10">
              {data.highlights.length > 1 && <p className="text-sm font-black uppercase tracking-[0.25em] text-[#e64dde]">0{index + 1}</p>}
              <h2 className={`${data.highlights.length > 1 ? "mt-4" : ""} text-2xl font-black uppercase tracking-tight`}>{highlight}</h2>
              <p className="mt-4 leading-7 text-white/60">
                {data.highlights.length === 1
                  ? "A torna részletei, időpontjai és jelentkezési információi itt jelennek majd meg, amint elérhetővé válnak."
                  : "Ez a rész később konkrét szöveggel, időpontokkal, árakkal, képekkel vagy jelentkezési információkkal bővíthető."}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function ApexHockeyHomepage() {
  const [activePage, setActivePage] = useState("Kezdőlap");

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#030303] text-white pt-28 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e64dde]/30 blur-2xl" />
        <div className="absolute top-80 -left-24 h-80 w-80 rounded-full bg-[#8ff6db]/20 blur-2xl" />
        <div className="absolute bottom-20 -right-20 h-96 w-96 rounded-full bg-[#e64dde]/20 blur-2xl" />
      </div>

      <Header activePage={activePage} setActivePage={setActivePage} />

      {activePage === "Kezdőlap" ? <HomePage setActivePage={setActivePage} /> : <ContentPage page={activePage} setActivePage={setActivePage} />}

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm text-white/55 md:flex-row lg:px-10">
        <p>© 2026 Apex Hockey. Minden jog fenntartva.</p>
        <p className="uppercase tracking-[0.25em] text-[#cfcaff]">Jégkorong · Fejlődés</p>
      </footer>
    </main>
  );
}
