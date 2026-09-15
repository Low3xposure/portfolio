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
  videoClipsCount: (n: number) => string;
  sessionsCount: (n: number) => string;
  campaignsCount: (n: number) => string;
  socialCount: (n: number) => string;
  shortFilmsCount: (n: number) => string;
};

type WorkProps = {
  t: WorkCopy;
  en: boolean;
  works: WorkItem[];
  videoThumb: string;
  videoClipCount: number;
  sessionCover: string;
  sessionCount: number;
  campaignCover: string;
  campaignCount: number;
  socialCover: string;
  socialCount: number;
  shortFilmCover: string;
  shortFilmCount: number;
  onOpenVideo: () => void;
  onOpenSessions: () => void;
  onOpenCampaigns: () => void;
  onOpenSocial: () => void;
  onOpenShortFilms: () => void;
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

function GridTile({
  onClick,
  cover,
  alt,
  title,
  sub,
  delay,
}: {
  onClick: () => void;
  cover: string;
  alt: string;
  title: string;
  sub: string;
  delay: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <article
        onClick={onClick}
        data-cursor="view"
        className="card-fluid group relative cursor-pointer overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={cover}
            alt={alt}
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
        <TileMeta title={title} sub={sub} />
      </article>
    </RevealOnScroll>
  );
}

export function Work({
  t,
  en,
  works,
  videoThumb,
  videoClipCount,
  sessionCover,
  sessionCount,
  campaignCover,
  campaignCount,
  socialCover,
  socialCount,
  shortFilmCover,
  shortFilmCount,
  onOpenVideo,
  onOpenSessions,
  onOpenCampaigns,
  onOpenSocial,
  onOpenShortFilms,
}: WorkProps) {
  const [video, sessionsWork, socialWork, campaignsWork, shortFilmsWork] = works;
  if (!video || !sessionsWork || !socialWork || !campaignsWork || !shortFilmsWork) return null;

  return (
    <section id="trabajos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
      <RevealOnScroll>
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold sm:text-5xl">{t.worksTitle}</h2>
          <span className="hud-label hidden text-foreground/50 sm:block">2024 — 2026</span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Videoclips — flagship tile, full width */}
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
                alt="Miniatura del videoclip musical destacado en YouTube"
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
              sub={`${t.videoClipsCount(videoClipCount).toUpperCase()} · ${video.year}`}
            />
          </article>
        </RevealOnScroll>

        {/* Fotografía Artística */}
        <GridTile
          onClick={onOpenSessions}
          cover={sessionCover}
          alt="Portada de la sesión Water"
          title={en ? sessionsWork.titleEn : sessionsWork.title}
          sub={`${t.sessionsCount(sessionCount).toUpperCase()} · ${sessionsWork.year}`}
          delay={0.08}
        />

        {/* Campañas */}
        <GridTile
          onClick={onOpenCampaigns}
          cover={campaignCover}
          alt="Portada de la campaña Abalas"
          title={en ? campaignsWork.titleEn : campaignsWork.title}
          sub={`${t.campaignsCount(campaignCount).toUpperCase()} · ${campaignsWork.year}`}
          delay={0.14}
        />

        {/* Contenido Redes */}
        <GridTile
          onClick={onOpenSocial}
          cover={socialCover}
          alt="Miniatura del contenido en redes de Nito D'Lab"
          title={en ? socialWork.titleEn : socialWork.title}
          sub={`${t.socialCount(socialCount).toUpperCase()} · ${socialWork.year}`}
          delay={0.2}
        />

        {/* Cortometrajes */}
        <GridTile
          onClick={onOpenShortFilms}
          cover={shortFilmCover}
          alt="Fotograma del cortometraje Sabado Negro"
          title={en ? shortFilmsWork.titleEn : shortFilmsWork.title}
          sub={`${t.shortFilmsCount(shortFilmCount).toUpperCase()} · ${shortFilmsWork.year}`}
          delay={0.26}
        />
      </div>
    </section>
  );
}
