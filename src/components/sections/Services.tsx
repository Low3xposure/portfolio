import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

const ROW_ACCENTS = ["var(--azure)", "var(--cyan)", "var(--amber)", "var(--magenta)"];

type ServiceItem = {
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
};

type ServicesCopy = {
  servicesTitle: string;
};

type ServicesProps = {
  t: ServicesCopy;
  en: boolean;
  services: ServiceItem[];
};

export function Services({ t, en, services }: ServicesProps) {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
      <RevealOnScroll>
        <div className="mb-4 flex items-end justify-between gap-6 border-b border-border/60 pb-6">
          <h2 className="text-3xl font-semibold sm:text-5xl">{t.servicesTitle}</h2>
          <span className="hud-label hidden text-foreground/50 sm:block">
            {String(services.length).padStart(2, "0")} SERVICIOS
          </span>
        </div>
      </RevealOnScroll>

      <div>
        {services.map((s, i) => {
          const accent = ROW_ACCENTS[i % ROW_ACCENTS.length]!;
          return (
            <RevealOnScroll key={s.title} delay={i * 0.06}>
              <div
                className="group relative grid grid-cols-1 items-baseline gap-3 overflow-hidden border-b border-border/60 py-8 transition-colors duration-500 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] sm:gap-8"
                style={{ ["--row-accent" as string]: accent }}
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `radial-gradient(60% 140% at 0% 50%, color-mix(in oklab, ${accent} 22%, transparent) 0%, transparent 70%)`,
                  }}
                />
                <h3
                  className="text-2xl font-semibold transition-colors duration-500 sm:text-3xl"
                  style={{ color: "inherit" }}
                >
                  <span className="transition-colors duration-500 group-hover:text-[var(--row-accent)]">
                    {en ? s.titleEn : s.title}
                  </span>
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {en ? s.bodyEn : s.body}
                </p>
                <ArrowUpRight
                  size={22}
                  className="hidden text-foreground/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--row-accent)] sm:block"
                />
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
