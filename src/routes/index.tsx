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
import { mediaUrl } from "@/lib/media-url";
import heroAsset from "@/assets/hero-fluid.png";
import abalas1 from "@/assets/DSC07336.jpg";
import abalas2 from "@/assets/DSC07346.jpg";
import abalas3 from "@/assets/DSC07367.jpg";
import abalas4 from "@/assets/DSC07414.jpg";
import abalas5 from "@/assets/DSC07415.jpg";
import abalas6 from "@/assets/DSC07322.jpg";
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
import w1 from "@/assets/artistica/amatista/DSC05327.jpg";
import w2 from "@/assets/artistica/amatista/DSC05328.jpg";
import w3 from "@/assets/artistica/amatista/DSC05331.jpg";
import w4 from "@/assets/artistica/amatista/DSC05337.jpg";
import w5 from "@/assets/artistica/amatista/DSC05354.jpg";
import n1 from "@/assets/artistica/nevado/DSC05786.jpg";
import n2 from "@/assets/artistica/nevado/DSC05793.jpg";
import n3 from "@/assets/artistica/nevado/DSC05797.jpg";
import n4 from "@/assets/artistica/nevado/DSC05799.jpg";
import n5 from "@/assets/artistica/nevado/DSC05823.jpg";
import n6 from "@/assets/artistica/nevado/DSC05825.jpg";
import n7 from "@/assets/artistica/nevado/DSC05849.jpg";
import n8 from "@/assets/artistica/nevado/DSC05883.jpg";
import n9 from "@/assets/artistica/nevado/DSC05918.jpg";
import p1 from "@/assets/artistica/punk/1.jpg";
import p2 from "@/assets/artistica/punk/2.jpg";
import p3 from "@/assets/artistica/punk/3.jpg";
import d1 from "@/assets/artistica/dreams/DSC05462.jpg";
import d2 from "@/assets/artistica/dreams/DSC05466.jpg";
import d3 from "@/assets/artistica/dreams/DSC05487.jpg";
import d4 from "@/assets/artistica/dreams/DSC05536-2.jpg";
import d5 from "@/assets/artistica/dreams/DSC05539.jpg";
import d6 from "@/assets/artistica/dreams/DSC05627.jpg";
import d7 from "@/assets/artistica/dreams/DSC05645.jpg";
import g1 from "@/assets/artistica/golden-boy/DSC04228.jpg";
import g2 from "@/assets/artistica/golden-boy/DSC04246.jpg";
import g3 from "@/assets/artistica/golden-boy/DSC04255.jpg";
import k1 from "@/assets/artistica/in-the-sky/2.jpg";
import k2 from "@/assets/artistica/in-the-sky/3.jpg";
import k3 from "@/assets/artistica/in-the-sky/4.jpg";
import k4 from "@/assets/artistica/in-the-sky/11.jpg";
import cortMonologoCover from "@/assets/cortometrajes/monologo-a-la-muerte-cover.png";
import cortFilminutoCover from "@/assets/cortometrajes/filminuto-gabo-coolmind-cover.png";
import cortGameOverCover from "@/assets/cortometrajes/game-over-cover.png";
import cortSabadoNegroCover from "@/assets/cortometrajes/sabado-negro-cover.png";
import socialPresentacionCover from "@/assets/social/nito-dlab-presentacion-cover.png";
import socialReelCover from "@/assets/social/reel-nito-dlab-cover.png";

const heroBg = heroAsset;

