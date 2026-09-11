import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Instagram, Mail, MessageCircle, Play, X } from "lucide-react";
import heroAsset from "@/assets/hero-fluid.png.asset.json";
import abalas1 from "@/assets/DSC07336.jpg.asset.json";
import abalas2 from "@/assets/DSC07346.jpg.asset.json";
import abalas3 from "@/assets/DSC07367.jpg.asset.json";
import sg1 from "@/assets/DSC06453_1.jpg.asset.json";
import sg2 from "@/assets/DSC06461_2.jpg.asset.json";
import sg3 from "@/assets/DSC06474_2.jpg.asset.json";
import sg4 from "@/assets/tefa_cortina_roja_2.jpg.asset.json";
import sk1 from "@/assets/5-Recuperado.webp.asset.json";
import sk2 from "@/assets/6-Recuperado.webp.asset.json";
import sk3 from "@/assets/10-Recuperado.webp.asset.json";
import sk4 from "@/assets/11-Recuperado.webp.asset.json";
import z1 from "@/assets/DSC9691.jpg.asset.json";
import z2 from "@/assets/DSC9694.jpg.asset.json";
import z3 from "@/assets/DSC9695.jpg.asset.json";
import z4 from "@/assets/DSC9699.jpg.asset.json";
import z5 from "@/assets/DSC9701.jpg.asset.json";
import z6 from "@/assets/DSC9709.jpg.asset.json";
import z7 from "@/assets/DSC9714.jpg.asset.json";
import z8 from "@/assets/DSC9720.jpg.asset.json";
import z9 from "@/assets/DSC9723.jpg.asset.json";

const heroBg = heroAsset.url;

type Lang = "es" | "en";

type Campaign = {
  slug: string;
  name: string;
  client: string;
  clientEn?: string;
  year: string;
  cover: string;
  description: string;
  descriptionEn?: string;
  role?: string;
  roleEn?: string;
  media: { url: string; alt: string }[];
};

const campaigns: Campaign[] = [
  {
    slug: "abalas",
    name: "Abalas",
    client: "Ghetto Running Club",
    year: "2026",
    cover: abalas1.url,
    description:
      "Campaña de moda urbana: dirección, fotografía y color para la colección Ghetto Running Club.",
    descriptionEn:
      "Streetwear campaign: direction, photography and color for the Ghetto Running Club collection.",
    media: [
      { url: abalas1.url, alt: "Retrato a contrapicado con cielo azul — campaña Abalas" },
      { url: abalas2.url, alt: "Retrato frente a muro naranja con grafiti — campaña Abalas" },
      { url: abalas3.url, alt: "Retrato cenital apoyado en estructura azul — campaña Abalas" },
    ],
  },
  {
    slug: "zero",
    name: "Zero",
    client: "Zero — marca de ropa alternativa",
    clientEn: "Zero — alternative clothing brand",
    year: "2026",
    cover: z3.url,
    description: "Todo empieza desde Zero",
    descriptionEn: "Everything starts from Zero",
    role: "Dirección artística y fotográfica",
    roleEn: "Art direction and photography",
    media: [
      { url: z1.url, alt: "Retrato frontal con camiseta blanca Zero — campaña Zero" },
      { url: z2.url, alt: "Espalda con estampado tribal en camiseta blanca — campaña Zero" },
      { url: z3.url, alt: "Detalle del estampado tribal en la espalda — campaña Zero" },
      { url: z4.url, alt: "Retrato con gafas y camiseta sin mangas con llamas — campaña Zero" },
      { url: z5.url, alt: "Espalda con estampado Reborn en camiseta sin mangas — campaña Zero" },
      { url: z6.url, alt: "Retrato con camiseta de calaveras — campaña Zero" },
      { url: z7.url, alt: "Espalda con estampado tribal plateado — campaña Zero" },
      { url: z8.url, alt: "Retrato con camiseta negra tribal — campaña Zero" },
      { url: z9.url, alt: "Primer plano con gafas y camiseta negra tribal — campaña Zero" },
    ],
  },
];


