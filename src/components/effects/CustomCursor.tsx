import { useEffect, useRef, useState } from "react";

/**
 * Ring cursor that trails the pointer with a short lerp and swells over
 * anything tagged data-cursor="link" or data-cursor="view". Skips itself
 * entirely on coarse/touch pointers so it never fights a tap.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);

      const el = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      setVariant((el?.dataset["cursor"] as "link" | "view" | undefined) ?? "default");
      setLabel(el?.dataset["cursorLabel"] ?? "");
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const size = variant === "view" ? 84 : variant === "link" ? 56 : 20;

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[300] flex items-center justify-center mix-blend-difference transition-[width,height,opacity] duration-300 ease-out"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        borderRadius: "9999px",
        border: "1.5px solid white",
        backgroundColor: variant === "default" ? "transparent" : "white",
      }}
    >
      {variant === "view" && label && (
        <span className="hud-label whitespace-nowrap text-background">{label}</span>
      )}
    </div>
  );
}
