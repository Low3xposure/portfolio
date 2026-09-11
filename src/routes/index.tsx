import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Languages, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { AmbientParticles } from "@/components/effects/AmbientParticles";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { GalleryModal } from "@/components/sections/GalleryModal";
import heroAsset from "@/assets/hero-fluid.png";
import abalas1 from "@/assets/DSC07336.jpg";
import abalas2 from "@/assets/DSC07346.jpg";
import abalas3 from "@/assets/DSC07367.jpg";
import sg1 from "@/assets/DSC06453_1.jpg";
import sg2 from "@/assets/DSC06461_2.jpg";
import sg3 from "@/assets/DSC06474_2.jpg";
import sg4 from "@/assets/tefa_cortina_roja_2.jpg";
import sk1 from "@/assets/5-Recuperado.webp";
import sk2 from "@/assets/6-Recuperado.webp";
import sk3 from "@/assets/10-Recuperado.webp";
import sk4 from "@/assets/11-Recuperado.webp";
import z1 from "@/assets/DSC9691.jpg";
import z2 from "@/assets/DSC9694.jpg";
import z3 from "@/assets/DSC9695.jpg";
import z4 from "@/assets/DSC9699.jpg";
import z5 from "@/assets/DSC9701.jpg";
import z6 from "@/assets/DSC9709.jpg";
import z7 from "@/assets/DSC9714.jpg";
import z8 from "@/assets/DSC9720.jpg";
import z9 from "@/assets/DSC9723.jpg";