const sessions: Campaign[] = [
  {
    slug: "strange-girl",
    name: "Strange Girl",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: sg4.url,
    description: "Eres una mujer extraña, parece que vienes de otro mundo",
    descriptionEn: "You are a strange girl, you seem to come from another world",
    media: [
      { url: sg1.url, alt: "Retrato con brazos alzados sobre cortina roja — Strange Girl" },
      { url: sg2.url, alt: "Silueta de perfil a contraluz sobre cortina roja — Strange Girl" },
      { url: sg3.url, alt: "Retrato cenital entre pliegues de cortina roja — Strange Girl" },
      { url: sg4.url, alt: "Rostro emergiendo del centro de una cortina roja — Strange Girl" },
    ],
  },
  {
    slug: "skate",
    name: "Skate",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: sk2.url,
    description: "Con la mente fría y las ruedas en llamas",
    descriptionEn: "Cold mind, wheels on fire",
    media: [
      { url: sk1.url, alt: "Skater en el borde de la rampa de noche — sesión Skate" },
      { url: sk2.url, alt: "Skater de pie frente a muro rosado con grafiti — sesión Skate" },
      { url: sk3.url, alt: "Skater sentado en el borde de la rampa con su tabla — sesión Skate" },
      { url: sk4.url, alt: "Skater en pleno truco sobre la rampa — sesión Skate" },
    ],
  },
];


const YOUTUBE_ID = "dAr6lIUvrrQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jon Franco — Productor Audiovisual" },
      {
        name: "description",
        content:
          "Portafolio de Jon Franco, productor audiovisual: videoclips, comerciales, documental y dirección de fotografía en color.",
      },
      { property: "og:title", content: "Jon Franco — Productor Audiovisual" },
      {
        property: "og:description",
        content:
          "Portafolio de Jon Franco, productor audiovisual: videoclips, comerciales, documental y dirección de fotografía en color.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  {
    title: "VideoClip Musical",
    titleEn: "Music Video",
    client: "Lumen Records",
    type: "Videoclip",
    typeEn: "Music video",
    year: "2026",
    accent: "var(--magenta)",
  },
  {
    title: "Fotografía Artistica",
    titleEn: "Fine Art Photography",
    client: "Marea Studio",
    type: "Documental",
    typeEn: "Documentary",
    year: "2025",
    accent: "var(--cyan)",
  },
  {
    title: "Contenido Redes",
    titleEn: "Social Content",
    client: "Sonora",
    type: "Spot comercial",
    typeEn: "Commercial spot",
    year: "2026",
    accent: "var(--lime)",
  },
  {
    title: "Campañas",
    titleEn: "Campaigns",
    client: "Festival Óxido",
    type: "Aftermovie",
    typeEn: "Aftermovie",
    year: "2025",
    accent: "var(--amber)",
  },
];

const services = [
  {
    title: "Dirección y Producción",
    titleEn: "Direction and Production",
    body: "De la idea al montaje final: guion, casting, plan de rodaje y post.",
    bodyEn: "From idea to final cut: script, casting, shooting plan and post.",
  },
  {
    title: "Dirección de fotografía y Cámara",
    titleEn: "Cinematography and Camera",
    body: "Luz, color y cámara con una paleta construida a medida de cada historia.",
    bodyEn: "Light, color and camera with a palette built for each story.",
  },
  {
    title: "Color y Post-Producción",
    titleEn: "Color and Post-Production",
    body: "Edición en Lightroom, Photoshop, Premiere, Capcut, After Effects.",
    bodyEn: "Editing in Lightroom, Photoshop, Premiere, Capcut, After Effects.",
  },
];

