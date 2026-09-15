import { FileText, Instagram, Mail, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { MagneticButton } from "@/components/effects/MagneticButton";

type ContactCopy = {
  contactTitle: string;
  contactSub: string;
  contactHud: string;
  cvLabel: string;
};

type ContactProps = {
  t: ContactCopy;
  cvUrl: string;
};

const CHANNELS = [
  {
    key: "mail",
    href: "mailto:low3xposure@gmail.com",
    label: "low3xposure@gmail.com",
    icon: Mail,
    accent: "var(--cyan)",
    external: false,
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/low_3xposure?igsi=MWhuZnF6OW9kNXNpNQ==",
    label: "Instagram",
    icon: Instagram,
    accent: "var(--magenta)",
    external: true,
  },
  {
    key: "whatsapp",
    href: "https://wa.me/qr/VQN7B26RTZC3M1",
    label: "WhatsApp",
    icon: MessageCircle,
    accent: "var(--lime)",
    external: true,
  },
] as const;

export function Contact({ t, cvUrl }: ContactProps) {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
      <RevealOnScroll>
        <div className="grain relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 px-8 py-16 sm:px-16 sm:py-20">
          <div
            className="animate-drift pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ backgroundColor: "var(--azure)" }}
            aria-hidden
          />
          <div
            className="animate-drift-slow pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ backgroundColor: "var(--magenta)" }}
            aria-hidden
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="max-w-lg text-4xl font-semibold leading-[1.02] sm:text-6xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-md text-foreground/80">{t.contactSub}</p>
              <p className="hud-label mt-8 text-foreground/50">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full border border-foreground/50 align-middle" />
                {t.contactHud.toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <MagneticButton
                    key={c.key}
                    href={c.href}
                    strength={0.25}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="card-fluid group flex items-center justify-between gap-4 rounded-2xl px-6 py-4 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-3 text-base font-medium">
                      <Icon size={18} style={{ color: c.accent }} />
                      {c.label}
                    </span>
                    <span
                      className="hud-label opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: c.accent }}
                    >
                      ABRIR
                    </span>
                  </MagneticButton>
                );
              })}
              <MagneticButton
                href={cvUrl}
                strength={0.25}
                target="_blank"
                rel="noopener noreferrer"
                className="card-fluid group flex items-center justify-between gap-4 rounded-2xl px-6 py-4 transition-colors duration-300"
              >
                <span className="flex items-center gap-3 text-base font-medium">
                  <FileText size={18} style={{ color: "var(--amber)" }} />
                  {t.cvLabel}
                </span>
                <span
                  className="hud-label opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ color: "var(--amber)" }}
                >
                  ABRIR
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