const cvUrl = "/Dylan_Franco_CV.pdf";
const nevadoVideo = mediaUrl("/videos/artistica/nevado/DSC05883.mp4");
const inTheSkyVideo = mediaUrl("/videos/artistica/in-the-sky/3d.mp4");
const monologoVideo = mediaUrl("/videos/cortometrajes/monologo-a-la-muerte.mp4");
const filminutoVideo = mediaUrl("/videos/cortometrajes/filminuto-gabo-coolmind.mp4");
const gameOverVideo = mediaUrl("/videos/cortometrajes/game-over.mp4");
const sabadoNegroVideo = mediaUrl("/videos/cortometrajes/sabado-negro.mp4");
const nitoPresentacionVideo = mediaUrl("/videos/redes-sociales/nito-dlab-presentacion.mp4");
const reelNitoVideo = mediaUrl("/videos/redes-sociales/reel-nito-dlab.mp4");

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
  media: { url: string; alt: string; video?: boolean; poster?: string }[];
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
      {
        url: abalas4,
        alt: "Vista trasera con trenzas y camiseta Ghetto Running Club frente a muro con grafiti — campaña Abalas",
      },
      {
        url: abalas5,
        alt: "Primer plano del logo Abalas y cadena sobre camiseta negra — campaña Abalas",
      },
      {
        url: abalas6,
        alt: "Dos modelos recostados con camisetas Ghetto Running Club en contrapicado — campaña Abalas",
      },
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
  {
    slug: "water",
    name: "Water",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: w4,
    description: "Make me water",
    media: [
      { url: w1, alt: "Retrato de espaldas con top rosa bajo una palmera — sesión Water" },
      { url: w2, alt: "Retrato de espaldas con cabello recogido bajo una palmera — sesión Water" },
      { url: w3, alt: "Retrato de perfil con flor en el cabello — sesión Water" },
      { url: w4, alt: "Textura de agua turquesa en movimiento — sesión Water" },
      { url: w5, alt: "Retrato en bikini rosa junto a una palmera — sesión Water" },
    ],
  },
  {
    slug: "nevado",
    name: "Nevado",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: n1,
    description: "A mucha altura con grados bajo 0.",
    descriptionEn: "High up, in sub-zero degrees.",
    media: [
      {
        url: n1,
        alt: "Hombre de espaldas contemplando un paisaje volcánico entre la niebla — sesión Nevado",
      },
      { url: n2, alt: "Retrato con gafas y gorro de lana entre la niebla — sesión Nevado" },
      { url: n3, alt: "Retrato con chaqueta negra sobre roca volcánica — sesión Nevado" },
      {
        url: n4,
        alt: "Figura solitaria caminando entre rocas volcánicas y niebla — sesión Nevado",
      },
      { url: n5, alt: "Siluetas de excursionistas envueltas en niebla espesa — sesión Nevado" },
      { url: n6, alt: "Retrato sentado sobre una roca con guantes y gorro — sesión Nevado" },
      { url: n7, alt: "Detalle de botas de montaña sobre terreno volcánico — sesión Nevado" },
      { url: n8, alt: "Agachado sobre las rocas con chaqueta gris — sesión Nevado" },
      {
        url: n9,
        alt: "Caminando de espaldas por la cresta rocosa entre la niebla — sesión Nevado",
      },
      {
        url: nevadoVideo,
        alt: "Video detrás de cámara en el páramo — sesión Nevado",
        video: true,
        poster: n1,
      },
    ],
  },
  {
    slug: "punk",
    name: "Punk",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: p1,
    description:
      "El mundo es un lugar distopico parecido a una espiral, a veces, estás abajo, a veces, arriba y otras veces de cabeza.",
    descriptionEn:
      "The world is a dystopian place like a spiral — sometimes you're at the bottom, sometimes on top, and sometimes upside down.",
    media: [
      {
        url: p1,
        alt: "Rostro enmarcado por una espiral de alambre de púas al atardecer — sesión Punk",
      },
      {
        url: p2,
        alt: "Primer plano de un rostro entre espirales de alambre de púas de noche — sesión Punk",
      },
      {
        url: p3,
        alt: "Rostro entre espirales de alambre de púas junto a un edificio — sesión Punk",
      },
    ],
  },
  {
    slug: "only-in-my-dreams",
    name: "Only in my dreams",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: d7,
    description: "En un mundo irreal solo nos liberan los sueños.",
    descriptionEn: "In an unreal world, only dreams set us free.",
    media: [
      { url: d1, alt: "Retrato en picado con audífonos y luz verde — sesión Only in my dreams" },
      {
        url: d2,
        alt: "Retrato de cerca con audífonos bajo luz verde nocturna — sesión Only in my dreams",
      },
      { url: d3, alt: "Retrato con luz cálida y audífonos — sesión Only in my dreams" },
      { url: d4, alt: "Bebiendo de una lata bajo luz verde nocturna — sesión Only in my dreams" },
      {
        url: d5,
        alt: "Retrato sentada con audífonos y tatuaje en el brazo — sesión Only in my dreams",
      },
      {
        url: d6,
        alt: "Textura de malla metálica en tonos verde y naranja — sesión Only in my dreams",
      },
      {
        url: d7,
        alt: "Retrato en picado con audífonos bajo luz naranja — sesión Only in my dreams",
      },
    ],
  },
  {
    slug: "golden-boy",
    name: "Golden Boy",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: g2,
    description: "Brillando en la oscuridad.",
    descriptionEn: "Shining in the dark.",
    media: [
      { url: g1, alt: "Retrato de perfil con capucha blanca bajo el sol — sesión Golden Boy" },
      { url: g2, alt: "Retrato a contraluz dorado apoyado en un pasamanos — sesión Golden Boy" },
      {
        url: g3,
        alt: "Retrato de cuerpo completo haciendo una seña con luz cálida — sesión Golden Boy",
      },
    ],
  },
  {
    slug: "in-the-sky",
    name: "In the Sky",
    client: "Sesión fotográfica",
    clientEn: "Photo session",
    year: "2026",
    cover: k2,
    description: "Me siento en el cielo, floto en la tierra",
    descriptionEn: "I sit in the sky, I float on the ground",
    media: [
      {
        url: k1,
        alt: "De pie junto a un poste con el tranvía y el cableado eléctrico detrás — sesión In the Sky",
      },
      {
        url: k2,
        alt: "Retrato junto al tranvía con las montañas y el cableado aéreo — sesión In the Sky",
      },
      { url: k3, alt: "De pie sobre los rieles vacíos del tranvía — sesión In the Sky" },
      {
        url: k4,
        alt: "Retrato junto a un poste de grafitis en la estación del tranvía — sesión In the Sky",
      },
      {
        url: inTheSkyVideo,
        alt: "Video estereoscópico 3D de la sesión — sesión In the Sky",
        video: true,
        poster: k2,
      },
    ],
  },
];