const copy = {
  es: {
    navWorks: "Trabajos",
    navServices: "Servicios",
    navContact: "Contacto",
    badge: "Productor audiovisual · Medellín",
    h1a: "Historias que se",
    h1b: "derraman",
    h1c: "en color.",
    bio: "Soy Low Exposure  Productor audiovisual  y Fotógrafo. Dirijo y produzco videoclips, cortometrajes, contenido en redes y campañas publicitarias.",
    ctaReel: "Ver el reel",
    ctaWork: "Trabajemos juntos",
    worksTitle: "Trabajos seleccionados",
    servicesTitle: "Qué hago",
    contactTitle: "¿Tienes un proyecto en mente?",
    contactSub: "Cuéntame la idea y armamos el equipo, el plan y el presupuesto.",
    footer: "© 2026 Low Exposure · Producción audiovisual",
    campaignsTitle: "Campañas",
    allCampaigns: "Todas las campañas",
    campaignsCount: (n: number) => `${n} campaña${n > 1 ? "s" : ""}`,
    sessionsTitle: "Fotografía Artística",
    allSessions: "Todas las sesiones",
    sessionsCount: (n: number) => `${n} sesiones`,
    closeVideo: "Cerrar video",
    langLabel: "EN",
    langAria: "Cambiar idioma a inglés",
  },
  en: {
    navWorks: "Work",
    navServices: "Services",
    navContact: "Contact",
    badge: "Audiovisual producer · Medellín",
    h1a: "Stories that",
    h1b: "spill",
    h1c: "in color.",
    bio: "I'm Low Exposure, audiovisual producer and photographer. I direct and produce music videos, short films, social content and advertising campaigns.",
    ctaReel: "Watch the reel",
    ctaWork: "Let's work together",
    worksTitle: "Selected work",
    servicesTitle: "What I do",
    contactTitle: "Got a project in mind?",
    contactSub: "Tell me the idea and we'll build the team, the plan and the budget.",
    footer: "© 2026 Low Exposure · Audiovisual production",
    campaignsTitle: "Campaigns",
    allCampaigns: "All campaigns",
    campaignsCount: (n: number) => `${n} campaign${n > 1 ? "s" : ""}`,
    sessionsTitle: "Fine Art Photography",
    allSessions: "All sessions",
    sessionsCount: (n: number) => `${n} sessions`,
    closeVideo: "Close video",
    langLabel: "ES",
    langAria: "Switch language to Spanish",
  },
} as const;

