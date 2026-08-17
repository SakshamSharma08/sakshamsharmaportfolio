import { createFileRoute } from "@tanstack/react-router";
import edgerul from "@/assets/proj-edgerul.jpg.asset.json";
import sms from "@/assets/proj-sms.jpg.asset.json";
import { Parallax } from "@/components/fx/Parallax";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — EdgeRUL & More | Saksham Sharma" },
      {
        name: "description",
        content:
          "Projects by Saksham Sharma: EdgeRUL real-time aircraft engine RUL prediction and a C-based School Management System.",
      },
      { property: "og:title", content: "Projects by Saksham Sharma" },
      {
        property: "og:description",
        content: "Edge-AI predictive maintenance and systems programming projects.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    n: "01",
    title: "EdgeRUL",
    subtitle: "Real-Time Aircraft Engine RUL Prediction",
    meta: "Tata Technologies InnoVent-27 Hackathon · 2026",
    stack: ["Node.js", "Express", "React", "Vite", "Python", "XGBoost", "ONNX / TFLite", "Streamlit"],
    img: edgerul.url,
    points: [
      "Built an edge-AI predictive maintenance system estimating Remaining Useful Life of aircraft engines using the NASA CMAPSS turbofan degradation dataset.",
      "Designed a sliding-window data pipeline for sensor time-series preprocessing and feature engineering.",
      "Implemented and benchmarked Random Forest and XGBoost baselines, with an optional LSTM for sequential degradation patterns.",
      "Converted trained models to ONNX/TFLite for lightweight, low-latency inference on edge devices.",
      "Developed a full-stack monitoring interface (Node/Express + React/Vite) and a Streamlit dashboard for live RUL and engine health.",
      "Owned environment setup, service integration (CORS, environment config) and deployment readiness within the hackathon team.",
    ],
  },
  {
    n: "02",
    title: "School Management System",
    subtitle: "Console-based records platform",
    meta: "Personal Project · 2025",
    stack: ["C", "File Handling", "Structs & Arrays"],
    img: sms.url,
    points: [
      "Designed and developed a console-based School Management System in C to digitize student and staff record-keeping.",
      "Implemented full CRUD operations with file handling for persistent data storage.",
      "Structured data using arrays/structs and modular functions for efficient record search, update and retrieval.",
    ],
  },
];

function Projects() {
  return (
    <div className="grain pt-32">
      <section className="relative mx-auto max-w-[1400px] overflow-hidden px-5 pb-10 md:px-10">
        <Parallax speed={0.5} className="pointer-events-none absolute -top-10 right-0">
          <span className="display text-[18vw] text-foreground/[0.04]">WORK</span>
        </Parallax>
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">Projects</p>
          <h1 className="display mt-3 text-6xl md:text-8xl">Things I've built</h1>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-24 px-5 py-16 md:px-10">
        {projects.map((p, i) => (
          <section key={p.title} className="grid gap-10 md:grid-cols-2 md:items-center">
            <Parallax speed={i % 2 === 0 ? 0.25 : 0.4} className={i % 2 ? "md:order-2" : ""}>
              <TiltCard intensity={12} className="border border-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full object-cover"
                />
              </TiltCard>
            </Parallax>

            <Reveal delay={80}>
              <div className="flex items-baseline gap-4">
                <span className="display text-4xl text-primary">{p.n}</span>
                <h2 className="display text-4xl md:text-5xl">{p.title}</h2>
              </div>
              <p className="mt-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
                {p.subtitle}
              </p>
              <p className="mt-1 text-xs text-primary">{p.meta}</p>

              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-px w-4 shrink-0 bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-1 text-[11px] tracking-[0.15em] uppercase text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}