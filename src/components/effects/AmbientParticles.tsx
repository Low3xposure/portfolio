import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Sampled from the dominant vivid pixels in src/assets/hero-fluid.png
// (see the --azure/--cyan/--lime/--amber/--magenta tokens in src/styles.css).
// Hardcoded since three's color management can't read var()/oklch() at runtime.
const PALETTE = ["#006dff", "#00bdff", "#ffd002", "#ff4100", "#e2ff33", "#da489b"];
const COUNT = 260;

function Field() {
  const ref = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const color = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const r = 4.6 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.65;
      pos[i * 3 + 2] = r * Math.cos(phi) * 0.5;

      color.set(PALETTE[i % PALETTE.length] ?? PALETTE[0]!);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.006;
    const targetX = (pointer.x * viewport.width) / 20;
    const targetY = (pointer.y * viewport.height) / 20;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.45}
      />
    </Points>
  );
}

/**
 * Site-wide ambient particle field: one fixed, transparent WebGL layer that
 * sits behind every section (see the `isolate` on <main> in index.tsx,
 * which pins this at -z-10 relative to all section content regardless of
 * whether a given section is positioned). Reads as light drifting through
 * the fluid-color world the hero establishes, carried at low opacity so it
 * stays a background texture rather than a second hero moment. Mounted
 * once — not per-section — to keep a single WebGL context for the page.
 */
export function AmbientParticles() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <Field />
      </Canvas>
    </div>
  );
}
