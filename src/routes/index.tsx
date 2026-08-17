import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-portrait.png.asset.json";
import edgerul from "@/assets/proj-edgerul.jpg.asset.json";
import sms from "@/assets/proj-sms.jpg.asset.json";
import { Parallax } from "@/components/fx/Parallax";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saksham Sharma — CS Undergrad, AI/ML & IoT Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Saksham Sharma — Computer Science undergrad at Manipal University Jaipur building full-stack and edge-AI systems.",
      },
      { property: "og:title", content: "Saksham Sharma — AI/ML & IoT Engineer" },
      {
        property: "og:description",
        content: "Edge-AI, machine learning and full-stack projects by Saksham Sharma.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "9.16", l: "CGPA" },
  { n: "5th", l: "Semester" },
  { n: "2+", l: "Major Projects" },
];

function Index() {
  const [m, setM] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setM({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="grain">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 50% 30%, oklch(0.3 0.14 25 / 0.5), transparent 70%)" }}
        />
        <div className="scene-3d relative mx-auto max-w-[1400px] px-5 md:px-10">
          <h1
            className="display pointer-events-none select-none text-[22vw] text-primary/85 md:text-[17vw]"
            style={{ transform: `translate3d(${m.x * -40}px, ${m.y * -18}px, 0)` }}
          >
            Saksham
          </h1>

          <div
            className="relative -mt-[13vw] flex justify-center"
            style={{ transform: `translate3d(${m.x * 22}px, ${m.y * 14}px, 0)` }}
          >
            <img
              src={hero.url}
              alt="Portrait of Saksham Sharma"
              width={1024}
              height={1408}
              className="h-[62vh] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] md:h-[74vh]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
              style={{ background: "var(--gradient-fade)" }}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-5 bottom-10 md:inset-x-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="pointer-events-auto max-w-sm">
                <p className="font-script text-3xl text-foreground/90">Hello, I'm</p>
                <h2 className="display text-5xl md:text-6xl">Saksham</h2>
                <p className="mt-3 text-sm tracking-[0.22em] uppercase text-primary">
                  AI / ML Engineer & IoT Developer
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Computer Science undergraduate specializing in IoT & Intelligent Systems. I build
                  full-stack and machine learning applications — currently an edge-AI predictive
                  maintenance system for a national hackathon.
                </p>
                <Link
                  to="/projects"
                  className="mt-6 inline-flex items-center gap-3 border border-primary px-5 py-3 text-xs tracking-[0.25em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View Work →
                </Link>
              </div>

              <div className="pointer-events-auto flex gap-8 md:flex-col md:gap-4">
                {stats.map((s) => (
                  <div key={s.l} className="border-l border-border pl-4 md:w-44">
                    <div className="display text-3xl text-primary">{s.n}</div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="hairline overflow-hidden border-b border-border py-5">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {["Python", "C / C++", "React", "Node.js", "XGBoost", "LSTM", "ONNX / TFLite", "Supabase", "IoT"].map(
                (t) => (
                  <span key={t} className="display text-2xl text-muted-foreground/50">
                    {t} <span className="text-primary">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <Reveal>
          <div className="flex items-center gap-6">
            <h2 className="display text-3xl md:text-4xl">Selected Projects</h2>
            <span className="h-px flex-1 bg-border" />
            <Link to="/projects" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-primary">
              All →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { img: edgerul.url, n: "01", t: "EdgeRUL", s: "Aircraft Engine RUL Prediction" },
            { img: sms.url, n: "02", t: "School Management System", s: "C · File Handling" },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <TiltCard className="border border-border bg-card">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover opacity-80"
                />
                <div className="flex items-center gap-4 p-5">
                  <span className="display text-2xl text-primary">{p.n}</span>
                  <div>
                    <div className="text-sm tracking-[0.2em] uppercase">{p.t}</div>
                    <div className="text-xs text-muted-foreground">{p.s}</div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative overflow-hidden py-32">
        <Parallax speed={0.8} className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="display text-[26vw] text-foreground/[0.035]">BUILD</span>
        </Parallax>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="display text-3xl leading-tight md:text-5xl">
              Good engineering isn't just what it computes —
              <span className="text-primary"> it's what it survives.</span>
            </p>
            <p className="mt-6 font-script text-3xl text-muted-foreground">Saksham</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
