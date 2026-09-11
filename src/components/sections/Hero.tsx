import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ViewfinderCorners } from "@/components/effects/ViewfinderCorners";
import { MagneticButton } from "@/components/effects/MagneticButton";

const SCOPE_COLORS = ["#006dff", "#00bdff", "#ffd002", "#ff4100", "#e2ff33", "#da489b", "#006dff"];

function useTimecode() {
  const [code, setCode] = useState("00:00:00");
  useEffect(() => {
    const start = performance.now();
    const id = window.setInterval(() => {
      const elapsed = Math.floor((performance.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
      const s = String(elapsed % 60).padStart(2, "0");
      setCode(`${h}:${m}:${s}`);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);
  return code;
}

type HeroCopy = {
  h1a: string;
  h1b: string;
  h1c: string;
  bio: string;
  ctaReel: string;
  ctaWork: string;
};

type HeroProps = {
  t: HeroCopy;
  heroBg: string;
};

export function Hero({ t, heroBg }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const timecode = useTimecode();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-28 sm:px-10">
      <motion.img
        src={heroBg}
        alt="Textura fluida de pintura en colores saturados — naranjas, rojos, azules y verdes sobre negro"
        style={{ y: bgY }}
        className="grain pointer-events-none absolute inset-0 -z-30 h-[125%] w-full object-cover opacity-[0.85]"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-background/5 via-background/45 to-background" />
      <ViewfinderCorners inset="top-24 bottom-16 inset-x-4 sm:inset-x-6" size={20} />

      <div className="pointer-events-none absolute inset-x-8 top-[7.5rem] z-10 flex items-start justify-between sm:inset-x-12">
        <span className="hud-label text-foreground/70">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff4100] align-middle" /> LOW EXPOSURE
        </span>
        <span className="hud-label text-foreground/70">{timecode}</span>
      </div>
      <div className="pointer-events-none absolute inset-x-8 bottom-24 z-10 flex items-end justify-between sm:inset-x-12">
        <span className="hud-label text-foreground/70">ƒ/1.4 · 24MM · MEDELLÍN</span>
        <span className="hud-label hidden text-foreground/70 sm:block">SCROLL ↓</span>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto mt-[24vh] max-w-6xl"
      >
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
          {t.h1a}
          <motion.span
            className="inline-block"
            animate={{ color: SCOPE_COLORS }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {" "}
            {t.h1b}{" "}
          </motion.span>
          {t.h1c}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-foreground/85">{t.bio}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton
            href="#trabajos"
            className="bg-spectrum glow inline-flex rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
          >
            {t.ctaReel}
          </MagneticButton>
          <MagneticButton
            href="#contacto"
            className="inline-flex rounded-full border border-foreground/30 bg-background/30 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            {t.ctaWork}
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