const services = [
  {
    title: "Dirección y Producción",
    body: "De la idea al montaje final: guion, casting, plan de rodaje y post.",
  },
  {
    title: "Dirección de fotografía y Cámara",
    body: "Luz, color y cámara con una paleta construida a medida de cada historia.",
  },
  {
    title: "Color y Post-Producción",
    body: "Edición en Lightroom, Photoshop, Premiere, Capcut, After Effects.",
  },
];

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [campaignsOpen, setCampaignsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<Campaign | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative isolate min-h-[92vh] px-6 pb-24 pt-28 sm:px-10">
        <img
          src={heroBg}
          alt="Textura fluida de pintura en colores saturados"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
        />
        <div className="fade-mask pointer-events-none absolute inset-0 -z-10" />

        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md sm:px-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <span className="font-display text-lg font-bold tracking-tight">LOW EXPOSURE</span>
            <div className="hidden gap-8 text-sm text-foreground/80 sm:flex">
              <a href="#trabajos" className="transition-colors hover:text-accent">
                Trabajos
              </a>
              <a href="#servicios" className="transition-colors hover:text-accent">
                Servicios
              </a>
              <a href="#contacto" className="transition-colors hover:text-accent">
                Contacto
              </a>
            </div>
          </div>
        </nav>

        <div className="mx-auto mt-[24vh] max-w-6xl">
          <p className="mb-6 inline-flex rounded-full border border-foreground/25 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.28em] backdrop-blur">
            Productor audiovisual · Medellín
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            Historias que se
            <span className="text-spectrum"> derraman </span>
            en color.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/85">
            Soy Low Exposure&nbsp; Productor audiovisual&nbsp; y Fotógrafo. Dirijo y produzco videoclips, cortometrajes, contenido en redes y campañas publicitarias.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#trabajos"
              className="bg-spectrum glow rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ver el reel
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-foreground/30 bg-background/30 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              Trabajemos juntos
            </a>
          </div>
        </div>
      </section>

      {/* Trabajos */}
      <section id="trabajos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold sm:text-5xl">Trabajos seleccionados</h2>
          <span className="hidden text-sm text-muted-foreground sm:block">2024 — 2026</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {works.map((w) =>
            w.title === "VideoClip Musical" ? (
              <article
                key={w.title}
                className="card-fluid group cursor-pointer overflow-hidden rounded-3xl p-1"
                onClick={() => setVideoOpen(true)}
              >
                <div className="relative flex h-56 items-end overflow-hidden rounded-[1.4rem] p-6">
                  <img
                    src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                    alt="Miniatura del VideoClip Musical en YouTube"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 backdrop-blur transition-transform group-hover:scale-110">
                    <Play size={28} className="ml-1 text-white" fill="currentColor" />
                  </span>
                  <span className="relative rounded-full bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
                    {w.type}
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-5 py-5">
                  <div>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.client}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{w.year}</span>
                </div>
              </article>
            ) : w.title === "Campañas" ? (
              <article
                key={w.title}
                className="card-fluid group cursor-pointer overflow-hidden rounded-3xl p-1"
                onClick={() => {
                  setCampaignsOpen(true);
                  setActiveCampaign(null);
                }}
              >
                <div className="relative flex h-56 items-end overflow-hidden rounded-[1.4rem] p-6">
                  <img
                    src={campaigns[0]!.cover}
                    alt="Portada de la campaña Abalas"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="relative rounded-full bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
                    {campaigns.length} campaña{campaigns.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-5 py-5">
                  <div>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.client}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{w.year}</span>
                </div>
              </article>
            ) : w.title === "Fotografía Artistica" ? (
              <article
                key={w.title}
                className="card-fluid group cursor-pointer overflow-hidden rounded-3xl p-1"
                onClick={() => {
                  setSessionsOpen(true);
                  setActiveSession(null);
                }}
              >
                <div className="relative flex h-56 items-end overflow-hidden rounded-[1.4rem] p-6">
                  <img
                    src={sessions[0]!.cover}
                    alt="Portada de la sesión Strange Girl"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="relative rounded-full bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
                    {sessions.length} sesiones
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-5 py-5">
                  <div>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.client}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{w.year}</span>
                </div>
              </article>
            ) : (
              <article key={w.title} className="card-fluid group overflow-hidden rounded-3xl p-1">
                <div
                  className="relative flex h-56 items-end overflow-hidden rounded-[1.4rem] p-6"
                  style={{
                    backgroundImage: `radial-gradient(120% 120% at 10% 100%, ${w.accent} 0%, transparent 55%), radial-gradient(100% 100% at 90% 0%, var(--violet) 0%, transparent 60%), linear-gradient(160deg, var(--card), var(--background))`,
                  }}
                >
                  <span className="rounded-full bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
                    {w.type}
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-5 py-5">
                  <div>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.client}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{w.year}</span>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <h2 className="mb-12 text-3xl font-bold sm:text-5xl">Qué hago</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="card-fluid rounded-3xl p-7">
              <span className="text-spectrum font-display text-4xl font-bold">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10">
        <div
          className="glow-cool relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16"
          style={{
            backgroundImage:
              "radial-gradient(90% 120% at 0% 0%, var(--magenta) 0%, transparent 55%), radial-gradient(90% 120% at 100% 100%, var(--cyan) 0%, transparent 55%), linear-gradient(160deg, var(--card), var(--background))",
          }}
        >
          <h2 className="text-3xl font-bold sm:text-5xl">¿Tienes un proyecto en mente?</h2>
          <p className="mx-auto mt-5 max-w-lg text-foreground/85">
            Cuéntame la idea y armamos el equipo, el plan y el presupuesto.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:low3xposure@gmail.com"
              className="glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, var(--cyan), var(--lime) 45%, var(--amber) 75%, var(--magenta))",
              }}
            >
              <Mail size={18} />
              low3xposure@gmail.com
            </a>

            <a
              href="https://www.instagram.com/low_3xposure?igsi=MWhuZnF6OW9kNXNpNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, var(--amber), var(--magenta) 55%, var(--violet))",
              }}
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href="https://wa.me/qr/VQN7B26RTZC3M1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{
                backgroundImage: "linear-gradient(120deg, var(--lime), var(--cyan))",
              }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground sm:px-10">
        © 2026 Jon Franco · Producción audiovisual
      </footer>

      {/* Video overlay */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            aria-label="Cerrar video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110"
          >
            <X size={22} />
          </button>
          <div
            className="aspect-video w-[95vw] max-w-6xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="VideoClip Musical"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}
      {/* Campañas overlay */}
      {campaignsOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
            <div className="mb-10 flex items-center justify-between gap-4">
              {activeCampaign ? (
                <button
                  onClick={() => setActiveCampaign(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowLeft size={16} />
                  Todas las campañas
                </button>
              ) : (
                <h2 className="text-3xl font-bold sm:text-5xl">Campañas</h2>
              )}
              <button
                onClick={() => {
                  setCampaignsOpen(false);
                  setActiveCampaign(null);
                }}
                aria-label="Cerrar campañas"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-card/70 backdrop-blur transition-transform hover:scale-110"
              >
                <X size={22} />
              </button>
            </div>

            {!activeCampaign ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {campaigns.map((c) => (
                  <article
                    key={c.slug}
                    onClick={() => setActiveCampaign(c)}
                    className="card-fluid group cursor-pointer overflow-hidden rounded-3xl p-1"
                  >
                    <div className="relative h-80 overflow-hidden rounded-[1.4rem]">
                      <img
                        src={c.cover}
                        alt={`Portada de la campaña ${c.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-spectrum text-3xl font-bold">{c.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {c.client} · {c.year}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-spectrum text-4xl font-bold sm:text-6xl">
                  {activeCampaign.name}
                </h3>
                <p className="mt-4 max-w-xl text-foreground/85">{activeCampaign.description}</p>
                {activeCampaign.role && (
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">
                    {activeCampaign.role}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">
                  {activeCampaign.client} · {activeCampaign.year}
                </p>
                <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
                  {activeCampaign.media.map((m) => (
                    <img
                      key={m.url}
                      src={m.url}
                      alt={m.alt}
                      loading="lazy"
                      className="mb-6 w-full break-inside-avoid rounded-2xl border border-border/60"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Sesiones fotográficas overlay */}
      {sessionsOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
            <div className="mb-10 flex items-center justify-between gap-4">
              {activeSession ? (
                <button
                  onClick={() => setActiveSession(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowLeft size={16} />
                  Todas las sesiones
                </button>
              ) : (
                <h2 className="text-3xl font-bold sm:text-5xl">Fotografía Artística</h2>
              )}
              <button
                onClick={() => {
                  setSessionsOpen(false);
                  setActiveSession(null);
                }}
                aria-label="Cerrar sesiones fotográficas"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-card/70 backdrop-blur transition-transform hover:scale-110"
              >
                <X size={22} />
              </button>
            </div>

            {!activeSession ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {sessions.map((s) => (
                  <article
                    key={s.slug}
                    onClick={() => setActiveSession(s)}
                    className="card-fluid group cursor-pointer overflow-hidden rounded-3xl p-1"
                  >
                    <div className="relative h-80 overflow-hidden rounded-[1.4rem]">
                      <img
                        src={s.cover}
                        alt={`Portada de la sesión ${s.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-spectrum text-3xl font-bold">{s.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {s.client} · {s.year}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-spectrum text-4xl font-bold sm:text-6xl">
                  {activeSession.name}
                </h3>
                <p className="mt-4 max-w-xl text-foreground/85">{activeSession.description}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {activeSession.client} · {activeSession.year}
                </p>
                <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
                  {activeSession.media.map((m) => (
                    <img
                      key={m.url}
                      src={m.url}
                      alt={m.alt}
                      loading="lazy"
                      className="mb-6 w-full break-inside-avoid rounded-2xl border border-border/60"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
