import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { ViewfinderCorners } from "@/components/effects/ViewfinderCorners";
import { VideoThumb } from "@/components/media/VideoThumb";
import { MediaLightbox } from "@/components/media/MediaLightbox";

type GalleryItem = {
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

type GalleryModalProps = {
  open: boolean;
  title: string;
  allLabel: string;
  closeLabel: string;
  viewLabel: string;
  en: boolean;
  items: GalleryItem[];
  active: GalleryItem | null;
  onSelect: (item: GalleryItem) => void;
  onBack: () => void;
  onClose: () => void;
};

export function GalleryModal({
  open,
  title,
  allLabel,
  closeLabel,
  viewLabel,
  en,
  items,
  active,
  onSelect,
  onBack,
  onClose,
}: GalleryModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [active?.slug]);

  const media = active
    ? active.media.map((m) => (m.video ? { ...m, poster: m.poster ?? active.cover } : m))
    : [];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] overflow-y-auto bg-background/97 backdrop-blur-md"
          >
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
              <div className="mb-10 flex items-center justify-between gap-4">
                {active ? (
                  <button
                    onClick={onBack}
                    data-cursor="link"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowLeft size={16} />
                    {allLabel}
                  </button>
                ) : (
                  <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
                )}
                <button
                  onClick={onClose}
                  aria-label={closeLabel}
                  data-cursor="link"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-card/70 backdrop-blur transition-transform hover:scale-110"
                >
                  <X size={22} />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!active ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="grid gap-6 sm:grid-cols-2"
                  >
                    {items.map((item) => (
                      <article
                        key={item.slug}
                        onClick={() => onSelect(item)}
                        data-cursor="view"
                        data-cursor-label={viewLabel}
                        className="card-fluid group relative cursor-pointer overflow-hidden rounded-3xl"
                      >
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={item.cover}
                            alt={`Portada de ${item.name}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                          <ViewfinderCorners
                            inset="inset-6"
                            size={20}
                            className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          />
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-semibold sm:text-3xl">{item.name}</h3>
                            <p className="hud-label mt-1.5 text-foreground/60">
                              {(en && item.clientEn) || item.client} · {item.year}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="text-4xl font-semibold sm:text-6xl">{active.name}</h3>
                    <p className="mt-4 max-w-xl text-foreground/85">
                      {(en && active.descriptionEn) || active.description}
                    </p>
                    {active.role && (
                      <p className="hud-label mt-3 text-foreground/60">
                        {(en && active.roleEn) || active.role}
                      </p>
                    )}
                    <p className="hud-label mt-2 text-foreground/60">
                      {(en && active.clientEn) || active.client} · {active.year}
                    </p>
                    <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
                      {media.map((m, i) =>
                        m.video ? (
                          <VideoThumb
                            key={m.url}
                            poster={m.poster!}
                            alt={m.alt}
                            onClick={() => setLightboxIndex(i)}
                            className="mb-6 aspect-video w-full [column-span:all] break-inside-avoid rounded-2xl border border-border/60 shadow-[var(--shadow-depth)]"
                          />
                        ) : (
                          <button
                            key={m.url}
                            type="button"
                            onClick={() => setLightboxIndex(i)}
                            data-cursor="view"
                            className="mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-depth)]"
                          >
                            <img
                              src={m.url}
                              alt={m.alt}
                              loading="lazy"
                              className="block h-auto w-full"
                            />
                          </button>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {active && lightboxIndex !== null && (
        <MediaLightbox
          items={media}
          activeIndex={lightboxIndex}
          onNavigate={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          closeLabel={en ? "Close" : "Cerrar"}
        />
      )}
    </>
  );
}
