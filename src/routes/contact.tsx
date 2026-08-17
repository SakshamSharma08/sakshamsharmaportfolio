import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import cut from "@/assets/portrait-cut.png.asset.json";
import { Parallax } from "@/components/fx/Parallax";
import { Reveal } from "@/components/fx/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saksham Sharma | Open to Internships" },
      {
        name: "description",
        content:
          "Get in touch with Saksham Sharma for internships and collaborations in AI/ML, IoT and full-stack development.",
      },
      { property: "og:title", content: "Contact Saksham Sharma" },
      { property: "og:description", content: "Open to internship and collaboration opportunities." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "sakshamsharma@gmail.com", href: "mailto:sakshamsharma@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/sakshamsharma", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sakshamsharma", href: "https://linkedin.com/" },
  { icon: MapPin, label: "Location", value: "Jaipur, India", href: null },
];

function Contact() {
  return (
    <div className="grain relative overflow-hidden pt-32">
      <Parallax speed={0.9} className="pointer-events-none absolute inset-x-0 top-40 flex justify-center">
        <span className="display text-[24vw] text-primary/[0.07]">HELLO</span>
      </Parallax>

      <section className="relative mx-auto grid max-w-[1400px] gap-14 px-5 pb-24 md:grid-cols-2 md:px-10">
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-primary">Contact</p>
            <h1 className="display mt-3 text-6xl md:text-8xl">
              Let's work
              <br />
              <span className="text-primary">together</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              I'm currently seeking an internship where I can apply software and ML skills to
              real-world engineering problems. Open to collaborations on AI/ML, IoT and full-stack
              builds.
            </p>
          </Reveal>

          <div className="mt-10 space-y-px">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className="hairline flex items-center gap-5 py-5 transition-colors group-hover:text-primary">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary">
                    <Icon size={17} />
                  </span>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm">{c.value}</div>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 90}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="group block">
                      {inner}
                    </a>
                  ) : (
                    <div className="group">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Parallax speed={0.3} className="hidden md:block">
          <div className="relative">
            <div
              className="absolute inset-10 -z-10 blur-3xl"
              style={{ background: "var(--gradient-crimson)", opacity: 0.3 }}
            />
            <img
              src={cut.url}
              alt="Saksham Sharma"
              width={1024}
              height={1280}
              loading="lazy"
              className="mx-auto max-h-[70vh] w-auto object-contain"
            />
          </div>
        </Parallax>
      </section>
    </div>
  );
}