const shortFilms: Campaign[] = [
  {
    slug: "monologo-a-la-muerte",
    name: "Monólogo a la muerte",
    client: "Cortometraje",
    clientEn: "Short film",
    year: "2026",
    cover: cortMonologoCover,
    description: "Monólogo de reconciliación con la muerte.",
    descriptionEn: "A monologue of reconciliation with death.",
    media: [
      { url: monologoVideo, alt: "Monólogo a la muerte", video: true, poster: cortMonologoCover },
    ],
  },
  {
    slug: "filminuto-gabo-coolmind",
    name: "Filminuto Documental — Gabo CoolMind",
    client: "Cortometraje",
    clientEn: "Short film",
    year: "2026",
    cover: cortFilminutoCover,
    description: "Breve historia de cómo Gabo, de CoolMind, inició su carrera musical.",
    descriptionEn: "A brief story of how Gabo, from CoolMind, started his music career.",
    media: [
      {
        url: filminutoVideo,
        alt: "Filminuto Documental — Gabo CoolMind",
        video: true,
        poster: cortFilminutoCover,
      },
    ],
  },
  {
    slug: "game-over",
    name: "Game Over",
    client: "Cortometraje",
    clientEn: "Short film",
    year: "2026",
    cover: cortGameOverCover,
    description: "El desinterés puede matar.",
    descriptionEn: "Indifference can kill.",
    media: [{ url: gameOverVideo, alt: "Game Over", video: true, poster: cortGameOverCover }],
  },
  {
    slug: "sabado-negro",
    name: "Sábado Negro",
    client: "Cortometraje",
    clientEn: "Short film",
    year: "2026",
    cover: cortSabadoNegroCover,
    description: "Cortometraje inspirado en el cine Noir.",
    descriptionEn: "A short film inspired by film noir.",
    media: [
      { url: sabadoNegroVideo, alt: "Sábado Negro", video: true, poster: cortSabadoNegroCover },
    ],
  },
];

