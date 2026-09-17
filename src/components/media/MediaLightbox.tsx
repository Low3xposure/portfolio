import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

type MediaItem = { url: string; thumb?: string; alt: string; video?: boolean; poster?: string };

type MediaLightboxProps = {
  items: MediaItem[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
  closeLabel: string;
  prevLabel?: string;
  nextLabel?: string;
  zoomInLabel?: string;
  zoomOutLabel?: string;
};

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;

export function MediaLightbox({
  items,
  activeIndex,
  onNavigate,
  onClose,
  closeLabel,
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
  zoomInLabel = "Acercar",
  zoomOutLabel = "Alejar",
}: MediaLightboxProps) {
  const [zoom, setZoom] = useState(ZOOM_MIN);
  const [panBounds, setPanBounds] = useState({ x: 0, y: 0 });
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);
  const dragBoundsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const active = items[activeIndex];
  const hasMultiple = items.length > 1;

  const applyPanBounds = useCallback(
    (z: number) => {
      const container = dragBoundsRef.current;
      const img = imgRef.current;
      const next =
        container && img
          ? {
              x: Math.max(0, (img.offsetWidth * z - container.clientWidth) / 2),
              y: Math.max(0, (img.offsetHeight * z - container.clientHeight) / 2),
            }
          : { x: 0, y: 0 };
      setPanBounds(next);
      panX.set(Math.min(Math.max(panX.get(), -next.x), next.x));
      panY.set(Math.min(Math.max(panY.get(), -next.y), next.y));
    },
    [panX, panY],
  );

  const resetZoom = useCallback(() => {
    setZoom(ZOOM_MIN);
    panX.set(0);
    panY.set(0);
    setPanBounds({ x: 0, y: 0 });
  }, [panX, panY]);

  useEffect(() => {
    resetZoom();
  }, [activeIndex, resetZoom]);

  useEffect(() => {
    applyPanBounds(zoom);
  }, [zoom, applyPanBounds]);

  useEffect(() => {
    const handleResize = () => applyPanBounds(zoom);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoom, applyPanBounds]);

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasMultiple) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext, hasMultiple, onClose]);

  const zoomIn = () => setZoom((z) => Math.min(ZOOM_MAX, Math.round((z + ZOOM_STEP) * 100) / 100));
  const zoomOut = () => setZoom((z) => Math.max(ZOOM_MIN, Math.round((z - ZOOM_STEP) * 100) / 100));

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
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110"
        >
          <X size={22} />
        </button>

        {hasMultiple && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label={prevLabel}
              data-cursor="link"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110 sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label={nextLabel}
              data-cursor="link"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-110 sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div
          className="flex w-[95vw] max-w-6xl flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            ref={dragBoundsRef}
            className="relative flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-2xl"
          >
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
              <motion.img
                key={active.url}
                ref={imgRef}
                src={active.url}
                alt={active.alt}
                onLoad={() => applyPanBounds(zoom)}
                drag={zoom > ZOOM_MIN}
                dragConstraints={{
                  left: -panBounds.x,
                  right: panBounds.x,
                  top: -panBounds.y,
                  bottom: panBounds.y,
                }}
                dragElastic={0.05}
                dragMomentum={false}
                style={{ x: panX, y: panY }}
                animate={{ scale: zoom }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`max-h-[75vh] w-auto max-w-full rounded-2xl object-contain ${
                  zoom > ZOOM_MIN ? "cursor-grab active:cursor-grabbing" : ""
                }`}
              />
            )}
          </div>

          {!active.video && (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= ZOOM_MIN}
                aria-label={zoomOutLabel}
                data-cursor="link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-foreground/25 disabled:hover:text-foreground"
              >
                <ZoomOut size={18} />
              </button>
              <span className="hud-label w-14 text-center tabular-nums text-foreground/70">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= ZOOM_MAX}
                aria-label={zoomInLabel}
                data-cursor="link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-foreground/25 disabled:hover:text-foreground"
              >
                <ZoomIn size={18} />
              </button>
            </div>
          )}

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
                    src={item.video ? item.poster : (item.thumb ?? item.url)}
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