const heroBg = heroAsset;

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
    cover: abalas1,
    description:
      "Campaña de moda urbana: dirección, fotografía y color para la colección Ghetto Running Club.",
    descriptionEn:
      "Streetwear campaign: direction, photography and color for the Ghetto Running Club collection.",
    media: [
      { url: abalas1, alt: "Retrato a contrapicado con cielo azul — campaña Abalas" },
      { url: abalas2, alt: "Retrato frente a muro naranja con grafiti — campaña Abalas" },
      { url: abalas3, alt: "Retrato cenital apoyado en estructura azul — campaña Abalas" },
    ],
  },
  {
    slug: "zero",
    name: "Zero",
    client: "Zero — marca de ropa alternativa",
    clientEn: "Zero — alternative clothing brand",
    year: "2026",
    cover: z3,
    description: "Todo empieza desde Zero",
    descriptionEn: "Everything starts from Zero",
    role: "Dirección artística y fotográfica",
    roleEn: "Art direction and photography",
    media: [
      { url: z1, alt: "Retrato frontal con camiseta blanca Zero — campaña Zero" },
      { url: z2, alt: "Espalda con estampado tribal en camiseta blanca — campaña Zero" },
      { url: z3, alt: "Detalle del estampado tribal en la espalda — campaña Zero" },
      { url: z4, alt: "Retrato con gafas y camiseta sin mangas con llamas — campaña Zero" },
      { url: z5, alt: "Espalda con estampado Reborn en camiseta sin mangas — campaña Zero" },
      { url: z6, alt: "Retrato con camiseta de calaveras — campaña Zero" },
      { url: z7, alt: "Espalda con estampado tribal plateado — campaña Zero" },
      { url: z8, alt: "Retrato con camiseta negra tribal — campaña Zero" },
      { url: z9, alt: "Primer plano con gafas y camiseta negra tribal — campaña Zero" },
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
    cover: sg4,
    description: "Eres una mujer extraña, parece que vienes de otro mundo",
    descriptionEn: "You are a strange girl, you seem to come from another world",
    media: [
      { url: sg1, alt: "Retrato con brazos alzados sobre cortina roja — Strange Girl" },
      { url: sg2, alt: "Silueta de perfil a contraluz sobre cortina roja — Strange Girl" },
      { url: sg3, alt: "Retrato cenital entre pliegues de cortina roja — Strange Girl" },
      { url: sg4, alt: "Rostro emergiendo del centro de una cortina roja — Strange Girl" },
    ],
  },
  {
    slug: "skate",
    name: "Skate",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: sk2,
    description: "Con la mente fría y las ruedas en llamas",
    descriptionEn: "Cold mind, wheels on fire",
    media: [
      { url: sk1, alt: "Skater en el borde de la rampa de noche — sesión Skate" },
      { url: sk2, alt: "Skater de pie frente a muro rosado con grafiti — sesión Skate" },
      { url: sk3, alt: "Skater sentado en el borde de la rampa con su tabla — sesión Skate" },
      { url: sk4, alt: "Skater en pleno truco sobre la rampa — sesión Skate" },
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
    type: "Sesiones",
    typeEn: "Sessions",
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
    type: "Dirección de marca",
    typeEn: "Brand direction",
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
  {
    title: "Fotografía 3D",
    titleEn: "3D Photography",
    body: "Capturas estereoscópicas y renders que le dan volumen real a cada retrato.",
    bodyEn: "Stereoscopic captures and renders that give every portrait real depth.",
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
    viewLabel: "Ver",
    servicesTitle: "Qué hago",
    contactTitle: "¿Tienes un proyecto en mente?",
    contactSub: "Cuéntame la idea y armamos el equipo, el plan y el presupuesto.",
    contactHud: "REC detenido — corte.",
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
    viewLabel: "View",
    servicesTitle: "What I do",
    contactTitle: "Got a project in mind?",
    contactSub: "Tell me the idea and we'll build the team, the plan and the budget.",
    contactHud: "REC stopped — cut.",
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

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [campaignsOpen, setCampaignsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<Campaign | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];
  const en = lang === "en";

  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <CustomCursor />
      <AmbientParticles />
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-md sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold tracking-tight">LOW EXPOSURE</span>
          <div className="flex items-center gap-6 text-sm text-foreground/80 sm:gap-8">
            <div className="hidden gap-8 sm:flex">
              <a href="#trabajos" data-cursor="link" className="transition-colors hover:text-accent">
                {t.navWorks}
              </a>
              <a href="#servicios" data-cursor="link" className="transition-colors hover:text-accent">
                {t.navServices}
              </a>
              <a href="#contacto" data-cursor="link" className="transition-colors hover:text-accent">
                {t.navContact}
              </a>
            </div>
            <button
              type="button"
              onClick={() => setLang(en ? "es" : "en")}
              aria-label={t.langAria}
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
            >
              <Languages size={14} />
              {t.langLabel}
            </button>
          </div>
        </div>
      </nav>

      <Hero t={t} heroBg={heroBg} />


      <Work
        t={t}
        en={en}
        works={works}
        videoThumb={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
        sessionCover={sessions[0]!.cover}
        sessionCount={sessions.length}
        campaignCover={campaigns[0]!.cover}
        campaignCount={campaigns.length}
        onOpenVideo={() => setVideoOpen(true)}
        onOpenSessions={() => {
          setSessionsOpen(true);
          setActiveSession(null);
        }}
        onOpenCampaigns={() => {
          setCampaignsOpen(true);
          setActiveCampaign(null);
        }}
      />

      <Services t={t} en={en} services={services} />

      <Contact t={t} />

      <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground sm:px-10">
        {t.footer}
      </footer>

      {/* Video overlay */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setVideoOpen(false)}
          >
            <button
              onClick={() => setVideoOpen(false)}
              aria-label={t.closeVideo}
              data-cursor="link"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110"
            >
              <X size={22} />
            </button>
            <div
              className="aspect-video w-[95vw] max-w-6xl overflow-hidden rounded-2xl shadow-[var(--shadow-depth)]"
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
          </motion.div>
        )}
      </AnimatePresence>

      <GalleryModal
        open={campaignsOpen}
        title={t.campaignsTitle}
        allLabel={t.allCampaigns}
        closeLabel="Cerrar campañas"
        viewLabel={t.viewLabel}
        en={en}
        items={campaigns}
        active={activeCampaign}
        onSelect={setActiveCampaign}
        onBack={() => setActiveCampaign(null)}
        onClose={() => {
          setCampaignsOpen(false);
          setActiveCampaign(null);
        }}
      />

      <GalleryModal
        open={sessionsOpen}
        title={t.sessionsTitle}
        allLabel={t.allSessions}
        closeLabel="Cerrar sesiones fotográficas"
        viewLabel={t.viewLabel}
        en={en}
        items={sessions}
        active={activeSession}
        onSelect={setActiveSession}
        onBack={() => setActiveSession(null)}
        onClose={() => {
          setSessionsOpen(false);
          setActiveSession(null);
        }}
      />
    </main>
  );
}
