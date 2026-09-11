import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type MagneticProps<T extends ElementType> = {
  as?: T;
  strength?: number;
  cursor?: "link" | "view";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Wraps an interactive element and nudges it toward the cursor within a
 * radius, springing back on leave. Gives buttons/links weight instead of a
 * flat color-swap hover.
 */
export function MagneticButton<T extends ElementType = "a">({
  as,
  strength = 0.4,
  cursor = "link",
  className,
  children,
  ...props
}: MagneticProps<T>) {
  const Component = motion.create(as ?? "a") as typeof motion.a;
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((e.clientX - bounds.left - bounds.width / 2) * strength);
    y.set((e.clientY - bounds.top - bounds.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Component
      ref={ref}
      data-cursor={cursor}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
