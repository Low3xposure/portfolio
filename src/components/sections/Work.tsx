import { Play } from "lucide-react";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ViewfinderCorners } from "@/components/effects/ViewfinderCorners";

type WorkItem = {
  title: string;
  titleEn: string;
  client?: string;
  type: string;
  typeEn: string;
  year: string;
  accent: string;
};

type WorkCopy = {
  worksTitle: string;
  viewLabel: string;
  sessionsCount: (n: number) => string;
  campaignsCount: (n: number) => string;
};

type WorkProps = {
  t: WorkCopy;
  en: boolean;
  works: WorkItem[];
  videoThumb: string;
  sessionCover: string;
  sessionCount: number;
  campaignCover: string;
  campaignCount: number;
  onOpenVideo: () => void;
  onOpenSessions: () => void;
  onOpenCampaigns: () => void;
};

function TileMeta({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="relative flex items-end justify-between gap-4 p-6">
      <div>
        <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
        <p className="hud-label mt-1.5 text-foreground/60">{sub}</p>
      </div>
    </div>
  );
}

export function Work({
  t,
  en,
  works,
  videoThumb,
  sessionCover,
  sessionCount,
  campaignCover,
  campaignCount,
  onOpenVideo,
  onOpenSessions,
  onOpenCampaigns,
}: WorkProps) {
  const [video, sessionsWork, socialWork, campaignsWork] = works;
  if (!video || !sessionsWork || !socialWork || !campaignsWork) return null;

  return (
    <section id="trabajos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
      <RevealOnScroll>
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold sm:text-5xl">{t.worksTitle}</h2>
          <span className="hud-label hidden text-foreground/50 sm:block">2024 — 2026</span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Videoclip — flagship tile, full width */}
        <RevealOnScroll className="sm:col-span-2">
          <article
            onClick={onOpenVideo}
            data-cursor="view"
            data-cursor-label={t.viewLabel}
            className="card-fluid group relative cursor-pointer overflow-hidden rounded-3xl"
          >
            <div className="relative h-[22rem] overflow-hidden sm:h-[26rem]">
              <img
                src={videoThumb}
                alt="Miniatura del VideoClip Musical en YouTube"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <ViewfinderCorners
                inset="inset-6"
                size={20}
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                <Play size={26} className="ml-1 text-white" fill="currentColor" />
              </span>
            </div>
            <TileMeta
              title={en ? video.titleEn : video.title}
              sub={`${(en ? video.typeEn : video.type).toUpperCase()} · ${video.client} · ${video.year}`}
            />
          </article>
        </RevealOnScroll>

        {/* Fotografía Artística */}
        <RevealOnScroll delay={0.08}>
          <article
            onClick={onOpenSessions}
            data-cursor="view"
            data-cursor-label={t.viewLabel}
            className="card-fluid group relative cursor-pointer overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={sessionCover}
                alt="Portada de la sesión Strange Girl"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
              <ViewfinderCorners
                inset="inset-6"
                size={20}
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            <TileMeta
              title={en ? sessionsWork.titleEn : sessionsWork.title}
              sub={`${t.sessionsCount(sessionCount).toUpperCase()} · ${sessionsWork.year}`}
            />
          </article>
        </RevealOnScroll>

        {/* Campañas */}
        <RevealOnScroll delay={0.14}>
          <article
            onClick={onOpenCampaigns}
            data-cursor="view"
            data-cursor-label={t.viewLabel}
            className="card-fluid group relative cursor-pointer overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={campaignCover}
                alt="Portada de la campaña Abalas"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
              <ViewfinderCorners
                inset="inset-6"
                size={20}
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            <TileMeta
              title={en ? campaignsWork.titleEn : campaignsWork.title}
              sub={`${t.campaignsCount(campaignCount).toUpperCase()} · ${campaignsWork.year}`}
            />
          </article>
        </RevealOnScroll>

        {/* Contenido Redes — no imagery yet, honest abstract treatment */}
        <RevealOnScroll delay={0.2} className="sm:col-span-2">
          <article
            className="card-fluid relative overflow-hidden rounded-3xl"
            style={{
              backgroundImage: `radial-gradient(90% 130% at 6% -10%, color-mix(in oklab, ${socialWork.accent} 65%, transparent) 0%, transparent 60%), radial-gradient(80% 120% at 100% 0%, color-mix(in oklab, var(--azure) 55%, transparent) 0%, transparent 55%), linear-gradient(160deg, var(--card), var(--background))`,
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative flex h-40 flex-col justify-end p-6 sm:h-48">
              <h3 className="text-xl font-semibold sm:text-2xl">{en ? socialWork.titleEn : socialWork.title}</h3>
              <p className="hud-label mt-1.5 text-foreground/60">
                {(en ? socialWork.typeEn : socialWork.type).toUpperCase()} · {socialWork.client} · {socialWork.year}
              </p>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </section>
  );
}
