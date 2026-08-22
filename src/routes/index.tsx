import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import heroAsset from "@/assets/hero-fluid.png.asset.json";

const heroBg = heroAsset.url;

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
    client: "Lumen Records",
    type: "Videoclip",
    year: "2026",
    accent: "var(--magenta)",
  },
  {
    title: "Fotografía Artistica",
    client: "Marea Studio",
    type: "Documental",
    year: "2025",
    accent: "var(--cyan)",
  },
  {
    title: "Contenido Redes",
    client: "Sonora",
    type: "Spot comercial",
    year: "2026",
    accent: "var(--lime)",
  },
  {
    title: "Campañas",
    client: "Festival Óxido",
    type: "Aftermovie",
    year: "2025",
    accent: "var(--amber)",
  },
];

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
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative isolate min-h-[92vh] px-6 pb-24 pt-8 sm:px-10">
        <img
          src={heroBg}
          alt="Textura fluida de pintura en colores saturados"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
        />
        <div className="fade-mask pointer-events-none absolute inset-0 -z-10" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between">
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
            Soy Jon Franco. Dirijo y produzco videoclips, comerciales y documentales
            donde la imagen se comporta como pintura líquida: intensa, orgánica, viva.
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
          {works.map((w) => (
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
          ))}
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
    </main>
  );
}
