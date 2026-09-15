import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type MediaItem = { url: string; alt: string; video?: boolean; poster?: string };

type MediaLightboxProps = {
  items: MediaItem[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
  closeLabel: string;
};

export function MediaLightbox({
  items,
  activeIndex,
  onNavigate,
  onClose,
  closeLabel,
}: MediaLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const active = items[activeIndex];

  useEffect(() => {
    setZoomed(false);
  }, [activeIndex]);

  if (!active) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label={closeLabel}
          data-cursor="link"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110"
        >
          <X size={22} />
        </button>
        <div
          className="flex w-[95vw] max-w-6xl flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex max-h-[75vh] w-full items-center justify-center overflow-auto rounded-2xl">
            {active.video ? (
              <video
                key={active.url}
                src={active.url}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                aria-label={active.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl"
              />
            ) : (
              <img
                key={active.url}
                src={active.url}
                alt={active.alt}
                onClick={() => setZoomed((z) => !z)}
                className={
                  zoomed
                    ? "w-auto max-w-none cursor-zoom-out rounded-2xl"
                    : "max-h-[75vh] w-auto max-w-full cursor-zoom-in rounded-2xl object-contain"
                }
              />
            )}
          </div>
          {items.length > 1 && (
            <div className="flex justify-center gap-3 overflow-x-auto pb-1">
              {items.map((item, i) => (
                <button
                  key={item.url}
                  type="button"
                  onClick={() => onNavigate(i)}
                  data-cursor="link"
                  className={`shrink-0 overflow-hidden rounded-xl border transition-colors duration-300 ${
                    i === activeIndex
                      ? "border-accent"
                      : "border-foreground/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.video ? item.poster : item.url}
                    alt={item.alt}
                    className="h-14 w-24 object-cover sm:h-16 sm:w-28"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