const socialContent: Campaign[] = [
  {
    slug: "nito-dlab-presentacion",
    name: "Carta presentación Nito D'Lab",
    client: "Contenido Redes",
    clientEn: "Social content",
    year: "2026",
    cover: socialPresentacionCover,
    description: "Carta de presentación en video para Nito D'Lab.",
    descriptionEn: "A video introduction piece for Nito D'Lab.",
    media: [
      {
        url: nitoPresentacionVideo,
        alt: "Carta presentación Nito D'Lab",
        video: true,
        poster: socialPresentacionCover,
      },
    ],
  },
  {
    slug: "reel-nito-dlab",
    name: "Reel Nito D'Lab",
    client: "Contenido Redes",
    clientEn: "Social content",
    year: "2026",
    cover: socialReelCover,
    description: "Reel para redes sociales de Nito D'Lab.",
    descriptionEn: "A social media reel for Nito D'Lab.",
    media: [{ url: reelNitoVideo, alt: "Reel Nito D'Lab", video: true, poster: socialReelCover }],
  },
];

const videoClips = [
  { id: "_RBDUrfNy-8", title: "Videoclip Musical", titleEn: "Music Video" },
  { id: "dAr6lIUvrrQ", title: "VideoClip Musical", titleEn: "Music Video" },
];

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
    title: "Videoclips Musicales",
    titleEn: "Music Videos",
    type: "Videoclips",
    typeEn: "Music videos",
    year: "2026",
    accent: "var(--magenta)",
  },
  {
    title: "Fotografía Artística",
    titleEn: "Fine Art Photography",
    type: "Sesiones",
    typeEn: "Sessions",
    year: "2025",
    accent: "var(--cyan)",
  },
  {
    title: "Contenido Redes",
    titleEn: "Social Content",
    client: "Nito D'Lab",
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
  {
    title: "Cortometrajes",
    titleEn: "Short Films",
    type: "Dirección y edición",
    typeEn: "Direction and editing",
    year: "2026",
    accent: "var(--azure)",
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
    h1c: " en color.",
    bio: "Soy Low Exposure, productor audiovisual y fotógrafo. Dirijo y produzco videoclips, cortometrajes, contenido en redes y campañas publicitarias.",
    ctaReel: "Ver el reel",
    ctaWork: "Trabajemos juntos",
    worksTitle: "Trabajos seleccionados",
    viewLabel: "Ver",
    servicesTitle: "Lo que hago",
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
    videoClipsCount: (n: number) => `${n} videoclip${n > 1 ? "s" : ""}`,
    socialTitle: "Contenido Redes",
    allSocial: "Todo el contenido",
    socialCount: (n: number) => `${n} pieza${n > 1 ? "s" : ""}`,
    shortFilmsTitle: "Cortometrajes",
    allShortFilms: "Todos los cortometrajes",
    shortFilmsCount: (n: number) => `${n} cortometraje${n > 1 ? "s" : ""}`,
    closeVideo: "Cerrar video",
    cvLabel: "Hoja de vida",
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
    h1c: " in color.",
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
    videoClipsCount: (n: number) => `${n} music video${n > 1 ? "s" : ""}`,
    socialTitle: "Social Content",
    allSocial: "All content",
    socialCount: (n: number) => `${n} piece${n > 1 ? "s" : ""}`,
    shortFilmsTitle: "Short Films",
    allShortFilms: "All short films",
    shortFilmsCount: (n: number) => `${n} short film${n > 1 ? "s" : ""}`,
    closeVideo: "Close video",
    cvLabel: "Résumé",
    langLabel: "ES",
    langAria: "Switch language to Spanish",
  },
} as const;

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [campaignsOpen, setCampaignsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [shortFilmsOpen, setShortFilmsOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<Campaign | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);
  const [activeSocial, setActiveSocial] = useState<Campaign | null>(null);
  const [activeShortFilm, setActiveShortFilm] = useState<Campaign | null>(null);
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];
  const en = lang === "en";
  const activeClip = videoClips[activeClipIndex]!;

  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <CustomCursor />
      <AmbientParticles />
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-md sm:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold tracking-tight">LOW EXPOSURE</span>
          <div className="flex items-center gap-6 text-sm text-foreground/80 sm:gap-8">
            <div className="hidden gap-8 sm:flex">
              <a
                href="#trabajos"
                data-cursor="link"
                className="transition-colors hover:text-accent"
              >
                {t.navWorks}
              </a>
              <a
                href="#servicios"
                data-cursor="link"
                className="transition-colors hover:text-accent"
              >
                {t.navServices}
              </a>
              <a
                href="#contacto"
                data-cursor="link"
                className="transition-colors hover:text-accent"
              >
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
        videoThumb={`https://i.ytimg.com/vi/${videoClips[0]!.id}/hqdefault.jpg`}
        videoClipCount={videoClips.length}
        sessionCover={sessions.find((s) => s.slug === "water")!.cover}
        sessionCount={sessions.length}
        campaignCover={campaigns[0]!.cover}
        campaignCount={campaigns.length}
        socialCover={socialContent[0]!.cover}
        socialCount={socialContent.length}
        shortFilmCover={shortFilms[0]!.cover}
        shortFilmCount={shortFilms.length}
        onOpenVideo={() => {
          setActiveClipIndex(0);
          setVideoOpen(true);
        }}
        onOpenSessions={() => {
          setSessionsOpen(true);
          setActiveSession(null);
        }}
        onOpenCampaigns={() => {
          setCampaignsOpen(true);
          setActiveCampaign(null);
        }}
        onOpenSocial={() => {
          setSocialOpen(true);
          setActiveSocial(null);
        }}
        onOpenShortFilms={() => {
          setShortFilmsOpen(true);
          setActiveShortFilm(null);
        }}
      />

      <Services t={t} en={en} services={services} />

      <Contact t={t} cvUrl={cvUrl} />

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
              className="flex w-[95vw] max-w-6xl flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-[var(--shadow-depth)]">
                <iframe
                  key={activeClip.id}
                  src={`https://www.youtube.com/embed/${activeClip.id}?autoplay=1&rel=0`}
                  title={en ? activeClip.titleEn : activeClip.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              {videoClips.length > 1 && (
                <div className="flex justify-center gap-3">
                  {videoClips.map((clip, i) => (
                    <button
                      key={clip.id}
                      type="button"
                      onClick={() => setActiveClipIndex(i)}
                      data-cursor="link"
                      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                        i === activeClipIndex
                          ? "border-accent"
                          : "border-foreground/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${clip.id}/mqdefault.jpg`}
                        alt={en ? clip.titleEn : clip.title}
                        className="h-14 w-24 object-cover sm:h-16 sm:w-28"
                      />
                    </button>
                  ))}
                </div>
              )}
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

      <GalleryModal
        open={socialOpen}
        title={t.socialTitle}
        allLabel={t.allSocial}
        closeLabel={en ? "Close social content" : "Cerrar contenido de redes"}
        viewLabel={t.viewLabel}
        en={en}
        items={socialContent}
        active={activeSocial}
        onSelect={setActiveSocial}
        onBack={() => setActiveSocial(null)}
        onClose={() => {
          setSocialOpen(false);
          setActiveSocial(null);
        }}
      />

      <GalleryModal
        open={shortFilmsOpen}
        title={t.shortFilmsTitle}
        allLabel={t.allShortFilms}
        closeLabel={en ? "Close short films" : "Cerrar cortometrajes"}
        viewLabel={t.viewLabel}
        en={en}
        items={shortFilms}
        active={activeShortFilm}
        onSelect={setActiveShortFilm}
        onBack={() => setActiveShortFilm(null)}
        onClose={() => {
          setShortFilmsOpen(false);
          setActiveShortFilm(null);
        }}
      />
    </main>
  );
}
