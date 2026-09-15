import { Play } from "lucide-react";

type VideoThumbProps = {
  poster: string;
  alt: string;
  onClick: () => void;
  className?: string;
};

export function VideoThumb({ poster, alt, onClick, className }: VideoThumbProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={alt}
      data-cursor="view"
      className={`group relative block overflow-hidden bg-black ${className ?? ""}`}
    >
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
      />
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        className="relative h-full w-full object-contain"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-background shadow-lg transition-transform group-hover:scale-110">
          <Play size={24} className="ml-1" fill="currentColor" />
        </span>
      </div>
    </button>
  );
}
