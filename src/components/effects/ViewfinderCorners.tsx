type ViewfinderCornersProps = {
  className?: string;
  size?: number;
  inset?: string;
};

/**
 * Four camera-viewfinder corner brackets framing a rect. The site's
 * recurring "you're looking through the lens" chrome — stands in for the
 * generic bordered-card treatment.
 */
export function ViewfinderCorners({ className, size = 24, inset = "inset-4 sm:inset-6" }: ViewfinderCornersProps) {
  const corner = "absolute border-current";
  const s = `${size}px`;
  return (
    <div className={`pointer-events-none absolute ${inset} text-foreground/50 ${className ?? ""}`} aria-hidden>
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2`} style={{ width: s, height: s }} />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2`} style={{ width: s, height: s }} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} style={{ width: s, height: s }} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} style={{ width: s, height: s }} />
    </div>
  );
}
